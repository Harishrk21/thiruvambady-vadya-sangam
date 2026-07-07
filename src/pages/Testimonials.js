import React from "react";
import { Link } from "react-router-dom";
import testimonials from "../data/testimonialsData";
import SEO from "../components/SEO";
import { PAGE_SEO, SITE_NAME, getReviewSchema } from "../data/seoData";
import { SEO_IMAGES } from "../data/seoImages";
import "../styles/Testimonials.css";

const StarRating = ({ count }) => (
  <div className="testimonial-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? "star filled" : "star"}>
        ★
      </span>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <SEO
        title={PAGE_SEO.testimonials.title}
        description={PAGE_SEO.testimonials.description}
        path={PAGE_SEO.testimonials.path}
        ogImage={SEO_IMAGES.testimonials}
        jsonLd={getReviewSchema(testimonials)}
      />
      <header className="testimonials-header">
        <h1 className="testimonials-title">Chenda Melam Reviews & Testimonials</h1>
        <p className="testimonials-subtitle">
          Reviews from wedding families, event organisers, and temple committees who booked our
          Chenda Melam programs — plus voices from students learning at {SITE_NAME}.
        </p>
        <Link to="/" className="testimonials-back-btn">Back to Home</Link>
      </header>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <blockquote className="testimonial-card" key={i}>
            <div className="testimonial-card-top">
              <div className="testimonial-avatar" aria-hidden="true">
                {t.initials}
              </div>
              <div className="testimonial-meta">
                <cite className="testimonial-name">{t.name}</cite>
                <span className="testimonial-role">{t.role}</span>
                {t.category && (
                  <span className={`testimonial-tag testimonial-tag--${t.category}`}>
                    {t.category === "program" ? "Wedding & Events" : "Classes"}
                  </span>
                )}
              </div>
            </div>
            <StarRating count={t.rating} />
            <p className="testimonial-text">"{t.text}"</p>
            <span className="testimonial-quote-mark" aria-hidden="true">"</span>
          </blockquote>
        ))}
      </div>

      <section className="testimonials-cta">
        <p>Planning a wedding or event?</p>
        <Link to="/contact?type=wedding&form=open" className="testimonials-cta-btn">Book Chenda Melam</Link>
        <Link to="/courses" className="testimonials-cta-btn testimonials-cta-secondary">Explore Courses</Link>
      </section>
    </div>
  );
};

export default Testimonials;
