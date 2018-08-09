import React, { Component } from "react";
import ArrowKeysReact from 'arrow-keys-react';

var x=0;
var y=0;

var heroStyle = {
    height: "120px",
    width: "150px",
    overflow: "hidden",
    position: "absolute",
    top: "120px",
    left: "0px",
    // top: 120+this.state.y+"px",
    // left:0+this.state.x+"px",
}

// if user presses key then move in given direction
//press right arrow move angler to the right
//keyhandler for the right arrow
//code for the right key
//change position of angler
//make positions states
//add states


class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Use arrow keys on your keyboard!',
            x: 0,
            y: 0,
        };

        var heroStyle = {
            height: "120px",
            width: "150px",
            overflow: "hidden",
            position: "absolute",
            top: 120+this.state.y+"px",
            left: 0+this.state.x+"px",
        }

        ArrowKeysReact.config({
            left: () => {
                this.setState({
                    content: 'left key detected.',
                    x: this.state.x-1,
                });
            },
            right: () => {
                this.setState({
                    content: 'right key detected.',
                    x: this.state.x+1,
                });
            },
            up: () => {
                this.setState({
                    content: 'up key detected.',
                    y: this.state.y+1,
                });
            },
            down: () => {
                this.setState({
                    content: 'down key detected.',
                    y: this.state.y-1,
                });
            }
        });
    }
    render() {
        const heroStyle = {
            height: "120px",
            width: "150px",
            overflow: "hidden",
            position: "absolute",
            top: 120+this.state.y+"px",
            left: 0+this.state.x+"px",
        };
        return (
            <div {...ArrowKeysReact.events} tabIndex="1" style={this.state.heroStyle}>
                <img src="/images/final/redangler.png" alt="" />
                {this.state.content}
            </div>
        )
    }

}
export default Hero;