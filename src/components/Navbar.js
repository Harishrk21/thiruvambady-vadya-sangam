import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // If you share a new transparent logo file, replace this path
import "../styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo & Title */}
      <div className="navbar-logo">
        <Link to="/" className="title-link">
          <img src={logo} alt="Logo" className="logo-img" />
          <h1 className="navbar-title">Sri Balamanikanda Vaadhya Kalakshethram</h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/courses" className="navbar-link">Courses</Link>
        <Link to="/instruments" className="navbar-link">Instruments</Link>
        <Link to="/programs" className="navbar-link">Programs</Link>
        <Link to="/awards" className="navbar-link">Awards</Link>
        <Link to="/testimonials" className="navbar-link">Testimonials</Link>
        <Link to="/gallery" className="navbar-link">Gallery</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;