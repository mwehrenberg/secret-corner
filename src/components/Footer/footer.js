import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./footer.css";
import logo from "../../images/logo.png"
import whatsapp from "../../images/utils/whatsapp.webp"

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div>
        <img src={logo} alt="Secret Corner Hostel Logo" className="footer-logo" />
      </div>
      <div className="column address">
        <h4>Contact Us</h4>
        <p><a target="_blank" href="https://maps.app.goo.gl/YqgqUd35oBtrDMDP6" rel="noreferrer">40/1 Sanpanard Soi 2, Wiang, <br></br>Mueang Chiang Rai District, Chiang Rai 57000, Thailand</a></p>
        <p>Reception Hours: 07:00 - 20:00</p>
        <p>
          <a href="https://wa.me/66613326191" target="_blank" rel="noopener noreferrer" class="whatsapp-link">
            Reach us on WhatsApp
            <img src={whatsapp} alt="WhatsApp" class="wa-icon" />
          </a>
        </p>

      </div>
      <div className="column links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="https://book-directonline.com/properties/secretcornerDirect" target="_blank" rel="noreferrer">Book Now</a></li>
        </ul>
      </div>
      <div className="column socials">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com/p/Secret-Corner-61575242781653/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/secretcornerhostel/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="mailto:secretcornerhostel@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Secret Corner Hostel</p>
    </div>
  </footer>
);

export default Footer;