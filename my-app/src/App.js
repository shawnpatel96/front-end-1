import React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

//components
import Navigation from './components/Navigations';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

//styled components
const AppStyle = styled.div`
  
`


function App() {
  return (
    <AppStyle>
      <header className="App-header">
        <h1>Wunderlist 2.0</h1>
        <Navigation/>
        <Route exact path='/'><Home/></Route>
        <Route path='/login'><Login/></Route>
        <Route path='/register'><Register/></Route>
      </header>
    </AppStyle>
  );
}

export default App;
