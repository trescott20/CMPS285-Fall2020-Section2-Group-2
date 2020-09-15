import React from 'react';
import './header.styles.scss';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';const Header = () => (

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
        <div className="header__nav">
            {/* 1st Link */}
            <Link to = '/shop' className="header__link">
            <div className="header__option">
                <span className="header__lineOne">Shop</span>
                <span className="header__lineTwo">Now</span>
            </div>
            </Link>
            {/* 2nd link */}
            <Link to = '/contactus'className="header__link">
            <div className="header__option">
                <span className="header__lineOne">Contact Us&emsp;&emsp;<ExpandMoreIcon style={{fontSize: 14}}/> </span>
                <span className="header__lineTwo">We are here to help</span>
            </div>
            </Link>
            {/* 3rd link */}
            <Link to = '/login'className="header__link">
            <div className="header__option">
                <span className="header__lineOne">Welcome User,</span>
                <span className="header__lineTwo"> Sign in </span>
            </div>
            </Link>
            {/* cart */}
        </div>

        {/* Cart Icon with Number */}

    </nav>

);

export default Header;
