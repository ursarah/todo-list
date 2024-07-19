import PropsTypes from "prop-types"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { useContext } from "react"
import { Context } from "../context/Context";

const TasksCard = ({ task }) => {
    const { handleRemove, handleClick } = useContext(Context)

    return (
        <div className="easy-in" >
            <div className="flex justify-between items-center py-6">
                <div className="flex gap-x-2" >
                    <button className="text-xl text-red-600" onClick={() => handleRemove(task.id)}><FaRegTrashAlt /></button>
                    <button className="text-2xl" onClick={() => handleClick(task.id)}>
                        {!task.checked ? <RiCheckboxBlankCircleLine /> : <FaCheck />}
                    </button>
                    <h1 className="text-slate-900">{task.newTask}</h1>
                </div>
                <h1 className="text-slate-400 text-sm">{task.time}</h1>
            </div>
        </div>
    )
}
TasksCard.propTypes = {
    task: PropsTypes.object
};
export default TasksCard