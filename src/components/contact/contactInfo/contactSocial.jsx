import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";

import FacebookIcon from "../../../assets/contact/facebook.svg";
import TwitterIcons from "../../../assets/contact/twitter.svg";
import InstaIcon from "../../../assets/contact/instagram.svg";
import LinkedinIcon from "../../../assets/contact/linkedin.svg";
import GithubIcon from "../../../assets/contact/github.svg";

const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <a
            href="https://www.facebook.com/bishty1810/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="facebook" />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a
            href="https://twitter.com/Bishty1810"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterIcons} alt="Twitter" />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a
            href="https://www.instagram.com/bishty1810/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstaIcon} alt="Instagram" className='insta-icon'/>
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a
            href="https://www.linkedin.com/in/bishty1810/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="Linkedin" />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a
            href="https://github.com/Abishty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="GitHub" />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
