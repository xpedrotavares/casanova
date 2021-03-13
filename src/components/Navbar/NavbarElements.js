import styled from 'styled-components'

import { Link as LinkR } from 'react-router-dom'

import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 150px;
    top: 80px;
    z-index: 5000;
`

export const NavMenu = styled.ul`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
    list-style: none;
    height:203.85px;


   

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
    color: black;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid red;
    }
`