import React, { Component } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact-container">
        <div className="card">
          <div className="front">
            <h2>Contact</h2>
            {/* <img src="main-background.jpg"></img> */}
          </div>
          <div className="back">
            <div className="back-content">
              <h2>Samnyeong Heo</h2>
              <div class="social-icons">
                <a href="mailto:hsn1017@vt.edu">
                  <FontAwesomeIcon icon={faEnvelope} size="3x"/>
                </a>
                <a href="https://www.linkedin.com/in/samnyeong">
                  <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="contact-title">
          <p>Contact</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <button>
              <a href="mailto:hsn1017@vt.edu">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} size="3x" color="white" />
                </div>
                <div className="contact-please">hsn1017@vt.edu</div>
              </a>
            </button>
          </div>
          <div className="contact-info">
            <button>
              <a href="https://www.linkedin.com/in/samnyeong">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" color="white" />
                </div>
                <div className="contact-please">Hit me</div>
              </a>
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Contact;
