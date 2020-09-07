import React from 'react';
import './header.styles.scss';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => (

    <nav className="header">
        {/* Logo for the Navigation Bar */}
        <Link to="/">
            <img className="header__logo" src="logo.png" alt="" />
        </Link>

        {/* Search Box */}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>

        {/* Other Links */}
        {/* Cart Icon with Number */}

    </nav>

);

export default Header;
