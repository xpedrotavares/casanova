import React from "react";

import {
  MainTitle,
  MainSubtitle,
  MainParagraph,
 
} from "../About/AboutElements";
import { PortfolioContainer,  TestimonialsContainer } from "./PortfolioElements";
const Portfolio = () => {
  return (
    <PortfolioContainer>
      <MainTitle>Portfolio</MainTitle>
      <MainSubtitle>LLorem ipsum dolor Lormsns</MainSubtitle>
      <MainParagraph>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem
        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
        magni dolores eos qui ratione ptatem.
      </MainParagraph>
      <div>

      </div>
        <TestimonialsContainer>
 
        </TestimonialsContainer>    
  
    </PortfolioContainer>
  );
};

export default Portfolio;
