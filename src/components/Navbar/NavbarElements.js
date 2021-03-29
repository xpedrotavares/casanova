import styled from 'styled-components'



import { Link as LinkR } from 'react-router-dom'

import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 5vw;
    top: 80px;
    z-index: 5000;
    
    .logo-nav-mobile{
        display:none;
    }





/* Rectangle 27 */







    @media screen and (max-width:1200px) {
        /* transition: 0.8s all ease; */
        background-color:#223240;
        height:7.5vh;
        width:100%;
        top:0;
        left:0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        .logo-nav-mobile{
        display:flex;
        width:125px;
        align-self:center;
        margin-top: 15.5px;
    }
}

    @media screen and (max-width:320px){
        .logo-nav-mobile{
        display:flex;
        width:110px;
        align-self:center;
        margin-top: 11px;

    }
       
    }
`

export const NavMenu = styled.ul`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
    list-style: none;
    height:203.85px;
    @media screen and (max-width:1200px){
        display: none;
    }
    .text-color{
        font-family: 'Poppins';
        font-size: 20px;
        font-weight: 300;
        text-align: left;
        /* letter-spacing: 0.015em; */
        /* color: white; */
        color: white;
        cursor: pointer;
        transition: 0.6s ease-in-out;
}

.text-color-navlink{
    color: #223240;
    transition: 0.6s ease-in-out;
}

   

`

export const NavItem = styled.li`

`

export const NavLinks = styled(LinkS)`
font-family: 'Poppins';
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    /* letter-spacing: 0.015em; */
    /* color: white; */
    color: white;
    cursor: pointer;

    &.active {
        border-bottom: 2px solid #EC8F6A;
        color: #EC8F6A;
        
    }







    /* &.contact.active, &.home, &.contact, &.portfolio, &.about{
        color:white!important;
    } */

/*     
    &.home.active {
        border-bottom: 3px solid red;
        color: white;
        
    }
    &.about.active {
        color:black;
    } */

`

export const MobileBurguerMenuIcon = styled.div`
    display: none;

    @media screen and (max-width:1200px){
        display:block;
        position: absolute;
        top:10px;
        right:55px;
        transform: translate(100%, 60%);
        cursor:pointer;
        img{
            width:26px;
        }
    }

    @media screen and (max-width:320px){
        top:2px;
    }
`