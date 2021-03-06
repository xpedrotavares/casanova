import styled from "styled-components";

import HeroBg from "../../images/hero-image.jpg";

import Button from "@material-ui/core/Button";

export const HeroContainer = styled.div`
  background-image: url(${HeroBg});
  background-size: cover;
  width: 100%;
  height: fit-content;
  background-repeat: no-repeat;
  min-height: 525px!important;
  .MuiButton-contained{
    box-shadow: 9px 6px 13px -2px rgba(24,43,61,0.86);
-webkit-box-shadow: 9px 6px 13px -2px rgba(24,43,61,0.86);
-moz-box-shadow: 9px 6px 13px -2px rgba(24,43,61,0.86);
  }
  .certificate-text{
    color: white;
    width:fit-content;
    font-size: 15px;
    font-weight:500;
    margin:20px 0 3px 5px;
}
.homeadvisor-icon{
  margin-top: -2px;
 
}
  @media screen and (max-width: 1200px) {
    margin-top: 7.5vh;
    height: 92.5vh;
    img {
      display: none;
    }
  }
`;

export const HeroBgMask = styled.div`
  min-height: 525px!important;
  width: 100%;
  height: 100%;
  background: rgba(34, 50, 64, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    justify-content: top;
  }
`;

export const HeroLogoContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  height:30vh;
  img {
    position: relative;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 232.17px;
  }
  @media screen and (max-width:1200px){
    display:none;
  }
`

export const HeroSloganContainer = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 1.13rem;
  text-align: center;
  letter-spacing: 0.08em;
  color: #ec8f6a;
  position: relative;

  @media screen and (max-width: 768px) {
    margin-top: 45px;
    font-weight: 200;
    font-size: 13px;
  }
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

export const HeroArticle = styled.article`
min-height: 525px!important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  position: relative;

  @media screen and (max-width:1200px){
    height:90vh;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 4.6rem;
  letter-spacing: -0.015em;
  line-height: 68px;
  margin-top: 0px;
  margin-bottom: 15px;
  color: #ffffff;
  span {
    font-weight: 800;
  }

  @media screen and (max-width: 768px) {
    font-size: 35px;
    line-height: 38px;
  }

  @media screen and (max-width: 320px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

export const HeroSubtitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 37px;
  color: #ffffff;
  width: 588px;

  @media screen and (max-width: 320px) {
    font-size: 13px;
    font-weight: normal;
    width: 304px;

    line-height: 21px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: normal;
    width: 304px;
    line-height: 21px;
  }
`;

export const CalltoActionButton = styled(Button)`
  font-family: "Poppins";
  font-size: 21px;
  width: 309px;
  height: 52px;
  text-transform: none;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 220px;
    height: 36px;
  }

  @media screen and (max-width: 320px) {
    font-size: 13px;
    width: 210px;
    height: 36px;
  }
`;

export const SocialMediaContainer = styled.div`
  display: none;
 
  @media screen and (max-width: 1200px) {
    width: 75px;
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    .houzz-icon{
      display:none;
    }
  }
`;

export const HeroLocationMobile = styled.div`
   @media screen and (min-width:1200px){
     display:none;
   }
@media screen and (max-width:1200px){
  display: relative;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 12px;
    letter-spacing: -0.015em;
    margin-top:8%;
  
    color: #ffffff;
    span {
      font-weight: 400;
}
}

  @media screen and (max-width: 320px) {
    display: relative;
    margin-top: 35px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 12px;
    letter-spacing: -0.015em;
    color: #ffffff;

    span {
      font-weight: 400;
    }
  }
`;

export const HeroArrow = styled.div`
display:flex;
justify-content:center;
align-items:flex-end;
  position: relative;
height:30%;

@media screen and (max-width:1200px){
  height:15%;
}
  @media screen and (max-width: 800px) {
    top: 0;
  }
`;


export const HeroLocationDesktop = styled.div`
right:45%;
 position: relative;
 font-family: "Poppins";
 font-style: normal;
 font-weight: 300;
 font-size: 18px;
 line-height: 27px;
 bottom: 100px;
 letter-spacing: 0.03em;
 color: #ffffff;
 transform: rotate(-90deg);

 span {
   font-weight: 800;
}
@media screen and (max-width:1200px){
  display:none;
}
`;

