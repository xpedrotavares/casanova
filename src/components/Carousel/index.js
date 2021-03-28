import React, { useState, useEffect } from 'react'


import Slider from "react-slick";
import {CarouselContainer, ImageContainer, SlideImage} from './CarouselElements'

import slide1 from '../../images/slide-1.jpeg'
import slide2 from '../../images/slide-2.jpeg'
import slide3 from '../../images/slide-3.jpeg'
import slide4 from '../../images/slide-4.jpeg'
import slide5 from '../../images/slide-5.jpeg'
import slide6 from '../../images/slide-6.jpeg'
import slide7 from '../../images/slide-7.jpeg'
import slide8 from '../../images/slide-8.jpeg'
import slide9 from '../../images/slide-9.jpeg'
import slide10 from '../../images/slide-10.jpeg'

import prevArrow from '../../images/prevArrow.png'
import nextArrow from '../../images/nextArrow.png'



function getWindowDimensions() {
  const { innerWidth: width } = window;
  if(width > 1200){
    return 2
  } else {
    return 1
  }
};

// autoplay: true,
// autoplaySpeed: 4000,

const Carousel = () => {


  

    let settings = {
        dots: false,
       
        cssEase: 'linear',
        infinite: true,
        speed: 500,
        left: 9,
        slidesToShow: getWindowDimensions(),
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: '60px',
        prevArrow:<img class='a-left control-c prev slick-prev' alt="fazer" src={prevArrow} />,
        nextArrow:<img class='a-right control-c next slick-next' alt="fazer" src={nextArrow} />,
        // arrows:true,
    //   ease:true
      };
    
    return (
   

        <CarouselContainer className=" ae" {...settings}>
      <ImageContainer>
      <SlideImage className="iii" src={slide1} alt="fazer" />
      </ImageContainer>
      <ImageContainer>
      <SlideImage className="iii" src={slide2} alt="fazer" />
      </ImageContainer>
      <ImageContainer>
      <SlideImage className="iii" src={slide3} alt="fazer" />
      </ImageContainer>
      <ImageContainer>
      <SlideImage className="iii" src={slide4} alt="fazer" />
      </ImageContainer>
      
    </CarouselContainer>
    )
}

export default Carousel
