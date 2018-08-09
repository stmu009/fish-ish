import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import GLogin from "./google-login"

var cardStyle = {
    width: '45%',
    margin: 'auto',
    // marginBottom: '100px',
    border: 'black 3px solid'
};

var textAlign = {
    textAlign: 'center',
    borderBottom: 'black 3px solid'
    
}

class Login extends Component {



render() {
    return(
<div className="card" style= {cardStyle}>
<h2 className="card-header" style= { textAlign }>Login using your Google Account:</h2>
<form className="card-body">
  <GLogin />
</form>
</div>
    )
}

}
export default Login;