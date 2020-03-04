import React, { useReducer } from "react";

import FormTwo from "./FormTwo"
import List from "./List"

import { reducer, initialState } from '../reducer/reducer';
import NavBar from './NavBar'

const HomePage = ()=>{

   
    const [state, dispatch]= useReducer(reducer, initialState);
 
    return(
        <div>
        <NavBar/>
        <p>Welcome to WunderList Home Page</p>
        <FormTwo dispatch={dispatch}/>
        <List state={state} dispatch={dispatch}/>
       
        </div>
    )
}


export default HomePage