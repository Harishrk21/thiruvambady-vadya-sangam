import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { CONTACT } from "../data/contactInfo";
import { PAGE_SEO, GLOBAL_ONLINE_REGIONS, SITE_NAME, getLocalBusinessSchema } from "../data/seoData";
import { SEO_IMAGES } from "../data/seoImages";
import melams from "../data/melamsData";
import "../styles/ClassesPage.css";

const ONLINE_FEATURES = [
  {
    icon: "📹",
    title: "Live Video Classes",
    text: "Weekly live sessions with real-time correction on Veekku, Chaapu, talam, and melam patterns from expert gurus.",
  },
  {
    icon: "🎧",
    title: "Practice Recordings",
    text: "Recorded lessons and practice material — learn Chenda Melam online at your own pace between live classes.",
  },
  {
    icon: "🌍",
    title: "Flexible Time Zones",
    text: "Morning and evening batches for USA, UK, UAE, Europe, and Asia-Pacific — schedules adapted for global students.",
  },
];

const OFFLINE_FEATURES = [
  {
    icon: "🏛️",
    title: "Chennai Academy",
    text: "Hands-on training at our Madipakkam academy with live ensemble practice and gurukul-style instruction.",
  },
  {
    icon: "📅",
    title: "Weekend & Evening Batches",
    text: "Chenda Melam classes Chennai designed for working professionals, students, and children.",
  },
  {
    icon: "🔀",
    title: "Hybrid Learning",
    text: "Combine offline sessions in India with online classes abroad — ideal for diaspora families.",
  },
];

const INSTRUMENTS = [
  { name: "Chenda", desc: "Beginner to advanced — Panchari, Pandi & classical melam forms" },
  { name: "Idakka", desc: "Melodic temple rhythms & Sopana Sangeetham accompaniment" },
  { name: "Maddalam", desc: "Kathakali accompaniment & classical barrel-drum techniques" },
  { name: "Thimila", desc: "Panchavadyam ensemble & temple festival rhythms" },
  { name: "Kombu", desc: "Traditional copper horn for Koodiyattam & classical arts" },
  { name: "Kurumkuzhal", desc: "Kerala wind instrument for folk & classical ensembles" },
  { name: "Sopana Sangeetham", desc: "Devotional temple-step music tradition" },
  { name: "Thayambaka", desc: "Advanced solo percussion for experienced students" },
];

const STATS = [
  { value: "30+", label: "Years of Guru Experience" },
  { value: "8+", label: "Instruments Taught" },
  { value: "Global", label: "Online Classes" },
  { value: "Chennai", label: "Offline Academy" },
];

