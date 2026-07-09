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

const travelGuideLinks = [
    { to: "/localAttractions", label: "Local Attractions" },
    { to: "/guides/best-day-trips-chiang-rai", label: "Best Day Trips" },
    { to: "/guides/two-days-chiangrai", label: "Two Days in Chiang Rai" },
    { to: "/guides/why-chiang-rai", label: "Why Chiang Rai" },
    { to: "/guides/best-cafes-chiang-rai", label: "Best Cafes" },
    { to: "/guides/faq", label: "FAQ" },
];

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
                    <img src={logo} alt="Secret Corner Hostel Chiang Rai - Boutique Hostel Logo" />
                </a>

                <Bars onClick={toggleMenu} />

                <NavMenu>
                    <NavLink to="/about">Our Story</NavLink>
                    <NavLink to="/facilities">Facilities</NavLink>
                    <NavLink to="/activities">In-House Activities</NavLink>
                    <div className="nav-dropdown">
                        <button className="nav-dropdown-trigger" type="button" aria-haspopup="true">
                            Travel Guides
                        </button>
                        <div className="nav-dropdown-menu">
                            {travelGuideLinks.map((link) => (
                                <NavLink to={link.to} key={link.to}>
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <NavLink to="/gallery">Gallery</NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/book">
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
                    <NavLink onClick={closeMenu} to="/activities">In-House Activities</NavLink>
                    <div className="mobile-guide-group">
                        <p>Travel Guides</p>
                        {travelGuideLinks.map((link) => (
                            <NavLink onClick={closeMenu} to={link.to} key={link.to}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                    <NavLink onClick={closeMenu} to="/gallery">Gallery</NavLink>

                    <NavLink 
                    className="mobile-reserve" 
                    to="/book"
                    onClick={closeMenu}
                    >
                    Make a Reservation
                    </NavLink>
                </MobileMenu>
            )}
        </>
    );
};

export default Navbar;
