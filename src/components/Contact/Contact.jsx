import React from "react";
import classes from "./Contact.module.scss";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className={classes.contact} id="contact">
      <h1 className={classes.title}>CONTACT US</h1>
      <div className={classes.content}>
        <div className={classes.info}>
          <div className={classes.getInTouch}>
            <p className={classes.name}>GET IN TOUCH</p>
            <p className={classes.emailAddress}>Email Address:</p>
            <p className={classes.myEmail}>tinatripak2002@gmail.com</p>
            <div className={classes.icons}>
              <FaLinkedin size={50}/>
              <img
                src={process.env.PUBLIC_URL + "/images/gmailIcon.jpeg"}
                alt="gmail icon"
              />
              <FaGithub size={45}/>
            </div>
          </div>
          <div className={classes.location}>
            <p className={classes.name}>LOCATION</p>
            <p className={classes.currentlyLocation}>Currently living in:</p>
            <p className={classes.myLocation}>Toronto, ON, Canada</p>
          </div>
        </div>
        <div className={classes.resume}>
          <img src={process.env.PUBLIC_URL + "/images/resume.png"} alt="Resume" /><br/>
          <a href={process.env.PUBLIC_URL + "/Kristina_Tripak_CV.pdf"} download="Kristina_Tripak_CV.pdf">DOWNLOAD CV</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
