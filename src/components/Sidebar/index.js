import React from 'react'

import {SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLinks, SidebarLogo} from './SidebarElements'


import XIcon from '../../images/back-arrow-icon-menu.png'
import LogoSidebar from '../../images/logo-sidebar-mobile.png'



const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <img src={XIcon} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to='home' onClick={toggle}>
                        Home.
                    </SidebarLinks>
                    <SidebarLinks to='about' onClick={toggle}>
                        About us.
                    </SidebarLinks>
                    <SidebarLinks to='portfolio' onClick={toggle}>
                        Portfolio.
                    </SidebarLinks>
                    <SidebarLinks to='contact' onClick={toggle}>
                        Contact
                    </SidebarLinks>
                </SidebarMenu>
            </SidebarWrapper>
            <SidebarLogo>
                <img src={LogoSidebar} />
            </SidebarLogo>
        </SidebarContainer>
    )
}

export default Sidebar
