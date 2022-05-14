import "./Header.scss";
import React from 'react';
import logo from "../../assets/images/playground-64.svg"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className='header'>
            {/* <Link to="/welcome" className='header__link'> */}
                <img className="header__logo" src={logo} alt="Playgrounds for All Logo" />
            {/* </Link> */}
        </header>
    );
}