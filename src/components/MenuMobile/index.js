import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

// Styles
import './style.css';

const MenuMobile = () => {
    const [isVisible, setVissible] = useState(false);

    return (
        <div className="MenuMobile">
            {/* Hamburger */}
            <div className="MenuMobile__hamburger hamburger" onClick={() => setVissible(true)}>
                <span className="hamburger__line"/>
                <span className="hamburger__line"/>
                <span className="hamburger__line"/>
            </div>

            {isVisible === true ?
                <section className="MenuMobile__container">
                    {/* Exit */}
                    <div className="MenuMobile__close">
                        <Icon className="MenuMobile__icon-close" onClick={() => setVissible(false)} type="close" />
                    </div>

                    {/* Links Product */}
                    <nav className="MenuMobile__links" onClick={() => setVissible(false)}>
                        <Link className="MenuMobile__link" to="/">
                            Palindrome
                        </Link>
                        <Link className="MenuMobile__link" to="/decoder">
                            Decoder
                        </Link>
                        <Link className="MenuMobile__link" to="/calculator">
                            Calculator
                        </Link>
                        <Link className="MenuMobile__link" to="/crud-interface">
                            CRUD Interface
                        </Link>
                    </nav>
                </section>
                :
                null
            }
        </div>
    )
};

export default MenuMobile;