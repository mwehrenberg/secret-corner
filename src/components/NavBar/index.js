import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import "./NavBar.css";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink className="hover-3" to="/about" >
                        About Us
                    </NavLink>
                    <NavLink className="hover-3" to="/facilities" activestyle="true" >
                        Facilities
                    </NavLink>
                    <NavLink className="hover-3" to="/gallery" activestyle="true" >
                        Activities
                    </NavLink>
                    <NavLink className="hover-3" to="/gallery" activestyle="true" >
                        Gallery
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/">
                        Make a Reservation
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;