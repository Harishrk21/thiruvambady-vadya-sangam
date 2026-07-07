import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Courses.css";
import SEO from "../components/SEO";
import { PAGE_SEO } from "../data/seoData";
import { SEO_IMAGES } from "../data/seoImages";
import EnrollmentForm from "./EnrollmentForm";
import chendaImage from "../assets/chenda.jpg";
import melams from "../data/melamsData";
import ThimilaImage from "../assets/Thimila.jpg";
import IdakkaImage from "../assets/idakka.jpg";
import Maddalam from "../assets/maddalam.jpg";
import Thayambka from "../assets/Thayambaka.jpg";
import Kombu from "../assets/kombu.jpg";
import sopanam from "../assets/sopanam.jpg";
import kuzhal from "../assets/kurumkuzhal.jpg";

const courseData = [
  {
    id: 1,
    name: "Chenda",
    description: "Master the powerful rhythms of Kerala's most iconic percussion instrument.",
    duration: "6 months",
    level: "Beginner to Advanced",
    schedule: "Weekends & Evenings",
    instructor: "Gopikrishnan Marar",
    image: chendaImage,
    details: `The Chenda is a cylindrical wooden drum that holds a significant place in South Indian cultural and religious traditions. 
              It is widely used in temple ceremonies, festivals, and classical dance performances like Kathakali and Theyyam. 
              Known for its powerful, resonant beats, the Chenda is played using two sticks, producing dynamic rhythms that captivate audiences.

              *Course Highlights:*
              - Structured learning from fundamentals to advanced techniques
              - In-depth understanding of traditional rhythmic patterns
              - Practical training in performance and ensemble contexts

              *Key Learning Modules:* \n
              1. *Instrument Fundamentals:*
                 - Drum construction and materials
                 - Traditional significance and cultural context
                 - Proper handling and maintenance techniques

              2. *Rhythmic Techniques:*
                 - Basic to complex rhythmic patterns
                 - Mastering both "Valanthala" (treble) and "Edanthala" (bass) techniques
                 - Development of precise stick and hand control

              3. *Performance Styles:*
                 - Temple ensemble beats and Chenda Melam forms
                 - Panchari, Chempada, Adantha, Pandi & Dhruvam Melam
                 - Kathakali and Theyyam performance rhythms
                 - Solo and group performance techniques

              *Chenda Melam Forms Covered:*
              Students progressing in Chenda Melam training will learn the five classical forms — Panchari Melam, Chempada Melam, Adantha Melam, Pandi Melam, and Dhruvam Melam. See the full Melams page for detailed descriptions of each form.

              4. *Cultural Immersion:*
                 - Historical context of Chenda in Kerala's traditions
                 - Understanding ritualistic and ceremonial performances
                 - Connecting with the deeper musical heritage

              *What You'll Achieve:*
              - Confident performance of traditional compositions
              - Deep understanding of Chenda's musical language
              - Ability to participate in cultural events and performances

              Join us to experience the powerful, soul-stirring rhythms of the Chenda!`
  },
  {
    id: 2,
    name: "Thayambaka",
    description: "Experience the dynamic barrel-shaped drum that energizes temple processions.",
    duration: "2 years",
    level: "Advanced",
    schedule: "Evenings",
    instructor: "Ottapalam Harish Maarar",
    image: Thayambka,
    details: `*Introduction to Thayambaka:*
              Thayambaka is a vibrant and powerful barrel-shaped drum deeply rooted in Kerala's rich musical traditions. 
              This advanced percussion course offers an immersive journey into the intricate world of Thayambaka performance.

              *Course Structure:* \n 
              1. *Advanced Percussion Techniques:*
                 - Mastering complex rhythmic patterns
                 - Stick and hand coordination
                 - Dynamic volume and intensity control

              2. *Performance Styles:*
                 - Temple and festival performance techniques
                 - Solo and ensemble playing
                 - Improvisation and rhythmic interpretation

              3. *Cultural Context:*
                 - Historical significance of Thayambaka
                 - Role in Kerala's musical and cultural ceremonies
                 - Understanding traditional musical frameworks

              4. *Professional Development:*
                 - Stage presence and performance etiquette
                 - Ensemble coordination
                 - Advanced rhythmic composition

              *Learning Outcomes:*
              - Profound understanding of Thayambaka techniques
              - Ability to perform in traditional and contemporary settings
              - Deep connection with Kerala's percussion heritage

              A transformative journey for serious percussion enthusiasts!`
  },
  {
    id: 7,
    name: "Maddalam",
    description: "Learn the melodic percussion art that accompanies classical Kerala performances.",
    duration: "8 months",
    level: "Intermediate",
    schedule: "Weekday Evenings",
    instructor: "Anish Padmanabhan",
    image: Maddalam,
    details: `*Exploring Maddalam:*
              Maddalam is a significant drum instrument integral to Kathakali and temple rituals, known for its nuanced and expressive playing style.

              *Course Curriculum:* \n
              1. *Foundational Techniques:*
                 - Proper drum holding and striking techniques
                 - Understanding drum anatomy and acoustics
                 - Basic rhythmic patterns and variations

              2. *Kathakali Accompaniment:*
                 - Synchronizing with dance movements
                 - Emotional expression through rhythm
                 - Understanding narrative rhythmic structures

              3. *Rhythmic Complexity:*
                 - Advanced rhythmic compositions
                 - Improvisation techniques
                 - Solo and ensemble performance skills

              4. *Cultural Significance:*
                 - Historical context of Maddalam
                 - Role in temple and classical performance traditions
                 - Preservation of musical heritage

              *Key Learning Outcomes:*
              - Comprehensive Maddalam playing skills
              - Ability to accompany complex performances
              - Deep understanding of rhythmic storytelling

              A transformative journey into the heart of Kerala's musical traditions!`
  },
  {
    id: 3,
    name: "Idakka",
    description: "Discover the unique hourglass-shaped drum that creates Kerala's spiritual soundscapes.",
    duration: "4 months",
    level: "All Levels",
    schedule: "Flexible",
    instructor: "Bindu Jayakumar",
    image: IdakkaImage,
    details: `*Discovering Idakka:*
              Idakka, the unique hourglass-shaped drum, is renowned for its vocal-like tones and spiritual resonance in Kerala's musical landscape.

              *Course Modules:* \n
              1. *Instrument Fundamentals:*
                 - Drum construction and acoustic properties
                 - Tuning and maintenance techniques
                 - Basic holding and striking methods

              2. *Rhythmic Exploration:*
                 - Traditional temple rhythms
                 - Vocal mimicry techniques
                 - Expressive playing styles

              3. *Performance Contexts:*
                 - Spiritual and devotional performances
                 - Concert and ensemble techniques
                 - Solo performance skills

              4. *Cultural Understanding:*
                 - Historical significance of Idakka
                 - Role in religious and artistic traditions
                 - Connecting with musical heritage

              *Learning Outcomes:*
              - Versatile Idakka playing skills
              - Understanding of spiritual musical traditions
              - Ability to perform in various contexts

              A melodic journey into the soul of Kerala's percussion!`
  },
  {
    id: 4,
    name: "Thimila",
    description: "Embrace the ancient temple drum that accompanies sacred rituals across Kerala.",
    duration: "6 months",
    level: "Beginner to Intermediate",
    schedule: "Weekends",
    instructor: "Rajan Nambiar",
    image: ThimilaImage,
    details: `*Understanding Thimila:*
              Thimila, a large cylindrical drum, is a crucial component of Panchavadyam ensembles, embodying the dynamic spirit of Kerala's musical traditions.

              *Course Structure:* \n
              1. *Fundamental Techniques:*
                 - Proper drum handling
                 - Basic rhythmic patterns
                 - Stick and hand coordination

              2. *Ensemble Playing:*
                 - Panchavadyam performance techniques
                 - Synchronization with other instruments
                 - Group rhythm dynamics

              3. *Advanced Skills:*
                 - Complex rhythmic compositions
                 - Improvisation techniques
                 - Solo performance skills

              4. *Cultural Context:*
                 - Historical significance of Thimila
                 - Role in traditional ceremonies
                 - Musical heritage preservation

              *Learning Outcomes:*
              - Comprehensive Thimila playing skills
              - Understanding of ensemble dynamics
              - Deep connection with musical traditions

              A rhythmic journey into Kerala's musical heart!`
  },
  {
    id: 5,
    name: "Kombu",
    description: "Connect with the copper drum that resonates through Koodiyattam performances.",
    duration: "10 months",
    level: "Advanced",
    schedule: "Mornings & Weekends",
    instructor: "Vipin Kalamandalam",
    image: Kombu,
    details: `*Exploring Kombu:*
              Kombu is a unique copper horn instrument deeply rooted in Kerala's traditional performing arts, particularly in Koodiyattam Sanskrit theater.

              *Course Modules:* \n
              1. *Instrument Fundamentals:*
                 - Copper horn construction and acoustics
                 - Historical significance
                 - Proper handling and maintenance

              2. *Performance Techniques:*
                 - Traditional signaling methods
                 - Rhythmic and tonal variations
                 - Synchronization with theatrical performances

              3. *Theatrical Context:*
                 - Role in Koodiyattam and other traditional arts
                 - Emotional and narrative signaling
                 - Ensemble performance skills

              4. *Cultural Immersion:*
                 - Deep dive into Kerala's performing traditions
                 - Understanding symbolic communication
                 - Preservation of artistic heritage

              *Learning Outcomes:*
              - Mastery of Kombu performance techniques
              - Insight into traditional theatrical communication
              - Ability to participate in classical performances

              A transformative journey into Kerala's artistic expressions!`
  },
  {
    id: 6,
    name: "Sopana Sangeetham",
    description: "Experience the spiritual musical tradition of Kerala's temple steps.",
    duration: "5 months",
    level: "Intermediate",
    schedule: "Evenings",
    instructor: "Shankar Kannan",
    image: sopanam,
    details: `*Introduction to Sopana Sangeetham:*
              Sopana Sangeetham is a profound musical tradition performed on the temple steps, embodying the spiritual essence of Kerala's classical music.

              *Course Structure:* \n
              1. *Musical Foundations:*
                 - Origins and historical context
                 - Vocal and instrumental techniques
                 - Understanding musical scales and rhythms

              2. *Spiritual Performance:*
                 - Temple music traditions
                 - Devotional singing techniques
                 - Connecting music with spiritual expression

              3. *Advanced Techniques:*
                 - Complex musical compositions
                 - Improvisation in devotional music
                 - Ensemble and solo performance skills

              4. *Cultural Significance:*
                 - Role in temple rituals
                 - Preservation of musical heritage
                 - Deeper understanding of Kerala's musical traditions

              *Learning Outcomes:*
              - Comprehensive Sopana Sangeetham skills
              - Deep spiritual and musical understanding
              - Ability to perform in traditional contexts

              A soul-stirring journey into Kerala's musical spirituality!`
  },
  {
    id: 8,
    name: "Kurum Kuzhal",
    description: "Discover the ancient wind instrument of Kerala's musical heritage.",
    duration: "5 months",
    level: "Intermediate",
    schedule: "Evenings",
    instructor: "Shankar Kannan",
    image: kuzhal,
    details: `*Exploring Kurum Kuzhal:*
              Kurum Kuzhal is a traditional wind instrument that has been an integral part of Kerala's rich musical landscape, known for its distinctive sound and cultural significance.

              *Course Modules:* \n
              1. *Instrument Fundamentals:*
                 - Construction and acoustic properties
                 - Historical background
                 - Proper handling and maintenance techniques

              2. *Playing Techniques:*
                 - Basic and advanced blowing techniques
                 - Tone production and control
                 - Rhythmic and melodic variations

              3. *Performance Contexts:*
                 - Traditional ensemble playing
                 - Folk and classical music applications
                 - Solo and group performance skills

              4. *Cultural Understanding:*
                 - Role in Kerala's musical traditions
                 - Significance in ceremonial and folk performances
                 - Preservation of musical heritage

              *Learning Outcomes:*
              - Comprehensive Kurum Kuzhal playing skills
              - Understanding of traditional music contexts
              - Ability to perform in various musical settings

              A melodic journey into Kerala's musical roots!`
  }
];

