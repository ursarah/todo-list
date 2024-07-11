import { FaPlus } from "react-icons/fa6"
import { Modal } from "react-bootstrap"
import { useContext } from "react";
import NewTask from "./NewTask"
import { Context } from "../context/Context";

const Navbar = () => {
    const { tasks, openModal, setOpenModal } = useContext(Context)
    return (
        < >
            <div className="flex items-center gap-x-24">
                <h2 className="text-2xl font-bold text-blue-300">Tursday, 9 June</h2>
                {/* Add task */}
                <button className="bg-blue-300 rounded-full shadow-xl p-4 hover:shadow-none hover:bg-blue-200" onClick={() => { setOpenModal(true) }}><FaPlus /></button>
            </div>
            {tasks[0].id === 0 ?
                <div className="text-sm text-slate-400">no tasks</div> :
                <div className="text-sm text-slate-400">{tasks.length} tasks</div>
            }
            <Modal show={openModal}>
                <NewTask />
            </Modal>
        </>
    )
}

export default Navbar