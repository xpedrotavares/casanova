import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  width: 100%;
  height: fit-content;
  background-color: #223140;
  z-index:100;
  

.MuiOutlinedInput-notchedOutline {
    border-color: #768089!important;
    
}

  button{

    width: 340px;
        height: 57px;
        background-color: #EC8F6A!important;
        margin-top: 30px;
        border:0!important;
        border-radius: 5px!important;
        align-self:start;
  }

  @media screen and (max-width:800px){
    flex-wrap:wrap;
    height: fit-content;
    margin-top:50px;
    button{
        align-self:center;
    }
  }

  @media screen and (max-width:375px){
    flex-wrap:wrap;
      height:fit-content;
      button{

width: 300px;
height:40px;
align-self:center;

   
}

  }
`;

export const ContactHeaderSection = styled.div`
width:700px;
/* border: 1px solid red; */
margin-bottom:60px;
margin-top:50px;

    h1, p{
        font-family: 'Poppins'
    }

    h1{
        font-size:31px;
        font-weight:bold;
        color:#EC8F6A;

    }
    p{
        font-size:23px;
        color:white;
        font-weight:300;
        margin-bottom: 30px;
    }

    div{
        border-top: 1px solid white;
        height: 1px;
        margin-top: 16px;
        margin-bottom: 36px;
       
    }

    @media screen and (max-width:800px){
        width:340px;
        margin-bottom: 20px;
        margin-top:50px;
        p{
            margin-bottom:10px
        }
        div{
            margin-bottom:0;
        }

    }

    @media screen and (max-width:320px){
        width:300px;
        margin-bottom: 20px;
        margin-top:50px;
        p{
            font-size:19px;
            margin-bottom:10px
        }
        div{
            margin-bottom:0;
        }

    }
    
`;

export const ContactFormContainer = styled(Grid)`
    display: flex;
    border: 1px solid red;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    width: 700px!important;
    .MuiFormLabel-root{
        color:white;
    }
    .MuiFormHelperText-root {
        color:#cacaca8a;
    }
    @media screen and (max-width:1200px){
        width: fit-content!important;
    }

`

export const ContactFormItems = styled(Grid)`
    /* border:1px solid white; */

 
    width:700px;
    display:flex;
    justify-content:space-between;
    /* align-items:center; */
    .MuiOutlinedInput-input {
    height: 52px;
    padding: 18.5px 14px;
}
    .MuiFormControl-root {
        margin-top:20px;
    width: 340px;    
    }


    @media screen and (max-width:800px){
        width: 340px;
        flex-wrap:wrap;
        .MuiFormControl-root {
        margin-top:30px;
    }
    .email-field{
        margin-top:15px;
        
    }
    }
    @media screen and (max-width:320px){
        width: 300px;
        flex-wrap:wrap;
        .MuiFormControl-root {
        margin-top:30px;
    }
    .email-field{
        margin-top:15px;
        
    }
    }
`;

export const ContactFormItemsMessage = styled(Grid)`
    margin-top:40px;
    #outlined-multiline-static{

        width:670px!important;
        height: 200px;
       
    }
    @media screen and (max-width:800px){
        margin-top: 30px;
        #outlined-multiline-static{
        width:312px!important;
       
    }
    }
    @media screen and (max-width:320px){
        margin-top: 30px;
        width:300px!important;
        #outlined-multiline-static{
        width:112px!important;
       
    }
    }
`;


export const SocialMediasContainer = styled(Grid)`
/* border: 1px solid red; */
display:none;
height:50px;
margin-top:20px;

    .facebook-icon{
        width:15px;
        margin-right:15px;
        margin-top:0;
    }
    .instagram-icon{
        width:30px;
        margin-top:0;
        margin-bottom:0;
        margin-left:15px;
    }

    @media screen and (max-width:800px){
        display: initial;
    }
`


export const StaticContactContainer = styled(Grid)`
    display:flex;
    color:white;
    justify-content:center;
    /* Phone */
    margin-top:100px;
  

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
/* line-height: 19px; */

/* White_CasaNova */
color: #FFFFFF;



    div{
        display:flex;
        flex-direction:column;
        align-items:center;
        width:220px;
        justify-content:top;
        /* border: 1px solid red; */
    }
    section{
        
        display:flex;
        justify-content:center!important;
        align-items:baseline!important;
        margin-bottom: 10px;
        /* border: 1px solid blue; */
    }
    section p {
        margin-bottom:0;
    }

    .phone-icon{
        width:22px;
        margin-right: 12px;
    }
    .pin-icon{
        width:17px;
        margin-right: 12px;
    }
    .letter-icon{
        width:25px;
        margin-right: 12px;
    }
    span{
        display:none;
    }
    .static-contact-container-mobile {
            display:none;
        }

    @media screen and (max-width:800px){
        margin-top:20px;
        .static-contact-container-mobile {
            display:initial;
        }
        .static-contact-container-desktop {
            display:none;
        }
        flex-direction:column;
        justify-content:center;
        align-items:center;
        div{
            /* border: 1px solid red; */
            width:fit-content;
            flex-direction: row;
            br{
                display:none;
            }
        }
        div p{
            margin-bottom:2px;
        } 
    }

`

export const SelectContactWayContainer = styled(MenuItem)`
    background-color:#223140!important;

`

