import React from 'react';
import { NavItems } from "./NavItems";
import './Navbar.scss';
import MenuButton from '../Menubutton/MenuButton';
import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"

export const Navbar = () => {

    return (
        <div className="topnav">
            <div>
                LOGO
            </div>
            <ul className="navList">
                {NavItems.map((item, index) => {
                    return (
                        <li className="navListItem" key={index}>
                            <MenuButton 
                                title={item.title}
                                url={item.url}
                                scrollItem={item.scrollItem}
                            >
                            </MenuButton>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Around 
                    className='toggle'
                    duration={750} 
                />
            </div>

        </div>
    )
}