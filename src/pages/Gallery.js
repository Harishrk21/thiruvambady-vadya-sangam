import React, { useState, useEffect, useCallback } from "react";
import "../styles/Gallery.css";
import galleryItems from "../data/galleryData";
import SEO from "../components/SEO";
import { PAGE_SEO, SITE_NAME } from "../data/seoData";
import { SEO_IMAGES } from "../data/seoImages";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, goPrev, goNext]);

  const activeItem = activeIndex !== null ? galleryItems[activeIndex] : null;

  return (
    <div className="gallery-container">
      <SEO
        title={PAGE_SEO.gallery.title}
        description={PAGE_SEO.gallery.description}
        path={PAGE_SEO.gallery.path}
        ogImage={SEO_IMAGES.gallery}
      />
      <h1 className="gallery-title">Chenda Melam Gallery</h1>
      <p className="gallery-description">
        {galleryItems.length} moments from {SITE_NAME} — temple programs,
        corporate events, training sessions, and festival performances across Tamil Nadu and Kerala.
      </p>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <button
            key={item.file}
            type="button"
            className="gallery-item"
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${item.caption}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="gallery-media"
              loading={index < 6 ? "eager" : "lazy"}
            />
            <p className="gallery-caption">{item.caption}</p>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close preview"
          >
            ×
          </button>

          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className="gallery-lightbox-image"
            />
            <p className="gallery-lightbox-caption">{activeItem.caption}</p>
            <span className="gallery-lightbox-counter">
              {activeIndex + 1} / {galleryItems.length}
            </span>
          </div>

          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
