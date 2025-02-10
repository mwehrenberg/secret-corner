import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import "./NavBar.css";
import "../../images/logo.svg";

const Navbar = () => {
    return (
        <>
            <Nav>   
                {/* <NavLink to="/">      
                    <img src="logo.svg" alt="Logo" className="logo"></img>
                </NavLink> */}
                
                <NavMenu>
                    <img src="logo.svg" alt="Logo" className="logo"></img>
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