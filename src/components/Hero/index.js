import React from 'react'

import {HeroContainer, HeroBgMask, HeroSloganContainer, HeroArticle, HeroTitle, HeroSubtitle, CalltoActionButton, SocialMediaContainer, HeroLocation, HeroArrow} from './HeroElements'

const Hero = () => {
    return (
        <>
            <HeroContainer>
                <HeroBgMask>
                <HeroSloganContainer>
                    <p>DESIGN & BUILD</p>
                </HeroSloganContainer>
                <HeroArticle>
                    <HeroTitle>Your home<br/>
in a <span>new way</span></HeroTitle>  
                    <HeroSubtitle>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque por.</HeroSubtitle>  
                
                <CalltoActionButton>Contact Us</CalltoActionButton>
                </HeroArticle>
                <SocialMediaContainer>
                    
                </SocialMediaContainer> 
                <HeroLocation>
                    <p><span>Fairfax,</span>VA</p>
                </HeroLocation>  
                <HeroArrow>

                </HeroArrow>
                    

</HeroBgMask>

                
            </HeroContainer>
        </>
    )
}

export default Hero
