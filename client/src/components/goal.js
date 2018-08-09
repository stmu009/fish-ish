import React, { Component } from "react";

var goalStyle = {
    height: "100%",
    // width: "100%",
    // overflow: "hidden",
    position: "absolute",
    top: "160px",
    right: "60px",
}

var goalImageStyle = {
    height: "60px",
    width: "60px",
    filter: "drop-shadow(0px 10px 10px green) drop-shadow(-1px -1px 0 lime)",
}

class Goal extends Component {

render() {
    return(
<div style={goalStyle}>
    <img style={goalImageStyle} src="/images/final/mealworm.png" alt=""/>
</div>
    )
}

}
export default Goal;