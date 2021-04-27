import React from "react";
import {
  AboutContainer,
  MainTitle,
  MainSubtitle,
  MainParagraph,
} from "./AboutElements";
import Services from "../Services";

const About = () => {

  return (
    <AboutContainer id="about">
      <MainTitle>About us</MainTitle>
      <MainSubtitle>Get to know us a bit better!</MainSubtitle>
      <MainParagraph>
      <p>We are two siblings who decided to unite both our passion for design and our skillset in construction to help you improve your home and better fit your lifestyle. When we’re not working with our clients on their homes you can find us enjoying the outdoors or checking out a new restaurant! Throughout our years working in construction, we noticed how stressful and taxing remodeling can be for clients – so we decided to open CasaNova! Successfully serving the DMV area for several years, we thrive for our clients to have a smooth and stress-free experience during our time together. With our kind and experienced team, we take on all forms and sizes of projects - from kitchen and bathrooms, fireplaces, and decks, to full additions and roofing.</p>
      </MainParagraph>
      <Services />
    </AboutContainer>
  );
};

export default About;
