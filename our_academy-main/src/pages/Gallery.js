import React from "react";
import "../styles/Gallery.css"; // Import the CSS file
import bw from "../assets/blackandwhitesolo.jpg"
import solo from "../assets/solo.jpg";
import arang2k23 from "../assets/arang2k23.jpg";
import img5 from "../assets/img5.jpg";
import vdo from "../assets/perambur-vdo.mp4";
import perbp from "../assets/perambur-bp.jpeg";

const Gallery = () => {
  // Array of media items with alt text, type, and orientation
  const galleryItems = [
    { src: solo, alt: "Percussion performance - Chenda", type: "image" },
    { src: perbp, alt: "Percussion students practicing", type: "image" },
    { src: arang2k23, alt: "Traditional performance", type: "image" },
    { src: bw, alt: "Percussion Academy group photo", type: "image" },
    { src: img5, alt: "Percussion instrument close-up", type: "image" },
    { src: vdo, alt: "Students learning percussion", type: "video",orientation:"landscape" },
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-description">A glimpse into our academy and students' journey</p>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div 
            key={index} 
            className={`gallery-item ${item.orientation ? `gallery-item-${item.orientation}` : ''}`}
          >
            {item.type === "image" ? (
              <img 
                src={item.src} 
                alt={item.alt} 
                className="gallery-media"
                loading="lazy"
              />
            ) : (
              <video 
                src={item.src} 
                className="gallery-media"
                controls
                playsInline
                muted
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;