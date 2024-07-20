import { createContext, useState, } from "react";
import PropsTypes from "prop-types"


export const Context = createContext()

const ContextProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)
    const [tasks, setTasks] = useState([])
    const [newTask, setNewtask] = useState("")
    const [time, setTime] = useState("")

    const handleRemove = (id) => {
        // exemplo: ele vai filtrar a task.id que for igual a dois e fazer uma nova Array sem a task.id = 2

        const tasksFilter = tasks.filter(task => task.id !== id)
        setTasks(tasksFilter)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const idNumber = Math.random() * 100

        tasks === null ? setTasks([{ id: idNumber, newTask: newTask, time: time, checked: false }]) :
            setTasks([...tasks, { id: idNumber, newTask: newTask, time: time, checked: false }])
        setOpenModal(false)
    }

    const handleClick = (id) => {
        // caso for falso as outras tasks ainda vão existir 
        const newArr = tasks.map(task => task.id === id ? { ...task, checked: !task.checked } : task)
        setTasks(newArr);
    }

    return (
        <Context.Provider value={{ openModal, setOpenModal, tasks, setTasks, newTask, setNewtask, time, setTime, handleSubmit, handleRemove, handleClick }}>
            {children}
        </Context.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropsTypes.node
};
export default ContextProvider