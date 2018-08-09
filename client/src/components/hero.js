import React, { Component } from "react";
import ArrowKeysReact from 'arrow-keys-react';


//done-if user presses key then move in given direction
//done-press right arrow move angler to the right
//done-keyhandler for the right arrow
//done-code for the right key
//change position of angler
//make positions states
//add states


class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Use arrow keys on your keyboard!',
            fX: 0,
            fY: 120,
        };

        ArrowKeysReact.config({
            left: () => {
                if (this.state.fX >= 0) {
                    this.setState({
                        fX: this.state.fX - 10,
                    });
                }
            },
            right: () => {
                if (this.state.fX <= window.innerWidth) {
                    this.setState({
                        fX: this.state.fX + 10,
                    });
                }
            },
            up: () => {
                if (this.state.fY >= 0) {
                    this.setState({
                        fY: this.state.fY - 10,
                    });
                }
            },
            down: () => {
                if (this.state.fY <= window.innerHeight) {
                this.setState({
                    fY: this.state.fY + 10,
                });
            }
        }
        });
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