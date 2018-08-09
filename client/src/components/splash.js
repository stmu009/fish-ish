import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Login from "./login";

var splashStyle = {
    fontFamily: 'luckiest guy',
}

class Splash extends Component {

render() {
    return(
<div style= { splashStyle }>
<Header />
<Login />
</div>
    )
}

}
export default Splash;