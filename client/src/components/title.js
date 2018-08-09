import React, { Component } from 'react';

var titleStyle = {
  textAlign: 'center',
  fontSize: '150px',
  fontFamily: 'luckiest guy',
  color: 'navy'
}

class Title extends Component {
  render() {
    return (
      <div className="" style= { titleStyle }>"Fish-ish"</div>
    );
  }
}

export default Title;