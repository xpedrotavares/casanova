import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
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
       
    }

    .papers-icon{
        width:20px;
    }
    section{
        display: flex;
        justify-content:left;
        align-items:center;
        margin-bottom:30px;
    }

    div{
        border-top: 1px solid white;
        height: 1px;
        margin-top: 16px;
        margin-bottom: 36px;
    }
    .estimates-text{
        font-family: 'Poppins';
        font-size: 14px;
        margin-bottom:0;
        line-height:25px;
        margin-left: 15px;
        margin-top:5px;
      
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
        .papers-icon{
        width:40px;
    }
    .estimates-text{
        font-size: 14px;
        line-height:18px;
    }
    section{
        margin-bottom:10px;
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


export const SocialMediasContainer = styled(Grid)`
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
    justify-content:space-around;
    align-items:top;
    margin-top:100px;
  width: 700px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;

    div{
        display:flex;
        flex-direction:column;
        align-items:center;
        width:fit-content;
        justify-content:top;
    }

    section{
        display:flex;
        justify-content:start!important;
        align-items:baseline!important;
        margin-bottom: 10px;
    }
    section p {
        margin-bottom:0;
    }

    .phone-icon{
        width:15px;
        margin-right: 5px;
        margin-left:-10px
    }
    .pin-icon{
        width:10px;
        margin-right: 5px;
    }
    .letter-icon{
        width:18px;
        margin-right: 5px;
    }
    span{
        display:none;
    }
    .static-contact-container-mobile {
            display:none;
    
        }

    @media screen and (max-width:800px){
        margin-top:20px;
        width:fit-content;
        .static-contact-container-mobile {
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .static-contact-container-desktop {
            display:none;
        }
        flex-direction:column;
        justify-content:center;
        align-items:center;
        div{
            width:fit-content;
            flex-direction: row;
            br{
                display:none;
            }
        }
        div p{
            margin-bottom:2px;
        } 
        .phone-icon{
        width:17px;
        margin-right: 12px;
    }
    .pin-icon{
        width:12px;
        margin-right: 12px;
    }
    .letter-icon{
        width:15px;
        margin-right: 12px;
    }
}

`

