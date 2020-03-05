import React, { useReducer } from "react";

import FormTwo from "./FormTwo"
import List from "./List"
import TaskList from "./TaskList"
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

   
    const [state, dispatch]= useReducer(reducer, initialState);
 
    return(
        <div>
        <NavBar/>
        <TaskList/>
        <div>
            <CardHeader><CardHeading>Welcome to WunderList!</CardHeading></CardHeader>
       
        <FormTwo dispatch={dispatch}/>
        <List state={state} dispatch={dispatch}/>
        </div>
        </div>
    )
}


export default HomePage