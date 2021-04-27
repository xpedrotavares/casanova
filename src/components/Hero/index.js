import React from "react";

import {
  HeroContainer,
  HeroBgMask,
  HeroSloganContainer,
  HeroArticle,
  HeroTitle,
  HeroSubtitle,
  CalltoActionButton,
  SocialMediaContainer,
  HeroLocationMobile,
  HeroLocationDesktop,
  HeroArrow,
  HeroLogoContainer,
} from "./HeroElements";

import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../images/logo-casanova.png";
import {
  Link,
} from "react-scroll";

const useStyles = makeStyles({
  root: {},
});

const Hero = () => {
  const classes = useStyles();
  return (
    <HeroContainer id="home" className={classes.root}>
      <HeroBgMask>
        <HeroLogoContainer>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
          >
            <img src={Logo} alt="logo"/>
      
          </Link>
        </HeroLogoContainer>
        <HeroArticle>
          <HeroTitle>
            Welcome
            <br />
            to <span>CasaNova</span>
          </HeroTitle>
          <HeroSubtitle>
            Your friendly one-stop-shop for your remodeling wishes. We’re
            excited to get to know you and your project!
          </HeroSubtitle>

          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            offset={-10}
            duration={600}
          >
            <CalltoActionButton
              className="btn"
              variant="contained"
              color="primary"
              text="primary"
              src="#contact"
              box-shadow={5}
            >
              Contact us
            </CalltoActionButton>
          </Link>
          <p className="certificate-text">Licensed & insured.</p>
          <SocialMediaContainer>
          <a
              href="https://www.homeadvisor.com/rated.CasaNovaDesignAndBuild.110139032.html"
              rel="noreferrer"
              target="_blank"
            >
            <svg fill="#FFFF" className="homeadvisor-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="32px" height="32px"><path d="M 17.189453 5.0214844 A 1.0001 1.0001 0 0 0 16.509766 5.2871094 L 0.3203125 20.308594 A 1.0001 1.0001 0 0 0 1 22.042969 L 6.6074219 22.042969 A 1.0001 1.0001 0 0 0 7.296875 21.765625 L 8.0429688 21.056641 L 8.0429688 32.150391 C 8.0429687 34.22831 9.751284 35.9375 11.828125 35.9375 L 23.345703 35.9375 L 32.265625 45.595703 A 1.0001 1.0001 0 0 0 34 44.917969 L 34 35.9375 L 38.171875 35.9375 C 40.249794 35.9375 41.957031 34.229185 41.957031 32.152344 L 41.957031 22.025391 L 49 22.025391 A 1.0001 1.0001 0 0 0 49.689453 20.300781 L 33.916016 5.296875 A 1.0001 1.0001 0 0 0 33.226562 5.0214844 L 17.189453 5.0214844 z M 17.582031 7.0214844 L 32.826172 7.0214844 L 46.498047 20.025391 L 41.238281 20.025391 A 1.0001 1.0001 0 0 0 40.683594 20.025391 L 33.310547 20.025391 L 20.140625 8.0644531 A 1.0001 1.0001 0 0 0 18.779297 8.0800781 L 6.2070312 20.042969 L 3.546875 20.042969 L 17.582031 7.0214844 z M 19.484375 10.169922 L 32.251953 21.765625 A 1.0001 1.0001 0 0 0 32.925781 22.025391 L 39.957031 22.025391 L 39.957031 32.152344 C 39.957031 33.135503 39.155956 33.9375 38.171875 33.9375 L 33 33.9375 A 1.0001 1.0001 0 0 0 32 34.9375 L 32 42.361328 L 24.517578 34.257812 A 1.0001 1.0001 0 0 0 23.783203 33.9375 L 11.828125 33.9375 C 10.844966 33.9375 10.042969 33.134471 10.042969 32.150391 L 10.042969 19.339844 A 1.0001 1.0001 0 0 0 10.029297 19.166016 L 19.484375 10.169922 z"/></svg>
            </a>
           
            <a
              href="http://www.instagram.com/casanovabuilders"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6561 0H8.53351C4.28193 0 0.823036 3.4589 0.823036 7.71047V18.833C0.823036 23.0846 4.28193 26.5435 8.53351 26.5435H19.6561C23.9076 26.5435 27.3665 23.0846 27.3665 18.8331V7.71047C27.3665 3.4589 23.9076 0 19.6561 0ZM25.2928 18.833C25.2928 21.9412 22.7642 24.4698 19.6561 24.4698H8.53351C5.42538 24.4698 2.89675 21.9412 2.89675 18.8331V7.71047C2.89675 4.60234 5.42538 2.07371 8.53351 2.07371H19.6561C22.7642 2.07371 25.2928 4.60234 25.2928 7.71047V18.833Z"
                  fill="white"
                />
                <path
                  d="M14.0948 6.11731C10.1499 6.11731 6.94053 9.32669 6.94053 13.2716C6.94053 17.2165 10.1499 20.4259 14.0948 20.4259C18.0398 20.4259 21.2491 17.2165 21.2491 13.2716C21.2491 9.32669 18.0398 6.11731 14.0948 6.11731ZM14.0948 18.3522C11.2934 18.3522 9.01424 16.073 9.01424 13.2716C9.01424 10.4702 11.2934 8.19102 14.0948 8.19102C16.8963 8.19102 19.1754 10.4702 19.1754 13.2716C19.1754 16.073 16.8963 18.3522 14.0948 18.3522Z"
                  fill="white"
                />
                <path
                  d="M21.3527 7.05064C21.9253 7.05064 22.3896 6.58642 22.3896 6.01378C22.3896 5.44114 21.9253 4.97693 21.3527 4.97693C20.7801 4.97693 20.3158 5.44114 20.3158 6.01378C20.3158 6.58642 20.7801 7.05064 21.3527 7.05064Z"
                  fill="white"
                />
              </svg>
            </a>

            


            
          </SocialMediaContainer>
          <HeroLocationMobile>
            <p className="location-mobile">
              <span>Fairfax,</span> VA
            </p>
          </HeroLocationMobile>
          <HeroArrow>
            <svg
              width="16"
              height="30"
              viewBox="0 0 16 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.29289 29.7071C7.68342 30.0976 8.31658 30.0976 8.70711 29.7071L15.0711 23.3431C15.4616 22.9526 15.4616 22.3195 15.0711 21.9289C14.6805 21.5384 14.0474 21.5384 13.6569 21.9289L8 27.5858L2.34314 21.9289C1.95262 21.5384 1.31946 21.5384 0.928931 21.9289C0.538407 22.3195 0.538407 22.9526 0.928931 23.3431L7.29289 29.7071ZM7 -4.37114e-08L7 29L9 29L9 4.37114e-08L7 -4.37114e-08Z"
                fill="white"
              />
            </svg>
          </HeroArrow>
        </HeroArticle>
        <HeroLocationDesktop>
          <p>
            <span>Fairfax,</span> VA
          </p>
        </HeroLocationDesktop>
      </HeroBgMask>
    </HeroContainer>
  );
};

export default Hero;