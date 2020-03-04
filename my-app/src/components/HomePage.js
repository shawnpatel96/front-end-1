import React, { useReducer } from "react";

import FormTwo from "./FormTwo"
import List from "./List"
import AddList from "./AddList"
import { reducer, initialState } from '../reducer/reducer';


const HomePage = ()=>{

   
    const [state, dispatch]= useReducer(reducer, initialState);
 
    return(
        <div>
        <p>Welcome to WunderList Home Page</p>
        <FormTwo dispatch={dispatch}/>
        <List state={state} dispatch={dispatch}/>
        <AddList/>
        </div>
    )
}


export default HomePage