import React,{ useState } from 'react';

import Form from './components/Form';
import HomePage from "./components/HomePage"
import Signup from "./components/SignUp"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
  
            <PrivateRoute exact path ="/form" component ={HomePage}/>
            <Route exact path="/" component={Signup} />
            <Route exact path ="/login" component={Login}/>
            
        </Switch>
     </div>
    </Router>
  );
}

export default App;
