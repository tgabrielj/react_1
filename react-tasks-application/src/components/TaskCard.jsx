import React from "react";

function TaskCard({task}){
    function mostrarAlerta(){    
    alert('Eliminando...')
    }
   
    return(
        <div>
            <h1>{task.title}</h1>
            <p>{task.descripcion}</p>
            <button onClick={mostrarAlerta}>
                Eliminar Tarea
            </button>
        </div>
    )
}

export default TaskCard