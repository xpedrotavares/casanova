import styled from "styled-components";

import Slider from "react-slick";

export const CarouselContainer = styled(Slider)`
   width: 60vw;
  
  margin-top:80px; 
  height: 40vh;
  .slick-prev {
    width: 11.47px;
    height: 20.68px;
  }
  .slick-next {
    width: 11.47px;
    height: 20.68px;
  }
  .slick-slide {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 10px;
  }

  @media screen and (max-width: 768px) {
    width: 75vw;
    margin-top:0;  
    

}
`

export const ImageContainer = styled.div`
  /* margin: 0 !important; */
  /* width: 62vw;  */
`;

export const SlideImage = styled.img`
    width: 29vw;
    height: 40vh;
    object-fit: cover; 
    /* margin-left: 40px!important; */


  @media screen and (max-width: 768px) {
    width: 74.999vw;
  }
`
