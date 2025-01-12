import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  const isActiveHome = () => location.pathname === "/" && !location.hash;
  const isActiveTestimonials = () => location.hash === "#testimonials";
  const isActiveServices = () => location.hash === "#services";

  return (
    <div className="header-container">
      <div className="logo">
        <img src="./logo.png" alt="Ezy Skills Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={isActiveHome() ? "active-link" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#services"
              className={isActiveServices() ? "active-link" : ""}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#testimonials"
              className={isActiveTestimonials() ? "active-link" : ""}
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Blogs
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact Us
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Gallery
            </NavLink>
          </li> */}
        </ul>
      </nav>
      <button className="contact-us-btn">Contact us</button>
    </div>
  );
}

export default Header;
