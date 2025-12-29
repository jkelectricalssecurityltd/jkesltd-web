import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="jk-footer">
      <div className="jk-footer-container">
        <div className="jk-footer-about">
          <h2>J&K Electricals Security LTD</h2>
          <p>Providing trusted Electrical, Security & Fire Safety solutions with quality service and professional installation.</p>
        </div>
        <div className="jk-footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cctv">CCTV Installation</Link></li>
            <li><Link to="/alarms">Alarms</Link></li>
            <li><Link to="/pattesting">Pat Testing</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="jk-footer-contact">
          <h3>Contact Info</h3>
          <p><i className="fa fa-phone"></i>+44 7733927558, +44 7359920729</p>
          <p><i className="fa fa-envelope"></i> contact@jkelectricalssecurityltd.co.uk</p>
          <p><i className="fa fa-map-marker"></i> Croydon</p>
          <div className="jk-social-icons">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/jkelectricalssecurityltd?igsh=emtnZnk0a3YxbzEw"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="jk-footer-bottom">
        <p>© 2025 J&K Electricals Security LTD — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;