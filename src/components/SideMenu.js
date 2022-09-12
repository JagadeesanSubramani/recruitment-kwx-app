import React from "react";
import cn from 'classnames';
import { NavLink, Link, Redirect } from "react-router-dom";

function SideMenu(props) {

    const classess = cn('ui', 'sidebar', 'overlay', 'left', ' inverted', ' menu', 'animating',
        { ' visible ': props.toggleMenu });

    return (
        <div className={classess}>
            <ul>
                <li className="item link">
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li className="item link">Product</li>
                <li className="item link">
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu;
