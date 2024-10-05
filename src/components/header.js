import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen); // Toggle the state between true and false
    };

    return (
        <nav className="navbar">
            {/* Hamburger icon */}
            <div className="hamburger" onClick={toggleNavbar}>
                &#9776; {/* This is the hamburger icon */}
            </div>

            {/* Navigation menu, displayed based on the state of isOpen */}
            <div className={`navigation ${isOpen ? 'open' : ''}`}>
                <p className="p1">
                    <Link to="homesection" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                </p>
                <p className="p1">
                    <Link to="aboutsection" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                </p>
                <p className="p1">
                    <Link to="contactsection" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </p>
                <p className="p1" onClick={() => setIsOpen(false)}>Course</p>
            </div>
        </nav>
    );
};

export default Navbar;
