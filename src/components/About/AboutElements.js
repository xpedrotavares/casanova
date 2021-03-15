import styled from "styled-components";

export const AboutContainer = styled.div`
    width:100%;
    height:145vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    text-align:center;

`
// AboutContainer, MainTitle, MainSubtitle, MainParagraph, ServicesContainer, ServiceSection, ServicesTitle, ServiceParagraph

export const MainTitle = styled.h1`
/* About us */



font-family: 'Poppins';
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 72px;
/* or 240% */
text-align: center;
letter-spacing: -0.015em;
margin-bottom: 20px;
color: #223240;



`

export const MainSubtitle = styled.h3`

font-family: 'Roboto';
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 25px;
/* identical to box height, or 156% */
text-align: center;
letter-spacing: -0.015em;
margin-top:0;
margin-bottom:-8px;
color: #223240;


`

export const MainParagraph = styled.p`
width:320px;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 24px;
/* or 171% */
text-align: center;
letter-spacing: -0.015em;

color: #727272;



`

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 220px;
    height:610px; 
    justify-content: space-between;
    margin-top: 50px;


`

export const ServiceSection = styled.section`
`

export const ServicesTitle = styled.h1`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 17px;
text-align: center;
letter-spacing: -0.015em;

color: #223240;
margin-top:13px;
margin-bottom: 12px;


`

export const ServiceParagraph = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 24px;
/* or 171% */
text-align: center;
letter-spacing: -0.015em;
color: #828282;

margin-top:0px;

`