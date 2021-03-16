import React from "react";

import {
  MainTitle,
  MainSubtitle,
  MainParagraph,
 
} from "../About/AboutElements";

import { PortfolioContainer,  TestimonialsContainer, TestimonialsTitleSection, TestimonialsTitle, TestimonialsLine, TestimonialsStarSection, StarImage, ClientTestimonialTextContainer, CarouselSection } from "./PortfolioElements";

import Carousel from "../Carousel";

import Star from '../../images/star.png'


const Portfolio = () => {
  return (
    <PortfolioContainer>
      <MainTitle>Portfolio</MainTitle>
      <MainSubtitle>Lorem ipsum dolor</MainSubtitle>
      <MainParagraph>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem
        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
        magni dolores eos qui ratione ptatem.
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
          <p>Nemo enim ipsam voluptatem quia voluptas sit asernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi Neque porro quisquam est. Nemo voluptatem sequ ipsam.
          </p>
          <p className="client-name"><span>Surname</span> Name</p>
          </ClientTestimonialTextContainer>
        </TestimonialsContainer>    
  
    </PortfolioContainer>
  );
};

export default Portfolio;
