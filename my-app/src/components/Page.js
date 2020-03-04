import React, { useState, useEffect, useReducer } from "react";
// import axios from "axios";
// import axiosWithAuth from '../utils/axiosWithAuth'
import FormTwo from "./FormTwo"
import List from "./List"

import { reducer, initialState } from '../reducer/reducer';
const HomePage = ()=>{
    
    const [formList, setFormList]= useState([]);
    const [state, dispatch]= useReducer(reducer, initialState);
 
    return(
        <div>
        <p>Welcome to WunderList Home Page</p>
        <FormTwo tasks={formList} dispatch={dispatch}/>
        <List state={state} dispatch={dispatch}/>
        </div>
    )
}


export default HomePage