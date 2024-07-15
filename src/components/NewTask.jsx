import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Context } from "../context/Context";



const NewTask = () => {
    const { setOpenModal, setNewtask, setTime, handlesubmit, error } = useContext(Context)

    const handleClose = (e) => {
        e.preventDefault()
        setOpenModal(false)
    }

    return (
        <>
            <form className="flex flex-col bg-white max-w-max absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 rounded-md" >
                <h1 className="text-center text-2xl font-bold text-blue-400">New Task</h1>
                <div className="my-3">
                    <div className="flex flex-col">
                        <label className="mt-5">Add new Task:</label>
                        <input className="mt-3 mb-4 px-1 border-b-2 focus:outline-none" type="text" placeholder="New task" onChange={(e) => setNewtask(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="mt-5">What time?</label>
                        <input className="mt-3 mb-4 px-1 border-b-2 focus:outline-none" type="text" placeholder="00:00" name="time" onChange={(e) => setTime(e.target.value)} />
                    </div>
                </div>
                <p>{error}</p>
                <div className="relative">
                    <button className="absolute left-[20%] bg-blue-300 rounded-full shadow-xl p-4 hover:shadow-none hover:bg-blue-200" onClick={handleClose}><IoClose /></button>
                    <button className="absolute left-[60%] bg-blue-300 rounded-full shadow-xl p-4 hover:shadow-none hover:bg-blue-200" type="submit" onClick={handlesubmit}><FaPlus /></button>
                </div>
            </form>
        </>
    )
}

export default NewTask