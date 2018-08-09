import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Header from "./header";
// import Login from "./login";
import Banner from "./banner.js";
import Goal from "./goal.js";
import Hero from "./hero.js";


var backgroundStyle = {
    backgroundImage: "url(/images/final/backgroundCenter.png)",
    backgroundSize: "contain",
    backgroundHeight: "100%",
    height: "100% !important",
    display: "block",
}

class Game extends Component {

render() {
    return(
<div >
    {/* <Background/> */}
    <Hero />
    <Goal />
    <Banner />
</div>
    )
}

}
export default Game;