import { useContext } from "react"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { FaRegTrashAlt } from "react-icons/fa";
import { Context } from "../context/Context";
const Body = () => {
    const { tasks } = useContext(Context)
    return (
        <>
            {tasks.map((task) => (
                task.id === 0 ?
                    <div key={task.id}>
                        <h1>Nada Aqui</h1>
                    </div>
                    :
                    <div key={task.id}>
                        <div className="flex justify-between items-center py-6" >
                            <div className="flex gap-x-2">
                                <button className="text-xl text-red-600"><FaRegTrashAlt /></button>
                                <button className="text-2xl"><RiCheckboxBlankCircleLine /></button>
                                <h1 className="text-slate-900">{task.newTask}</h1>
                            </div>
                            <h1 className="text-slate-400 text-sm">{task.time}</h1>
                        </div>
                    </div>
            ))}
        </>
    )
}

export default Body