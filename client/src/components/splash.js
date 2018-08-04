import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Login from "./login";

var backgroundStyle = {
    backgroundImage: "url(/images/final/backgroundCenter.png)",
    backgroundSize: "contain",
    backgroundHeight: "100%",
}

class Splash extends Component {

render() {
    return(
<div style={backgroundStyle}>
<Header />
<Login />
</div>
    )
}

}
export default Splash;