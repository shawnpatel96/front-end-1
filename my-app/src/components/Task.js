import React from "react"
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardIcon,
    CardFieldset,
    CardInput,
    CardOptionsItem,
    CardOptions,
    CardOptionsNote,
    CardButton,
    CardLink
  } from "./styles";


const Task=({task, dispatch})=>{
    
console.log(task.task)
    const handleToggle =()=>{
        dispatch({type:"TOGGLE_TASK", payload:task.id})
    }
    
    return (
        <CardWrapper>
            <CardBody>
                <CardHeader><CardHeading>Your Chores to do:</CardHeading></CardHeader>
        <ul>
            <CardFieldset>
            <span onClick={handleToggle} style={{textDecoration: task.completed ? "line-through black":"none"}}>{task.task.description}</span>
            </CardFieldset>
            <CardFieldset>
            <CardButton>Edit Task</CardButton>
            </CardFieldset>
        </ul>
        </CardBody>
        </CardWrapper>
    )

}

export default Task