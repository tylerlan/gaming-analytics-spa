import React from 'react';
import Home from './components/home/home-container';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import orange from 'material-ui/colors/orange';

const materialTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
    dangerous: {
      50: '#f9e0e0',
      100: '#f0b3b3',
      200: '#e68080',
      300: '#db4d4d',
      400: '#d42626',
      500: '#cc0000',
      600: '#c70000',
      700: '#c00000',
      800: '#b90000',
      900: '#ad0000',
      A100: '#ffd7d7',
      A200: '#ffa4a4',
      A400: '#ff7171',
      A700: '#ff5858',
      contrastDefaultColor: 'light'
    }
  }
});

const App = () => (
  <MuiThemeProvider theme={materialTheme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="" to="/" />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;
