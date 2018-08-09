import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import GLogin from "./google-login";
import Glogin2 from "./google-login2"

var cardStyle = {
    width: '40%',
    margin: 'auto',
};

var cardHeaderStyle = {
    textAlign: 'center',
    fontFamily: 'luckiest guy'
}

class Login extends Component {



render() {
    return(
<div className="card" style= {cardStyle}>
<h2 className="card-header" style= { cardHeaderStyle }>Login Using Your Google Account</h2>
<form className="card-body">
  <Glogin2 />
</form>
</div>
    )
}

}
export default Login;