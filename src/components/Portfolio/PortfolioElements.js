import styled from 'styled-components';

export const PortfolioContainer = styled.div`
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     width:100%;
     height:115vh;
     border: 1px solid red;
`



export const CarouselSection = styled.div`
     margin-top: 25px;
`

export const TestimonialsContainer = styled.div`
    /* border: 1px solid blue; */
     width:75.5vw;
     margin-top: 50px;
`

export const TestimonialsTitleSection = styled.div`
     display: flex;
     align-items:flex-end;

`

export const TestimonialsTitle = styled.h1`
font-family: "Poppins";
font-style: normal;
font-weight: 600;
font-size: 13px;
text-align: right;
letter-spacing: -0.015em;
margin:0;
margin-bottom:-5px;
margin-left:4px;
color: #EC8F6A;


`

export const TestimonialsLine = styled.div`
     border-top:1px solid #EC8F6A;
     width:100%;
`

export const TestimonialsStarSection = styled.div`
     display: flex;
     justify-content: flex-end;
     margin-top: 20px;

     /* border:1px solid red; */

`

export const StarImage = styled.img`
     width:5%;
     margin-left:9px;
`

export const ClientTestimonialTextContainer = styled.div`
     text-align:right;

     p{
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 17px;
/* or 131% */
text-align: right;
letter-spacing: -0.015em;
width: 315px;
color: #828282;
margin-bottom:0;

     }

     .client-name{
          font-style: italic;
          margin-top:9px;
     }
     span{
          font-weight:500;
     }

`