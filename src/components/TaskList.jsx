import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskItem from './TaskItem'

function TaskList() {
    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return (
            <p className='empty-state'>
                No tasks yet. Let's plant your first little seed! 🌱
            </p>
        )
    }

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    )
}

export default TaskList