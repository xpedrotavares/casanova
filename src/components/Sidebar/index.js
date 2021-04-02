import React from 'react'

import {SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLinks, SidebarLogo} from './SidebarElements'


import XIcon from '../../images/back-arrow-icon-menu.png'
import LogoSidebar from '../../images/logo-sidebar-mobile.png'



const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <img src={XIcon} alt="arrow to come back to site"/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to='home' smooth={true} duration={600} offset={-60} spy={true} onClick={toggle}>
                        Home.
                    </SidebarLinks>
                    <SidebarLinks to='about' smooth={true} duration={600} offset={-70} spy={true} onClick={toggle}>
                        About us.
                    </SidebarLinks>
                    <SidebarLinks to='portfolio' smooth={true} duration={600} offset={-70} spy={true} onClick={toggle}>
                        Portfolio.
                    </SidebarLinks>
                    <SidebarLinks to='contact' smooth={true} duration={600} offset={-50} spy={true} onClick={toggle}>
                        Contact.
                    </SidebarLinks>
                </SidebarMenu>
            </SidebarWrapper>
            <SidebarLogo>
                <img src={LogoSidebar} alt="CasaNova logo. On the left side there is a orange circle with a house inside, 
to the right is written CasaNova. Underneath and centered is written Design and Build" />
            </SidebarLogo>
        </SidebarContainer>
    )
}

export default Sidebar
