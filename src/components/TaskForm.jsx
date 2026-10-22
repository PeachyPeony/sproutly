import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
    const [taskText, setTaskText] = useState('')
    const { addTask } = useContext(TaskContext)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!taskText.trim()) return

        addTask(taskText)
        setTaskText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='task-input'>What would you like to do?</label>

            <div>
                <input
                    id='task-input'
                    type='text'
                    value={taskText}
                    onChange={(event) => setTaskText(event.target.value)}
                    placeholder='e.g. Water the plants'
                />
                <button type='submit'>Add task</button>
            </div>
        </form>
    )
}

export default TaskForm