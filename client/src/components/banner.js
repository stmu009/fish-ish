import React, { Component } from "react";


var bannerStyle = {
    position: "fixed",
    bottom: 0,
    backgroundColor: "gold",
    width: "100%",
    height: "4rem",
    padding: "1rem",
}

class Game extends Component {

    render() {
        return (
            <div style={bannerStyle}>
                <span>Level: 1  </span>
                <span>Lives: 3  </span>
                <span>Score: 0  </span>
                <span style={{ float: "right" }}>Use the arrows to move</span>
            </div>
        )
    }

}
export default Game;