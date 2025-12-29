import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const Contact = () => {
  // Use refs to access the form DOM elements directly for EmailJS
  const contactFormRef = useRef();
  const quoteFormRef = useRef();
  
  // State for popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // State for button labels - uses the object logic we discussed
  const [btnText, setBtnText] = useState({ 
    contact: "Submit", 
    quote: "Submit" 
  });
  
  // State to show/hide success messages
  const [success, setSuccess] = useState({ 
    contact: false, 
    quote: false 
  });

  // --- YOUR EMAILJS CREDENTIALS ---
  const SERVICE_ID = "service_ss73srr";
  const TEMPLATE_ID = "template_q103b69";
  const PUBLIC_KEY = "vZi4ov88G9NAu8J0-";

  // Handles mobile submenu toggling
  const handleDropdownClick = (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const submenu = e.currentTarget.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle("open");
      }
    }
  };

  // The main function to send emails via EmailJS
  const sendEmail = (e, formRef, type) => {
    e.preventDefault();
    
    // 1. Set specific button to loading state
    setBtnText((prev) => ({ ...prev, [type]: "Sending..." }));

    // 2. Send the form data to EmailJS
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        // 3. Update UI on success
        setBtnText((prev) => ({ ...prev, [type]: "Sent ✓" }));
        setSuccess((prev) => ({ ...prev, [type]: true }));
        
        // 4. Reset the actual HTML form
        formRef.current.reset();

        // 5. Clean up UI after 3 seconds
        setTimeout(() => {
          setSuccess((prev) => ({ ...prev, [type]: false }));
          setBtnText((prev) => ({ ...prev, [type]: "Submit" }));
          if (type === "quote") setIsPopupOpen(false);
        }, 3000);
      }, (error) => {
        // Handle errors (e.g., network issues)
        console.error("FAILED...", error.text);
        alert("Failed to send. Please check your connection.");
        setBtnText((prev) => ({ ...prev, [type]: "Submit" }));
      });
  };

  return (
    <>
      {/* HEADER SECTION */}
      <header>
        <div className="logo">
          <img src="/images/JKLOGO.png" alt="Logo" />
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li className="dropdown">
            <Link to="/cctv" className="dropdown-btn">CCTV</Link>
             <ul className="submenu">
             <li><Link to="/cctv">IP (Internet Protocol)</Link></li>
             <li><Link to="/cctv">Analogue</Link></li>
             <li><Link to="/cctv">Wireless</Link></li>
             </ul>
             </li>
            <li className="dropdown">
            <Link to="/alarms" className="dropdown-btn">Alarms</Link> 
             <ul className="submenu">
             <li><Link to="/alarms">Conventional</Link></li>
             <li><Link to="/alarms">Addressable</Link></li>
             </ul>
            </li>
            <li><a href="/pattesting">PAT Testing</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* CONTACT HERO SECTION */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>Have a question or need support? We are here to help.</p>
            <div className="info-box"><i className="fa fa-phone" /> +44 7733927558, +44 7359920729</div>
            <div className="info-box"><i className="fa fa-envelope" /> contact@jkelectricalssecurityltd.co.uk</div>
            <div className="info-box"><i className="fa fa-map-marker" /> Croydon</div>
          </div>

          {/* MAIN CONTACT FORM */}
          <form className="contact-form" ref={contactFormRef} onSubmit={(e) => sendEmail(e, contactFormRef, "contact")}>
            <h3>Send Us a Message</h3>
            {/* The 'name' attributes below match your EmailJS template variables */}
            <input name="name" placeholder="Full Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="address" placeholder="Address" required />
            <input name="phone" placeholder="Phone" required />
            <textarea name="message" rows="5" placeholder="Your Message" required />
            
            {/* Success message displays only when success.contact is true */}
            <div className="success-msg" style={{ display: success.contact ? "block" : "none" }}>
              ✓ Message Sent Successfully
            </div>
            
            <button type="submit" className={btnText.contact !== "Submit" ? "sending" : ""}>
              {btnText.contact}
            </button>
          </form>
        </div>

        {/* TRIGGER FOR POPUP */}
        <button className="info-btn" onClick={() => setIsPopupOpen(true)}>Get A Quote</button>
      </section>

      {/* POPUP OVERLAY & FORM */}
      {isPopupOpen && (
        <div className="popup-overlay" style={{ display: "flex" }} onClick={() => setIsPopupOpen(false)}>
          <div className="popup-form" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setIsPopupOpen(false)}>×</span>
            <h2>Book a Call</h2>
            <form ref={quoteFormRef} onSubmit={(e) => sendEmail(e, quoteFormRef, "quote")}>
              <input name="name" placeholder="Full Name" required />
              <input name="phone" placeholder="Mobile Number" required />
              <input name="quote_time" type="time" required />              
              <div className="success-msg" style={{ display: success.quote ? "block" : "none" }}>
                ✓ Quote Request Sent
              </div>
              
              <button type="submit" className={`submit-btn ${btnText.quote !== "Submit" ? "sending" : ""}`}>
                {btnText.quote}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="jk-footer">
        <div className="jk-footer-container">
          <div className="jk-footer-about">
            <h2>J&K Electricals Security LTD</h2>
            <p>Providing trusted Electrical, Security & Fire Safety solutions with quality service and professional installation.</p>
          </div>
          <div className="jk-footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/cctv">CCTV Installation</a></li>
              <li><a href="/alarms">Alarms</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="jk-footer-contact">
            <h3>Contact Info</h3>
            <p><i className="fa fa-phone"></i> +44 7733927558</p>
            <p><i className="fa fa-envelope"></i> contact@jkelectricalssecurityltd.co.uk</p>
            <div className="jk-social-icons">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/jkelectricalssecurityltd" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="jk-footer-bottom">
          <p>© 2025 J&K Electricals Security LTD — All Rights Reserved.</p>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTONS */}
      <a href="https://wa.me/447733927558" target="_blank" rel="noopener noreferrer" className="whatsapp-chat">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a href="mailto:contact@jkelectricalssecurityltd.co.uk" className="email-float">
        <i className="fa-solid fa-envelope"></i>
      </a>
    </>
  );
};

export default Contact;