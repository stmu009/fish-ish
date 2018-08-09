import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Login from "./login";
import PropTypes from 'prop-types'

var splashStyle = {
    fontFamily: 'luckiest guy',
}

class Splash extends Component {
    static propTypes = {
        onStart: PropTypes.func,
    }

    constructor(props) {
        super(props);
    
}

render() {
    return(
<div style= { splashStyle }>
<Header />
<Login 
onStart={this.props.onStart} 
/>
</div>
    )
}



}
export default Splash;