import styled from 'styled-components'

export const SlideShowContainer = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
height:fit-content;
margin-bottom:200px!important;
width:100%;
box-sizing:border-box;
.quote-author{
    font-weight: 500;
}
#slideshow { 
  display:flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative; 
  width: fit-content; 
  height: fit-content; 
  padding: 10px; 
  box-sizing:border-box;
}

#slideshow > div { 
    display:flex;
    flex-direction: column;
    justify-content:top;
    align-items:flex-end;
    text-align:right;
    width:100%;
    height:fit-content;
    box-sizing:border-box;
    margin:-10px;
}
#slideshow div p{
    width:60%;
}

@media screen and (max-width:1200px){
    #slideshow div p{
    width:100%;
}
}


@media screen and (max-width:800px) {

    
} 
`

export const TestimonialsStarSection = styled.div`
     display: flex;
     justify-content: flex-end;
     align-items:center;
     margin-top: 50px;
     margin-bottom: 20px;
     @media screen and (max-width:768px){
     margin-top: 20px;
     margin-bottom:10px;
     }
`

export const StarImage = styled.img`
     width:2.5%;
     margin-left:9px;

     @media screen and (max-width:768px){
          width:5%;
     }
`