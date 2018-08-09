import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

var imgSize = {
  height: '40px'
}



class GLogin extends Component {

render() {
    return(

  <button type="submit" class="btn btn-dark btn-lg" href="">Login With <img style= { imgSize } src="images/google-favicon-logo.png"></img></button>

    )
}

}
export default GLogin;