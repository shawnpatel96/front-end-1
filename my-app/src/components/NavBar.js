import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddList from "./AddList"
export const NavBar = () => {



    return (
        <nav>
            <Link to="/addlist"><button>Add A List</button></Link>
            <Route exact path="/addlist" component={AddList}></Route>

            
        </nav>
    )
}
