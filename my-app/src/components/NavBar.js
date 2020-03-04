import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddList from "./AddList"
export const NavBar = () => {



    return (
        <nav>
            
            <Link to ="/addlist"><button>Add List</button></Link>
            {/* <Link to ="/addtask"><button>Add A Task</button></Link> */}
                                                                                     {/*   add github landing page link here*/}
           <a href ="https://www.google.com/">Home Page</a>                                    
            

            
        </nav>
    )
}

export default NavBar
