import styled from "styled-components"
import Grid from "@material-ui/core/Grid"


export const ServicesContainer = styled(Grid)`
display: flex;
height:40%;
max-width: 80%;
/* border:1px solid blue; */
justify-content: space-around;
margin-top: 120px;

@media screen and (max-width:800px){
  margin-top:50px;
}

@media screen and (max-width:1200px){
  height:60%;

}


`;

export const ServiceItem = styled(Grid)`
/* border: 1px solid blue; */

text-align:left;
padding: 0 40px;
height:fit-content;
margin-bottom:30px!important;

@media screen and (max-width:1900px){
    padding:0 70px;
    text-align: center;

}
@media screen and (max-width:800px){
    padding:0;
    text-align: center;

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
line-height: 30px;
/* padding-left:25px;
padding-right:25px; */


@media screen and (max-width: 1900px) {

     /* padding-left:25%;
    padding-right:25%;  */
}
/* or 150% */
letter-spacing: -0.015em;
/* height: 70px; */
color: #828282;
/* overflow-y:hidden; */
/* width:50%; */

@media screen and (max-width: 768px) {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 24px;
  /* or 171% */
  text-align: center;
  letter-spacing: -0.015em;
  color: #828282;

  margin-top: 0px;
}
`;
