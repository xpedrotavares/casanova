import React, { useState } from "react";

import { Nav, NavMenu, NavItem, NavLinks, MobileBurguerMenuIcon } from "./NavbarElements";

import { useLocation } from 'react-router-dom'

import BurguerMenuIcon from '../../images/burguer-menu-icon.png';

import LogoNavMobile from '../../images/logo-casanova.png'
import { findAllByDisplayValue } from "@testing-library/dom";

console.log(document.body.querySelector("#home"))
let browserHeightA;
function setBrowserHeight() {
  return window.innerHeight;



}
setBrowserHeight();
console.log(setBrowserHeight());
const Navbar = ( { toggle } ) => {
  const [nav, setNav] = useState(false);
  const changeTextColor = () => {
      if(window.scrollY >= 800 &&  window.scrollY < 3050 && window.innerHeight > 700){
          setNav(true);
      } else {
        setNav(false);
      }
      
  }
  // console.log("Aqui" + browserHeight)
  
  window.addEventListener('scroll', changeTextColor)
  return (
    <>
      <Nav>
        <img className="logo-nav-mobile" src={LogoNavMobile} />
        <MobileBurguerMenuIcon onClick={toggle}>
     
          <img src={BurguerMenuIcon} />
        </MobileBurguerMenuIcon>
        <NavMenu>
          <NavItem>
            <NavLinks className={nav ? 'text-color text-color-navlink' : 'text-color'} smooth={true} duration={600} spy={true} exact="true" to='home'>Home.</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks className={nav ? 'text-color text-color-navlink' : 'text-color'} smooth={true} duration={600} spy={true} exact="true" to='about'>About us.</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks className={nav ? 'text-color text-color-navlink' : 'text-color'} smooth={true} duration={600} spy={true} exact="true" to='portfolio'>Portfolio.</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks className={nav ? 'text-color text-color-navlink' : 'text-color'} smooth={true} duration={600} spy={true} exact="true"to='contact' >Contact.</NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
