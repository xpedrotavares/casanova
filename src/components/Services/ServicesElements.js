import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export const ServicesContainer = styled(Grid)`
  display: flex;
  height: 40%;
  max-width: 160%;
  justify-content: space-around;
  margin-top: 120px;
  .read-more-less--more,
  .read-more-less--less {
    color: #ec8f6a;
  }

  @media screen and (max-width: 500px) {
    margin-top: 50px;
    max-width: 60% !important;
  }

  @media screen and (max-width: 800px) {
    margin-top: 50px;
    max-width: 47% !important;
  }
  @media screen and (max-width: 1700px) {
    max-width: 55% !important;
  }
  @media screen and (max-width: 1800px) {
    max-width: 60% !important;
  }
  @media screen and (max-width: 1900px) {
    max-width: 45% !important;
  }

  @media screen and (max-width: 2000px) {
    max-width: 80%;
  }
`;

export const ServiceItem = styled(Grid)`
  text-align: left;
  padding: 0 40px;
  height: fit-content;
  margin-bottom: 30px !important;

  button {
    height: 20px;
    color: #223240;
    font-size: 11px;
    font-weight: 500;
    text-transform: none;
    border-radius: 15px;
    border: 0.2px solid #223240;
    margin-top: -20px;
  }

  @media screen and (max-width: 490px) {
    max-width: 100% !important;
  }

  @media screen and (max-width: 1900px) {
    padding: 0 40px;
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    padding: 0;
    text-align: center;
    img {
      width: 60px;
    }
  }
`;

export const ServicesTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
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
  line-height: 30px;
  letter-spacing: -0.015em;
  color: #828282;

  @media screen and (max-width: 768px) {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.015em;
    color: #828282;
    margin-top: 0px;
  }
`;
