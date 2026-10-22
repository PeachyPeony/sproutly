import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskItem({ task }) {
    const { toogleTask, deleteTask } = useContext(TaskContext)

    return (
        <li>
            <label>
                <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={() => toogleTask(task.id)}
                />

                <span>{task.text}</span>
            </label>

            <button
                type='button'
                onClick={() => deleteTask(task.id)}
                aria-label={`Delete ${task.text}`}>
                Delete
            </button>
        </li>
    )
}

export default TaskItem