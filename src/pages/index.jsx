import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../styles/style.css";

import logo from "../assets/images/JKLOGO.svg";
import heroBg from "../assets/images/jkimage2.jpg";
import cctvInstall from "../assets/images/CCTVINSTALLATION.jpg";
import fireAlarm from "../assets/images/FIREALARM.jpg";
import patTesting from "../assets/images/PATTESTINGCHECK.jpg";

const Home = () => {
  const formRef = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    const successMsg = e.target.querySelector(".success-msg");

    btn.innerText = "Sending...";
    btn.disabled = true;

    // These IDs must match your EmailJS Dashboard exactly
    emailjs.sendForm(
      "service_ss73srr",     
      "template_q103b69",    
      formRef.current, 
      "vZi4ov88G9NAu8J0-"    
    )
    .then(() => {
        btn.innerText = "Sent ✓";
        if(successMsg) successMsg.style.display = "block";
        formRef.current.reset();
        
        setTimeout(() => {
          btn.innerText = "Submit";
          btn.disabled = false;
          if(successMsg) successMsg.style.display = "none";
        }, 4000);
    }, (error) => {
        console.error("FAILED...", error.text);
        btn.innerText = "Error! Try Again";
        btn.disabled = false;
    });
  };

  const handleEmailClick = (e) => {
  // This forces the browser to treat it as a direct command
  window.location.href = "mailto:contact@jkelectricalssecurityltd.co.uk?subject=Service Inquiry";
};


  return (
    <>
      {/*Header */}
      <header>
        <div className="logo"><img src={logo} alt="Logo" /></div>
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
            <Link to="/cctv" className="dropdown-btn">Alarms</Link> 
             <ul className="submenu">
             <li><Link to="/cctv">Conventional</Link></li>
             <li><Link to="/cctv">Addressable</Link></li>
             </ul>
            </li>
            <li><Link to="/pattesting">PAT Testing</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
          

      {/* Hero sectin */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="overlay"></div>
        <div className="content">
          <div className="small-title"><span className="line"></span><span>J&K Electricals Security LTD</span><span className="line"></span></div>
          <h1 className="main-title">CCTV & FIRE ALARMS <br /> INSTALLATION <br /> PAT TESTING</h1>
          <p className="sub-text">LOCATION: CROYDON</p>
        </div>
      </div>




      {/* HEX SECTIONS */}
      <section className="single-hex-section fade-up">
        <div className="single-hex"><img src={cctvInstall} /></div>
        <div className="single-hex-content">
          <h1>CCTV INSTALLATIONS<br />YOU CAN RELY ON</h1>
          <p>Our CCTV installation services provide advanced security solutions for homes, 
      businesses, and industrial spaces. We offer expert camera placement, high-definition video clarity, 
      and remote monitoring through mobile and web access. With certified technicians and customized system design,
       we ensure complete coverage and reliable performance day and night. Our installations include motion detection,
       night vision, and secure data storage for maximum protection. Choose us for trusted, cost-effective surveillance and 24/7 peace of mind.</p>
        </div>
      </section>

      <section className="single-hex-section fade-up">
        <div className="single-hex-content">
          <h1>FIRE ALARM INSTALLATIONS<br />YOU CAN RELY ON</h1>
          <p>Our fire alarm installation services provide reliable protection and early warning 
      solutions for residential, commercial, and industrial properties. We design and install 
      intelligent fire detection systems that respond instantly to smoke, heat, and fire emergencies. 
      With certified technicians and high-quality equipment, we ensure safe wiring, accurate placement, 
      and compliance with safety standards. Our systems include automatic alerts, sirens, and remote 
      monitoring for quick emergency response. Choose us for dependable fire safety solutions and complete peace of mind.</p>
        </div>
        <div className="single-hex"><img src={fireAlarm} /></div>
      </section>

      <section className="single-hex-section fade-up">
        <div className="single-hex"><img src={patTesting} /></div>
        <div className="single-hex-content">
          <h1>PAT TESTING<br />YOU CAN RELY ON</h1>
          <p>Our PAT testing (Portable Appliance Testing) services ensure electrical equipment is safe, 
      compliant, and functioning correctly in workplaces and commercial environments. 
      We perform detailed inspections and electrical testing on all portable appliances to 
      prevent hazards such as electric shocks, short circuits, and fire risks. With certified 
      engineers and advanced testing tools, we guarantee accurate results and reliable safety 
      certification. All tested equipment is labeled with pass/fail status, and a full compliance report 
      is provided for audit purposes. Choose us for professional, cost-effective PAT testing and a safer working environment.</p>
        </div>
      </section>






     {/* Review Section */}
     {/* CUSTOMER REVIEWS SECTION */}
<section className="reviews-section">
  <h2 className="reviews-title">What Our Customers Say</h2>

  <div className="reviews-viewport">
    <div className="reviews-track">

      {/* SET 1 */}
      <div className="review-card">
        <div className="review-stars">★★★★★</div>
        <p>Fire alarm system installed perfectly and tested properly.</p>
        <h4>Sophia Brown</h4>
        <span>Business Owner</span>
      </div>

      <div className="review-card">
        <div className="review-stars">★★★★★</div>
        <p>Excellent CCTV installation. Very professional service.</p>
        <h4>James Walker</h4>
        <span>Home Owner</span>
      </div>

      <div className="review-card">
        <div className="review-stars">★★★★★</div>
        <p>PAT testing completed on time with certification.</p>
        <h4>Michael Smith</h4>
        <span>Restaurant Manager</span>
      </div>

      {/* DUPLICATE SET (FOR SMOOTH LOOP) */}
      <div className="review-card">
        <div className="review-stars">★★★★★</div>
        <p>Fire alarm system installed perfectly and tested properly.</p>
        <h4>Sophia Brown</h4>
        <span>Business Owner</span>
      </div>

      <div className="review-card">
        <div className="review-stars">★★★★★</div>
        <p>Excellent CCTV installation. Very professional service.</p>
        <h4>James Walker</h4>
        <span>Home Owner</span>
      </div>

      <div className="review-card">
        <div className="review-stars">★★★★★</div>
        <p>PAT testing completed on time with certification.</p>
        <h4>Michael Smith</h4>
        <span>Restaurant Manager</span>
      </div>

    </div>
  </div>
</section>



      {/* CONTACT SECTION - Updated name attributes to match your screenshot */}
      <section className="contact-section fade-up">
        <div className="contact-container">
          <div className="contact-info fade-up">
            <h2>Contact Us</h2>
            <div className="info-box"><i className="fa-solid fa-phone"></i><span>+44 7733927558</span></div>
            <div className="info-box"><i className="fa-solid fa-envelope"></i><span>contact@jkelectricalssecurityltd.co.uk</span></div>
            <div className="info-box"><i className="fa-solid fa-location-dot"></i><span>Croydon</span></div>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="contact-form fade-up">
            <h3>Send Us a Message</h3>
            {/* Input names updated to match your template tags exactly */}
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="text" name="phone" placeholder="Phone Number" required />
            <input type="text" name="address" placeholder="Address" required />
            <textarea name="message" rows="5" placeholder="Your Message..." required></textarea>
            
            <button type="submit">Submit</button>
            <p className="success-msg" style={{display: 'none', color: '#0E7B99', marginTop: '10px', fontWeight: 'bold'}}>
               ✓ Thank you! We have received your inquiry.
            </p>
          </form>
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

export default Home;