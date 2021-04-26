import styled from "styled-components";

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-top: 200px;
  margin-bottom: 100px !important;

  #pattern-left-bottom {
    position: absolute;
    left: 70px;
    bottom: -2450px;
  }
  #pattern-right {
    position: absolute;
    right: 70px;
    bottom: -1450px;
  }
  #pattern-left-top {
    position: absolute;
    left: 70px;
    bottom: -1220px;
  }
  @media screen and (max-width: 1900px) {
    #pattern-left-bottom {
      bottom: -2720px;
    }
    #pattern-right {
      bottom: -1750px;
    }
    #pattern-left-top {
      bottom: -1420px;
    }
  }
  @media screen and (max-width: 1200px) {
    #pattern-left-bottom {
      display: none;
    }
    #pattern-right {
      display: none;
    }
    #pattern-left-top {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin-top: 70px;
    margin-bottom: 70px !important;
  }
`;

export const CarouselSection = styled.div`
  margin-top: 25px;
`;

export const TestimonialsContainer = styled.div`
  width: 59.7vw;
  min-height: 397px;
  max-height: 398px;
  margin-top: 50px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 75.5vw;
    min-height: 290px;
    max-height: 290px;
    margin-top: 50px;
  }
  @media screen and (max-width: 375px) {
    min-height: 320px;
    max-height: 330px;
  }
  @media screen and (max-width: 320px) {
    min-height: 360px;
  }
`;

export const TestimonialsTitleSection = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const TestimonialsTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  text-align: right;
  letter-spacing: -0.015em;
  margin: 0;
  margin-bottom: -9px;
  margin-left: 10px;
  color: #ec8f6a;

  @media screen and (max-width: 768px) {
    font-size: 13px;
    letter-spacing: -0.015em;
    margin: 0;
    margin-bottom: -5px;
    margin-left: 4px;
  }
`;

export const TestimonialsLine = styled.div`
  width: 100%;
  border-top: 2px solid #ec8f6a;

  @media screen and (max-width: 768px) {
    border-top: 1px solid #ec8f6a;
  }
`;

export const TestimonialsStarSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const StarImage = styled.img`
  width: 2.5%;
  margin-left: 9px;

  @media screen and (max-width: 768px) {
    width: 5%;
  }
`;

export const ClientTestimonialTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    text-align: right;
    letter-spacing: -0.015em;
    width: 630px;
    color: #828282;
    margin-bottom: 0;
  }
  .costumer-quote {
  }

  .client-name {
    font-style: italic;
    margin-top: 9px;
  }
  span {
    font-weight: 500;
  }

  @media screen and (max-width: 1730px) and (min-width: 1200px) {
    p {
      width: 700px !important;
    }
  }

  @media screen and (max-width: 768px) {
    text-align: right;

    p {
      font-weight: 300;
      font-size: 13px;
      line-height: 17px;
      text-align: right;
      width: 315px;
      margin-bottom: 0;
    }
  }
`;
