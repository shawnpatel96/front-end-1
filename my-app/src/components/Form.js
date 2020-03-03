import React, {useState} from "react"
import { useParams } from "react-router-dom";
import axiosWithAuth from"../utils/axiosWithAuth"
import axios from "axios";

const initialTask = {
    description: '',       // add more endpoints here day month etc
    frequency: ''
}

const Form =({tasks, updateTasks})=>{
    console.log(tasks)

    const[editing, setEditing]= useState(false);
    const[taskToEdit, setTaskToEdit]=useState(initialTask)
    const {id}= useParams();
    
    const [newTask, setNewTask] = useState('')

    const addTask =(e)=>{
        e.preventDefault()
        axiosWithAuth()
        .post('/api/lists/1/tasks', newTask)
        .then(res=>{
            console.log("this is RESPONSE from POST in ADDTASK from Form.js", res)
            updateTasks([...tasks, newTask])
        })
        .catch(err=>{
            console.log('this is ERROR from POST in ADDTASK from Form.js', err)
        })
    }
    const handleNewTask= e=>{
        const value= e.target.value
        setNewTask({
            ...newTask,
           
            frequency: e.target.value
        })
    }

    const handleNewDes =e=>{
        setNewTask({
            ...newTask,
            description:e.target.value                  
        })
    }

    const deleteTask= task=>{
        axiosWithAuth()
        .delete(`https://wunderlistbuildweek.herokuapp.com/api/lists/${taskToEdit.id}/tasks/`)
        .then(res=>{
            console.log('this is RESPONSE in deleteTASK from DELETE in Form.js', res)
            axiosWithAuth()
            .get(`https://wunderlistbuildweek.herokuapp.com/api/lists/:id/tasks/`)
            .then(res=>{
                console.log('this is RESPONSE in DELETETASK from GET in Form.js ')
                updateTasks(res.data)
            })
            .catch(err=>{
                console.log('this is ERROR from GET in DeleteTask from Form.js')
            })
        })
        .catch(err=>{
            console.log('this is ERROR from Delete in deleteTask from Form.js')
        })
    }
     const editTask= task=>{
        setEditing(true)
        setTaskToEdit(task);
    }
    const saveEdit = e=>{
        e.preventDefault()
        axiosWithAuth()
        .put(`/api/list/:id/tasks/${taskToEdit.id}`, taskToEdit)
        .then(res=>{
            console.log('this is RESPONSE from PUT in SAVeEDIT in form.js ', res)
            axiosWithAuth()
            .get(`https://wunderlistbuildweek.herokuapp.com/api/lists/:id/tasks`)
            .then(res=>{
                console.log('this is RESPONSE from GET in saveEdit from Form.js',res)
                updateTasks(res.data)
            })
            .catch(err=>{
                console.log('this is ERROR from THEN in saveedit from Form.js',err)
            })
        })
        .catch(err=>{
            console.log('this is ERROR from PUT in saveEdit from Form.js',err)
        })
    };
    

    return (
        <div>
        <h1> hello from form component</h1>
        <form onSubmit={addTask}>
            <div>
              
                <input name="task" type="text" placeholder="task here" value={newTask.description} onChange={handleNewDes}/>
                <input name="task" type="text" placeholder="Frequency here" value={newTask.frequency} onChange={handleNewTask}/>
         
                <button>Add New Task</button>
            </div>
        </form>
        </div>
        
    )
}

export default Form