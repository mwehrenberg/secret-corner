import React, { useState, useEffect } from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Bars,
    MobileMenu
} from "./NavbarElements";
import logo from "../../images/logo.png";
import "./NavBar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // 🔒 Lock page scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    return (
        <>
            <Nav>
                <a href="/" className="navbar-logo">
                    <img src={logo} alt="Secret Corner Hostel Logo" />
                </a>

                <Bars onClick={toggleMenu} />

                <NavMenu>
                    <NavLink to="/about">Our Story</NavLink>
                    <NavLink to="/facilities">Facilities</NavLink>
                    <NavLink to="/activities">Activities</NavLink>
                    <NavLink to="/localAttractions">Local Attractions</NavLink>
                    <NavLink to="/gallery">Gallery</NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink target="_blank" to="https://book-directonline.com/properties/secretcornerDirect">
                        Make a Reservation
                    </NavBtnLink>
                </NavBtn>
            </Nav>

            {/* 🔲 Dark backdrop behind menu */}
            {isOpen && <div className="menu-backdrop" onClick={closeMenu} />}

            {/* 📱 Mobile Dropdown Menu */}
            {isOpen && (
                <MobileMenu>
                    <NavLink onClick={closeMenu} to="/about">Our Story</NavLink>
                    <NavLink onClick={closeMenu} to="/facilities">Facilities</NavLink>
                    <NavLink onClick={closeMenu} to="/activities">Activities</NavLink>
                    <NavLink onClick={closeMenu} to="/localAttractions">Local Attractions</NavLink>
                    <NavLink onClick={closeMenu} to="/gallery">Gallery</NavLink>

                    <a 
                    className="mobile-reserve" 
                    href="https://book-directonline.com/properties/secretcornerDirect" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    >
                    Make a Reservation
                    </a>
                </MobileMenu>
            )}
        </>
    );
};

export default Navbar;