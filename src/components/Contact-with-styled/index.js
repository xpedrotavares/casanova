import React, {useState} from "react";

import * as emailjs from "emailjs-com"
import{ init } from 'emailjs-com';
import PhoneNumber from "../Contact/PhoneNumber";
import { TextField, FormControl } from "@material-ui/core";
import { Button } from "react-bootstrap";

import ContactForm from '../Contact-form/index'

import phoneIcon from "../../images/phone-icon.png";
import pinIcon from "../../images/pin-icon.png";
import letterIcon from "../../images/letter-icon.png";
import papersIcon from "../../images/papers-icon.svg";

import facebookIcon from "../../images/facebook-icon.png";
import instagramIcon from "../../images/instagram-icon.png";

import {
  Element,
} from "react-scroll";

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


// init("user_HTSeOWb2k9sLX2fyp4HyY");




//   const emptyEmail = {
//     from_name: '',
//     from_email: '',
//     to_name: 'AnthonyTC',
//     message_html: '',
//   };


const Contact = () => {
  // const contactWaysArr = [
  //   {
  //     value: "call",
  //     label: "Call me",
  //   },
  //   {
  //     value: "Text",
  //     label: "Send me a text",
  //   },
  //   {
  //     value: "Email",
  //     label: "Send me an email",
  //   },
  // ];
  const classes = useStyles();

  // const [contactWays, setCcontactWays] = React.useState("");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState(emptyEmail);
  // const [message, setMessage] = useState("")


  // const handleChange = (event) => {
  //   event.persist();
  //   setEmail((prev) => (
  //     { ...prev, [event.target.name]: event.target.value}
  //   ));
  // }

  
  // const handleContactWay = (event) => {
  //   setCcontactWays(event.target.value);
  // };
  
  // const handleName = (event) => {
  //   setName(event.target.value);
  // }
  
  // const handleEmail = (event) => {
  //   setEmail(event.target.value);
  // }
  // const [message, setMessage] = useState("");

  // const handleMessage = (event) => {
  //   setMessage(event.target.value);
  // }

  // function sendEmail(event) {
  //   event.preventDefault();
    
  //   emailjs.sendForm("gmail", event.target, "user_HTSeOWb2k9sLX2fyp4HyY")
  //   .then((result) => {
  //     console.log(result.text);
  //   }, (error) => {
  //     console.log(error.text);
  //   });
  // }

//   const templateParams = {
// name: '',
// email: '',
// constactWays: '',
// message: '',
// contactWays: '',
//   }

  // const handleSubmit =  async (event) => {
  //   event.preventDefault();
  //   try{

  //    await emailjs.send("service_0w1sbsi", "template_racj69e", email, "user_HTSeOWb2k9sLX2fyp4HyY");
  //    setEmail(emptyEmail);
  //   } catch (err) {
  //     alert('error')
  //   }
  // }

    // }
    //    .then(setEmail(emptyEmail))
    //  .then(function(response){
    //    console.log("Success!", response.status, response.text);
    //  }, function(error) {
    //    console.log('Failed', error)
    //  })

    
    //   setEmail(emptyEmail)
    // } catch (err) {
    //   console.log("deu ruim")
    // };

  
  // .sendForm(
  //   "gmail",
  //   "template_racj69e",
  //   ".contact_form_class",
  //   "user_HTSeOWb2k9sLX2fyp4HyY"
  // )
  // .then()
  // .catch();
  // this.setState({
  //   name: "",
  //   email: ""
  // })
  // event.target.reset()

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
        <p className="estimates-text">We offer<br />free estimates.</p>
        </section>
        <div> </div>
      </ContactHeaderSection>

     <ContactForm />

      <SocialMediasContainer>
        <a href="http://www.facebook.com/" rel="noreferrer" target="_blank">
          <img className="facebook-icon" src={facebookIcon} alt="facebook icon" />
        </a>
        <a
          href="http://www.instagram.com/casanovabuilders"
          rel="noreferrer"
          target="_blank"
        >
          <img className="instagram-icon" src={instagramIcon} alt="instagram icon" />
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