import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import linkedIn from '../../assets/linked-in.png';
import insta from '../../assets/instagram.png';
import whatsapp from '../../assets/whats-app.png';
import ContactUs from '../contactus/ContactUs';

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <ContactUs />
      <div className='footer-content'>
        <div className="footer-content-left">
          <h1>Connect, Learn, Grow!</h1>
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-content-center">
          <h1>Socials</h1>
          <ul>
            <li>
              <a href="https://www.linkedin.com/company/hacc-thehackathon-and-coding-club/">
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/the_hacc/profilecard/?igsh=MW43aThmZGx1eXh6YQ==">
                <img src={insta} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://chat.whatsapp.com/FRXKH7xvePHHRZSkVyMA82">
                <img src={whatsapp} alt="WhatsApp" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h1>Contacts</h1>
          <ul>
            <li>Lohith P: +91-7483856694</li>
            <li>Vivith: +91-6366335543</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="cr">
        <p>{currentYear} HACC. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;