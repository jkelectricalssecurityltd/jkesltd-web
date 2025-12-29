import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pattesting.css";

import logo from "../assets/images/JKLOGO.png";
import heroBg from "../assets/images/pat-tester.jpg";
import patHex from "../assets/images/PAT TESTING HEX.jpeg";
import certificateImg from "../assets/images/Certificate.jpeg";

const PatTesting = () => {

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

            <li><Link to="/pattesting">PAT Testing</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
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

          <h1 className="main-title">PAT TESTING</h1>
          <p className="sub-text">LOCATION: CROYDON</p>
        </div>
      </div>

      {/* PAT CONTENT */}
      <section className="single-hex-section fade-up">
        <div className="single-hex">
          <img src={patHex} alt="PAT Testing" />
        </div>

        <div className="single-hex-content">
          <h1>PAT TESTING</h1>
          <p>
            Portable Appliance Testing (PAT Testing) is an essential safety procedure that ensures 
            all electrical appliances in your workplace or commercial environment are functioning 
            safely and meet compliance standards. Our certified engineers perform detailed visual 
            inspections and advanced electrical tests to identify faults that could lead to electric shocks, 
            equipment failure, or fire hazards. Every appliance is thoroughly checked, labeled with a clear 
            pass or fail status, and documented in a full compliance report for safety audits and legal 
            requirements. With reliable testing, professional service, and accurate certification, 
            we help businesses maintain a safe working environment and protect employees, customers, 
            and property. Choose us for cost-effective, dependable, and fully compliant PAT testing services.
          </p>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="certification-section">
        <h2 className="certification-title">We are certified</h2>

        <div className="single-cert-container">
          <div className="cert-card">
            <img src={certificateImg} alt="ISO Certification" />
            <h4>ISO Certified</h4>
          </div>
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
      <a href="https://wa.me/447733927558" target="_blank" rel="noopener noreferrer" className="whatsapp-chat"><i className="fa-brands fa-whatsapp"></i></a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@jkelectricalssecurityltd.co.uk" className="email-float" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a>
    </>
  );
};

export default PatTesting;
