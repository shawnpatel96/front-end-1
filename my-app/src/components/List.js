import React from "react"
import Task from "./Task"

const List = ({state,dispatch})=>{

    const clearTask = state.length ? (
        state.map(tasks=> {
            return (
                <div>
                    <Task task={tasks} dispatch={dispatch}/>
                </div>
            );
        })
    ) : (
      null
    );
    return clearTask
};

export default List