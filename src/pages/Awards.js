import React from "react";
import "../styles/Courses.css";

const awards = [
  { year: 2024, title: "Kovai Vaadhya Kulapathy" },
  { year: 2024, title: "Kalai Sudar" },
  { year: 2023, title: "Kalai Imayam" },
  { year: 2021, title: "Kalairatna" },
];

const Awards = () => {
  return (
    <div className="courses-container">
      <div className="courses-header">
        <h2 className="courses-title">Awards & Honors</h2>
        <p className="courses-subtitle">Recognitions for commitment to Kerala’s traditional percussion and pedagogy.</p>
      </div>
      <div className="courses-grid">
        {awards.map((a, i) => (
          <div className="course-card" key={i}>
            <div className="course-content">
              <h3 className="course-name">{a.title}</h3>
              <p className="course-description">Year: {a.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;


