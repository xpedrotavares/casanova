import React from 'react'

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import {FooterContainer} from './FooterElements'

import backtotopMobile from '../../images/backtotop-icon-mobile.png'
import backtotopDesktop from '../../images/backtotop-icon-desktop.png'

const Footer = () => {
    return (
        <FooterContainer>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-10} duration={600}>

            <img className="back-to-top-desktop" src={backtotopDesktop} alt="back to top icon" />
            <img className="back-to-top-mobile" src={backtotopMobile} alt="back to top icon" />
            </Link>
        </FooterContainer>
    )
}

export default Footer
