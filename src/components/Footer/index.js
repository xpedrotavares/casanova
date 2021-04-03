import React from "react";

import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

import { FooterContainer } from "./FooterElements";

import backtotopMobile from "../../images/backtotop-icon-mobile.png";
import backtotopDesktop from "../../images/backtotop-icon-desktop.png";
import casaNovaLogo from "../../images/logo-casanova.png";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="logo-casanova-container">
        <img className="logo-casanova" src={casaNovaLogo} />
      </div>
      <div>
        <p>
          @ 2021 CasaNova Design & Build. All rights reserved. Site designed and
          developed by Contra Fluxo
        </p>
      </div>
      <Link
        className="back-to-top-container"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
      >
        <img
          className="back-to-top-desktop"
          src={backtotopDesktop}
          alt="back to top icon"
        />
        <img
          className="back-to-top-mobile"
          src={backtotopMobile}
          alt="back to top icon"
        />
      </Link>
    </FooterContainer>
  );
};

export default Footer;
