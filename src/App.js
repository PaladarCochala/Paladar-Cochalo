import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Restaurantes from './components/Restaurante/Restaurantes';
import Restaurante from './components/Restaurante/Restaurante';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

import Home from './components/Home/Home';

const theme = createTheme({
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




function App() {
  return (
    <Router>
       <Header item={'Home'} />
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
            path="/home"
            component={Home}
          />
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
        <Footer />
      </ThemeProvider>
     
    </Router>
  );
}

export default App;
