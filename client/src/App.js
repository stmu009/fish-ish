import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Game from '../src/components/game'

import Splash from './components/splash';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ Splash } />
         </Switch>
        </div>
      </Router>
      
        {/* <Game /> */}

      </div>
    );
  }
}

export default App;
