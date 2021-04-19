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
          <HeroSloganContainer>
            <p>DESIGN & BUILD</p>
          </HeroSloganContainer>
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
          <SocialMediaContainer>
            <a href="http://www.facebook.com/" rel="noreferrer" target="_blank">
              <svg
                width="14"
                height="27"
                viewBox="0 0 14 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3654 4.40733H13.9037V0.186911C13.4658 0.1294 11.9597 0 10.2057 0C6.5458 0 4.0387 2.19758 4.0387 6.23662V9.95381H0V14.6719H4.0387V26.5435H8.99034V14.673H12.8657L13.4809 9.95492H8.98918V6.70445C8.99034 5.34078 9.37497 4.40733 11.3654 4.40733Z"
                  fill="white"
                />
              </svg>
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
            <svg
              className="houzz-icon"
              width="20"
              height="29"
              viewBox="0 0 20 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="houzz-icon"
                d="M10.2658 0.147376C9.99708 -0.0211826 9.6583 -0.0465571 9.36494 0.0785026L0.848104 3.70342C0.505537 3.85023 0.285992 4.17285 0.285992 4.53171V22.6563C0.285992 22.9626 0.446866 23.249 0.717512 23.4157C0.872708 23.5136 1.05251 23.5625 1.23231 23.5625C1.3629 23.5625 1.49349 23.5353 1.61651 23.4846L10.1334 19.8597C10.4759 19.7147 10.6955 19.3884 10.6955 19.0314V0.906796C10.6955 0.600491 10.5346 0.315935 10.2658 0.147376ZM8.80283 18.4423L2.17862 21.2625V5.12076L8.80283 2.30239V18.4423Z"
                fill="white"
              />
              <path
                className="houzz-icon"
                d="M18.7826 5.58488C18.5139 5.41632 18.1751 5.39094 17.8817 5.516L9.36489 9.14092C9.02233 9.28773 8.80278 9.61035 8.80278 9.96921V28.0938C8.80278 28.4001 8.96365 28.6865 9.2343 28.8532C9.3895 28.9511 9.5693 29 9.7491 29C9.87969 29 10.0103 28.9728 10.1333 28.9221L18.6501 25.2972C18.9927 25.1522 19.2123 24.8259 19.2123 24.4689V6.3443C19.2123 6.03799 19.0514 5.75343 18.7826 5.58488ZM17.3196 23.8798L10.6954 26.7V10.5583L17.3196 7.73989V23.8798Z"
                fill="white"
              />
              <path
                className="houzz-icon"
                d="M18.7257 13.71L10.2089 9.177C9.91933 9.02475 9.57298 9.02294 9.28909 9.177L0.772249 13.7081C0.473213 13.8676 0.285843 14.1703 0.285843 14.5002C0.285843 14.8301 0.473213 15.1327 0.772249 15.294L9.28909 19.8252C9.43293 19.8995 9.59191 19.9376 9.74899 19.9376C9.90798 19.9376 10.0651 19.8995 10.2089 19.8252L18.7257 15.2959C19.0248 15.1345 19.2121 14.8319 19.2121 14.502C19.2121 14.1721 19.0248 13.8695 18.7257 13.71ZM9.74899 17.9946L3.18157 14.5002L9.74899 11.0058L16.3183 14.502L9.74899 17.9946Z"
                fill="white"
              />
            </svg>
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