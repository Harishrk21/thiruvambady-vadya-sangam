import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { CONTACT } from "../data/contactInfo";
import { SITE_NAME } from "../data/seoData";
import {
  PAGE_SEO,
  CHENNAI_AREAS,
  TAMIL_NADU_CITIES,
  ANDHRA_PRADESH_CITIES,
  TELANGANA_CITIES,
  WEDDING_OCCASIONS,
  SEO_FAQ,
  getLocalBusinessSchema,
  getFaqSchema,
} from "../data/seoData";
import { CHENNAI_AREA_PAGES, getAreaPath, getAreaSlugForName } from "../data/chennaiAreaPages";
import { CITY_SEO_PAGES, getCityPath, getCitySlugForName } from "../data/citySeoPages";
import { SEO_IMAGES } from "../data/seoImages";
import { publicImage, WEDDING_IMAGES } from "../data/pageImages";
import "../styles/SeoPages.css";

const GALLERY_STRIP = [
  { src: WEDDING_IMAGES.groomEntry, caption: "Groom entry procession" },
  { src: WEDDING_IMAGES.ceremony, caption: "Wedding ceremony melam" },
  { src: WEDDING_IMAGES.reception, caption: "Reception performance" },
  { src: WEDDING_IMAGES.night, caption: "Evening wedding ensemble" },
];

