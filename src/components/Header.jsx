import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  useEffect(() => {
    // -------- MOBILE DROPDOWN TOGGLE (same JS logic) -------
    const buttons = document.querySelectorAll(".dropdown-btn");

    buttons.forEach(btn => {
      btn.addEventListener("click", function (e) {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          const submenu = this.nextElementSibling;
          submenu.classList.toggle("open");
        }
      });
    });

    // cleanup (important in React)
    return () => {
      buttons.forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
      });
    };
  }, []);

  return (
    <header>
      <div className="logo">
        {/* image path SAME as HTML */}
        <img src="/Images/JKLOGO.svg" />
      </div>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>

          <li className="dropdown">
            <a href="#" className="dropdown-btn">CCTV</a>
            <ul className="submenu">
              <li><Link to="/cctv">IP (Internet Protocol)</Link></li>
              <li><Link to="/cctv">Analogue</Link></li>
              <li><Link to="/cctv">Wireless</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" className="dropdown-btn">Alarms</a>
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
  );
};

export default Header;
