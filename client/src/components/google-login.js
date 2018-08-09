import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types'


var imgSize = {
  height: '40px'
}

var btnTxt = {
  fontSize: '25px'
}

class GLogin extends Component {
  static propTypes = {
    onStart: PropTypes.func,
  }

  constructor(props) {
    super(props);

    // this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener('keypress', this.handleKeyPress);
  // }

  // handleKeyPress(e) {
  //   if (e.keyCode === 13) {

  //     this.props.onStart();
  //   }
  // }



  handleLogin = (e) => {
    e.preventDefault();

    // "/auth/google" 
    axios.get(
      // 'https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=590247037254-6p4e3h0557aa1pic7tu70h82tunaj6ei.apps.googleusercontent.com&as=czT6oIpe7dx9OodYRfXRvg&destination=http%3A%2F%2Flocalhost%3A5000&approval_state=!ChRJU1N1QllBYVJ5T2RkaDI5V3poNRIfczVpYlFNQmRZSHdSWUlreWNoTjIyM1I4ME92NFVSWQ%E2%88%99ANKMe1QAAAAAW22_xJ7FrJCWQ1R53HRV916UKidKAozm&oauthgdpr=1&xsrfsig=AHgIfE_BJoSmxovyX2Reg4sTvIoTzmRhyw&flowName=GeneralOAuthFlow'
      // "/auth/google" 
      'http://localhost:5000/auth/google',
      // {
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'content-type': 'application/x-www-form-urlencoded'
      //   },
      //   proxy: {
      //     host: 'localhost',
      //     port: 5000
      //   }
      // }
    )
      .then(
        // axios.get('http://localhost:5000/auth/google/redirect')
        this.props.onStart()
      )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.headers);
        }
        else if (error.request) {
          console.log(error.request);
        }
        else {
          console.log(error.message);
        }
        console.log(error.config);
      });
    console.log('logging in');
  };

  render() {

    return (
      <button type="submit" className="btn btn-dark btn-lg btn-block" style={btnTxt}
        // href="https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=590247037254-6p4e3h0557aa1pic7tu70h82tunaj6ei.apps.googleusercontent.com&as=czT6oIpe7dx9OodYRfXRvg&destination=http%3A%2F%2Flocalhost%3A5000&approval_state=!ChRJU1N1QllBYVJ5T2RkaDI5V3poNRIfczVpYlFNQmRZSHdSWUlreWNoTjIyM1I4ME92NFVSWQ%E2%88%99ANKMe1QAAAAAW22_xJ7FrJCWQ1R53HRV916UKidKAozm&oauthgdpr=1&xsrfsig=AHgIfE_BJoSmxovyX2Reg4sTvIoTzmRhyw&flowName=GeneralOAuthFlow"
        onClick={this.handleLogin}
      >
        Login With
      <img style={imgSize} src="images/google-favicon-logo.png"></img>
      </button>
    )
  }

}
export default GLogin;