const ChendaMelamChennai = () => (
  <>
    <SEO
      title={PAGE_SEO.wedding.title}
      description={PAGE_SEO.wedding.description}
      path={PAGE_SEO.wedding.path}
      ogImage={SEO_IMAGES.wedding}
      jsonLd={{ "@context": "https://schema.org", "@graph": [getLocalBusinessSchema(), getFaqSchema()] }}
    />

    <main className="seo-page">
      <section
        className="seo-hero-banner"
        style={{ backgroundImage: `url(${publicImage(WEDDING_IMAGES.hero)})` }}
      >
        <div className="seo-hero-banner__overlay" />
        <div className="seo-hero-banner__content">
          <span className="seo-eyebrow">Kerala Wedding Melam · South India</span>
          <h1>Chenda Melam for Wedding in Chennai & South India</h1>
          <p className="seo-hero-lead">
            Book the <strong>best Chenda Melam team</strong> for your marriage across{" "}
            <strong>Chennai</strong>, <strong>Tamil Nadu</strong>, <strong>Andhra Pradesh</strong>, and{" "}
            <strong>Telangana</strong>. {SITE_NAME} delivers authentic{" "}
            <strong>Kerala Chenda Melam</strong> for groom entry, bride entry, baraat, reception, and muhurtham.
          </p>
          <div className="seo-cta-row">
            <a href={CONTACT.whatsapp} className="seo-cta primary" target="_blank" rel="noopener noreferrer">
              WhatsApp Booking
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="seo-cta secondary">Call {CONTACT.phone}</a>
            <Link to="/contact?type=wedding&form=open" className="seo-cta outline">Get Quote</Link>
          </div>
        </div>
      </section>

      <div className="seo-page-inner">
        <section className="seo-gallery-strip" aria-label="Wedding performance photos">
          {GALLERY_STRIP.map((item) => (
            <figure className="seo-gallery-strip__item" key={item.src}>
              <img src={publicImage(item.src)} alt={item.caption} loading="lazy" />
              <figcaption className="seo-gallery-strip__caption">{item.caption}</figcaption>
            </figure>
          ))}
        </section>

        <section className="seo-section">
          <h2>Why Book Our Chenda Melam Chennai Team?</h2>
          <div className="seo-cards">
            <article className="seo-card-image">
              <img
                className="seo-card-image__img"
                src={publicImage(WEDDING_IMAGES.ensemble)}
                alt="Professional Chenda Melam artists performing"
                loading="lazy"
              />
              <div className="seo-card-image__body">
                <h3>Professional Chenda Melam Artists</h3>
                <p>Experienced artists led by Thiruvambady Vineesh Maarar — 30+ years in Kerala temple melam and wedding performances.</p>
              </div>
            </article>
            <article className="seo-card-image">
              <img
                className="seo-card-image__img"
                src={publicImage(WEDDING_IMAGES.ceremony)}
                alt="Premium wedding Chenda Melam package"
                loading="lazy"
              />
              <div className="seo-card-image__body">
                <h3>Premium & Affordable Packages</h3>
                <p>From compact wedding-entry ensembles to full Panchari Melam — transparent pricing for every budget.</p>
              </div>
            </article>
            <article className="seo-card-image">
              <img
                className="seo-card-image__img"
                src={publicImage(WEDDING_IMAGES.temple)}
                alt="Chenda Melam team across Chennai areas"
                loading="lazy"
              />
              <div className="seo-card-image__body">
                <h3>All Chennai Areas Covered</h3>
                <p>We travel across Chennai for weddings — punctual, professionally dressed artists for every neighbourhood.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="seo-feature-band">
          <img src={publicImage(WEDDING_IMAGES.groomEntry)} alt="Kerala groom entry Chenda Melam" loading="lazy" />
          <div className="seo-feature-band__overlay" />
          <div className="seo-feature-band__text">
            <h3>Grand Groom Entry & Baraat Melam</h3>
            <p>
              Make your wedding entrance unforgettable with powerful Kerala Chenda rhythms —
              perfect for baraat processions, groom entry, and luxury marriage celebrations across South India.
            </p>
          </div>
        </section>

        <section className="seo-section">
          <h2>Wedding Chenda Melam Services</h2>
          <p className="seo-section-intro">
            Traditional <strong>Kerala wedding orchestra</strong> and live percussion for every moment of your marriage celebration.
          </p>

          <div className="seo-split-row">
            <div className="seo-split-row__media">
              <img src={publicImage(WEDDING_IMAGES.groomEntry)} alt="Groom entry Chenda Melam Chennai" loading="lazy" />
            </div>
            <div className="seo-split-row__content">
              <h3>{WEDDING_OCCASIONS[1].title}</h3>
              <p>{WEDDING_OCCASIONS[1].desc}</p>
            </div>
          </div>

          <div className="seo-split-row reverse">
            <div className="seo-split-row__media">
              <img src={publicImage(WEDDING_IMAGES.ceremony)} alt="Bride entry and muhurtham Chenda Melam" loading="lazy" />
            </div>
            <div className="seo-split-row__content">
              <h3>{WEDDING_OCCASIONS[2].title}</h3>
              <p>{WEDDING_OCCASIONS[2].desc}</p>
            </div>
          </div>

          <div className="seo-grid-2">
            {WEDDING_OCCASIONS.slice(2).map((o) => (
              <article className="seo-card" key={o.title}>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </article>
            ))}
          </div>

          <p className="seo-text-block">
            Looking for <strong>luxury wedding Chenda Melam</strong>, <strong>wedding entrance Chenda Melam Chennai</strong>,
            or <strong>groom entry Chenda Melam Chennai</strong>? Our <strong>top Chenda Melam Chennai</strong> team customises
            every performance for your venue, guest count, and cultural preferences.
          </p>
        </section>

        <section className="seo-section" id="areas">
          <h2>Chenda Melam Near Me — Chennai Areas We Serve</h2>
          <p className="seo-section-intro">
            Book <strong>Kerala Chenda Melam Chennai</strong> for weddings and events in every major neighbourhood:
          </p>
          <ul className="seo-tag-list">
            {CHENNAI_AREAS.map((area) => {
              const slug = getAreaSlugForName(area);
              return (
                <li key={area}>
                  {slug ? (
                    <Link to={getAreaPath(slug)}>Chenda Melam {area}</Link>
                  ) : (
                    <span>Chenda Melam {area}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <nav className="seo-link-hub" aria-label="Chennai area landing pages">
            {CHENNAI_AREA_PAGES.map((a) => (
              <Link key={a.slug} to={getAreaPath(a.slug)}>Chenda Melam {a.name}</Link>
            ))}
          </nav>
          <p className="seo-text-block">
            We also serve Coimbatore, Madurai, Trichy, Salem, and every major city in <strong>Tamil Nadu</strong>.
            <strong> Chenda Melam booking</strong> is available online — WhatsApp or call our <strong>Chenda Melam contact number</strong>.
          </p>
        </section>

        <section className="seo-section" id="tamil-nadu">
          <h2>Chenda Melam for Wedding in Tamil Nadu</h2>
          <p className="seo-section-intro">
            <strong>Wedding Chenda Melam Tamil Nadu</strong> — book our professional Kerala melam team for marriages across the state:
          </p>
          <ul className="seo-tag-list">
            {TAMIL_NADU_CITIES.map((city) => {
              const slug = getCitySlugForName(city);
              return (
                <li key={city}>
                  {slug ? (
                    <Link to={getCityPath(slug)}>Chenda Melam {city}</Link>
                  ) : (
                    <span>Chenda Melam {city}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="seo-text-block">
            From <strong>Chenda Melam Coimbatore</strong> to <strong>Chenda Melam Madurai</strong>, we bring
            authentic Kerala wedding percussion to Tamil Nadu diaspora and traditional marriage celebrations.
          </p>
        </section>

        <section className="seo-section" id="andhra-pradesh">
          <h2>Chenda Melam for Wedding in Andhra Pradesh</h2>
          <p className="seo-section-intro">
            <strong>Wedding Chenda Melam Andhra Pradesh</strong> — Kerala traditional band for Telugu-Kerala weddings and cultural functions:
          </p>
          <ul className="seo-tag-list">
            {ANDHRA_PRADESH_CITIES.map((city) => {
              const slug = getCitySlugForName(city);
              return (
                <li key={city}>
                  {slug ? (
                    <Link to={getCityPath(slug)}>Chenda Melam {city}</Link>
                  ) : (
                    <span>Chenda Melam {city}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="seo-text-block">
            Book <strong>Chenda Melam Vijayawada</strong>, <strong>Chenda Melam Visakhapatnam</strong>, or{" "}
            <strong>Chenda Melam Tirupati</strong> for groom entry, reception, and temple-style wedding processions.
          </p>
        </section>

        <section className="seo-section" id="telangana">
          <h2>Chenda Melam for Wedding in Telangana</h2>
          <p className="seo-section-intro">
            <strong>Wedding Chenda Melam Telangana</strong> — premium Kerala melam for Hyderabad weddings and across the state:
          </p>
          <ul className="seo-tag-list">
            {TELANGANA_CITIES.map((city) => {
              const slug = getCitySlugForName(city);
              return (
                <li key={city}>
                  {slug ? (
                    <Link to={getCityPath(slug)}>Chenda Melam {city}</Link>
                  ) : (
                    <span>Chenda Melam {city}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="seo-text-block">
            Our team performs at <strong>Chenda Melam Hyderabad</strong> weddings, corporate cultural evenings, and
            <strong> Chenda Melam Warangal</strong> marriage functions — authentic South Indian wedding band experience.
          </p>
          <nav className="seo-link-hub" aria-label="South India city pages">
            {CITY_SEO_PAGES.slice(0, 12).map((c) => (
              <Link key={c.slug} to={getCityPath(c.slug)}>Chenda Melam {c.name}</Link>
            ))}
            <Link to="/contact?type=wedding&form=open">Book Any City →</Link>
          </nav>
        </section>

        <section className="seo-section">
          <h2>Kerala Melam & Traditional Music Chennai</h2>
          <p className="seo-text-block">
            Beyond wedding Chenda Melam, we offer <Link to="/melams">Panchari Melam Chennai</Link>,{" "}
            <Link to="/programs">Panchavadyam Chennai</Link>, and full <strong>Kerala traditional music group Chennai</strong> ensembles.
            As a leading <strong>Kerala cultural band Chennai</strong> and <strong>South Indian wedding band</strong>,
            we bring Thrissur Pooram-level artistry to your function.
          </p>
          <div className="seo-link-hub">
            <Link to="/melams">Panchari Melam & Melam Forms →</Link>
            <Link to="/programs">All Programs & Performances →</Link>
            <Link to="/chenda-classes-chennai">Online Chenda Melam Classes Global →</Link>
            <Link to="/gallery">Performance Gallery →</Link>
          </div>
        </section>

        <section className="seo-section">
          <h2>Chenda Melam Price & Booking Chennai</h2>
          <p className="seo-text-block">
            <strong>Chenda Melam Chennai price</strong> varies by team size, duration, and travel.
            Contact us for <strong>Chenda Melam cost Chennai</strong> details — we offer competitive rates for
            <strong> Chenda Melam wedding</strong>, <strong>Chenda Melam marriage</strong>, and
            <strong> Chenda Melam function</strong> bookings. <strong>Book Kerala Melam online</strong> via WhatsApp for instant response.
          </p>
          <div className="seo-cta-row">
            <a href={CONTACT.whatsapp} className="seo-cta primary" target="_blank" rel="noopener noreferrer">
              Chenda Melam WhatsApp Booking
            </a>
            <Link to="/contact?type=wedding&form=open" className="seo-cta outline">Book Now</Link>
          </div>
        </section>

        <section className="seo-section seo-faq">
          <h2>Frequently Asked Questions</h2>
          {SEO_FAQ.map((item) => (
            <details className="seo-faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </section>

        <section className="seo-section seo-internal-links">
          <h2>Explore {SITE_NAME}</h2>
          <nav className="seo-link-hub" aria-label="Related pages">
            <Link to="/">Home</Link>
            <Link to="/chenda-classes-chennai">Chenda Melam Classes Chennai</Link>
            <Link to="/courses">All Courses</Link>
            <Link to="/melams">Kerala Melam Forms</Link>
            <Link to="/programs">Wedding & Event Programs</Link>
            <Link to="/testimonials">Client Testimonials</Link>
            <Link to="/contact">Contact & Booking</Link>
          </nav>
        </section>
      </div>
    </main>
  </>
);

export default ChendaMelamChennai;
