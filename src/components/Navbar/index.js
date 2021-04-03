import React, { useState } from "react";

import { Nav, NavMenu, NavItem, NavLinks, MobileBurguerMenuIcon, LogoContainer } from "./NavbarElements";

import BurguerMenuIcon from '../../images/burguer-menu-icon.png';

import LogoNavMobile from '../../images/logo-casanova.png'


const Navbar = ( { toggle } ) => {
  const [nav, setNav] = useState(false);
  const changeTextColor = () => {
      if(window.scrollY >= 800 &&  window.scrollY < 3200 && window.innerHeight > 700){
          setNav(true);
      } else {
        setNav(false);
      }
  }
  window.addEventListener('scroll', changeTextColor)

  return (
    <>
      <Nav>
        <LogoContainer>

        <img className="logo-nav-mobile" src={LogoNavMobile} />
        </LogoContainer>
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