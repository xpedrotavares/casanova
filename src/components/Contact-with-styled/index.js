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
        <a href="http://www.facebook.com/" rel="noreferrer" target="_blank">
          <img
            className="facebook-icon"
            src={facebookIcon}
            alt="facebook icon"
          />
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
