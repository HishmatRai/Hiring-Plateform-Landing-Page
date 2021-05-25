import React from "react";
import './Navbar.css'
import Logo from './../../img/logo.png'
const Navbar = (props) => {
    return (

        <div className="header header-fixed">
        <div className="navbar container">
            <div className="logo">
            <img src={Logo} className="LogoImg"/>
            </div>
            <input type="checkbox" id="navbar-toggle"/ >
            <label for="navbar-toggle"><i></i></label>
            <nav className="menu">
                <ul>
                    <li>How it work</li>
                    <li>About us</li>
                    <li>Portfolio</li>
                    <li>Contacts</li>
                    <li className="navbar_get_Started_btn">Get started</li>
                </ul>
            </nav>  
              
        </div>
    </div>

    );
};

export default Navbar;