import React from "react";

import { Link } from "react-scroll";

import backtotopMobile from "../../images/backtotop-icon-mobile.png";
import backtotopDesktop from "../../images/backtotop-icon-desktop.png";
import casaNovaLogo from "../../images/logo-casanova.png";

import { FooterContainer } from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="logo-casanova-container">
        <div className="certificate-container">
          <img
            className="logo-casanova"
            src={casaNovaLogo}
            widht="20"
            alt="casanova logo"
          />

          <p className="certificate-text">Licensed & insured.</p>
        </div>
      </div>
      <div className="info-dev">
        <p>
          @ 2021 CasaNova Design & Build. All rights reserved. Designed by{" "}
          <a
            href="http://www.isadoraramos.com"
            rel="noreferrer"
            target="_blank"
          >
            Isadora Ramos
          </a>{" "}
          and developed by{" "}
          <a
            href="https://www.linkedin.com/in/xpedrotavares/"
            rel="noreferrer"
            target="_blank"
          >
            Pedro Tavares
          </a>
          .
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
