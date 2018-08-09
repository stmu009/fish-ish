import React, { Component } from "react";
import { Link } from "react-router-dom";

var imgSize = {
  height: '40px'
}

var btnTxt = {
  fontSize: '25px'
}

class GLogin extends Component {

render() {
    return(

  
  
  
  <button type="submit" class="btn btn-dark btn-lg btn-block" href="" style= { btnTxt }>Login With <img style= { imgSize } src="images/google-favicon-logo.png"></img></button>

    )
}

}
export default GLogin;