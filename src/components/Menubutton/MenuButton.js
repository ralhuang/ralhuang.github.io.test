import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuButton.scss';

class MenuButton extends Component {

    render() {
        return(
            <Link to={this.props.url} className="menubutton">
                <span className="buttontext">
                    {this.props.title}
                </span>
            </Link>
        );
    }
}

export default MenuButton