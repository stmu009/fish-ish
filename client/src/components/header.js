import React, { Component } from "react";
import Title from "./title";
import Instructions from "./instructions";

var jumboStyle = {
  color: 'blue',
  textShadow: '4px 4px aqua', 
  background: 'gold',
  border: 'orange 5px solid',
  textAlign: 'center',
}

class Header extends Component {
  render() {
    return (
      <div className="jumbotron" style= { jumboStyle }>
        
          <Title className="" />
          <Instructions />
        
      </div>
    );
  }
}

export default Header;