const ChendaClassesChennai = () => (
  <>
    <SEO
      title={PAGE_SEO.classes.title}
      description={PAGE_SEO.classes.description}
      path={PAGE_SEO.classes.path}
      ogImage={SEO_IMAGES.classes}
      jsonLd={getLocalBusinessSchema()}
    />

    <main className="classes-page">
      <header className="classes-hero">
        <div className="classes-hero__glow" aria-hidden="true" />
        <div className="classes-hero__inner">
          <span className="classes-eyebrow">Global Online · Chennai Offline</span>
          <h1>Chenda Melam Classes — Learn Anywhere</h1>
          <p className="classes-hero__lead">
            Structured Kerala percussion training from beginner stick work to advanced{" "}
            <strong>Panchari Melam</strong> and <strong>Pandi Melam</strong> — under Guru{" "}
            <strong>Thiruvambady Vineesh Maarar</strong> at {SITE_NAME}.
          </p>
          <div className="classes-hero__cta">
            <Link to="/courses" className="classes-btn classes-btn--primary">View All Courses</Link>
            <a
              href={CONTACT.whatsapp}
              className="classes-btn classes-btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Enquiry
            </a>
            <Link to="/contact?form=open" className="classes-btn classes-btn--outline">Enroll Now</Link>
          </div>
        </div>
      </header>

      <div className="classes-body">
        <section className="classes-stats" aria-label="Academy highlights">
          {STATS.map((s) => (
            <div className="classes-stat" key={s.label}>
              <span className="classes-stat__value">{s.value}</span>
              <span className="classes-stat__label">{s.label}</span>
            </div>
          ))}
        </section>

        <section className="classes-block" id="global-online">
          <div className="classes-block__head">
            <span className="classes-block__tag">Online</span>
            <h2>Learn Chenda Melam Globally</h2>
            <p>
              Our <strong>online Chenda Melam classes</strong> connect students worldwide with
              authentic Kerala percussion training — no travel required.
            </p>
          </div>
          <div className="classes-feature-grid">
            {ONLINE_FEATURES.map((f) => (
              <article className="classes-feature-card" key={f.title}>
                <span className="classes-feature-card__icon" aria-hidden="true">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
          <p className="classes-regions-label">Students join from:</p>
          <ul className="classes-tag-list">
            {GLOBAL_ONLINE_REGIONS.map((region) => (
              <li key={region}><span>{region}</span></li>
            ))}
          </ul>
        </section>

        <aside className="classes-guru-callout">
          <div className="classes-guru-callout__content">
            <span className="classes-guru-callout__label">Your Guru</span>
            <h3>Thiruvambady Vineesh Maarar</h3>
            <p>
              Renowned Idakka specialist with 30+ years in temple music, Sopana Sangeetham, and
              Panchavadyam. Personal guidance from fundamentals to festival-stage performance.
            </p>
            <Link to="/courses" className="classes-link-arrow">Browse course catalog →</Link>
          </div>
        </aside>

        <section className="classes-block">
          <div className="classes-block__head">
            <span className="classes-block__tag">Offline</span>
            <h2>Chennai & Tamil Nadu Classes</h2>
            <p>
              Join <strong>offline Chenda Melam classes</strong> at our academy in Madipakkam, Chennai
              — hands-on learning with ensemble practice.
            </p>
          </div>
          <div className="classes-feature-grid">
            {OFFLINE_FEATURES.map((f) => (
              <article className="classes-feature-card" key={f.title}>
                <span className="classes-feature-card__icon" aria-hidden="true">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="classes-block">
          <div className="classes-block__head">
            <span className="classes-block__tag">Curriculum</span>
            <h2>Instruments & Courses</h2>
            <p>Train in one or more Kerala percussion instruments — each with structured levels.</p>
          </div>
          <div className="classes-instrument-grid">
            {INSTRUMENTS.map((inst) => (
              <article className="classes-instrument-card" key={inst.name}>
                <h3>{inst.name}</h3>
                <p>{inst.desc}</p>
              </article>
            ))}
          </div>
          <div className="classes-block__footer">
            <Link to="/courses" className="classes-btn classes-btn--primary">See Full Course Details</Link>
          </div>
        </section>

        <section className="classes-block classes-block--melam">
          <div className="classes-block__head">
            <h2>Classical Melam Forms You Will Learn</h2>
            <p>Progressive curriculum covering essential Kerala melam traditions.</p>
          </div>
          <div className="classes-melam-chips">
            {melams.map((m) => (
              <Link to={`/melams#${m.id}`} key={m.id} className="classes-melam-chip">
                {m.name}
              </Link>
            ))}
          </div>
          <p className="classes-note">
            <Link to="/melams">Read the full Melam guide →</Link>
          </p>
        </section>

        <section className="classes-block">
          <div className="classes-block__head">
            <h2>Who Can Join?</h2>
          </div>
          <ul className="classes-checklist">
            <li>Beginners worldwide — no prior percussion experience needed</li>
            <li>NRI and diaspora learners in USA, UK, UAE, Singapore, Malaysia, Europe</li>
            <li>Chennai students preferring offline hands-on training</li>
            <li>Performers upgrading to professional melam and Panchavadyam levels</li>
            <li>Families connecting children to Kerala heritage through music</li>
          </ul>
        </section>

        <section className="classes-cta-panel">
          <h2>Ready to Start Learning?</h2>
          <p>Enroll in a course or message us on WhatsApp for batch timings and fees.</p>
          <div className="classes-hero__cta">
            <Link to="/contact?form=open" className="classes-btn classes-btn--primary">Enroll Now</Link>
            <a
              href={CONTACT.whatsapp}
              className="classes-btn classes-btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {CONTACT.phone}
            </a>
          </div>
          <nav className="classes-links" aria-label="Related pages">
            <Link to="/courses">All Courses</Link>
            <Link to="/chenda-melam-chennai">Wedding Melam Booking</Link>
            <Link to="/testimonials">Reviews</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </section>
      </div>
    </main>
  </>
);

export default ChendaClassesChennai;
