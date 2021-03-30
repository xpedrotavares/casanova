import styled from 'styled-components'

export const SlideShowContainer = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
height:fit-content;
/* overflow:hidden; */
width:100%;
/* border:1px solid red; */
box-sizing:border-box;
#slideshow { 
  /* margin: 50px auto;  */
  display:flex;
  flex-direction: column;
  align-items: flex-end;
  /* border: 1px solid red; */
  position: relative; 
  width: fit-content; 
  height: fit-content; 
  padding: 10px; 
  box-sizing:border-box;
  
  /* box-shadow: 0 0 20px rgba(0,0,0,0.4);  */
}

#slideshow > div { 
    display:flex;
    flex-direction: column;
    justify-content:top;
    align-items:flex-end;
    text-align:right;
    width:100%;
    height:fit-content;
    /* border: 1px solid blue; */
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

/* @media screen and (max-width:1200px){
#slideshow > div{
margin-right: 45px;
    width:580px;
}
}

@media screen and (max-width:1080px) {
#slideshow > div{
margin-right: 45px;
    width:580px;
    
} */


/* } */
`