import React, {useState, useEffect} from "react";

import {
  MainTitle,
  MainSubtitle,
  MainParagraph,
 
} from "../About/AboutElements";

import { PortfolioContainer,  TestimonialsContainer, TestimonialsTitleSection, TestimonialsTitle, TestimonialsLine, TestimonialsStarSection, StarImage, ClientTestimonialTextContainer, CarouselSection } from "./PortfolioElements";

import Carousel from "../Carousel";

import Star from '../../images/star.png'
import Test from "../test/Test";


const Portfolio = () => {
const testimonialsQuotes =[
    { 
      client: <p className='transition'>Pedro</p>, // em cada um desses colocar uma classe, comeca com tudo 100 e vai
      quote: <p>We were beyond thrilled to see our vision come true! CasaNova was a delight to work with, through and through. From the initial contact with Jess and Chris, to seeing everything come together! They promised timely delivery, open communication, and amazing results, which is exactly what we got; all while answering all our million questions. Would definitely recommend CasaNova to anyone considering remodeling their kitchen or bathroom!</p>
    },
    {
      client: <p>Isadora</p>,
      quote: <p>'oiasjdoisajdsoidj'</p>
    },
    {
      client: <p>Valentina</p>,
      quote: <p>'oiasjdoisajdsoidj'</p>
    },
   
  ]
  // console.log(testimonialsQuotes[0].client)

const [currentQuote, setCurrentQuote] = useState(testimonialsQuotes[0])

const [active, setActive] = useState(0);

useEffect(() => {
  const timerId = setInterval(
    () => setActive((i) => (i + 1) % testimonialsQuotes.length), 
  6000
  );
  return () => clearInterval(timerId);
  
}, []);

useEffect(() => {
  setCurrentQuote(testimonialsQuotes[active])
}, [active])


  return (
    <PortfolioContainer id='portfolio'>
      <MainTitle>Portfolio</MainTitle>
      <MainSubtitle>Projects we’re proud to have been a part of!</MainSubtitle>
      <MainParagraph>
      Through open communication and exceptional craftsmanship watch your remodeling dreams come to life! 
Our knowledgeable and friendly team strives not only to exceed your expectations but also to help turn your house into a home. 
      </MainParagraph>
      <CarouselSection>
          <Carousel />
      </CarouselSection>
        <TestimonialsContainer>
          <TestimonialsTitleSection>

          <TestimonialsLine></TestimonialsLine>
          <TestimonialsTitle>
            Testimonials
          </TestimonialsTitle>
          </TestimonialsTitleSection>
          <TestimonialsStarSection>
            <StarImage src={Star}></StarImage>
            <StarImage src={Star}></StarImage>
            <StarImage src={Star}></StarImage>
            <StarImage src={Star}></StarImage>
          </TestimonialsStarSection>
          <ClientTestimonialTextContainer>
     <Test />
          
          </ClientTestimonialTextContainer>
        </TestimonialsContainer>    
  
    </PortfolioContainer>
  );
};

export default Portfolio;
