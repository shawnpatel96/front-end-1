import React from "react";

export default function ToDoCard( props ) {
  return (
      <div className='todo-card'>
        <h1>ToDo List</h1>
        <h2>{props.name}</h2>
        <p>{props.color}</p>
      </div>
    )
}