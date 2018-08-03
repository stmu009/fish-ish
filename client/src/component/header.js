import React, { Component } from "react";
import Title from "./title";
import Instructions from "./instructions";

const style = {
  position: 'fixed',
  backgroundColor:'white',
  width: '100%'
}

class Header extends Component {
  render() {
    return (
      <div className="navbar"
      style={style}>
        
          <Title className="navbar-brand" />
          <Instructions />
        
      </div>
    );
  }
}

export default Header;
