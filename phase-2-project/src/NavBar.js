import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul className="NavBar" style={{ display: 'flex', gap: '10px', listStyleType: 'none' }}>
                    <li>
                        <NavLink 
                            to="/"
                            end className="link"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/add-new-kitten" 
                            className="link"

                        >
                            Add New Kitten
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/favorites" 
                            className="link"
                        >
                            Favorite Kittens
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }

export default NavBar;

