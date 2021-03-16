import styled from "styled-components";

import Slider from "react-slick";

export const CarouselContainer = styled(Slider)`
  width: 60vw;
  margin-top:80px; 
  .slick-prev {
    width: 11.47px;
    height: 20.68px;
  }
  .slick-next {
    width: 11.47px;
    height: 20.68px;
  }

  @media screen and (max-width: 768px) {
    width: 75vw;
    margin-top:0; 


}
`;

export const ImageContainer = styled.div`
  margin: 0 !important;
  /* width: 62vw;  */
`;

export const SlideImage = styled.img`
  width: 30vw;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 74.999vw;
  }
`;
