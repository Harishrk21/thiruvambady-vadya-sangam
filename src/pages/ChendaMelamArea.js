import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { CONTACT } from "../data/contactInfo";
import { CHENNAI_AREA_PAGES, getAreaPath, getAreaSeo } from "../data/chennaiAreaPages";
import { CITY_SEO_PAGES, getCityPath, getCitySeo } from "../data/citySeoPages";
import { getLocalityBySlug } from "../data/localitySeo";
import { WEDDING_OCCASIONS, SITE_NAME, getLocalBusinessSchema, getFaqSchema } from "../data/seoData";
import { SEO_IMAGES } from "../data/seoImages";
import "../styles/SeoPages.css";

const LOCALITY_PATH_PREFIX = "chenda-melam-";

const ChendaMelamArea = () => {
  const { pageSlug } = useParams();
  const areaSlug = pageSlug?.startsWith(LOCALITY_PATH_PREFIX)
    ? pageSlug.slice(LOCALITY_PATH_PREFIX.length)
    : null;

  if (!areaSlug) {
    return <Navigate to="/" replace />;
  }

  const locality = getLocalityBySlug(areaSlug);

  if (!locality) {
    return <Navigate to="/chenda-melam-chennai" replace />;
  }

  const isArea = locality.kind === "area";
  const seo = isArea ? getAreaSeo(locality) : getCitySeo(locality);
  const displayName = locality.fullName
    ? `${locality.name} (${locality.fullName})`
    : locality.name;
  const locationLabel = isArea ? `${locality.name}, Chennai` : `${locality.name}, ${locality.state}`;
  const otherAreas = CHENNAI_AREA_PAGES.filter((a) => a.slug !== locality.slug);
  const otherCities = CITY_SEO_PAGES.filter((c) => c.slug !== locality.slug).slice(0, 8);

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path={seo.path}
        ogImage={isArea ? SEO_IMAGES.area : SEO_IMAGES.city}
        keywords={[
          `Chenda Melam ${locality.name}`,
          `Wedding Chenda Melam ${locality.name}`,
          `Book Chenda Melam ${locality.name}`,
          `Kerala Chenda Melam ${locality.name}`,
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [getLocalBusinessSchema(), getFaqSchema(locality.faqs)],
        }}
      />

      <main className="seo-page">
        <div className="seo-page-inner">
          <header className="seo-hero">
            <span className="seo-eyebrow">
              {isArea ? `Chennai Wedding Melam · ${locality.name}` : `${locality.state} · ${locality.name}`}
            </span>
            <h1>Chenda Melam {locality.name} — Wedding Booking</h1>
            <p className="seo-hero-lead">
              Book <strong>Chenda Melam in {locality.name}</strong> for your wedding — groom entry, bride entry,
              baraat, reception, and muhurtham. Based in Madipakkam, Chennai, {SITE_NAME} provides a{" "}
              <strong>professional Kerala Chenda Melam team</strong> trusted across {displayName}
              {isArea ? " and Chennai" : ` and ${locality.state}`}.
            </p>
            <div className="seo-cta-row">
              <a href={CONTACT.whatsapp} className="seo-cta primary" target="_blank" rel="noopener noreferrer">
                WhatsApp Booking
              </a>
              <a href={`tel:${CONTACT.phoneTel}`} className="seo-cta secondary">Call {CONTACT.phone}</a>
              <Link to="/contact?type=wedding" className="seo-cta outline">Get Quote</Link>
            </div>
          </header>

          <section className="seo-section">
            <h2>Chenda Melam for Wedding in {locality.name}</h2>
            <p className="seo-text-block">{locality.highlight}</p>
            {locality.extra && <p className="seo-text-block">{locality.extra}</p>}
            <p className="seo-text-block">
              Looking for <strong>Chenda Melam near me in {locationLabel}</strong>? We offer affordable to premium
              wedding packages — compact entry ensembles to full <strong>Panchari Melam</strong> and{" "}
              <strong>Panchavadyam</strong> for marriage functions across {locality.name}.
            </p>
          </section>

          <section className="seo-section">
            <h2>Nearby Areas We Also Serve</h2>
            <ul className="seo-tag-list">
              {locality.nearby.map((n) => (
                <li key={n}><span>Chenda Melam near {n}</span></li>
              ))}
            </ul>
          </section>

          <section className="seo-section">
            <h2>Wedding Services in {locality.name}</h2>
            <div className="seo-grid-2">
              {WEDDING_OCCASIONS.slice(0, 6).map((o) => (
                <article className="seo-card" key={o.title}>
                  <h3>{o.title}</h3>
                  <p>{o.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="seo-section">
            <h2>Chenda Melam Price in {locality.name}</h2>
            <p className="seo-text-block">
              <strong>Chenda Melam {locality.name} price</strong> depends on team size, duration, and venue.
              Contact us for transparent <strong>Chenda Melam cost</strong> — wedding, marriage, and reception bookings.
              <strong> Chenda Melam WhatsApp booking</strong> available for instant quotes.
            </p>
          </section>

          <section className="seo-section seo-faq">
            <h2>Frequently Asked Questions — {locality.name}</h2>
            {locality.faqs.map((item) => (
              <details className="seo-faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </section>

          {isArea ? (
            <section className="seo-section">
              <h2>Other Chennai Areas</h2>
              <nav className="seo-link-hub" aria-label="Chennai area pages">
                <Link to="/chenda-melam-chennai">All Chennai →</Link>
                {otherAreas.map((a) => (
                  <Link key={a.slug} to={getAreaPath(a.slug)}>Chenda Melam {a.name}</Link>
                ))}
              </nav>
            </section>
          ) : (
            <section className="seo-section">
              <h2>Other Cities in {locality.state}</h2>
              <nav className="seo-link-hub" aria-label="City pages">
                <Link to="/chenda-melam-chennai">All South India →</Link>
                {otherCities.map((c) => (
                  <Link key={c.slug} to={getCityPath(c.slug)}>Chenda Melam {c.name}</Link>
                ))}
              </nav>
            </section>
          )}

          <section className="seo-section seo-internal-links">
            <h2>Related Pages</h2>
            <nav className="seo-link-hub">
              <Link to="/contact?type=wedding">Book Wedding Melam →</Link>
              <Link to="/chenda-classes-chennai">Online Chenda Melam Classes →</Link>
              <Link to="/melams">Panchari Melam Guide →</Link>
              <Link to="/programs">Wedding Programs →</Link>
              <Link to="/gallery">Gallery →</Link>
            </nav>
          </section>
        </div>
      </main>
    </>
  );
};

export default ChendaMelamArea;
