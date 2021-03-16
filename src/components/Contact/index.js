import React from 'react'


import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import { Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css'

import { ContactContainer } from './ContactElements'
import './style.css'

const Contact = () => {
    return (
        <ContactContainer>
              <Grid className="container-contact d-flex justify-content-center align-items-center" container>
        
        <Grid className="contact__upper-text-grid" item>
            <h1>Get in touch</h1>
            <p className="constact__upper-text__first-p">Need a help in your new project?</p>
            <p className="constact__upper-text__last-p">Contact us today!</p>
            <span className="contact__upper-text-grid__span"> </span>
        </Grid>
        <Grid
          className="contact-form d-flex flex-column align-items-center justify-content-center"
          item
        >
            <container>
  
          <div>
            <TextField
              className="single-line-inputs first-name-input mr-4"
             
              id="outlined-basic"
              label="First name"
              variant="outlined"
              // error
              // helperText="Some validation error"
              />
            <TextField
              className="single-line-inputs last-name-input"
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              />
          </div>
  
          <div>
            <TextField
              className="single-line-inputs email-input mr-4"
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              />
            <TextField
              className="single-line-inputs phone-input"
              id="outlined-basic"
              label="Telephone"
              variant="outlined"
              />
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
                <p>+1 (202)405 9486</p>
                
              </div>
            <div>
                <h6>Address</h6>
                <p>311 M Street Northwest <br />
  Washington D.C., EUA
  </p>
                
              </div>
            <div>
                <h6>E-mail</h6>
                <p>casanovabuildd@gmail.com</p>
                
              </div>
        </Grid>
      </Grid>
        </ContactContainer>
    )
}

export default Contact
