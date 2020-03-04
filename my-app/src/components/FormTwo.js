import React, {useState} from "react"
import axiosWithAuth from"../utils/axiosWithAuth"



const Form =({dispatch})=>{
    axiosWithAuth()
            
                .get('https://wunderlistbuildweek.herokuapp.com/api/lists/1/tasks')
                .then(res=>{
                    console.log(res)
               
               
                })
                .catch(err=>{
                    console.log(err, )
                })
    const [newTask, setNewTask] = useState({
        description: '',
        frequency:'',
        
      
       
    })

    const handleChanges= e=>{
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value   
        
            
        })
    }

    const handleSubmit= e =>{
        e.preventDefault();
        dispatch({type: "ADD_TASK", payload:newTask})
        setNewTask("")
         axiosWithAuth()
        .post('/api/lists/1/tasks', newTask)
        .then(res=>{
            console.log("this is RESPONSE from POST in ADDTASK from Form.js", res)
           
        })
        .catch(err=>{
            console.log('this is ERROR from POST in ADDTASK from Form.js', err)
        })
        
      
    };
    const clearTask=(e)=>{
        e.preventDefault();
        dispatch({type:"CLEAR_TASK"})
        axiosWithAuth()
        .delete(`/api/lists/1/tasks/${newTask.id}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="description" 
            value={newTask.description} 
            onChange={handleChanges} 
            placeholder="add a task"
          
            />
              <input 
            type="text" 
            name="frequency" 
            value={newTask.frequency} 
            onChange={handleChanges} 
            placeholder="How Often?"
          
            />
         
        
            
            <button type="submit">ADD_TASK</button>
            <button onClick={clearTask}>Clear</button>
        </form>
    )
}

export default Form