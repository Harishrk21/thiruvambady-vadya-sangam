import React from "react";
import "../styles/Courses.css";

const testimonials = [
  {
    name: "Vijaya M.",
    text: "Learning Idakka and Sopana Sangeetham connected me deeply with temple traditions. The academy’s guidance was transformative.",
  },
  {
    name: "Arun K.",
    text: "Chenda training was structured and authentic. Performing in temple programs built my confidence on stage.",
  },
  {
    name: "Bindu S.",
    text: "Flexible schedules and individualized attention helped me progress from basics to intermediate rhythms quickly.",
  }
];

const Testimonials = () => {
  return (
    <div className="courses-container">
      <div className="courses-header">
        <h2 className="courses-title">Testimonials</h2>
        <p className="courses-subtitle">Experiences from students and artists associated with the academy.</p>
      </div>
      <div className="courses-grid">
        {testimonials.map((t, i) => (
          <div className="course-card" key={i}>
            <div className="course-content">
              <h3 className="course-name">{t.name}</h3>
              <p className="course-description">“{t.text}”</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;


