import React from 'react';
import {Route} from 'react-router-dom';

//components
import Navigation from './components/Navigations';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wunderlist 2.0</h1>
        <Navigation/>
        <Route exact path='/'><Home/></Route>
        <Route path='/login'><Login/></Route>
        <Route path='/register'><Register/></Route>
      </header>
    </div>
  );
}

export default App;
