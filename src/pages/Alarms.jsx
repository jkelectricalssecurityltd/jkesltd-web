import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/alarms.css";

import logo from "../assets/images/JKLOGO.png";
import heroBg from "../assets/images/FIREALARMBG.jpeg";
import conventionalImg from "../assets/images/conventional fire alarm system.png";
import addressableImg from "../assets/images/Addressable alarm.jpg";

const Alarms = () => {

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

          <h1 className="main-title">FIRE ALARMS</h1>
          <p className="sub-text">LOCATION: CROYDON</p>
        </div>
      </div>

      {/* CONVENTIONAL */}
      <section className="single-hex-section fade-up">
        <div className="single-hex">
          <img src={conventionalImg} alt="Conventional Alarm" />
        </div>

        <div className="single-hex-content">
          <h1>CONVENTIONAL ALARMS</h1>
          <p>
            Conventional fire alarm systems use wired zones to detect and identify fire or smoke within specific areas of a building.
            They offer reliable and cost-effective protection for small to medium-sized properties such as offices, shops, schools, and residential complexes.
            When an alarm is triggered, the control panel identifies the affected zone, enabling quick response and evacuation.
            These systems support a wide range of detectors including smoke, heat, and manual call points, providing flexible safety coverage.
            Conventional alarms are trusted, durable, and straightforward to maintain, making them an ideal choice for dependable fire safety solutions.
          </p>
        </div>
      </section>

      {/* ADDRESSABLE */}
      <section className="single-hex-section fade-up">
        <div className="single-hex-content">
          <h1>ADDRESSABLE ALARMS</h1>
          <p>
            Addressable fire alarm systems provide advanced, intelligent fire detection by assigning a unique digital address to each device in the network.
            When an alarm is triggered, the control panel displays the exact detector location, enabling rapid identification and precise emergency response.
            These systems significantly reduce false alarms through smart monitoring and continuous self-diagnostics.
            Ideal for large and complex buildings such as hospitals, industries, hotels, and commercial complexes requiring high-level safety.
            Scalable, efficient, and highly reliable, addressable alarms deliver superior protection with real-time control and seamless system integration.
          </p>
        </div>

        <div className="single-hex">
          <img src={addressableImg} alt="Addressable Alarm" />
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

export default Alarms;
