import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header/header.component'
import { Switch, Route, Redirect } from 'react-router-dom';
import {HomePage} from './pages/homepage/homepage.component'
import {LoginPage} from './pages/login/login.component'
function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path = "/" component = {HomePage} />
          <Route exact path = "/login" component = {LoginPage} />
        </Switch>
    </div>
  );
}

export default App;
