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
.slick-slide img {
  box-shadow: 9px 6px 13px -2px rgba(0,0,0,0.32);
-webkit-box-shadow: 9px 6px 13px -2px rgba(0,0,0,0.32);
-moz-box-shadow: 9px 6px 13px -2px rgba(0,0,0,0.32);

}

  @media screen and (max-width: 768px) {
    width: 75vw;
    margin-top:0;  
}
`

export const ImageContainer = styled.div`



`;

export const SlideImage = styled.img`
    width: 29vw;
    height: 40vh;
    object-fit: cover; 
   
   

  @media screen and (max-width: 1200px) {
    width: 74.999vw;
  }
`;