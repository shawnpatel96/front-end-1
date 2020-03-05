import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddList from "./AddList"
import {Nav} from "./Nav-Bar"

export const NavBar = () => {
  


    return (
        <Nav>
            <ul>
            <li><a href ="https://www.google.com/">Home Page</a></li>        
            <li><a href ="/addlist">Add List</a></li>
            
            {/* <Link to ="/addtask"><button>Add A Task</button></Link> */}
                                                                                     {/*   add github landing page link here*/}
                               
           </ul>

            
        </Nav>
    )
}

export default NavBar
