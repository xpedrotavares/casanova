import React from "react";

import ContactForm from "../Contact-form/index";

import phoneIcon from "../../images/phone-icon.png";
import pinIcon from "../../images/pin-icon.png";
import letterIcon from "../../images/letter-icon.png";
import papersIcon from "../../images/papers-icon.svg";

import facebookIcon from "../../images/facebook-icon.png";
import instagramIcon from "../../images/instagram-icon.png";

import { Element } from "react-scroll";

import { makeStyles } from "@material-ui/core/styles";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  ContactContainer,
  ContactHeaderSection,
  SocialMediasContainer,
  StaticContactContainer,
} from "./ContactElements";

const useStyles = makeStyles({
  root: {},
});

const Contact = () => {
  const classes = useStyles();

  return (
    <ContactContainer id="contact" className={classes.root} name="contact">
      <Element name="test1" className="element"></Element>
      <ContactHeaderSection>
        <h1>Get in touch</h1>
        <p>
          Need help with your project? <br />
          Let’s talk about it!
        </p>
        <section>
          <img className="papers-icon" src={papersIcon} alt="papers icon" />
          <p className="estimates-text">We offer free estimates.</p>
        </section>
        <div> </div>
      </ContactHeaderSection>

      <ContactForm />

      <SocialMediasContainer>
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
          <img
            className="instagram-icon"
            src={instagramIcon}
            alt="instagram icon"
          />
        </a>
 
      </SocialMediasContainer>
      <StaticContactContainer className="static-contact-container-desktop">
        <div className="static-contact-container-desktop">
          <section>
            <img className="phone-icon" src={phoneIcon} alt="fazer" />
            <p>Phone</p>
          </section>
          <p>
            (202) 378-8417 <br />
            (202) 468-9657
          </p>
        </div>
        <div className="static-contact-container-desktop">
          <section>
            <img className="pin-icon" src={pinIcon} alt="fazer" />
            <p>Address</p>
          </section>
          <p> Fairfax, VA</p>
        </div>
        <div className="static-contact-container-desktop">
          <section>
            <img className="letter-icon" src={letterIcon} alt="fazer" />
            <p>E-mail</p>
          </section>
          <p>info@casanovabuilders.com</p>
        </div>
      </StaticContactContainer>

      <StaticContactContainer className="static-contact-container-mobile">
        <div className="static-contact-container-mobile">
          <section>
            <img className="phone-icon" src={phoneIcon} alt="fazer" />
            <p>(202) 378-8417 & (202) 468-9657 </p>
          </section>
        </div>
        <div className="static-contact-container-mobile">
          <section>
            <img className="letter-icon" src={letterIcon} alt="fazer" />
            <p>info@casanovabuilders.com</p>
          </section>
        </div>
        <div className="static-contact-container-mobile">
          <section>
            <img className="pin-icon" src={pinIcon} alt="fazer" />
            <p>Fairfax, VA</p>
          </section>
        </div>
      </StaticContactContainer>
    </ContactContainer>
  );
};

export default Contact;
