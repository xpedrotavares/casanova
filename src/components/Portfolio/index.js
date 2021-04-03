import React, { useState, useEffect } from "react";

import { MainTitle, MainSubtitle, MainParagraph } from "../About/AboutElements";

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
