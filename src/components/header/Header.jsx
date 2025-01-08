import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="./logo.png" alt="Ezy Skills Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
        </ul>
      </nav>
      {/* <div className="buttons">
        <button className="login-btn">Log In</button>
        <button className="create-account">Create Account</button>
      </div> */}
    </div>
  );
}

export default Header;
