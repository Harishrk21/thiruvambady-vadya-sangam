import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

import { BRAND_NAME, BRAND_NAV } from "../data/contactInfo";

const logo = `${process.env.PUBLIC_URL}/tvs-logo.png`;

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/chenda-melam-chennai", label: "Wedding Melam" },
  { to: "/chenda-classes-chennai", label: "Classes" },
  { to: "/courses", label: "Courses" },
  { to: "/melams", label: "Melams" },
  { to: "/instruments", label: "Instruments" },
  { to: "/programs", label: "Programs" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt={BRAND_NAME} className="logo-img" />
            <div className="brand-text">
              <span className="brand-name">{BRAND_NAV.line1}</span>
              <span className="brand-sub">{BRAND_NAV.line2}</span>
            </div>
          </Link>

          <div className="navbar-desktop">
            <div className="navbar-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `navbar-link${isActive ? " active" : ""}`
                  }
                  end={link.to === "/"}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <Link to="/courses" className="navbar-cta">
              Enroll Now
            </Link>
          </div>

          <button
            type="button"
            className={`navbar-toggle${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`navbar-overlay${menuOpen ? " visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside className={`navbar-mobile${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `mobile-link${isActive ? " active" : ""}`
              }
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <Link to="/courses" className="mobile-cta" onClick={() => setMenuOpen(false)}>
          Enroll Now
        </Link>
      </aside>
    </header>
  );
};

export default Navbar;
