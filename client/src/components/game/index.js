import React, { Component } from 'react';
import Background from '../background'
import Hero from '../hero'
import {Loop, Stage} from 'react-game-kit'

class Game extends Component {
    render() {
        return (
            <div>
                <Loop>
                    {/* <Stage width={1024} height={576}> */}
                <Background />
                <Hero />
                {/* </Stage> */}
                </Loop>
            </div>
        );
    }
}

export default Game;