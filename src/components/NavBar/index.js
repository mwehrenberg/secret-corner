// import React from "react";
// import {
//     Nav,
//     NavLink,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
// } from "./NavbarElements";
// import "./NavBar.css";

// const Navbar = () => {
//     return (
//         <>
//             <Nav>   
//                 {/* <NavLink to="/">      
//                     <img src={aiLogo} alt="Logo" className="logo"></img>
//                 </NavLink> */}
                
//                 <NavMenu>
//                     {/* <img src={logo} alt="Logo" className="logo"></img> */}
//                     <a href="/"><h2>Secret Corner Hostel | Chiang Rai</h2></a>
//                     <NavLink className="hover-3" to="/about" >
//                         Our Story
//                     </NavLink>
//                     <NavLink className="hover-3" to="/facilities" activestyle="true" >
//                         Facilities
//                     </NavLink>
//                     <NavLink className="hover-3" to="/activities" activestyle="true" >
//                         Activities
//                     </NavLink>
//                     <NavLink className="hover-3" to="/localAttractions" activestyle="true" >
//                         Local Attractions
//                     </NavLink>
//                     <NavLink className="hover-3" to="/gallery" activestyle="true" >
//                         Gallery
//                     </NavLink>
//                 </NavMenu>
//                 <NavBtn>
//                     <NavBtnLink target="_blank" to="https://book-directonline.com/properties/secretcornerDirect">
//                         Make a Reservation
//                     </NavBtnLink>
//                 </NavBtn>
//             </Nav>
//         </>
//     );
// };

// export default Navbar;

import React, { useState } from "react";
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

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <MobileMenu>
                    <NavLink onClick={closeMenu} to="/about">Our Story</NavLink>
                    <NavLink onClick={closeMenu} to="/facilities">Facilities</NavLink>
                    <NavLink onClick={closeMenu} to="/activities">Activities</NavLink>
                    <NavLink onClick={closeMenu} to="/localAttractions">Local Attractions</NavLink>
                    <NavLink onClick={closeMenu} to="/gallery">Gallery</NavLink>
                    <NavBtnLink onClick={closeMenu} target="_blank" to="https://book-directonline.com/properties/secretcornerDirect">
                        Make a Reservation
                    </NavBtnLink>
                </MobileMenu>
            )}
        </>
    );
};

export default Navbar;
