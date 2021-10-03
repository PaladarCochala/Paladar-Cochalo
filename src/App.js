import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Restaurantes from './components/Restaurante/Restaurantes';
import Restaurante from './components/Restaurante/Restaurante';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#A9A9A9',
      main: '#151515',
      dark: '#464646'
    },
    secondary: {
      light: '#EB8D70',
      main: '#E5704B',
      dark: '#C7522D'
    },
    divider: 'rgb(171, 171, 171)',
    background: {
      paper: '#EBEBEB',
      default: '#151515',
    },
    text: {
      primary: '#EBEBEB',
      secondary: '#ABABAB',
    },
    action: {
      disabled: '#D1D1D1',
    }
  },
  typography: {
    fontFamily: 'Open+Sans',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
  }
})


import Footer from './layouts/Footer'

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
=======
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route
            exact
            path="/"
          >
            <Redirect
              to="/restaurantes"
            />
          </Route>
          
          <Route
            exact
            path="/restaurantes"
            component={Restaurantes}
          />
          <Route
            exact
            path="/restaurantes/:id"
            component={Restaurante}
          />
        </Switch>
        
      </ThemeProvider>
    </Router>
>>>>>>> 751cba39ac392eefac17c3d194d97777cb75d135
  );
}

export default App;
