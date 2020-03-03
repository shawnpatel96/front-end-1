import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//components
import ToDoCard from './ToDoCard';

const ToDoList = () => {

    const [todo, setTodo] = useState();

    useEffect(() => {
        const getList = () =>{
            axios
                .get('https://reqres.in/api/unknown', todo)
                .then(res=>{
                    console.log(res.data.data, 'todo list worked')
                    setTodo(res.data.data);
                })
                .catch(err=>{
                    console.log(err, 'todo list failed')
                })
        }
        getList();
    }, [])
    

    return(
        <section className='ToDoList'>
            {todo.map(e => {
                return(
                    <ToDoCard 
                        key={e.id} 
                        name={e.name}
                        color={e.color}
                    />
                )
            })}
        </section>
    )
}

export default ToDoList;