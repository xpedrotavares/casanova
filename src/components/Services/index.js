import React, { useState, useEffect } from 'react'

import hatIcon from "../../images/hat-icon.svg";
import coneIcon from "../../images/cone-icon.svg";
import tapIcon from "../../images/tape-icon.svg";
import penIcon from "../../images/pen-icon.svg";

import Button from '@material-ui/core/Button'

import ReactReadMoreReadLess from "react-read-more-read-less";

import {
  
    ServicesContainer,
    ServiceItem,
    ServicesTitle,
    ServiceParagraph,
  
  } from "./ServicesElements";
  
  
  const Services = () => {
    const [overflow, setOverflow] = useState(true);
    const [display, setDisplay] = useState(true);
    const handleClick = () =>{
   setOverflow(false);
   setDisplay(false);

      
  }

let servicesText = {

  phase1:"In the initial phase we will reach out to better understand your vision and expectations. When we come out to assess your project we will take measurements to provide you with a free estimate and a 3D rendering of what the results will look like.",
  phase2: "In this phase you’ll receive the estimate alongside an initial 3D rendering based on your vision - this way you can visualize what your project will look like when finished.",
  phase3: "This is the bureaucratic phase. In this phase we’ll agree and sign contractual terms and provide you with a selection sheet of all materials that have been previously discussed. We will also make any changes to the design where needed and provide a rough project schedule. Here we go over the nitty gritty",
  phase4: "In this phase the magic happens! Together with our team we will bring your project to life/make your remodeling wishes come to life/come true, always maintaining an open line of communication and regular updates throughout the process.",
}


  
 

    return (
      
               <ServicesContainer container>
          <ServiceItem item md={6} xl={3} >
            <img src={tapIcon} width="80" alt="Tape in orange" />

            <ServicesTitle>Phase 1</ServicesTitle>
            <ServiceParagraph>
        <ReactReadMoreReadLess
            charLimit={90}
            readMoreText={"Read more"}
            readLessText={"Read less"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
        >
          {servicesText.phase1}
        </ReactReadMoreReadLess>
            </ServiceParagraph>
          </ServiceItem>

          <ServiceItem item md={6} xl={3}>
            <img src={penIcon} width="80" alt="Pen in orange" />

            <ServicesTitle>Phase 2</ServicesTitle>
            <ServiceParagraph>
            <ReactReadMoreReadLess
            charLimit={84}
            readMoreText={"Read more"}
            readLessText={"Read less"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
        >
          {servicesText.phase2}
        </ReactReadMoreReadLess>
            </ServiceParagraph>
          </ServiceItem>

          <ServiceItem item md={6} xl={3} >
            <img src={coneIcon} width="80" alt="cone in orange" />

            <ServicesTitle>Phase 3</ServicesTitle>
            <ServiceParagraph>
            <ReactReadMoreReadLess
            charLimit={83}
            readMoreText={"Read more"}
            readLessText={"Read less"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
        >
          {servicesText.phase3}
        </ReactReadMoreReadLess>
            </ServiceParagraph>
          </ServiceItem>

          <ServiceItem item md={6} xl={3} >
            <img src={hatIcon} width="80" alt="Construction hat in orange" />

            <ServicesTitle>Phase 4</ServicesTitle>
            <ServiceParagraph>
            <ReactReadMoreReadLess
            charLimit={83}
            readMoreText={"Read more"}
            readLessText={"Read less"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
        >
          {servicesText.phase4}
        </ReactReadMoreReadLess>
            </ServiceParagraph>
          </ServiceItem>

        </ServicesContainer>
        
    )
}

export default Services;
