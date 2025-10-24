import React from "react";
import "../styles/Courses.css";

const programs = [
  {
    title: "Temple Programs",
    desc: "Traditional Panchavadyam, Melam, and temple ritual performances led by seasoned artists and students.",
  },
  {
    title: "Social & Corporate Events",
    desc: "Cultural showcases for inaugurations, festivals, and corporate gatherings with tailored ensembles.",
  },
  {
    title: "Concerts & Tours",
    desc: "Stage concerts blending classical frameworks with contemporary arrangements for wider audiences.",
  },
  {
    title: "Fusion Collaborations",
    desc: "Chenda with Mridangam, Parai, and indigenous instruments partnering with composers and researchers.",
  }
];

const Programs = () => {
  return (
    <div className="courses-container">
      <div className="courses-header">
        <h2 className="courses-title">Programs</h2>
        <p className="courses-subtitle">Temple rituals, social events, concerts, and fusion collaborations curated by the academy.</p>
      </div>
      <div className="courses-grid">
        {programs.map((p, idx) => (
          <div className="course-card" key={idx}>
            <div className="course-content">
              <h3 className="course-name">{p.title}</h3>
              <p className="course-description">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;


