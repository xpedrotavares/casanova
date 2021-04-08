import React from "react";

import { MainTitle, MainSubtitle, MainParagraph } from "../About/AboutElements";
import patternLetfBottom from "../../images/pattern-left-bottom.svg"
import patternLetfTop from "../../images/pattern-left-top.svg"
import patternRight from "../../images/pattern-right.svg"

import {
  PortfolioContainer,
  TestimonialsContainer,
  TestimonialsTitleSection,
  TestimonialsTitle,
  TestimonialsLine,
  ClientTestimonialTextContainer,
  CarouselSection,
} from "./PortfolioElements";

import Carousel from "../Carousel";

import Test from "../test/Test";

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <img id="pattern-left-top" src={patternLetfTop} />
      <img id="pattern-left-bottom" src={patternLetfBottom} />
      <img id="pattern-right" src={patternRight} />
      <MainTitle>Portfolio</MainTitle>
      <MainSubtitle>Projects we’re proud to have been a part of!</MainSubtitle>
      <MainParagraph>
        Through open communication and exceptional craftsmanship watch your
        remodeling dreams come to life! Our knowledgeable and friendly team
        strives not only to exceed your expectations but also to help turn your
        house into a home.
      </MainParagraph>
      <CarouselSection>
        <Carousel />
      </CarouselSection>
      <TestimonialsContainer>
        <TestimonialsTitleSection>
          <TestimonialsLine></TestimonialsLine>
          <TestimonialsTitle>Testimonials</TestimonialsTitle>
        </TestimonialsTitleSection>

        <ClientTestimonialTextContainer>
          <Test />
        </ClientTestimonialTextContainer>
      </TestimonialsContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
