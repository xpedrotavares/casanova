import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const ContactHeaderSection = styled.div`
width:700px;
border: 1px solid red;

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
    }

    div{
        border-top: 1px solid white;
        height: 1px;
        margin-top: 16px;
        margin-bottom: 36px;
       
    }
`;

export const ContactFormContainer = styled(Grid)`
    display: flex;
    border: 1px solid red;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    width: 700px;

`

export const ContactFormItems = styled(Grid)``;

export const ContactFormItemsMessage = styled(Grid)``;

