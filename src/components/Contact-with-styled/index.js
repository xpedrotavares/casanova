import React, {useState} from 'react'

import PhoneNumber from '../Contact/PhoneNumber'

import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import { Button } from "react-bootstrap";

import MenuItem from '@material-ui/core/MenuItem';

import 'bootstrap/dist/css/bootstrap.min.css'

import { ContactContainer, ContactHeaderSection, ContactFormContainer, ContactFormItems, ContactFormItemsMessage } from './ContactElements'

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
            
            <ContactHeaderSection>
            <h1>Get in touch</h1>
            <p className="constact__upper-text__first-p">Need help with your project?</p>
            <p className="constact__upper-text__last-p">Let’s talk about it!</p>
            <div> </div>
            </ContactHeaderSection>

            <ContactFormContainer container>
                <ContactFormItems item>

                <TextField
              className="single-line-inputs first-name-input"
              
              id="outlined-basic"
              label="What's your name?"
              variant="outlined"
              // error
              // helperText="Some validation error"
              />
            <TextField
           className="single-line-inputs "
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
          </ContactFormItems>
          <ContactFormItems item>

          <TextField
              className="single-line-inputs email-input"
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
          </ContactFormItems>
          <ContactFormItemsMessage>
          <TextField
              className="message-input"
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={7}
              //   defaultValue="Default Value"
              variant="outlined"
              />
          </ContactFormItemsMessage>
          <Button>Submit</Button>
            </ContactFormContainer>


        </ContactContainer>
    )
}

export default Contact
