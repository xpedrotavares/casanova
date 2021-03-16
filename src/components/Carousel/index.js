import React, { useState, useEffect } from 'react'
import './style.css'


import Slider from "react-slick";
import {CarouselContainer, ImageContainer, SlideImage} from './CarouselElements'

import slide1 from '../../images/slide-1.jpg'
import slide2 from '../../images/slide-2.jpg'
import slide3 from '../../images/slide-3.jpg'
import slide4 from '../../images/slide-4.jpg'

import prevArrow from '../../images/prevArrow.png'
import nextArrow from '../../images/nextArrow.png'



function getWindowDimensions() {
  const { innerWidth: width } = window;
  if(width > 768){
    return 2
  } else {
    return 1
  }
};



const Carousel = () => {


  

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: getWindowDimensions(),
        slidesToScroll: 1,
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
