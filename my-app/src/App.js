import React,{ useState } from 'react';

import Form from './components/Form';

import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  
  return (
    <Router>
    <div className="App">
      <Switch>
  
    <PrivateRoute exact path ="/form" component ={Form}/>
    <Route exact path="/" component={Login} />
    <Route component={Login}/>
    
   
      </Switch>
    </div>
    </Router>
  );
}

export default App;
