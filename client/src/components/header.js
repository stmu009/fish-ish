import React, { Component } from "react";
import Title from "./title";
import Instructions from "./instructions";



class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        
          <Title className="" />
          <Instructions />
        
      </div>
    );
  }
}

export default Header;
