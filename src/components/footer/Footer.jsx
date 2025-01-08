import React from "react";
import "./Footer.css";
import location from "../../assets/svg/locationicon.svg";
import email from "../../assets/svg/emailicon.svg";
import call from "../../assets/svg/callicon.svg";

function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <img src="./logo.png" alt="hey world" className="footer-logo-img" />
          <p>
            Let Us build your career together Be the first person to transform
            yourself with our unique & world class corporate level trainings.
          </p>
        </div>
        <div class="footer-links">
          <h5>
            Quick <span className="text-highlight">Links</span>
          </h5>
          <ul>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Blogs</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">Courses</a>
            </li>
            <li>
              <a href="/">Testimonials</a>
            </li>
          </ul>
        </div>
        <div class="footer-links">
          <h5>
            Contact <span className="text-highlight">Us</span>
          </h5>
          <div className="footer-contact-section">
            <img src={location} alt="location" />
            <p>
              Navakethan Complex, 6th Floor, 605, 606 A&P opp, CLock Tower, SD
              Road, Secunderabad, Telangana 500003
            </p>
          </div>
          <div className="footer-contact-section">
            <img src={email} alt="email" />
            <p>info@heyworld.in</p>
          </div>
          <div className="footer-contact-section">
            <img src={call} alt="phone" />
            <p>
              +91 8428448903 <br />
              +91 9475484959
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
