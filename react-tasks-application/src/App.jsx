import TaskList from './TastkList';
import TaskForm from './assets/TaskForm';
import { tasks as data} from "./tasks";
import {useState, useEffect} from 'react';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, [])

  return (
    <>
      <TaskForm/>
      <TaskList tasks = {tasks}/>
    </>
  )
}

export default App