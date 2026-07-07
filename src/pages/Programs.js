import React from "react";
import { Link } from "react-router-dom";
import programs from "../data/programsData";
import SEO from "../components/SEO";
import { PAGE_SEO } from "../data/seoData";
import { SEO_IMAGES } from "../data/seoImages";
import "../styles/Programs.css";

const Programs = () => {
  return (
    <div className="programs-page">
      <SEO title={PAGE_SEO.programs.title} description={PAGE_SEO.programs.description} path={PAGE_SEO.programs.path} ogImage={SEO_IMAGES.programs} />
      <header className="programs-header">
        <h1 className="programs-title">Chenda Melam Programs — Weddings & Events Tamil Nadu</h1>
        <p className="programs-subtitle">
          Professional <Link to="/chenda-melam-chennai">Chenda Melam for wedding</Link> in Chennai, Tamil Nadu, Andhra Pradesh & Telangana.
          Kerala traditional music for groom entry, reception, temple festivals, and corporate events.
          <Link to="/chenda-classes-chennai"> Online Chenda Melam classes global</Link> also available.
        </p>
        <Link to="/" className="programs-back-btn">Back to Home</Link>
      </header>

      <section className="programs-intro">
        <div className="programs-intro-card">
          <h2>What We Offer</h2>
          <p>
            With over two decades of performance experience, Guru Thiruvambady Vineesh Maarar leads
            ensembles for temple festivals, weddings, corporate events, school workshops, and concert
            stages. Every program is assembled with the right number of artists, instruments, and
            repertoire for your occasion — from an intimate 6-artist Chenda team to a grand 100+ artist
            Melam presentation.
          </p>
          <div className="programs-stats">
            <div className="programs-stat">
              <span className="programs-stat-num">8+</span>
              <span className="programs-stat-label">Program Types</span>
            </div>
            <div className="programs-stat">
              <span className="programs-stat-num">100+</span>
              <span className="programs-stat-label">Artists Available</span>
            </div>
            <div className="programs-stat">
              <span className="programs-stat-num">20+</span>
              <span className="programs-stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      <div className="programs-grid">
        {programs.map((p) => (
          <article className="program-card" key={p.title}>
            <div className="program-card-image-wrap">
              <img src={p.imageSrc} alt={p.title} className="program-card-image" loading="lazy" />
              <span className="program-card-tag">{p.tag}</span>
            </div>
            <div className="program-card-body">
              <h3 className="program-card-title">{p.title}</h3>
              <p className="program-card-desc">{p.desc}</p>
              <ul className="program-highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <p className="program-card-details">{p.details}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="programs-cta">
        <h2>Book a Program</h2>
        <p>
          Tell us your event type, date, venue, and expected audience size. We will recommend the
          right ensemble format and provide a detailed proposal.
        </p>
        <div className="programs-cta-actions">
          <Link to="/contact" className="programs-cta-btn primary">Contact Us</Link>
          <Link to="/melams" className="programs-cta-btn secondary">Explore Chenda Melam Forms</Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;
