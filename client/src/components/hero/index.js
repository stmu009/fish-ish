import React, { Component } from 'react';
import { World,Body, Sprite } from 'react-game-kit'

class Hero extends Component {
    render() {
        return (
            <World>
            <Body
          args={[1, 1, 64, 64]}
          inertia={Infinity}
          ref={b => {
            this.body = b;
          }}
        >
                <Sprite
                    // repeat={this.state.repeat}
                    // onPlayStateChanged={this.handlePlayStateChanged}
                    src="images/final/orangefish.png"
                    scale={.4}
                    style={{height:"170px", width:"480px"}}
                    // {this.context.scale}
                    // state={this.state.characterState}
                    steps={[0, 12]}
                />
            </Body>
            </World>
        );
    }
}

export default Hero;