const formatCourseDetails = (details) => {
  const sections = details.split("\n\n");
  let modulesHtml = "";
  let otherHtml = "";

  sections.forEach((section) => {
    if (section.startsWith("*") && section.endsWith("*")) {
      otherHtml += `<h3 class="course-section-header">${section.replace(/\*/g, "")}</h3>`;
      return;
    }

    if (/^(1\.|2\.|3\.|4\.)/.test(section)) {
      const lines = section.split("\n");
      const firstLine = lines[0];
      const sectionName = firstLine
        .replace(/^(1\.|2\.|3\.|4\.) */, "")
        .replace(/\*(.*?)\*/g, "<strong>$1</strong>");

      const listItems = lines
        .slice(1)
        .filter((line) => line.trim().startsWith("-"))
        .map((item) => {
          const cleaned = item.replace(/^-\s*/, "").replace(/\*(.*?)\*/g, "<strong>$1</strong>");
          return `<li>${cleaned}</li>`;
        })
        .join("");

      modulesHtml += `
        <div class="course-module">
          <h4 class="module-title">${sectionName}</h4>
          ${listItems ? `<ul class="module-list">${listItems}</ul>` : ""}
        </div>
      `;
      return;
    }

    const formatted = section
      .replace(/\*(.*?)\*/g, "<strong>$1</strong>")
      .replace(/^-\s+/gm, "• ");

    if (section.trim().startsWith("-")) {
      otherHtml += `<ul class="course-highlight-list">${section
        .split("\n")
        .map(
          (line) =>
            `<li>${line.replace(/^-\s*/, "").replace(/\*(.*?)\*/g, "<strong>$1</strong>")}</li>`
        )
        .join("")}</ul>`;
    } else {
      otherHtml += `<p class="course-intro-text">${formatted}</p>`;
    }
  });

  const modulesGrid = modulesHtml ? `<div class="course-modules-grid">${modulesHtml}</div>` : "";
  return otherHtml + modulesGrid;
};

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const detailRef = useRef(null);

  const openDetails = (course) => {
    setShowEnrollmentForm(false);
    setSelectedCourse(course);
  };

  const closeDetails = () => {
    setSelectedCourse(null);
    setShowEnrollmentForm(false);
  };

  useEffect(() => {
    if (selectedCourse && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedCourse, showEnrollmentForm]);

  return (
    <div className="courses-container">
      <SEO
        title={PAGE_SEO.courses.title}
        description={PAGE_SEO.courses.description}
        path={PAGE_SEO.courses.path}
        ogImage={SEO_IMAGES.courses}
      />

      <div className="courses-header">
        <h1 className="courses-title">Chenda Melam Courses & Kerala Percussion</h1>
        <p className="courses-subtitle">
          Learn Chenda Melam — <Link to="/chenda-classes-chennai">online and offline classes in Chennai</Link>.
          Master Kerala percussion from beginner to advanced.{" "}
          <Link to="/chenda-melam-chennai">Book wedding Chenda Melam</Link> performances.
        </p>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>

      {selectedCourse && (
        <section
          className="course-detail-panel"
          id="course-detail"
          ref={detailRef}
          aria-labelledby="course-detail-title"
        >
          <div className="course-detail-panel__header">
            <div className="course-detail-panel__thumb">
              <img src={selectedCourse.image} alt={selectedCourse.name} />
            </div>
            <div className="course-detail-panel__intro">
              <span className="course-detail-panel__badge">{selectedCourse.level}</span>
              <h2 id="course-detail-title" className="course-detail-panel__title">
                {selectedCourse.name}
              </h2>
              <p className="course-detail-panel__desc">{selectedCourse.description}</p>
              <div className="course-detail-panel__meta">
                <span>⏱ {selectedCourse.duration}</span>
                <span>📅 {selectedCourse.schedule}</span>
                <span>👤 {selectedCourse.instructor}</span>
              </div>
            </div>
            <button
              type="button"
              className="course-detail-panel__close"
              onClick={closeDetails}
              aria-label="Close course details"
            >
              ×
            </button>
          </div>

          {!showEnrollmentForm ? (
            <>
              <div className="course-detail-panel__body">
                <h3 className="course-detail-panel__heading">Course Overview</h3>
                <div
                  className="modal-full-details"
                  dangerouslySetInnerHTML={{
                    __html: formatCourseDetails(selectedCourse.details),
                  }}
                />

                {selectedCourse.name === "Chenda" && (
                  <div className="course-melam-section">
                    <h3 className="course-melam-heading">Chenda Melam Forms</h3>
                    <p className="course-melam-intro">
                      Advanced Chenda training covers these classical melam forms:
                    </p>
                    <div className="course-melam-list">
                      {melams.map((m) => (
                        <Link to={`/melams#${m.id}`} key={m.id} className="course-melam-chip">
                          {m.name}
                        </Link>
                      ))}
                    </div>
                    <Link to="/melams" className="course-melam-link">
                      View full Melam guide →
                    </Link>
                  </div>
                )}
              </div>

              <div className="course-detail-panel__actions">
                <button type="button" className="enroll-button" onClick={() => setShowEnrollmentForm(true)}>
                  Enroll Now
                </button>
                <button type="button" className="course-detail-panel__dismiss" onClick={closeDetails}>
                  Browse other courses
                </button>
              </div>
            </>
          ) : (
            <div className="course-detail-panel__enroll">
              <div className="course-detail-panel__enroll-header">
                <h3>Enroll in {selectedCourse.name}</h3>
                <button
                  type="button"
                  className="course-detail-panel__back"
                  onClick={() => setShowEnrollmentForm(false)}
                >
                  ← Back to course details
                </button>
              </div>
              <EnrollmentForm
                course={selectedCourse}
                onClose={closeDetails}
              />
            </div>
          )}
        </section>
      )}

      <div className="courses-grid">
        {courseData.map((course) => (
          <article
            key={course.id}
            className={`course-card${selectedCourse?.id === course.id ? " course-card--active" : ""}`}
          >
            <div className="course-image-container">
              <img src={course.image} alt={course.name} className="course-image" />
              <div className="course-level">{course.level}</div>
            </div>
            <h3 className="course-name">{course.name}</h3>
            <p className="course-description">{course.description}</p>
            <div className="course-meta">
              <span className="course-duration">
                <i className="course-icon">⏱️</i> {course.duration}
              </span>
              <span className="course-schedule">
                <i className="course-icon">📅</i> {course.schedule}
              </span>
            </div>
            <button
              className="course-button"
              type="button"
              onClick={() => openDetails(course)}
              aria-expanded={selectedCourse?.id === course.id}
            >
              {selectedCourse?.id === course.id ? "Viewing Details" : "Learn More"}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Courses;
