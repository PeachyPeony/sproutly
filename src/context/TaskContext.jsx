import { createContext, useState } from 'react'

export const TaskContext = createContext()

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([])

    const addTask = (text) => {
        const newTask = {
            id: crypto.randomUUID(),
            text: text.trim(),
            completed: false,
        }

        setTasks((currentTasks) => [...currentTasks, newTask])
    }

    const toogleTask = (id) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        )
    }

    const deleteTask = (id) => {
        setTasks((currentTasks) =>
            currentTasks.filter((task) => task.id !== id)
        )
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, toogleTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}