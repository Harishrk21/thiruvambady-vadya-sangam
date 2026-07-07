import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { CONTACT, BRAND_NAME } from "../data/contactInfo";
import { CHENNAI_AREA_PAGES, getAreaPath } from "../data/chennaiAreaPages";

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="footer-list-link"
    onClick={() => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
      window.scrollTo(0, 0);
    }}
  >
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/chenda-melam-chennai">Chenda Melam Chennai</FooterLink></li>
            <li><FooterLink to="/chenda-classes-chennai">Chenda Classes Chennai</FooterLink></li>
            <li><FooterLink to="/courses">Courses</FooterLink></li>
            <li><FooterLink to="/melams">Panchari Melam</FooterLink></li>
            <li><FooterLink to="/programs">Wedding Programs</FooterLink></li>
            <li><FooterLink to="/gallery">Gallery</FooterLink></li>
            <li><FooterLink to="/contact">Book Chenda Melam</FooterLink></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Our Instruments</h3>
          <ul className="footer-list">
            <li><FooterLink to="/instruments">Chenda</FooterLink></li>
            <li><FooterLink to="/instruments">Maddalam</FooterLink></li>
            <li><FooterLink to="/instruments">Idakka</FooterLink></li>
            <li><FooterLink to="/instruments">Thimila</FooterLink></li>
            <li><FooterLink to="/instruments">Kurumkuzhal</FooterLink></li>
          </ul>
        </div>

        <div className="footer-section footer-section-areas">
          <h3 className="footer-heading">Chennai Melam Areas</h3>
          <ul className="footer-list footer-area-list">
            {CHENNAI_AREA_PAGES.map((a) => (
              <li key={a.slug}>
                <FooterLink to={getAreaPath(a.slug)}>Chenda Melam {a.name}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-list">
            <li className="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href={`tel:${CONTACT.phoneTel}`} className="footer-contact-link">{CONTACT.phone}</a>
            </li>
            <li className="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href={`mailto:${CONTACT.email}`} className="footer-contact-link">{CONTACT.email}</a>
            </li>
            <li className="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="footer-contact-link">{CONTACT.websiteDisplay}</a>
            </li>
            <li className="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{CONTACT.address.full}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">© 2025 {BRAND_NAME}, Chennai. All Rights Reserved.</p>
        <div className="footer-social-links">
          <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
