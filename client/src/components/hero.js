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
                this.setState({
                    content: 'left key detected.',
                    fX: this.state.fX-10,
                });
            },
            right: () => {
                this.setState({
                    content: 'right key detected.',
                    fX: this.state.fX+10,
                });
            },
            up: () => {
                this.setState({
                    content: 'up key detected.',
                    fY: this.state.fY-10,
                });
            },
            down: () => {
                this.setState({
                    content: 'down key detected.',
                    fY: this.state.fY+10,
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
            top: this.state.fY+"px",
            left: this.state.fX+"px",
            outline: "none !important",
        };
        return (
            <div {...ArrowKeysReact.events} tabIndex="-1" style={heroStyle}>
                <img src="/images/final/redangler.png" alt="" />
                {/* {this.state.content} */}
            </div>
        )
    }

}
export default Hero;