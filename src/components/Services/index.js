import React from 'react'

import hatIcon from "../../images/hat-icon.png";
import coneIcon from "../../images/cone-icon.png";
import tapIcon from "../../images/tap-icon.png";
import hammerIcon from "../../images/hammer-icon.png";

import {
  
    ServicesContainer,
    ServiceItem,
    ServicesTitle,
    ServiceParagraph,
  
  } from "./ServicesElements";

const Services = ({ lg, xl }) => {
    return (
      
               <ServicesContainer container>
          <ServiceItem item md={6} xl={3} >
            <img src={tapIcon} width="65.998" />

            <ServicesTitle>Full Project</ServicesTitle>
            <ServiceParagraph>
              In the initial phase we will reach out to better understand your
              vision and expectations. When we come out to assess your project
              we will take measurements to provide you with a free estimate and
              a 3D rendering of what the results will look like.
            </ServiceParagraph>
          </ServiceItem>

          <ServiceItem item md={6} xl={3}>
            <img src={tapIcon} width="65.998"  />

            <ServicesTitle>Remodeling</ServicesTitle>
            <ServiceParagraph>
              In this phase you’ll receive the estimate alongside an initial 3D
              rendering based on your vision - this way you can visualize what
              your project will look like when finished.
            </ServiceParagraph>
          </ServiceItem>

          <ServiceItem item md={6} xl={3} >
            <img src={tapIcon} width="65.998" />

            <ServicesTitle>Design</ServicesTitle>
            <ServiceParagraph>
              This is the bureaucratic phase. In this phase we’ll agree and sign
              contractual terms and provide you with a selection sheet of all
              materials that have been previously discussed. We will also make
              any changes to the design where needed and provide a rough project
              schedule. Here we go over the nitty gritty
            </ServiceParagraph>
          </ServiceItem>

          <ServiceItem item md={6} xl={3} >
            <img src={tapIcon} width="65.998" />

            <ServicesTitle>Another</ServicesTitle>
            <ServiceParagraph>
              In this phase the magic happens! Together with our team we will
              bring your project to life/make your remodeling wishes come to
              life/come true, always maintaining an open line of communication
              and regular updates throughout the process.
            </ServiceParagraph>
          </ServiceItem>

        </ServicesContainer>
        
    )
}

export default Services
