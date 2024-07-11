import { createContext, useState, } from "react";
import PropsTypes from "prop-types"


export const Context = createContext()

const ContextProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)
    const [tasks, setTasks] = useState([{ id: 0, newTask: "", time: "" }])
    const [newTask, setNewtask] = useState("")
    const [time, setTime] = useState("")

    const handlesubmit = (e) => {
        e.preventDefault()

        const idNumber = Math.random()

        tasks.forEach(task => task.id === 0 ? setTasks([{ id: idNumber, newTask: newTask, time: time }]) :
            setTasks([...tasks, { id: idNumber, newTask: newTask, time: time }]))

        setOpenModal(false)
    }

    // const handleRemove = () => {
    //     // exemplo: ele vai filtrar a task.id que for igual a dois e fazer uma nova Array sem a task.id = 2

    // }
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