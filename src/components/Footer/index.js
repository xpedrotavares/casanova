import React from 'react'

import {FooterContainer} from './FooterElements'

import backtotopMobile from '../../images/backtotop-icon-mobile.png'
import backtotopDesktop from '../../images/backtotop-icon-desktop.png'

const Footer = () => {
    return (
        <FooterContainer>
            <img className="back-to-top-desktop" src={backtotopDesktop} alt="back to top icon" />
            <img className="back-to-top-mobile" src={backtotopMobile} alt="back to top icon" />
        </FooterContainer>
    )
}

export default Footer
