import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

import logo from "../assets/images/JKLOGO.png";
import heroBg from "../assets/images/ABOUTUS.jpg";
import aboutHex from "../assets/images/ABOUTUSHEX.jpg";

const About = () => {

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

    // SCROLL ANIMATION
    const animatedItems = document.querySelectorAll(".fade-up");

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      animatedItems.forEach((item, index) => {
        if (item.getBoundingClientRect().top < windowHeight - 80) {
          setTimeout(() => item.classList.add("show"), index * 200);
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>

            <li className="dropdown">
              <a href="#" className="dropdown-btn" onClick={handleDropdownClick}>CCTV</a>
              <ul className="submenu">
                <li><Link to="/cctv">IP</Link></li>
                <li><Link to="/cctv">Analogue</Link></li>
                <li><Link to="/cctv">Wireless</Link></li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#" className="dropdown-btn" onClick={handleDropdownClick}>Alarms</a>
              <ul className="submenu">
                <li><Link to="/alarms">Conventional System</Link></li>
                <li><Link to="/alarms">Addressable System</Link></li>
              </ul>
            </li>

            <li><Link to="/pattesting">PAT Testing</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="overlay"></div>
        <div className="content">
          <div className="small-title">
            <span className="line"></span>
            <span>J&K Electricals Security LTD</span>
            <span className="line"></span>
          </div>

          <h1 className="main-title">ABOUT US</h1>
          <p className="sub-text">LOCATION: CROYDON</p>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <section className="single-hex-section fade-up">
        <div className="single-hex">
          <img src={aboutHex} alt="About Us" />
        </div>

        <div className="single-hex-content">
          <h1>WHO WE ARE..</h1>
          <p>
           Welcome to our J&K SECURITY ELECTRICALS LTD, where safety, innovation, and reliability come 
      together to protect what matters most. We specialize in providing end-to-end security services 
      including CCTV installation, fire alarm systems, access control, intruder alarms, and smart 
      surveillance solutions designed for homes, businesses, and industrial environments.<br></br>
      
      With a dedicated team of trained and certified professionals, we deliver precision-engineered 
      installations, advanced technology, and flawless system performance tailored to each client’s 
      unique requirements. Our goal is simple — to provide uncompromising protection, real-time monitoring,
      and complete peace of mind through intelligent and future-ready security solutions.<br></br>

      We take pride in our commitment to quality, transparency, and exceptional customer service, 
      ensuring every project is completed to the highest standards. From the initial site survey to 
      installation, configuration, and ongoing support, we handle everything with professionalism and care.<br></br>

      Choosing us means choosing a partner who values your safety as much as you do — a team dedicated to 
      creating secure, smart, and connected environments with reliability you can trust.
          </p>
        </div>
      </section>

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


      {/* FLOAT BUTTONS */}
      <Link to="/contact" className="whatsapp-chat">
        <i className="fa-brands fa-whatsapp"></i>
      </Link>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@jkelectricalssecurityltd.co.uk"
        className="email-float"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>
    </>
  );
};

export default About;
