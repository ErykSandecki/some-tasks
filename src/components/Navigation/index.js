import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './style.css';

// components
import MenuMobile from '../MenuMobile';

export const Navigation = () => (
    <header className="Navigation">
        <MenuMobile/>
        <nav className="Navigation__desktop">
            <Link className="Navigation__link" to="/">
                Palindrome
            </Link>
            <Link className="Navigation__link" to="/decoder">
                Decoder
            </Link>
            <Link className="Navigation__link" to="/calculator">
                Calculator
            </Link>
            <Link className="Navigation__link" to="/crud-interface">
                CRUD Interface
            </Link>
        </nav>
    </header>
);

export default Navigation;