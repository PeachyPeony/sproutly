import { useContext } from 'react'
import './App.css'
import { TaskContext } from './context/TaskContext'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const { tasks } = useContext(TaskContext)

  return (
    <main>
      <h1>Sproutly</h1>
      <p>One task at a time.</p>

      <p>Total tasks: {tasks.length}</p>

      <TaskForm />
      <TaskList />
    </main>
  )
}

export default App