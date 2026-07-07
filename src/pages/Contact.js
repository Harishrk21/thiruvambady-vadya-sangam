import React from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/Contact.css";
import "../styles/EnrollmentForm.css";
import { CONTACT, BRAND_NAME } from "../data/contactInfo";
import SEO from "../components/SEO";
import BookingForm from "../components/BookingForm";
import { PAGE_SEO, getContactPageSchema, getLocalBusinessSchema } from "../data/seoData";
import { SEO_IMAGES } from "../data/seoImages";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get("type") === "course" ? "course" : "wedding";

  return (
    <div className="contact-page">
      <SEO
        title={PAGE_SEO.contact.title}
        description={PAGE_SEO.contact.description}
        path={PAGE_SEO.contact.path}
        ogImage={SEO_IMAGES.contact}
        jsonLd={{ "@context": "https://schema.org", "@graph": [getLocalBusinessSchema(), getContactPageSchema()] }}
      />

      <div className="contact-page-inner">
        <header className="contact-page-header">
          <span className="contact-eyebrow">Book · Enroll · Get Quote</span>
          <h1 className="contact-title">Book Chenda Melam & Events</h1>
          <p className="contact-intro">
            Wedding Chenda Melam, temple programs, corporate events, or course enrollment —
            fill in the form or reach us instantly on WhatsApp.
          </p>
          <a
            href={CONTACT.whatsapp}
            className="contact-whatsapp-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Instant Booking
          </a>
        </header>

        <div className="contact-layout">
          <aside className="contact-sidebar">
            <h2 className="contact-sidebar-title">Contact Details</h2>

            <div className="contact-cards">
              <a href={`tel:${CONTACT.phoneTel}`} className="contact-card contact-card-link">
                <span className="contact-card-icon phone-icon" aria-hidden="true" />
                <div>
                  <span className="contact-card-label">Phone / WhatsApp</span>
                  <span className="contact-card-value">{CONTACT.phone}</span>
                </div>
              </a>

              <a href={`mailto:${CONTACT.email}`} className="contact-card contact-card-link">
                <span className="contact-card-icon email-icon" aria-hidden="true" />
                <div>
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value">{CONTACT.email}</span>
                </div>
              </a>

              <a
                href={CONTACT.website}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card contact-card-link"
              >
                <span className="contact-card-icon web-icon" aria-hidden="true" />
                <div>
                  <span className="contact-card-label">Website</span>
                  <span className="contact-card-value">{CONTACT.websiteDisplay}</span>
                </div>
              </a>

              <div className="contact-card">
                <span className="contact-card-icon location-icon" aria-hidden="true" />
                <div>
                  <span className="contact-card-label">Studio</span>
                  <span className="contact-card-value">
                    {BRAND_NAME}<br />
                    {CONTACT.address.line1},<br />
                    {CONTACT.address.line2}
                  </span>
                  <span className="contact-card-note">
                    Based in Madipakkam, Chennai · performing across Tamil Nadu, AP & Telangana
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-social-row">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn instagram"
                aria-label="Instagram"
              >
                <span className="social-icon instagram-icon" />
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn facebook"
                aria-label="Facebook"
              >
                <span className="social-icon facebook-icon" />
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn whatsapp"
                aria-label="WhatsApp"
              >
                <span className="social-icon whatsapp-icon" />
              </a>
            </div>
          </aside>

          <section className="contact-form-panel" aria-label="Booking form">
            <BookingForm
              mode={defaultType === "course" ? "course" : "event"}
              defaultInquiryType={defaultType}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
