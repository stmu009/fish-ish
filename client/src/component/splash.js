import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Login from "./login"


class Splash extends Component {

render() {
    return(
<div>
<Header />
<Login />
</div>
    )
}

}
export default Splash;