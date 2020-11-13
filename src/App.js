import './App.css';
import Home from './Home';
import About from './About';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Footer from './Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#549876'
    },
    secondary: {
      main: '#765498'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
