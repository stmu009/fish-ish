import React, { Component } from "react";


var bannerStyle = {
    position: "fixed",
    bottom: 0,
    backgroundColor: "gold",
    width: "100%"
}

class Game extends Component {

render() {
    return(
<div style={bannerStyle}>
    <span>Level: 1  </span>
    <span>Lives: 3  </span>
    <span>Score: 0  </span>
</div>
    )
}

}
export default Game;