import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch';
import CountryDetails from './Component/CountryDetails/CountryDetails';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/country/:alpha2Code">
            <CountryDetails/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
