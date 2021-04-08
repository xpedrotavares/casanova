import React, { useState } from "react";
import Button from '@material-ui/core/Button'
import {
  AboutContainer,
  MainTitle,
  MainSubtitle,
  MainParagraph,
} from "./AboutElements";
import Services from "../Services";

const About = () => {
  const [overflow, setOverflow] = useState(true);
  const [display, setDisplay] = useState(true);
  const handleClick = () =>{
 setOverflow(false);
 setDisplay(false);

    
}

  return (
    <AboutContainer id="about">
      <MainTitle>About us</MainTitle>
      <MainSubtitle>Get to know us a bit better!</MainSubtitle>
      <MainParagraph className={overflow ? "overflow-on" : ""}>
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
      <Button onClick={handleClick} className={display ? "" : "display-off"}>Read more</Button>
      <Services />
    </AboutContainer>
  );
};

export default About;