import TaskList from './components/TastkList';
import TaskForm from './assets/TaskForm';
import { tasks as data} from "./data/tasks";
import {useState, useEffect} from 'react';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(task){
    setTasks([...tasks,{
      title: task.title,
      id: tasks.length,
      descripcion: task.description
    }])
  }

  function deleteTask(){
    console.log(tasks)
  }

  return (
    <>
      <TaskForm createTask = {createTask}/>
      <TaskList tasks = {tasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App