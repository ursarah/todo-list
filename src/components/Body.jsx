import { useContext } from "react"

import { Context } from "../context/Context";
import { IoIosCloseCircle } from "react-icons/io";
import TasksCard from "./TasksCard";
const Body = () => {
    const { tasks } = useContext(Context)

    return (
        <>
            {tasks.length === 0 ?
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl text-red-500">No task</h1>
                    <IoIosCloseCircle className="text-red-600 text-9xl" />

                </div>
                :
                tasks.map(task => <TasksCard key={task.id} task={task} />
                )
            }
        </>
    )
}

export default Body