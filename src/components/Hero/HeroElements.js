import styled from "styled-components";

import HeroBg from "../../images/hero-image.jpg";

import Button from "@material-ui/core/Button";

export const HeroContainer = styled.div`
  background-image: url(${HeroBg});
  background-size: cover;
  width: 100%;
  height: 100vh;

  background-repeat: no-repeat;
    img{
        position: absolute;
        width:232.17px;
        top:70px;
    }

  /* object-fit:contain; */
  /* background-position-y:50px; */
  @media screen and (max-width: 768px) {
    margin-top: 7.5vh;
    height: 92.5vh;
    img{
        display:none;
    }
   
    .location{
        display:none;
    }
  }
  .location{
      /* Fairfax, VA */


position: absolute;
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 27px;
/* identical to box height */
left:2vw;
bottom: 100px;
letter-spacing: 0.03em;

color: #FFFFFF;

transform: rotate(-90deg);

span{
    font-weight: 800;
}

  }

`;

export const HeroBgMask = styled.div`
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

export const HeroSloganContainer = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 1.13rem;

  /* or 615% */
  text-align: center;
  letter-spacing: 0.08em;

  color: #ec8f6a;

  @media screen and (max-width: 768px) {
    margin-top: 45px;
    font-weight: 200;
    font-size: 13px;
  }
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

export const HeroArticle = styled.article``;

export const HeroTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 4.6rem;
  letter-spacing: -0.015em;
  line-height: 68px;
  margin-top: 0px;
  margin-bottom: 0px;
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
font-size:21px;
  width: 309px;
  height:52px;
  text-transform: none;

@media screen and (max-width:768px){
    font-size:14px;
    width: 220px;
    height:36px;
}

@media screen and (max-width: 320px) {
    font-size: 13px;
    width: 210px;
    height:36px;
  }
`;

export const SocialMediaContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    width: 136px;
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
`;

export const HeroLocation = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: inherit;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 12px;
    letter-spacing: -0.015em;
    margin-top: 57px;
    margin-bottom:70px;
    color: #ffffff;
    span {
      font-weight: 400;
    }
  }

  @media screen and (max-width: 320px) {
    display: inherit;
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
    position:absolute;
  margin-top: 30px;
  bottom: 60px;

  @media screen and (max-width:768px){
      position:none;
    
  }
`;
