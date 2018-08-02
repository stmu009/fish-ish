import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Splash from './component/splash';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ Splash } />
      </Switch>
    </div>
  </Router>
);

export default App;
