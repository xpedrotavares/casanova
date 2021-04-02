import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import hatIcon from "../../images/hat-icon.png";
import coneIcon from "../../images/cone-icon.png";
import tapIcon from "../../images/tap-icon.png";
import hammerIcon from "../../images/hammer-icon.png";

import {
  AboutContainer,
  MainTitle,
  MainSubtitle,
  MainParagraph,
  ServicesContainer,
  ServiceSection,
  ServicesTitle,
  ServiceParagraph,
  SvgMobile,
  SvgDesktop,
} from "./AboutElements";
import Services from "../Services";

const About = ({ lg, xl }) => {
  return (
    <AboutContainer id="about">
      <MainTitle>About us</MainTitle>
      <MainSubtitle>Get to know us a bit better!</MainSubtitle>
      <MainParagraph>
        We are two siblings who decided to unite both our passion for design and
        our skillset in construction to help you with your remodeling wishes.
        When we’re not working with our clients on their homes you can find us
        enjoying the outdoors or checking out a new restaurant! Throughout our
        years working in construction, we noticed how stressful and taxing
        remodeling can be for clients – so we decided to open CasaNova!
        Successfully serving the DMV area for several years, we thrive for our
        clients to have a smooth and stress-free experience during our time
        together. Together with our kind and experienced team, we take on all
        forms and sizes of projects - from kitchen and bathrooms, fireplaces,
        and decks, to full additions and roofing. We work with our clientele to
        design, create and produce work that we’re proud of - with trust,
        commitment, and exceptional workmanship.
        <br />
        <br />
      </MainParagraph>
      <Services />
    </AboutContainer>
  );
};

export default About;
