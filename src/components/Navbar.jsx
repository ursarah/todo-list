import { FaPlus } from "react-icons/fa6"
import { Modal } from "react-bootstrap"
import { useContext } from "react";
import NewTask from "./NewTask"
import { Context } from "../context/Context";

const Navbar = () => {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const { tasks, openModal, setOpenModal } = useContext(Context)



    return (
        < >
            <div className="flex items-center gap-x-24">
                <h2 className="text-2xl font-bold text-blue-300">{week[new Date().getDay() - 1]}, {new Date().getDate()} {month[new Date().getMonth()]}</h2>
                {/* Add task */}
                <button className="bg-blue-300 rounded-full shadow-xl p-4 hover:shadow-none hover:bg-blue-200" onClick={() => setOpenModal(true)}><FaPlus /></button>
            </div>
            {tasks.length === 0 ?
                <div className="text-sm text-slate-400">no task</div>
                :
                <>
                    {tasks.length === 1 ? <div className="text-sm text-slate-400">{tasks.length} task</div> : <div className="text-sm text-slate-400">{tasks.length} tasks</div>}

                </>
            }
            <Modal show={openModal}>
                <NewTask />
            </Modal>
        </>
    )
}

export default Navbar