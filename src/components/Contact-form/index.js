import React, { useState } from "react";

import * as emailjs from "emailjs-com";

import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ContactFormContainer,
  ContactFormItems,
  SelectContactWayContainer,
  ContactFormItemsMessage,
} from "./ContactFormElements";

const useStyles = makeStyles({
  root: {},
});

const emptyEmail = {
  from_name: "",
  from_email: "",
  to_name: "AnthonyTC",
  message_html: "",
  constactWays: "",
  from_phone: "",
};

const ContactForm = () => {
  const [email, setEmail] = useState(emptyEmail);
  const [message, setMessage] = useState(null)

  const handleChange = (event) => {
    event.persist();
    setEmail((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };


 
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await emailjs.send(
       "service_iw8rqxe",
       "template_c78rhr2",
        email,
       "user_vIyt2IDY0WZiyrBlYHKAm"
      );
      setEmail(emptyEmail);
      setMessage(<p className="feedack-text"><strong>Thank you for reaching out to us!</strong><br /> Someone from our extraordinary team will contact you by your preferred method within the next business day!</p>);
    } catch (err) {
      alert("Please, try ro send your email again. If you've tried to resend it once again and it didn't work. Please send your message to info@casanovabuilders.com and inform us about this error.");
    }
  };
  const classes = useStyles();

  const contactWaysArr = [
    {
      value: "call",
      label: "Call me",
    },
    {
      value: "Text",
      label: "Send me a text",
    },
    {
      value: "Email",
      label: "Send me an email",
    },
  ];

 
  return (
    <>
      <ContactFormContainer container>
        <form
          id="myForm"
          onSubmit={handleSubmit}
          className="contact_form_class"
        >
          <ContactFormItems item>
            <TextField
              id="outlined-basic"
              type="text"
              name="from_name"
              label="What's your name?"
              variant="outlined"
              value={email.from_name}
              onChange={handleChange}
            />
            <TextField
              className={classes.root}
              id="outlined-select-currency"
              select
              name="contactWays"
              label="What's the best way to contact you?"
              value={email.contactWays}
              onChange={handleChange}
              variant="outlined"
              color="primary"
              text="primary"
            >
              {contactWaysArr.map((option) => (
                <SelectContactWayContainer
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectContactWayContainer>
              ))}
            </TextField>
          </ContactFormItems>
          <ContactFormItems item>
            <TextField
              className="email-field"
              name="from_email"
              id="outlined-basic"
              label="What's your email?"
              variant="outlined"
              text="primary"
              value={email.from_email}
              onChange={handleChange}
            />

            <TextField
              className="phone-input"
              label="What's your phone number?"
              type="number"
              variant="outlined"
              name="from_phone"
              value={email.from_phone}
              onChange={handleChange}
            />
          </ContactFormItems>

          <ContactFormItemsMessage>
            <TextField
              id="outlined-multiline-static"
              label="Share your project with us:"
              helperText="*If possible, please include: location, time frame and rough size of the project."
              multiline
              type="text"
              rows={7}
              variant="outlined"
              color="primary"
              text="primary"
              name="message_html"
              value={email.message_html}
              onChange={handleChange}
            />
          </ContactFormItemsMessage>
          <Button id="form-button" type="submit">Submit</Button>
           {message}
        </form>
      </ContactFormContainer>
    </>
  );
};

export default ContactForm;
