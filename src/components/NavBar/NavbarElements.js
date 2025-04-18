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
    --b: 0.05em;   /* the thickness of the line */
    --c:rgb(6, 24, 64); /* the color */

    color: #0000;
    padding-block: var(--b);
    background: 
        linear-gradient(var(--c) 50%,#000 0) 0% calc(100% - var(--_p,0%))/100% 200%,
        linear-gradient(var(--c) 0 0) 0% var(--_p,0%)/var(--_p,0%) var(--b) no-repeat;
    -webkit-background-clip: text,padding-box;
            background-clip: text,padding-box;
    transition: .3s var(--_s,0s) linear,background-size .3s calc(.3s - var(--_s,0s));
    &:hover {
        --_p: 100%;
        --_s: .3s;
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
    font-size: 0.9rem;
    border-radius: 4px;
    background: #333333; /* Dark gray background */
    padding: 10px 22px;
    color: #ffffff; /* White text color */
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        background: #555555; /* Darker gray background on hover */
    }
`;