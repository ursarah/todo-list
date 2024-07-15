import { useContext, useState } from "react"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { Context } from "../context/Context";
import { IoIosCloseCircle } from "react-icons/io";
const Body = () => {
    const { tasks, handleRemove } = useContext(Context)

    const handleClick = (e) => {
        console.log(e)
    }
    return (
        <>
            {tasks.length === 0 ?
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl text-red-500">No task</h1>
                    <IoIosCloseCircle className="text-red-600 text-9xl" />

                </div>
                :
                tasks.map((task) =>
                    <div className="easy-in" key={task.id}>
                        <div className="flex justify-between items-center py-6">
                            <div className="flex gap-x-2" >
                                <button className="text-xl text-red-600" onClick={() => handleRemove(task.id)}><FaRegTrashAlt /></button>

                                {task.checked ? <button className="text-2xl" onClick={handleClick}><FaCheck /></button>
                                    : <button className="text-2xl" onClick={handleClick}><RiCheckboxBlankCircleLine /></button>
                                }
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