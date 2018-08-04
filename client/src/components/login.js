import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import GLogin from "./google-login"

var cardStyle = {
    width: '45%',
    margin: 'auto',
    marginBottom: '100px',

};

class Login extends Component {



render() {
    return(
<div className="card" style= {cardStyle}>
<h2 className="card-header">Login:</h2>
<form className="card-body">
  <GLogin />
</form>
</div>
    )
}

}
export default Login;