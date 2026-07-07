import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";
import "../styles/SeoPages.css";
import heroImage from "../assets/hero-image.jpg";
import guruImage from "../assets/guru.png";
import InstagramCarousel from "../components/InstagramCarousel";
import SEO from "../components/SEO";
import { CONTACT, BRAND_NAME } from "../data/contactInfo";
import { PAGE_SEO, TAMIL_NADU_CITIES, ANDHRA_PRADESH_CITIES, TELANGANA_CITIES, getLocalBusinessSchema } from "../data/seoData";
import { CHENNAI_AREA_PAGES, getAreaPath } from "../data/chennaiAreaPages";
import { SEO_IMAGES } from "../data/seoImages";

const aboutImage = `${process.env.PUBLIC_URL}/about.png`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <SEO
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        path={PAGE_SEO.home.path}
        ogImage={SEO_IMAGES.home}
        jsonLd={getLocalBusinessSchema()}
      />

      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Chenda Melam Chennai - Kerala Wedding Melam Performance" className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title">{BRAND_NAME}</h1>
          <h2 className="hero-tagline">Chenda Melam in Chennai</h2>
          <p className="hero-subtitle">
            Book professional Chenda Melam for wedding in Chennai, Tamil Nadu, Andhra Pradesh & Telangana.
            Online Chenda Melam classes globally. Traditional Kerala Melam for groom entry, baraat & reception.
          </p>
          <div className="hero-button-row">
            <button className="hero-button" onClick={() => navigate("/chenda-melam-chennai")}>Book Wedding Melam</button>
            <button className="hero-button hero-button-outline" onClick={() => navigate("/chenda-classes-chennai")}>Chenda Classes</button>
          </div>
        </div>
      </div>

      {/* About brand */}
      <div className="section-container">
        <img
          src={aboutImage}
          alt={`${BRAND_NAME} — Chenda Melam ensemble and students at Madipakkam, Chennai`}
          className="section-image"
          loading="lazy"
        />
        <div className="section-content">
          <h2 className="section-title">About {BRAND_NAME}</h2>
          <p className="section-text">
            <strong>{BRAND_NAME}</strong> is a professional <strong>Chenda Melam team</strong> and percussion academy
            serving <strong>Chennai</strong> and all of Tamil Nadu. We specialise in <strong>wedding Chenda Melam Chennai</strong> —
            groom entry, bride entry, baraat, reception, and muhurtham — alongside authentic <strong>Kerala Chenda Melam</strong>,
            <Link to="/melams"> Panchari Melam</Link>, and <Link to="/programs">Panchavadyam</Link> for temple and cultural events.
          </p>
          <p className="section-text">
            Under Guru <strong>Thiruvambady Vineesh Maarar</strong>, we offer <Link to="/chenda-classes-chennai">Chenda Melam classes in Chennai</Link> —
            online and offline — covering classical melam forms and ensemble performance.
            <Link to="/chenda-melam-chennai"> Book Chenda Melam</Link> for your wedding or <Link to="/contact">contact us on WhatsApp</Link> for instant booking.
          </p>
        </div>
      </div>

      {/* Why Join */}
      <div className="why-join-section">
        <div className="why-join-content">
          <h2 className="section-title">Why Join {BRAND_NAME}</h2>
          <div className="benefits-container">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="benefit-title">Authentic Learning</h3>
              <p className="benefit-text">
                Learn traditional techniques — Veekku, Chaapu, Melam patterns, and Panchavadyam structures — passed down through generations of Marar and temple artist lineages.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <h3 className="benefit-title">Flexible Schedule</h3>
              <p className="benefit-text">
                Weekend, evening, and flexible batches designed for students, working professionals, and children — learn Chenda, Thimila, Idakka, or Maddalam at your pace.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="benefit-title">Expert Guidance</h3>
              <p className="benefit-text">
                Train under Thiruvambady Vineesh Maarar — an Idakka specialist with 30+ years of experience in Melam, Panchavadyam, Sopana Sangeetham, and temple festival performances.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="benefit-title">Performance Opportunities</h3>
              <p className="benefit-text">
                Regular arangam showcases, temple program participation, and festival performances at Kerala Samajam, temple programs, and cultural events across Chennai and Tamil Nadu.
              </p>
            </div>
          </div>
          <Link to="/courses" className="why-join-button">Explore Our Courses</Link>
        </div>
      </div>

      {/* SEO: Wedding Melam & Classes Chennai */}
      <section className="home-seo-section">
        <div className="home-seo-inner">
          <h2>Chenda Melam Wedding & Classes — Chennai to Global</h2>
          <p className="home-seo-sub">
            Wedding Chenda Melam across Chennai, Tamil Nadu, Andhra Pradesh & Telangana.
            Online Chenda Melam classes worldwide for students in USA, UK, UAE, and beyond.
          </p>
          <div className="home-seo-grid">
            <div className="home-seo-block">
              <h3>Wedding Chenda Melam Chennai</h3>
              <p>Book traditional Kerala wedding band for groom entry, baraat, reception, and muhurtham across all Chennai areas.</p>
              <Link to="/chenda-melam-chennai">Book Chenda Melam Chennai →</Link>
            </div>
            <div className="home-seo-block">
              <h3>Online Chenda Melam Class — Global</h3>
              <p>Learn Chenda Melam online from anywhere — USA, UK, UAE, Singapore, Malaysia, Europe. Live classes with expert gurus.</p>
              <Link to="/chenda-classes-chennai#global-online">Online Classes Worldwide →</Link>
            </div>
            <div className="home-seo-block">
              <h3>Wedding Chenda Melam Tamil Nadu</h3>
              <p>Chenda Melam for wedding in Tamil Nadu — Coimbatore, Madurai, Trichy, Salem and all major cities.</p>
              <div className="home-seo-areas">
                {TAMIL_NADU_CITIES.slice(0, 6).map((c) => <span key={c}>{c}</span>)}
              </div>
              <Link to="/chenda-melam-chennai#tamil-nadu">Tamil Nadu weddings →</Link>
            </div>
            <div className="home-seo-block">
              <h3>Wedding Chenda Melam Andhra Pradesh</h3>
              <p>Kerala Chenda Melam for weddings in Vijayawada, Visakhapatnam, Tirupati, Guntur and across AP.</p>
              <div className="home-seo-areas">
                {ANDHRA_PRADESH_CITIES.slice(0, 5).map((c) => <span key={c}>{c}</span>)}
              </div>
              <Link to="/chenda-melam-chennai#andhra-pradesh">Andhra Pradesh →</Link>
            </div>
            <div className="home-seo-block">
              <h3>Wedding Chenda Melam Telangana</h3>
              <p>Professional Chenda Melam team for Hyderabad weddings, Warangal, and Telangana marriage functions.</p>
              <div className="home-seo-areas">
                {TELANGANA_CITIES.slice(0, 5).map((c) => <span key={c}>{c}</span>)}
              </div>
              <Link to="/chenda-melam-chennai#telangana">Telangana weddings →</Link>
            </div>
            <div className="home-seo-block">
              <h3>Chennai Areas We Cover</h3>
              <p>Chenda Melam near me — all major Chennai neighbourhoods for weddings and events.</p>
              <div className="home-seo-areas">
                {CHENNAI_AREA_PAGES.map((a) => (
                  <Link key={a.slug} to={getAreaPath(a.slug)}>{a.name}</Link>
                ))}
              </div>
              <Link to="/chenda-melam-chennai#areas">All Chennai areas →</Link>
            </div>
          </div>
          <div className="home-seo-ctas">
            <a href={CONTACT.whatsapp} className="seo-cta primary" target="_blank" rel="noopener noreferrer">WhatsApp Booking</a>
            <Link to="/contact" className="seo-cta outline">Chenda Melam Contact</Link>
            <Link to="/programs" className="seo-cta outline">Wedding Programs</Link>
          </div>
        </div>
      </section>

      {/* About Guru Thiruvambady Vineesh Maarar */}
      <div className="section-container reverse guru-section">
        <div className="guru-image-container">
          <div className="guru-image-frame">
            <img src={guruImage} alt="Guru Thiruvambady Vineesh Maarar" className="guru-image" />
          </div>
          <div className="guru-badges">
            <span className="guru-badge">Idakka Specialist</span>
            <span className="guru-badge">30+ Years</span>
            <span className="guru-badge">Gurukul Tradition</span>
          </div>
        </div>
        <div className="section-content guru-content">
          <span className="guru-eyebrow">Guiding Master</span>
          <h2 className="section-title guru-title">About Our Guru</h2>
          <p className="guru-name">Thiruvambady Vineesh Maarar</p>
          <p className="section-text guru-lead">
            A distinguished Kerala percussion artist and renowned Idakka specialist with over 30 years
            of experience in temple music, Sopana Sangeetham, and Panchavadyam traditions.
          </p>
          <div className="guru-highlights">
            <div className="guru-highlight-card">
              <span className="guru-highlight-icon">🥁</span>
              <div>
                <h4>Idakka Mastery</h4>
                <p>Trained in the rigorous gurukul tradition — melodic sensitivity, precise talam, and devotional depth.</p>
              </div>
            </div>
            <div className="guru-highlight-card">
              <span className="guru-highlight-icon">🏛️</span>
              <div>
                <h4>Stage & Temple</h4>
                <p>Chenda Melam, Panchavadyam, and ensemble programs across Kerala and Tamil Nadu.</p>
              </div>
            </div>
            <div className="guru-highlight-card">
              <span className="guru-highlight-icon">🎓</span>
              <div>
                <h4>Teaching</h4>
                <p>Offline classes at the Sangam and online sessions for students across India and abroad.</p>
              </div>
            </div>
          </div>
          <blockquote className="guru-quote">
            "Whether beginner or advanced, his teaching emphasises authentic tradition, attentive listening,
            and the confidence to perform on temple stages and cultural platforms."
          </blockquote>
        </div>
      </div>

      <InstagramCarousel />

      {/* Know More About Instruments Section - Enhanced Version */}
      <div className="instruments-showcase-section">
        <div className="instruments-showcase-overlay"></div>
        <div className="instruments-showcase-content">
          <h2 className="instruments-showcase-title">Discover the Rhythmic Heritage of Kerala</h2>
          <p className="instruments-showcase-text">
            Immerse yourself in the rich tapestry of Kerala's percussion traditions. From the thunderous Chenda Melam
            of Thrissur Pooram to the melodic Idakka of Sopana Sangeetham, from the leading beats of Panchavadyam's
            Thimila to the sacred Mizhavu of Koodiyattam — nine instruments, centuries of heritage.
          </p>
          
          <div className="instruments-preview-container">
            <div className="instrument-preview">
              <div className="instrument-preview-circle">
                <span className="instrument-name-tag">Chenda</span>
              </div>
            </div>
            <div className="instrument-preview">
              <div className="instrument-preview-circle">
                <span className="instrument-name-tag">Maddalam</span>
              </div>
            </div>
            <div className="instrument-preview">
              <div className="instrument-preview-circle">
                <span className="instrument-name-tag">Idakka</span>
              </div>
            </div>
            <div className="instrument-preview">
              <div className="instrument-preview-circle">
                <span className="instrument-name-tag">Thimila</span>
              </div>
            </div>
            <div className="instrument-preview">
              <div className="instrument-preview-circle">
                <span className="instrument-name-tag">Kombu</span>
              </div>
            </div>
            <div className="instrument-preview">
              <div className="instrument-preview-circle">
                <span className="instrument-name-tag">Mizhavu</span>
              </div>
            </div>
          </div>
          
          <Link to="/instruments" className="instruments-showcase-button">
            <span>Explore Our Instruments</span>
            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;