import React, { useState, useReducer } from "react";

import FormTwo from "./FormTwo"
import List from "./List"
import TaskPage from "./TaskPage"
import { reducer, initialState } from '../reducer/reducer';
import NavBar from './NavBar'
import Task from "./Task";

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

const HomePage = ()=>{
    const [tasks, setTasks]=useState([]);

   
    const [state, dispatch]= useReducer(reducer, initialState);
 
    return(
        <div>
            
        <NavBar/>
        <CardHeader><CardHeading>Welcome to WunderList!</CardHeading></CardHeader>
        <div>
            
        <FormTwo dispatch={dispatch}/>
        <List state={state} dispatch={dispatch}/>
        <TaskPage/>
        </div>
        
        </div>
    )
}


export default HomePage