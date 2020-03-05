import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from"../utils/axiosWithAuth"

const TaskList = () =>{
    useEffect(()=>{
        axiosWithAuth()
        .get('https://wunderlistbuildweek.herokuapp.com/api/lists/1/tasks')
        .then(res=>console.log(res))
        .catch(err=>console.log(err ))
    },[])
   return(
       <div>
           <h1>inside task list</h1>
       </div>
   )
}

export default TaskList