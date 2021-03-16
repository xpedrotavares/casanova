import styled from "styled-components";

export const AboutContainer = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    text-align:center;

@media screen and (max-width:768px){

    width:100%;
    height:145vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    text-align:center;
}

`
// AboutContainer, MainTitle, MainSubtitle, MainParagraph, ServicesContainer, ServiceSection, ServicesTitle, ServiceParagraph

export const MainTitle = styled.h1`


font-family: 'Poppins';
font-style: normal;
font-weight: bold;
font-size: 44px;
text-align: center;
letter-spacing: -0.015em;
margin-bottom: 60px;
color: #223240;



@media screen and (max-width:768px){

    font-family: 'Poppins';
    font-size: 30px;
    line-height: 72px;
    text-align: center;
    letter-spacing: -0.015em;
    margin-bottom: 20px;
  
}




`

export const MainSubtitle = styled.h3`


font-family: 'Roboto';
font-style: normal;
font-weight: bold;
font-size: 22px;
letter-spacing: -0.015em;

color: #223240;
/* margin-bottom:-10px; */



@media screen and (max-width:768px){

    font-size: 16px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.015em;
    margin-top:0;
    margin-bottom:10px;
}



`

export const MainParagraph = styled.p`
width: 770px;


font-family: 'Roboto';
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* or 150% */
text-align: center;
letter-spacing: -0.015em;

color: #727272;

br{
    display:none;
}


@media screen and (max-width:768px){

    width:320px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */
    text-align: center;
    letter-spacing: -0.015em;
    br{
    display:inherit;
}
    color: #727272;
}



`

export const ServicesContainer = styled.div`
    display:flex;
   
/* border:1px solid blue; */
width:1100px;
justify-content:space-between;
margin-top: 120px;
    

@media screen and (max-width:768px){

    display: flex;
    flex-direction: column;
    width: 220px;
    height:610px; 
    justify-content: space-between;
    margin-top: 50px;
}


`

export const ServiceSection = styled.section`
 
    /* border: 1px solid red; */

    @media screen and (min-width:768px){
        display:flex;
    flex-direction: column;
    justify-self:left;
    text-align: left;
    width:320px;
    justify-content: center;
    }
`

export const SvgDesktop = styled.svg`
   visibility:visible;
    @media screen and (max-width:768px){
        visibility:  hidden;
        display:none;
    }
`
export const SvgMobile = styled.svg`
    visibility: hidden;
    @media screen and (max-width:768px){
        visibility: visible;
    }

`


export const ServicesTitle = styled.h1`


font-family: 'Poppins';
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 36px;
letter-spacing: -0.015em;
color: #223240;

margin-bottom:0px;


@media screen and (max-width:768px){

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    text-align: center;
    letter-spacing: -0.015em;
    
    color: #223240;
    margin-top:13px;
    margin-bottom: 12px;
}


`

export const ServiceParagraph = styled.p`

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 30px;
/* or 150% */
letter-spacing: -0.015em;

color: #828282;




@media screen and (max-width:768px){

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
}


`