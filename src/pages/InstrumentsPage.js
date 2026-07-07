import React, { useState } from "react";
import { Link } from "react-router-dom";
import instruments from "../data/instrumentsData";
import SEO from "../components/SEO";
import { PAGE_SEO } from "../data/seoData";
import { SEO_IMAGES } from "../data/seoImages";
import "../styles/Instruments.css";

const InstrumentsPage = () => {
  const [activeInstrument, setActiveInstrument] = useState(null);

  const handleInstrumentClick = (id) => {
    setActiveInstrument(id === activeInstrument ? null : id);
  };

  const active = instruments.find((i) => i.id === activeInstrument);

  return (
    <div className="instruments-container">
      <SEO
        title={PAGE_SEO.instruments.title}
        description={PAGE_SEO.instruments.description}
        path={PAGE_SEO.instruments.path}
        ogImage={SEO_IMAGES.instruments}
      />
      <div className="instruments-header">
        <h1>Traditional Kerala Percussion & Temple Instruments</h1>
        <p>
          Explore the instruments that power Kerala's temple festivals, classical arts, and devotional
          traditions — from the thunderous Chenda Melam of Thrissur Pooram to the sacred rhythms of
          Koodiyattam and Panchavadyam.
        </p>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>

      {active && (
        <div className="detailed-view">
          <div className="detailed-instrument">
            <div className="detailed-content">
              <div className="detailed-image-container">
                <img src={active.image} alt={active.name} className="detailed-image" />
              </div>
              <div className="detailed-info">
                <span className="instrument-category">{active.category}</span>
                <h2>{active.name}</h2>
                <div className="info-section">
                  <h3>Description</h3>
                  <p>{active.description}</p>
                </div>
                <div className="info-section">
                  <h3>Traditional Usage</h3>
                  <p>{active.usage}</p>
                </div>
                <div className="info-section">
                  <h3>Construction & Craft</h3>
                  <p>{active.details}</p>
                </div>
                <div className="info-section">
                  <h3>Heritage & Significance</h3>
                  <p>{active.heritage}</p>
                </div>
                <div className="info-section">
                  <h3>Where You Hear It</h3>
                  <p>{active.performances}</p>
                </div>
                <button
                  className="close-button"
                  type="button"
                  onClick={() => setActiveInstrument(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="instruments-grid">
        {instruments.map((instrument) => (
          <div
            key={instrument.id}
            className="instrument-card"
            onClick={() => handleInstrumentClick(instrument.id)}
          >
            <div className="instrument-image-container">
              <img src={instrument.image} alt={instrument.name} className="instrument-image" />
              <div className="overlay">
                <span>View Details</span>
              </div>
            </div>
            <h2 className="instrument-name">{instrument.name}</h2>
            <p className="instrument-category-tag">{instrument.category}</p>
            <p className="instrument-brief">{instrument.description.substring(0, 130)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstrumentsPage;
