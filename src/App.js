import React,{ useState } from 'react';

import Form from './components/Form';
import HomePage from "./components/HomePage"
import Signup from "./components/SignUp"
import Login from "./components/Login"
import AddList from './components/AddList'
import FormTwo from "./components/FormTwo"
import PrivateRoute from "./components/PrivateRoute"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
  
            <PrivateRoute exact path ="/homepage" component ={HomePage}/>
            <Route exact path="/" component={Signup} />
            <Route exact path ="/login" component={Login}/>
            <Route exact path ="/signup" component ={Signup}/>
            <Route exact path ="/addlist" component ={AddList}/>
            <Route exact path="/addtask" component ={FormTwo}/>
            
        </Switch>
     </div>
    </Router>
  );
}

export default App;
