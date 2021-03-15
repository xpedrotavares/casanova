import styled from 'styled-components';

import HeroBg from '../../images/hero-image.jpg'

import Button from '@material-ui/core/Button'

export const HeroContainer = styled.div`
 
    background-image: url(${HeroBg});
    background-size:cover;
    width: 100%;
    height: 90vh;
    
    background-repeat: no-repeat;
    /* object-fit:contain; */
    /* background-position-y:50px; */
    height: 92.5vh;
    margin-top: 7.5vh;
    

    `

export const HeroBgMask = styled.div`
width:100%;
height:100%;
background: rgba(34, 50, 64, 0.9);
display:flex;
flex-direction:column;
justify-content:top;
align-items:center;
text-align:center;


`

export const HeroSloganContainer = styled.div`

font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 200;
font-size: 13px;
margin-top:45px;

/* or 615% */
text-align: center;
letter-spacing: 0.08em;

color: #EC8F6A;

@media screen and (max-width:320px){
    font-size: 10px;
}



`

export const HeroArticle = styled.article`

`

export const HeroTitle = styled.h1`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 38px;
letter-spacing: -0.015em;

color: #FFFFFF;
span{
    font-weight:700;
}
margin-top:0px;
margin-bottom:0px;


@media screen and (max-width:320px){
    font-size: 32px;
}

`


export const HeroSubtitle = styled.h3`
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;
text-align: center;
letter-spacing: -0.015em;
margin-bottom: 37px;
color: #FFFFFF;

width:304px;

@media screen and (max-width:320px){
    font-size: 13px;
}


`

export const CalltoActionButton = styled(Button)`
    font-family: 'Poppins';
    width:220px;
    text-transform:none;
    @media screen and (max-width:320px){
    font-size: 13px;
    width:210px;
}
 
`

export const SocialMediaContainer = styled.div`
    width:136px;
    display:flex;
    justify-content:space-between;
    margin-top: 24px;

`

export const HeroLocation = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 200;
font-size: 14px;
line-height: 12px;
letter-spacing: -0.015em;
margin-top: 57px;

color: #FFFFFF;

span{
    font-weight:400;
}
@media screen and (max-width:320px){
    margin-top: 35px;
}


`

export const HeroArrow = styled.div`
    margin-top: 30px;
`