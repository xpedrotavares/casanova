import React, {useState} from 'react'

import PhoneNumber from '../Contact/PhoneNumber'

import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import { Button } from "react-bootstrap";

import MenuItem from '@material-ui/core/MenuItem';


import phoneIcon from '../../images/phone-icon.png'
import pinIcon from '../../images/pin-icon.png'
import letterIcon from '../../images/letter-icon.png'

import facebookIcon from '../../images/facebook-icon.png'
import instagramIcon from '../../images/instagram-icon.png'

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { makeStyles } from '@material-ui/core/styles'

import 'bootstrap/dist/css/bootstrap.min.css'

import { ContactContainer, ContactHeaderSection, ContactFormContainer, ContactFormItems, ContactFormItemsMessage, SocialMediasContainer, StaticContactContainer, SelectContactWayContainer } from './ContactElements'

const useStyles = makeStyles({
  root:{

  }
})

const Contact = () => {


  const contactWaysArr = [
    {
      value: 'call',
      label: 'Call me',
    },
    {
      value: 'Text',
      label: 'Send me a text',
    },
    {
      value: 'Email',
      label: 'Send me an email',
    },

  ];

  const [contactWays, setCcontactWays] = React.useState('');

  const handleChange = (event) => {
    setCcontactWays(event.target.value);
  }; 
  const classes = useStyles();

    return (
        <ContactContainer id='contact' className={classes.root}  name="contact">
                <Element name="test1" className="element"></Element>
            <ContactHeaderSection>
            <h1>Get in touch</h1>
            <p >Need help with your project? <br />Let’s talk about it!</p>
            <div> </div>
            </ContactHeaderSection>

            <ContactFormContainer container>
                <ContactFormItems item>

                <TextField 
              
              id="outlined-basic"
              label="What's your name?"
              variant="outlined"
              // error
              // helperText="Some validation error"
              />
            <TextField className={classes.root}  
           
           id="outlined-select-currency"
           select
           label="What's the best way to contact you?"
           value={contactWays}
           onChange={handleChange}
           helperText="*Select the best way to contact you"
           variant="outlined"
           color="primary" 
           text="primary"
           >
          {contactWaysArr.map((option) => (
              <SelectContactWayContainer key={option.value} value={option.value}>
              {option.label}
            </SelectContactWayContainer>
          ))}
        </TextField>
          </ContactFormItems>
          <ContactFormItems item>

          <TextField
          className="email-field"
              id="outlined-basic"
              label="What's your email?"
              variant="outlined"
              text="primary"
              />
            {/* <TextField
              className="single-line-inputs phone-input"
              id="outlined-basic"
              label="What's your telephone?"
              variant="outlined"
              /> */}
              <PhoneNumber />
          </ContactFormItems>
          <ContactFormItemsMessage>
          <TextField

              id="outlined-multiline-static"
              label="Share your project with us:"
              helperText="*If possible, include a rough size, location and time frame"
              multiline
              rows={7}
              //   defaultValue="Default Value"
              variant="outlined"
              color="primary"
              text="primary"
              />
          </ContactFormItemsMessage>
          <Button>Submit</Button>
            </ContactFormContainer>

            <SocialMediasContainer>
            <a href="http://www.facebook.com/" rel="noreferrer" target="_blank">
              <img className="facebook-icon" src={facebookIcon} />
              </a>
              <a href="http://www.instagram.com/casanovabuilders" rel="noreferrer" target="_blank">

              <img className="instagram-icon" src={instagramIcon} />
              </a>
              </SocialMediasContainer>
            <StaticContactContainer className="static-contact-container-desktop">
              
              <div className="static-contact-container-desktop">
                <section>
                <img className="phone-icon" src={phoneIcon} alt="fazer" />
                <p>Phone</p>
                </section>
                <p>(202) 378-8417 <br/>(202) 468-9657</p>
                {/* <span className="white-e">&</span> */}
                {/* <p>(202) 468-9657</p> */}
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
                <section >
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
    )
}

export default Contact
