import React from "react";

import { Nav, NavMenu, NavItem, NavLinks } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavItem>
            <NavLinks to='home'>Home.</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='about'>About us.</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='portfolio'>Portfolio.</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='contact' >Contact.</NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
