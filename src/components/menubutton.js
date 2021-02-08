import React, { Component } from 'react';
import './menubutton.css';

class Menubutton extends Component {
    


    render() {
        <div class="menubutton">
            <span class="hoveranimation"></span>
            <span class="buttontext">{this.props.name}</span>
        </div>
    }

}


export default Menubutton;