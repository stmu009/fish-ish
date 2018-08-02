import React, { Component } from 'react';
import Background from '../background'
import Hero from '../hero'
import {Loop} from 'react-game-kit'

class Game extends Component {
    render() {
        return (
            <div>
                <Loop>
                <Background />
                <Hero />
                </Loop>
            </div>
        );
    }
}

export default Game;