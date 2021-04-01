import styled from "styled-components";

import { Link as LinkR } from "react-router-dom";

import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  padding-left:10px;
  padding-right:10px;
  justify-content: center;
    width: 100%;
  /* align-items: center; */
    min-height: 7.5vh;
  position: fixed;
  left: 5vw;
  top: 80px;
  z-index: 5;
  /* border:1px solid red; */

  .logo-nav-mobile {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    /* transition: 0.8s all ease; */
    background-color: #223240;
    top: 0;
    left: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    //passar essa classe para a const LogoContainer
    .logo-nav-mobile {
      /* border: 1px solid blue; */
      display: flex;
      width: 125px;
      align-self: center;
      margin-left:10%;
     
    }
  }

   @media screen and (max-width: 320px) {
    .logo-nav-mobile {
   
      width: 115px;
     
    }
  } 
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position:absolute;
  align-items: left;
  list-style: none;
  height: 203.85px;
  width:160px;
  left:-10px;
border:1px solid red;
z-index:1000;
  @media screen and (max-width: 1200px) {
    display: none;
  }
  .text-color {
    font-family: "Poppins";
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    /* letter-spacing: 0.015em; */
    /* color: white; */
    color: white;
    cursor: pointer;
    transition: 0.6s ease-in-out;
  }

  .text-color-navlink {
    color: #223240;
    transition: 0.6s ease-in-out;
  }
`;

export const NavItem = styled.li``;

export const NavLinks = styled(LinkS)`
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 300;
  text-align: left;
  /* letter-spacing: 0.015em; */
  /* color: white; */
  color: white;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #ec8f6a;
    color: #ec8f6a;
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
`;

export const MobileBurguerMenuIcon = styled.div`
  display: none;
  /* border: 1px solid red; */
  width: 10%;

  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content:start;
    align-items:center;
    position: relative;
    /* margin-left:60%; */
    /* right: 55px; */
    /* transform: translate(100%, 60%); */
    cursor: pointer;
    img {
      width: 26px;
    }
    @media screen and (max-width:380px){
      img {
      width: 20px;
    }
    }
  }

  @media screen and (max-width: 320px) {
    /* margin-right:5px; */
  }
`;

export const LogoContainer = styled.div`
  /* border:1px solid red; */
  display: flex;
  justify-content:center;

  width:90%;
`