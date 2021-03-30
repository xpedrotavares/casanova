import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  width: 100%;
  height: 140vh;
  background-color: #223140;

  button{

    width: 340px;
        height: 57px;
        background-color: #EC8F6A!important;
        margin-top: 30px;
        border:0!important;
        border-radius: 5px!important;
  }

  @media screen and (max-width:800px){
    height: 120vh;
  }

  @media screen and (max-width:375px){
      height:130vh;
  }
`;

export const ContactHeaderSection = styled.div`
width:700px;
/* border: 1px solid red; */
margin-bottom:60px;

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
        p{
            margin-bottom:10px
        }
        div{
            margin-bottom:0;
        }

    }
    
`;

export const ContactFormContainer = styled(Grid)`
    display: flex;
    /* border: 1px solid red; */
    justify-content:center;
    align-items:center;
    flex-direction: column;
    width: 700px;
    .MuiFormLabel-root{
        color:white;
    }
    .MuiFormHelperText-root {
        color:#cacaca8a;
    }
`

export const ContactFormItems = styled(Grid)`
    /* border:1px solid white; */
    width:700px;
    display:flex;
    justify-content:space-between;
    /* align-items:center; */
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
`;

export const ContactFormItemsMessage = styled(Grid)`
    margin-top:40px;
    #outlined-multiline-static{
        width:670px!important;
       
    }
    @media screen and (max-width:800px){
        margin-top: 30px;
        #outlined-multiline-static{
        width:312px!important;
       
    }
    }
`;

