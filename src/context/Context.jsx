import { createContext, useState, } from "react";
import PropsTypes from "prop-types"


export const Context = createContext()

const ContextProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)
    const [tasks, setTasks] = useState([])
    const [newTask, setNewtask] = useState("")
    const [time, setTime] = useState("")


    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(tasks);
        const idNumber = Math.random() * 100

        tasks === null ? setTasks([{ id: idNumber, newTask: newTask, time: time }]) :
            setTasks([...tasks, { id: idNumber, newTask: newTask, time: time }])
        setOpenModal(false)
    }

    return (
        <Context.Provider value={{ openModal, setOpenModal, tasks, setTasks, newTask, setNewtask, time, setTime, handlesubmit }}>
            {children}
        </Context.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropsTypes.node
};
export default ContextProvider