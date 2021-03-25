import React, {useState} from 'react'

import PhoneNumber from './PhoneNumber'

import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import { Button } from "react-bootstrap";

import MenuItem from '@material-ui/core/MenuItem';

import 'bootstrap/dist/css/bootstrap.min.css'

import { ContactContainer } from './ContactElements'
import './style.css'

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

    return (
        <ContactContainer id='contact'>
              <Grid className="container-contact d-flex justify-content-center align-items-center" container>
        
        <Grid className="contact__upper-text-grid" item>
            <h1>Get in touch</h1>
            <p className="constact__upper-text__first-p">Need help with your project?</p>
            <p className="constact__upper-text__last-p">Let’s talk about it!</p>
            <span className="contact__upper-text-grid__span"> </span>
        </Grid>
        <Grid
          className="contact-form d-flex flex-column align-items-center justify-content-center"
          item
        >
            <container className="d-flex flex-column justify-content-center align-items-center ">
  
          <div>
            <TextField
              className="single-line-inputs first-name-input mr-4"
             
              id="outlined-basic"
              label="What's your name?"
              variant="outlined"
              // error
              // helperText="Some validation error"
              />
         <TextField
           className="single-line-inputs first-name-input "
          id="outlined-select-currency"
          select
          label="What's the best way to contact you?"
          value={contactWays}
          onChange={handleChange}
          helperText="Select the best way to contact you"
          variant="outlined"
        >
          {contactWaysArr.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </div>
  
          <div>
            <TextField
              className="single-line-inputs email-input mr-4"
              id="outlined-basic"
              label="What's your email?"
              variant="outlined"
              />
            {/* <TextField
              className="single-line-inputs phone-input"
              id="outlined-basic"
              label="What's your telephone?"
              variant="outlined"
              /> */}
              <PhoneNumber />
          </div>
  
          <div>
            <TextField
              className="message-input"
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={7}
              //   defaultValue="Default Value"
              variant="outlined"
              />
          </div>
          <div className="contact-div-button d-flex justify-content-left">
  
          <Button className="contact__submit-button">Submit</Button>
          </div>
              </container>
        </Grid>
        <Grid className="contact__contacts d-flex justify-content-around " item>
            <div>
                <h6>Phone</h6>
                <p>(202) 378-8417</p>
                <p>(202) 468-9657</p>

                
              </div>
            <div>
                <h6>Address</h6>
                <p>Fairfax, VA</p>
                
              </div>
            <div>
                <h6>E-mail</h6>
                <p>info@casanovabuilders.com</p>
                
              </div>
        </Grid>
      </Grid>
        </ContactContainer>
    )
}

export default Contact
