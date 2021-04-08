import styled from "styled-components";

import Grid from "@material-ui/core/Grid";


export const AboutContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: static;
  margin-top: 200px;
  .display-off{
  display:none;
}
.overflow-on{
overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 3; /* number of lines to show */
   line-height: 1.5em;        /* fallback */
   max-height: 1.5*3;       /* fallback */

}
  button{
    width:88px;
  height:20px;
  color: #223240;
  /* background-color: #223140; */
  font-size:11px;
  font-weight:500;
  text-transform: none;
  border-radius:15px;
  /* border-color: #223240; */
  border:0.2px solid #223240; 
  
  //F3A98D #223240 #000000 #223140
}
  @media screen and (max-width: 1200px) {
    height: fit-content;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 70px;
  }
`;

export const MainTitle = styled.h1`
  position: static;
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 60px;
  color: #223240;

  @media screen and (max-width: 768px) {
    font-family: "Poppins";
    font-size: 30px;
    line-height: 72px;
    text-align: center;
    letter-spacing: -0.015em;
    margin-bottom: 20px;
  }
`;

export const MainSubtitle = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  letter-spacing: -0.015em;
  color: #223240;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.015em;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const MainParagraph = styled.p`
  width: 770px;
  /* line-height: 1.5em; */
  /* height: 195px;  */
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #727272;

  br {
    display: none;
  }

  .read-more-less--more,
.read-more-less--less {
  color: #ec8f6a;
}

  @media screen and (max-width: 768px) {
    width: 313px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.015em;
    -webkit-line-clamp: 4;
  
    br {
      display: inherit;
    }
    color: #727272;
  }
  @media screen and (max-width: 320px) {
    width: 280px;
  }
`;

export const ServiceSection = styled(Grid)`
  border: 5px solid green;
  max-width: 23% !important;
  height: fit-content;
`;

export const SvgDesktop = styled.svg`
  visibility: visible;
  @media screen and (max-width: 768px) {
    visibility: hidden;
    display: none;
  }
`;

export const SvgMobile = styled.svg`
  visibility: hidden;
  
  @media screen and (max-width: 768px) {
    visibility: visible;
  }
`;

export const ServicesTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: -0.015em;
  color: #223240;
  margin-bottom: 0px;

  @media screen and (max-width: 768px) {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    text-align: center;
    letter-spacing: -0.015em;
    color: #223240;
    margin-top: 13px;
    margin-bottom: 12px;
  }
`;

export const ServiceParagraph = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.015em;
  color: #828282;

  @media screen and (max-width: 768px) {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.015em;
    color: #828282;
    margin-top: 0px;
  }
`;