import { useContext } from "react"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { FaRegTrashAlt } from "react-icons/fa";
import { Context } from "../context/Context";
const Body = () => {
    const { tasks, setTasks } = useContext(Context)
    let tasksFilter = []

    const handleRemove = (id) => {
        // exemplo: ele vai filtrar a task.id que for igual a dois e fazer uma nova Array sem a task.id = 2
        console.log(id);

        tasksFilter = tasks.filter(task => task.id !== id)
        console.log(tasksFilter);

        setTasks(tasksFilter)
    }
    return (
        <>
            {tasks.length === 0 ?
                <h1>Nada Aqui</h1>
                :
                tasks.map((task) =>
                    <div key={task.id}>
                        <div className="flex justify-between items-center py-6">
                            <div className="flex gap-x-2" >
                                <button className="text-xl text-red-600" onClick={() => handleRemove(task.id)}><FaRegTrashAlt /></button>
                                <button className="text-2xl"><RiCheckboxBlankCircleLine /></button>
                                <h1 className="text-slate-900">{task.newTask}</h1>
                            </div>
                            <h1 className="text-slate-400 text-sm">{task.time}</h1>
                        </div>
                    </div>
                )}
        </>
    )
}

export default Body