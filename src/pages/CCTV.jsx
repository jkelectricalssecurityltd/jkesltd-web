import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/cctv.css";
import logo from "../assets/images/JKLOGO.png";
import heroBg from "../assets/images/REMOTEMONITORING.jpg";
import ipCam from "../assets/images/ip cam.jpg";
import analogCam from "../assets/images/analog cam.jpg";
import wirelessCam from "../assets/images/wireless cam.jpg";
import dahua from "../assets/images/dahuaa.png";
import hikvision from "../assets/images/hikvison.png";

const CCTV = () => {

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
                <li><Link to="/cctv">Analog</Link></li>
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

      {/* HERO */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="overlay"></div>
        <div className="content">
          <div className="small-title">
            <span className="line"></span>
            <span>J&K Electricals Security LTD</span>
            <span className="line"></span>
          </div>

          <h1 className="main-title">CCTV INSTALLATIONS</h1>
          <p className="sub-text">LOCATION: CROYDON</p>
        </div>
      </div>

      {/* IP */}
      <section className="single-hex-section fade-up">
        <div className="single-hex"><img src={ipCam} alt="IP Camera" /></div>
        <div className="single-hex-content">
          <h1>IP (Internet Protocol)</h1>
          <p>
            IP Cameras deliver high-definition digital surveillance with superior clarity and secure network-based recording.
            They support remote monitoring from smartphones and computers, enabling real-time access from anywhere.
            Advanced features like motion detection, night vision, and AI analytics enhance proactive security and threat response.
            Scalable and flexible, IP cameras integrate seamlessly with NVRs and cloud storage for reliable footage management.
            Perfect for homes, offices, and commercial environments, IP cameras ensure smart, future-ready protection with complete peace of mind.
          </p>
        </div>
      </section>

      {/* ANALOG */}
      <section className="single-hex-section fade-up">
        <div className="single-hex-content">
          <h1>Analog</h1>
          <p>
            Analog cameras are traditional CCTV systems that transmit video signals through coaxial cables to a DVR for recording and monitoring.
            They offer reliable security coverage with stable performance and are ideal for basic surveillance requirements.
            Analog systems are cost-effective and simple to install, making them a popular choice for residential and small business applications.
            They operate efficiently without depending on network bandwidth, ensuring smooth continuous recording.
            With modern enhancements like HD-TVI, HD-CVI, and AHD, analog cameras now support high-resolution video up to 1080p and beyond.
          </p>
        </div>
        <div className="single-hex"><img src={analogCam} alt="Analog Camera" /></div>
      </section>

      {/* WIRELESS */}
      <section className="single-hex-section fade-up">
        <div className="single-hex"><img src={wirelessCam} alt="Wireless Camera" /></div>
        <div className="single-hex-content">
          <h1>Wireless</h1>
          <p>
           Wireless cameras provide flexible and cable-free surveillance by transmitting video over Wi-Fi, eliminating the need for complex wiring.
           They are quick to install and ideal for locations where cabling is difficult, such as rentals, homes, and temporary sites.
           Users can access live footage remotely through mobile apps, enabling real-time monitoring and instant alerts.
           Many wireless cameras feature battery or solar power options, two-way audio, motion detection, and cloud recording.
           Offering modern convenience and smart security, wireless cameras deliver reliable protection with easy scalability and minimal installation effort.
          </p>
        </div>
      </section>




      {/* PARTNERS */}
      <section className="partners-section">
        <h2 className="partners-title">We are dealing with</h2>
        <div className="partners-logos">
          <img src={dahua} alt="Dahua" />
          <img src={hikvision} alt="Hikvision" />
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
        rel="noreferrer"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>
    </>
  );
};

export default CCTV;
