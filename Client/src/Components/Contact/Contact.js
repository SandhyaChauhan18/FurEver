import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:techrangersofficial@gmail.com">
        techrangersofficial@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/garimamehra/">
          User Name: Tech Rangers
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/garimamehra">
        techrangersofficial
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/garimamehra/">
          @techrangersofficial
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+923019583959">
          +91 9876584676
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
