import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Game from '../src/components/game'

import Splash from './component/splash';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: 0,
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  render() {
    this.gameStates = [
      <Splash onStart={this.handleStart} />,
      <Game onLeave={this.handleLeave} />,
    ];
    return this.gameStates[this.state.gameState];
  }

  handleStart() {
    this.setState({
      gameState: 1,
    });
  };

  handleLeave(index) {
    this.setState({
      gameState: 2,
    });
  };
}


