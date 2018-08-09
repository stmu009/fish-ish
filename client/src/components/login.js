import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import GLogin from "./google-login"
import PropTypes from 'prop-types'


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
    static propTypes = {
        onStart: PropTypes.func,
    }

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="card" style={cardStyle}>
                <h2 className="card-header" style={textAlign}>Login using your Google Account:</h2>
                <form className="card-body">
                    <GLogin onStart={this.props.onStart} />
                </form>
            </div>
        )
    }



}
export default Login;