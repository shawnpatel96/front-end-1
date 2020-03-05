import React from "react"

const Task=({task, dispatch})=>{
    
console.log(task.task)
    const handleToggle =()=>{
        dispatch({type:"TOGGLE_TASK", payload:task.id})
    }
    
    return (
        <ul>
            
            <span onClick={handleToggle} style={{textDecoration: task.completed ? "line-through black":"none"}}>{task.task.description}</span>
            <button>Edit Task</button>
        </ul>
    )

}

export default Task