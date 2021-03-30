import styled from 'styled-components';

export const PortfolioContainer = styled.div`
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     width:100%;
     height:150vh;
     border: 1px solid red;

     @media screen and (max-width:768px){
          display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     width:100%;
     height:140vh;
     border: 1px solid red;
     }
`



export const CarouselSection = styled.div`
     margin-top: 25px;
`

export const TestimonialsContainer = styled.div`
    /* border: 1px solid blue; */
     width:59.7vw;
     height:500px;
     margin-top: 50px;

    @media screen and (max-width:768px){

     width:75.5vw;
     margin-top: 50px;
    }
`

export const TestimonialsTitleSection = styled.div`
     display: flex;
     align-items:flex-end;

`

export const TestimonialsTitle = styled.h1`
font-family: "Poppins";
font-style: normal;
font-weight: 600;
font-size: 24px;
text-align: right;
letter-spacing: -0.015em;
margin:0;
margin-bottom:-9px;
margin-left:10px;
color: #EC8F6A;

@media screen and (max-width:768px){
font-size: 13px;
letter-spacing: -0.015em;
margin:0;
margin-bottom:-5px;
margin-left:4px;
}


`

export const TestimonialsLine = styled.div`
     width:100%;
     border-top:2px solid #EC8F6A;

     @media screen and (max-width:768px){
          border-top:1px solid #EC8F6A;

     }
`

export const TestimonialsStarSection = styled.div`
     display: flex;
     justify-content: flex-end;
     margin-top: 50px;
     margin-bottom: 20px;
     @media screen and (max-width:768px){
     margin-top: 20px;

     }

     /* border:1px solid red; */

`

export const StarImage = styled.img`
     width:2.5%;
     margin-left:9px;

     @media screen and (max-width:768px){
          width:5%;

     }
`



export const ClientTestimonialTextContainer = styled.div`
display:flex;
flex-direction:column;
   align-items: flex-end;
   .transition{
     
}
@keyframes fadein {

}
p{

 
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 30px;
/* or 131% */
text-align: right;
letter-spacing: -0.015em;
width: 630px;
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





   @media screen and (max-width:768px){

     text-align:right;

     p{
font-weight: 300;
font-size: 13px;
line-height: 17px;
/* or 131% */
text-align: right;
width: 315px;
margin-bottom:0;

     }

     /* .client-name{
          font-style: italic;
          margin-top:9px;
     }
     span{
          font-weight:500;
     } */
   }

`