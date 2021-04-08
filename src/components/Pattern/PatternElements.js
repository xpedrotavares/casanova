import styled from 'styled-components';

export const PatternContainer = styled.div`
display:flex;
width:100%;
justify-content:center;
position:absolute;
top:180vh;
div{
    display:flex;
    justify-content:center;

}
img{
    
width:100%;
   padding-left:50px;
   padding-right:50px;
}

 @media screen and (max-width:800px){
    display:none;
   
    img{
        display:none;
  

  

    }
}
@media screen and (max-width:1680px){
   top:231vh;
  
} 

`