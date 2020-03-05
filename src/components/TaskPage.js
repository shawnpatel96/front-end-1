import React, { useState, useEffect } from "react";

import axiosWithAuth from"../utils/axiosWithAuth"





const TaskPage = props =>{
    const [tasks, setTasks] = useState()
    const [editing, setEditing] = useState(false);
    const [edited, setEdited]=useState({
        description: "",
        frequency:""
    })


    useEffect(()=>{
        axiosWithAuth()
        .get('https://wunderlistbuildweek.herokuapp.com/api/lists/1/tasks')
        .then(res=>{
            console.log("res from tasklist", res)
            setTasks(res.data)
            console.log(res.data)
            console.log("tasks set to tasks state",setTasks)
            
        })
        .catch(err=>console.log(err ))
    },[])

    const toggleEdit= task=>{
        if(editing !== task.id){
            setEdited(task)
            setEditing(task.id)
        }else{
            axiosWithAuth()
            .put(`https://wunderlistbuildweek.herokuapp.com/api/lists/1/tasks/${task.id}`, edited)
            .then(res=>{
                console.log("edited",res)
                setTasks([...tasks.filter(item=>item.id !==tasks.id), res.data])
                setEditing(false)
            })
            .catch(err=>console.log("edit error", err))
        }
    }
    const handleChange =e => setEdited({...edited, [e.target.name]:e.target.value});

    const deleteTask = id=>{
        axiosWithAuth()
        .delete(`https://wunderlistbuildweek.herokuapp.com/api/lists/1/tasks/${id}`)
        .then(res=>{
            console.log("delete res", res)
            setTasks(tasks.filter(item=>item.id !== id))
        })
        .catch(err=>{
            console.log('delete eror', err)
        })
    }


   return(
       <div>
     
           <h1>inside task list</h1>
           {console.log(tasks)}
           {/* {tasks.map(item=>{
               
               return (
                   <div key={item.id}>
                       {editing===item.id ?
                       <div>
                       <input name="description" value={edited.description} onChange={handleChange}/>
                       <input name="frequency" value={edited.frequency} onChange={handleChange}/>
                       </div> :
                       <div>
                       <h3>{item.description}</h3>
                       <p>{item.frequency}</p>
                       </div>
                       }
                       <button onClick={()=>toggleEdit(item)}>{editing===item.id ? "Submit": "Edit Description"}</button>
                       <button onClick={()=>deleteTask(item.id)}>Delete Task</button>

                   </div>
               )
           })} */}
         
           

       </div>
   )
}

export default TaskPage