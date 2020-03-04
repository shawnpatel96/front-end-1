import React from "react"

const Task=({task, dispatch})=>{
    
console.log(task.task)
    const handleToggle =()=>{
        dispatch({type:"TOGGLE_TASK", payload:task.id})
    }
    
    return (
        <li>
            <span onClick={handleToggle} style={{textDecoration: task.completed ? "line-through black":"none"}}>{task.task.description}</span>
        </li>
    )

}

export default Task