import { useContext } from "react";
import {TaskContext} from "../context/TaskContext";

function TaskCard({task}){

    const { deleteTask } = useContext(TaskContext);
    
    return(
        <TaskContext>
            <div>
            <h1>{task.title}</h1>
            <p>{task.descripcion}</p>
            <button onClick={()=> deleteTask(task.id)}>
                Eliminar Tarea
            </button>
            </div>
        </TaskContext>
    )
}

export default TaskCard