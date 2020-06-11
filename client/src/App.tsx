import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.component'
import { Switch, Route, Redirect } from 'react-router-dom';
import {HomePage} from './pages/homepage/homepage.component'
import {LoginPage} from './pages/login/login.component'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { typography } from '@material-ui/system';

const CustomTheme = createMuiTheme({
  palette: {
    text: {
      primary: "#ececec",
    }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif"
  }
})
function App() {
  return (
    <div className="App">
        <ThemeProvider theme={CustomTheme}>
          <Header />
          <Switch>
            <Route exact path = "/" component = {HomePage} />
            <Route exact path = "/login" component = {LoginPage} />
          </Switch>
        </ThemeProvider>

    </div>
  );
}

export default App;
