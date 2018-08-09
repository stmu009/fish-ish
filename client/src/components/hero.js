import React, { Component } from "react";
import ArrowKeysReact from 'arrow-keys-react';


//done-if user presses key then move in given direction
//done-press right arrow move angler to the right
//done-keyhandler for the right arrow
//done-code for the right key
//change position of angler
//make positions states
//add states

var xMax = window.innerWidth - 60
var xMin = xMax - 60
var yMin = 160
var yMax = 220





class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Use arrow keys on your keyboard!',
            fX: 0,
            fY: 120,
            rect1 : { x: xMin, y: yMin, width: 60, height: 60 },
            rect2 : { x: 0, y: 120, width: 150, height: 120 },

        };

        ArrowKeysReact.config({
            left: () => {
                if (this.state.fX >= 0) {
                    this.setState({
                        fX: this.state.fX - 10,
                        rect2 : { x: this.state.fX - 10, y: this.state.fY, width: 150, height: 120 },
                    });
                }
            },
            right: () => {
                if (this.state.fX <= window.innerWidth) {
                    this.setState({
                        fX: this.state.fX + 10,
                        rect2 : { x: this.state.fX + 10, y: this.state.fY, width: 150, height: 120 },
                    });
                }
            },
            up: () => {
                if (this.state.fY >= 0) {
                    this.setState({
                        fY: this.state.fY - 10,
                        rect2 : { x: this.state.fX, y: this.state.fY-10, width: 150, height: 120 },
                    });
                }
            },
            down: () => {
                if (this.state.fY <= window.innerHeight) {
                    this.setState({
                        fY: this.state.fY + 10,
                        rect2 : { x: this.state.fX, y: this.state.fY+10, width: 150, height: 120 },
                    });
                }
            }
        });
    }

    componentDidUpdate() {
        console.log( this.state.rect1 );
        console.log( this.state.rect2 );
        if (this.state.rect1.x < this.state.rect2.x + this.state.rect2.width &&
            this.state.rect1.x + this.state.rect1.width > this.state.rect2.x &&
            this.state.rect1.y < this.state.rect2.y + this.state.rect2.height &&
            this.state.rect1.height + this.state.rect1.y > this.state.rect2.y) {
            console.log('you win');
            alert('You win');
        }
    }

    render() {
        const heroStyle = {
            height: "120px",
            width: "150px",
            overflow: "hidden",
            position: "absolute",
            top: this.state.fY + "px",
            left: this.state.fX + "px",
            outline: "none !important",
        };
        return (
            <div ref={input => input && input.focus()} autoFocus {...ArrowKeysReact.events} tabIndex="-1" style={heroStyle}>
                <img src="/images/final/redangler.png" alt="" />
            </div>
        )
    }

}
export default Hero;