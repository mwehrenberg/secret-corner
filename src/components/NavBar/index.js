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
                <a href="/"><h2>Secret Corner Hostel | Chiang Rai</h2></a>
                <Bars onClick={toggleMenu} />

                <NavMenu>
                    <NavLink className="hover-3" to="/about">Our Story</NavLink>
                    <NavLink className="hover-3" to="/facilities">Facilities</NavLink>
                    <NavLink className="hover-3" to="/activities">Activities</NavLink>
                    <NavLink className="hover-3" to="/localAttractions">Local Attractions</NavLink>
                    <NavLink className="hover-3" to="/gallery">Gallery</NavLink>
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