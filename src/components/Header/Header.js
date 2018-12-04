import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import nasaLogo from '../../assets/nasa-img-search.svg';
import './Header.css';

const Header = ({ children }) => {
    return (
        <header className="header">
            <div className="header__wrapper">
               <div className="header__logocontainer">
                   <Link to="/" className="header__logolink">
                       <img
                           src={nasaLogo}
                           alt="NASA images"
                           title="NASA images"
                           height="64"
                           className="header__logo"
                       />
                   </Link>
               </div>
                <div className="header__content">{children}</div>
            </div>
        </header>
    );
};

Header.propTypes = {
    children: PropTypes.node
};

export default Header;