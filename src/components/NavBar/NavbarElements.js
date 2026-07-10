import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #ffffff; /* White background */
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem; /* Increased padding for spacing */
    z-index: 12;
    position: sticky;
    top: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Shadow for depth */
`;

export const NavLink = styled(Link)`
    font-size: 1rem;
    color: #333333; /* Dark gray text color */
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative; /* needed for the underline */

    /* Default state: no underline */
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px; /* thickness of the underline */
        background-color: #c49b63; /* your highlight color */
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%; /* expand underline on hover */
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #333333; /* Dark gray color for bars icon */
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    font-size: 0.9rem;
    border-radius: 999px;
    background: #8c6239;
    padding: 0 24px;
    color: #fffaf2;
    outline: none;
    border: 1px solid #8c6239;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
    text-decoration: none;
    font-weight: 700;
    text-align: center;
    margin-left: 24px;
    &:hover {
        background: #6f4b2a;
        transform: translateY(-1px);
    }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  position: fixed;   /* keep anchored under navbar */
  top: 85px;         /* match navbar height */
  left: 0;
  width: 100%;
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  z-index: 999;

  a {
    padding: 0.75rem 1.5rem;
    color: #333;
    text-decoration: none;
    font-size: 1rem;
    &:hover {
      background: #f4f4f4;
    }
  }

  /* Reservation button styling inside dropdown */
  .mobile-reserve {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    margin: 1rem 1.5rem 0;
    padding: 0 24px;
    border: 1px solid #8c6239;
    border-radius: 999px;
    background: #8c6239;
    color: #fffaf2;
    font-size: 1rem;
    text-align: center;
    width: auto;
    text-decoration: none;
    font-weight: 700;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .mobile-reserve:hover {
    background: #6f4b2a;
  }
`;
