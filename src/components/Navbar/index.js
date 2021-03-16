import React from "react";

import { Nav, NavMenu, NavItem, NavLinks, MobileBurguerMenuIcon } from "./NavbarElements";

import BurguerMenuIcon from '../../images/burguer-menu-icon.png';

import LogoNavMobile from '../../images/logo-casanova.png'

const Navbar = ( { toggle } ) => {
  return (
    <>
      <Nav>
        <img className="logo-nav-mobile" src={LogoNavMobile} />
        <MobileBurguerMenuIcon onClick={toggle}>
     
          <img src={BurguerMenuIcon} />
        </MobileBurguerMenuIcon>
        <NavMenu>
          <NavItem>
            <NavLinks smooth={true} duration={600} spy={true} exact="true" to='home'>Home.</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks smooth={true} duration={600} spy={true} exact="true" to='about'>About us.</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks smooth={true} duration={600} spy={true} exact="true" to='portfolio'>Portfolio.</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks smooth={true} duration={600} spy={true} exact="true"to='contact' >Contact.</NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
