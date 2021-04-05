import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import MenuItem from '@material-ui/core/MenuItem';

export const ContactFormContainer = styled(Grid)`
display: flex;
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
width:700px;
display:flex;
justify-content:space-between;
.MuiOutlinedInput-input {
height: 20px;
padding: 18.5px 14px;
}
.MuiFormControl-root {
    margin-top:20px;
width: 340px;    
}

.phone-input{
    input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
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


export const SelectContactWayContainer = styled(MenuItem)`
    background-color:#223140!important;
`