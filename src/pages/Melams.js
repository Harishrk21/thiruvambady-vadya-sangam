import React from "react";
import { Link } from "react-router-dom";
import melams, { melamIntro } from "../data/melamsData";
import SEO from "../components/SEO";
import { PAGE_SEO, SITE_NAME } from "../data/seoData";
import { SEO_IMAGES } from "../data/seoImages";
import "../styles/Melams.css";

const Melams = () => {
  return (
    <div className="melams-page">
      <SEO title={PAGE_SEO.melams.title} description={PAGE_SEO.melams.description} path={PAGE_SEO.melams.path} ogImage={SEO_IMAGES.melams} />
      <header className="melams-header">
        <span className="melams-eyebrow">Chenda Melam Chennai</span>
        <h1 className="melams-title">Panchari Melam & Kerala Chenda Melam Forms</h1>
        <p className="melams-subtitle">
          {melamIntro.subtitle} Book our <Link to="/chenda-melam-chennai">wedding Chenda Melam Chennai</Link> team or
          join <Link to="/chenda-classes-chennai">Chenda Melam classes</Link> to learn these forms.
        </p>
        <Link to="/courses" className="melams-back-btn">View Chenda Course</Link>
      </header>

      <section className="melams-intro-note">
        <p>{melamIntro.note}</p>
      </section>

      <div className="melams-grid">
        {melams.map((melam) => (
          <article className="melam-card" id={melam.id} key={melam.id}>
            <div className="melam-card-header">
              <div>
                <span className="melam-category">{melam.category}</span>
                <h2 className="melam-name">{melam.name}</h2>
                <span className="melam-malayalam">{melam.malayalam}</span>
              </div>
            </div>

            <div className="melam-meta-row">
              <div className="melam-meta-item">
                <span className="melam-meta-label">Talam</span>
                <span className="melam-meta-value">{melam.talam}</span>
              </div>
              <div className="melam-meta-item">
                <span className="melam-meta-label">Duration</span>
                <span className="melam-meta-value">{melam.duration}</span>
              </div>
              <div className="melam-meta-item">
                <span className="melam-meta-label">Context</span>
                <span className="melam-meta-value">{melam.context}</span>
              </div>
            </div>

            <p className="melam-description">{melam.description}</p>

            <div className="melam-features">
              <h3>Key Features</h3>
              <ul>
                {melam.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="melam-instruments">
              <span className="melam-instruments-label">Ensemble:</span>
              {melam.instruments.map((inst) => (
                <span className="melam-instrument-tag" key={inst}>{inst}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="melams-training">
        <h2>Learning Path at {SITE_NAME}</h2>
        <div className="melams-path">
          <div className="melams-path-step">
            <span className="melams-path-num">1</span>
            <h4>Fundamentals</h4>
            <p>Veekku, Chaapu, basic talam, and Chenda handling — Edamthala and Valanthala techniques.</p>
          </div>
          <div className="melams-path-step">
            <span className="melams-path-num">2</span>
            <h4>Chempada Forms</h4>
            <p>Chempada, Panchari, and progressive kaalam training through ensemble listening.</p>
          </div>
          <div className="melams-path-step">
            <span className="melams-path-num">3</span>
            <h4>Advanced Melams</h4>
            <p>Adantha, Pandi, and Dhruvam — specialist forms for dedicated festival performers.</p>
          </div>
          <div className="melams-path-step">
            <span className="melams-path-num">4</span>
            <h4>Live Performance</h4>
            <p>Temple programs and festival stages organised by the Sangam for real-world experience.</p>
          </div>
        </div>
        <Link to="/contact" className="melams-enroll-btn">Enquire About Chenda Melam Training</Link>
      </section>
    </div>
  );
};

export default Melams;
