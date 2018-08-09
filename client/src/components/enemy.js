import React, { Component } from "react";

var x = window.innerWidth / 2
var y = 160

class Enemy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fX: x,
            fY: y,

        };
    }

    componentDidMount() {

        // while (1 === 0) {
        //     console.log("fX:", this.state.fX)
        //     console.log("fY:", this.state.fY);
        //     if (0 < this.state.fY <= window.innerWidth) {
        //         this.setState({
        //             fY: this.state.fY - 12,
        //         })
        //     }
        // }
    }

    render() {
        const enemyStyle = {
            height: "62px",
            width: "76px",
            position: "absolute",
            overflow: "hidden",
            top: this.state.fY + "px",
            right: this.state.fX + "px",
        }

        const enemyImageStyle = {
            position: "relative",
            bottom: "220px"
        }

        return (
            <div style={enemyStyle} tabIndex="0">
                <img style={enemyImageStyle} src="/images/final/bluefish.png" alt="" />
            </div>
        )
    }

}
export default Enemy;