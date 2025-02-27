import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/footer_logo.svg";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-logo">
            <img src={logo} alt="HACC" />
          </div>
          <p>HaccVerse'25, a groundbreaking hackathon by HACC and Reva University, redefines creativity and technology. Join us in the pursuit of innovation, transcending traditional hackathons.</p>
        </div>
        <div className="footer-content-center">
          <h1>Address</h1>
          <iframe
          title="REVA University Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.034979560453!2d77.6334057!3d13.115358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae191736187a37%3A0x3092096ba7fb4c9b!2sREVA%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1711189183080!5m2!1sen!2sin"
          width="100%"
          height="180"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
        <div className="footer-content-right">
          <h1>Contacts</h1>
          <ul>
            <li>Rahul: +91-6363508155</li>
            <li>Pritam: +91-8904288562</li>
            <li><a href="mailto:hashhacc@gmail.com">hashhacc@gmail.com</a></li>
            <ul className="socials">
            <li>
              <a href="https://www.linkedin.com/company/hacc-thehackathon-and-coding-club/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/the_hacc/profilecard/?igsh=MW43aThmZGx1eXh6YQ==" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://chat.whatsapp.com/D53Ybf2CnVGBY969XsTL0K" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </li>
          </ul>
          </ul>
        </div>
      </div>
      <hr />
      <div className="cr">
        <p>&#169; {currentYear} HACC. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
