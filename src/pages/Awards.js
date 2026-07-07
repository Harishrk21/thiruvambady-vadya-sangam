import React from "react";
import { Link } from "react-router-dom";
import "../styles/Courses.css";
import SEO from "../components/SEO";
import { PAGE_SEO, SITE_NAME } from "../data/seoData";
import { SEO_IMAGES } from "../data/seoImages";
import guruImage from "../assets/guru.png";
import soloImage from "../assets/solo.jpg";
import arangImage from "../assets/arang2k23.jpg";
import bwImage from "../assets/blackandwhitesolo.jpg";

const awards = [
  {
    year: 2024,
    title: "Kovai Vaadhya Kulapathy",
    image: guruImage,
    desc: "Conferred in recognition of outstanding contribution to percussion arts and over two decades of dedicated teaching. This honour acknowledges Thiruvambady Vineesh Maarar's role in nurturing a new generation of Kerala percussionists.",
  },
  {
    year: 2024,
    title: "Kalai Sudar",
    image: soloImage,
    desc: "The 'Flame of Art' award celebrating excellence in preserving and promoting traditional Kerala performing arts. Awarded to Guru Vineesh Maarar for sustained commitment to authentic Idakka and Chenda pedagogy.",
  },
  {
    year: 2023,
    title: "Kalai Imayam",
    image: arangImage,
    desc: "The 'Morning Star of Art' honour recognising leadership in classical arts education. Acknowledges innovative online and offline teaching methods that make temple percussion accessible to students worldwide.",
  },
  {
    year: 2021,
    title: "Kalairatna",
    image: bwImage,
    desc: `The 'Jewel of Art' — among the highest accolades in Tamil Nadu's cultural circuit — awarded for lifetime dedication to Kerala percussion traditions, Idakka mastery, and guiding ${SITE_NAME}.`,
  },
];

const Awards = () => {
  return (
    <div className="courses-container">
      <SEO
        title={PAGE_SEO.awards.title}
        description={PAGE_SEO.awards.description}
        path={PAGE_SEO.awards.path}
        ogImage={SEO_IMAGES.awards}
      />
      <div className="courses-header">
        <h1 className="courses-title">Awards & Honors</h1>
        <p className="courses-subtitle">
          Recognitions conferred upon our Guru, Thiruvambady Vineesh Maarar, for preserving
          Kerala's percussion heritage and advancing traditional pedagogy through online and offline training.
        </p>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
      <div className="courses-grid">
        {awards.map((a, i) => (
          <div className="course-card" key={i}>
            <div className="course-image-container">
              <img src={a.image} alt={a.title} className="course-image" />
            </div>
            <h3 className="course-name">{a.title}</h3>
            <p className="card-year">Year: {a.year}</p>
            <p className="course-description">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
