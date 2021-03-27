import React from "react";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


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
        We are two siblings who decided to unite both our passion for design and our skillset in construction to help you with your remodeling wishes. When we’re not working with our clients on their homes you can find us enjoying the outdoors or checking out a new restaurant! Throughout our years working in construction, we noticed how stressful and taxing remodeling can be for clients – so we decided to open CasaNova! Successfully serving the DMV area for several years, we thrive for our clients to have a smooth and stress-free experience during our time together. Together with our kind and experienced team, we take on all forms and sizes of projects - from kitchen and bathrooms, fireplaces, and decks, to full additions and roofing. We work with our clientele to design, create and produce work that we’re proud of - with trust, commitment, and exceptional workmanship.
          <br />
          <br />
        </MainParagraph>
        <Services />

        {/* <ServicesContainer container>
          <ServiceSection item lg={6} xl={3} >
            <img src={tapIcon} width="65.998" />

            <ServicesTitle>Full Project</ServicesTitle>
            <ServiceParagraph>
              In the initial phase we will reach out to better understand your
              vision and expectations. When we come out to assess your project
              we will take measurements to provide you with a free estimate and
              a 3D rendering of what the results will look like.
            </ServiceParagraph>
          </ServiceSection>

          <ServiceSection item lg={6} xl={3}>
            <img src={tapIcon} width="65.998"  />

            <ServicesTitle>Remodeling</ServicesTitle>
            <ServiceParagraph>
              In this phase you’ll receive the estimate alongside an initial 3D
              rendering based on your vision - this way you can visualize what
              your project will look like when finished.
            </ServiceParagraph>
          </ServiceSection>

          <ServiceSection item lg={6} xl={3} >
            <img src={tapIcon} width="65.998" />

            <ServicesTitle>Design</ServicesTitle>
            <ServiceParagraph>
              This is the bureaucratic phase. In this phase we’ll agree and sign
              contractual terms and provide you with a selection sheet of all
              materials that have been previously discussed. We will also make
              any changes to the design where needed and provide a rough project
              schedule. Here we go over the nitty gritty
            </ServiceParagraph>
          </ServiceSection>

          <ServiceSection item lg={6} xl={3} >
            <img src={tapIcon} width="65.998" />

            <ServicesTitle>Another</ServicesTitle>
            <ServiceParagraph>
              In this phase the magic happens! Together with our team we will
              bring your project to life/make your remodeling wishes come to
              life/come true, always maintaining an open line of communication
              and regular updates throughout the process.
            </ServiceParagraph>
          </ServiceSection>

        </ServicesContainer> */}

      </AboutContainer>
   
  );
};

export default About;
