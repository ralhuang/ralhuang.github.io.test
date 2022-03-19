import React, {Component} from 'react';
import { NavItems } from "./NavItems";
import './Navbar.scss';
import MenuButton from '../Menubutton/MenuButton';

class Navbar extends Component {
    render() {
        return(
            <div className="topnav">
                <div>
                    LOGO
                </div>
                <ul className="navList">
                    {NavItems.map((item, index) => {
                        return(
                            <li className="navListItem" key={index}>
                                <MenuButton title={item.title}
                                            url={item.url}>
                                </MenuButton>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Navbar