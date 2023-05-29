function TaskList({tasks}) {

  if (tasks.length === 0){
    return <h1>No hay tareas aun</h1>
  }

  return (
    <div>
      {
        tasks.map((task) => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.descripcion}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList