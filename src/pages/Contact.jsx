import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";


const Contact = () => {

  const handleDropdownClick = (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const submenu = e.currentTarget.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle("open");
      }
    }
  };
  useEffect(() => {

    // CONTACT FORM
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const btn = this.querySelector("button");
        const success = this.querySelector(".success-msg");

        btn.classList.add("sending");
        btn.innerText = "Preparing…";

        const gmailURL =
          `https://mail.google.com/mail/?view=cm&fs=1` +
          `&to=contact@jkelectricalssecurityltd.co.uk` +
          `&su=Service Enquiry` +
          `&body=` +
          encodeURIComponent(
            `Name: ${name.value}\nEmail: ${email.value}\nAddress: ${Address.value}\nPhone: ${phone.value}\n\nMessage:\n${message.value}`
          );

        window.open(gmailURL, "_blank", "noopener,noreferrer");

        setTimeout(() => {
          btn.classList.remove("sending");
          btn.innerText = "Sent ✓";
          success.style.display = "block";
          contactForm.reset();

          setTimeout(() => {
            success.style.display = "none";
            btn.innerText = "Submit";
          }, 3000);
        }, 600);
      });
    }

    // POPUP OPEN / CLOSE
    const openPopup = document.getElementById("openPopup");
    const closePopup = document.getElementById("closePopup");
    const popupOverlay = document.getElementById("popupOverlay");

    openPopup?.addEventListener("click", () => popupOverlay.style.display = "flex");
    closePopup?.addEventListener("click", () => popupOverlay.style.display = "none");
    window.addEventListener("click", e => {
      if (e.target === popupOverlay) popupOverlay.style.display = "none";
    });

    // CALL FORM
    const callForm = document.getElementById("callForm");
    if (callForm) {
      callForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const btn = this.querySelector("button");
        const success = this.querySelector(".success-msg");

        btn.classList.add("sending");
        btn.innerText = "Preparing…";

        const gmailURL =
          `https://mail.google.com/mail/?view=cm&fs=1` +
          `&to=contact@jkelectricalssecurityltd.co.uk` +
          `&su=Call Back Request` +
          `&body=` +
          encodeURIComponent(
            `Name: ${popupName.value}\nPhone: ${popupPhone.value}\nPreferred Time: ${popupTime.value}`
          );

        window.open(gmailURL, "_blank", "noopener,noreferrer");

        setTimeout(() => {
          btn.classList.remove("sending");
          btn.innerText = "Sent ✓";
          success.style.display = "block";
          callForm.reset();

          setTimeout(() => {
            popupOverlay.style.display = "none";
            success.style.display = "none";
            btn.innerText = "Submit";
          }, 3000);
        }, 600);
      });
    }
  }, []);

  return (
    <>
      {/* HEADER */}
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
             <a href="#" className="dropdown-btn" onClick={handleDropdownClick}>CCTV</a>
              <ul className="submenu">
                <li><a href="/cctv">IP</a></li>
                <li><a href="/cctv">Analogue</a></li>
                <li><a href="/cctv">Wireless</a></li>
              </ul>
            </li>
            <li className="dropdown">
             <a href="#" className="dropdown-btn" onClick={handleDropdownClick}>Alarms</a>
              <ul className="submenu">
                <li><a href="/alarms">Conventional</a></li>
                <li><a href="/alarms">Addressable</a></li>
              </ul>
            </li>
            <li><a href="/pattesting">PAT Testing</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>Have a question or need support? We are here to help.</p>
            <div className="info-box"><i className="fa fa-phone" /> +44 7733927558, +44 7359920729</div>
            <div className="info-box"><i className="fa fa-envelope" /> contact@jkelectricalssecurityltd.co.uk</div>
            <div className="info-box"><i className="fa fa-map-marker" /> Croydon</div>
          </div>

          <form className="contact-form" id="contactForm">
            <h3>Send Us a Message</h3>
            <input id="name" placeholder="Full Name" required />
            <input id="email" type="email" placeholder="Email" required />
            <input id="Address" placeholder="Address" required />
            <input id="phone" placeholder="Phone" required />
            <textarea id="message" rows="5" placeholder="Your Message" required />
            <div className="success-msg">✓ Message ready to send</div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <button className="info-btn" id="openPopup">Get A Quote</button>
      </section>

      {/* POPUP */}
      <div className="popup-overlay" id="popupOverlay">
        <div className="popup-form">
          <span className="close-btn" id="closePopup">×</span>
          <h2>Book a Call</h2>
          <form id="callForm">
            <input id="popupName" placeholder="Full Name" required />
            <input id="popupPhone" placeholder="Mobile" required />
            <input id="popupTime" type="time" required />
            <div className="success-msg">✓ Message ready to send</div>
            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>


      
     {/* Footer */}
<footer className="jk-footer">
  <div className="jk-footer-container">

    {/* ABOUT */}
    <div className="jk-footer-about">
      <h2>J&K Electricals Security LTD</h2>
      <p>
        Providing trusted Electrical, Security & Fire Safety solutions with
        quality service and professional installation.
      </p>
    </div>

    {/* QUICK LINKS */}
    <div className="jk-footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cctv">CCTV Installation</a></li>
        <li><a href="/alarms">Alarms</a></li>
        <li><a href="/pattesting">PAT Testing</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>

    {/* CONTACT INFO */}
    <div className="jk-footer-contact">
      <h3>Contact Info</h3>
      <p><i className="fa fa-phone"></i> +44 7733927558, +44 7359920729</p>
      <p><i className="fa fa-envelope"></i> contact@jkelectricalssecurityltd.co.uk</p>
      <p><i className="fa fa-map-marker"></i> Croydon</p>

      <div className="jk-social-icons">
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a
          href="https://www.instagram.com/jkelectricalssecurityltd?igsh=emtnZnk0a3YxbzEw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="jk-footer-bottom">
    <p>© 2025 J&K Electricals Security LTD — All Rights Reserved.</p>
  </div>
</footer>

     {/*Float Icons */}
     <a
  href="https://wa.me/447733927558"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-chat"
>
  <i className="fa-brands fa-whatsapp"></i>
</a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@jkelectricalssecurityltd.co.uk"
        className="email-float"
        target="_blank"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>

    </>
  );
};

export default Contact;
