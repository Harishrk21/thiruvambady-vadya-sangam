const publicUrl = process.env.PUBLIC_URL || "";

const galleryImages = [
  {
    file: "gallery-temple-shrine-group.jpeg",
    alt: "Artists at a decorated temple shrine",
    caption: "Temple shrine program — February 2026",
  },
  {
    file: "gallery-morning-rehearsal.jpeg",
    alt: "Morning rehearsal session",
    caption: "Early morning rehearsal before temple program",
  },
  {
    file: "gallery-church-festival-group.jpeg",
    alt: "Ensemble at a church festival celebration",
    caption: "Church festival percussion ensemble",
  },
  {
    file: "gallery-afternoon-ensemble.jpeg",
    alt: "Afternoon ensemble performance",
    caption: "Afternoon cultural program",
  },
  {
    file: "gallery-evening-temple-event.jpeg",
    alt: "Evening temple event performance",
    caption: "Evening temple event — February 2026",
  },
  {
    file: "gallery-dawn-ceremony.jpeg",
    alt: "Dawn ceremony performance",
    caption: "Dawn ceremony at temple grounds",
  },
  {
    file: "gallery-peacock-hall-group.jpeg",
    alt: "Artists at peacock hall venue",
    caption: "Peacock hall cultural gathering",
  },
  {
    file: "gallery-street-procession-artists.jpeg",
    alt: "Artists during street procession",
    caption: "Street procession with full artist ensemble",
  },
  {
    file: "gallery-march-program-01.jpeg",
    alt: "March program performance",
    caption: "March 2026 — temple program",
  },
  {
    file: "gallery-march-program-02.jpeg",
    alt: "March evening ensemble",
    caption: "March 2026 — evening ensemble",
  },
  {
    file: "gallery-training-session-march.jpeg",
    alt: "Training session with students",
    caption: "Training session — March 2026",
  },
  {
    file: "gallery-flower-arch-ceremony.jpeg",
    alt: "Ceremony at flower-decorated venue",
    caption: "Flower arch ceremony — April 2026",
  },
  {
    file: "gallery-april-night-gathering.jpeg",
    alt: "April night cultural gathering",
    caption: "April night gathering with ensemble",
  },
  {
    file: "gallery-april-afternoon-show.jpeg",
    alt: "April afternoon cultural show",
    caption: "April afternoon cultural show",
  },
  {
    file: "gallery-may-temple-program.jpeg",
    alt: "May temple program",
    caption: "May 2026 — temple program",
  },
  {
    file: "gallery-kombu-ensemble-group.jpeg",
    alt: "Kombu ensemble group photo",
    caption: "Kombu ensemble — corporate venue program",
  },
  {
    file: "gallery-may-evening-ensemble.jpeg",
    alt: "May evening ensemble",
    caption: "May evening ensemble performance",
  },
  {
    file: "gallery-may-night-performance.jpeg",
    alt: "May night performance",
    caption: "May night performance under lights",
  },
  {
    file: "gallery-may-sunset-program.jpeg",
    alt: "May sunset program",
    caption: "Sunset program — May 2026",
  },
  {
    file: "gallery-corporate-inauguration.jpeg",
    alt: "Corporate inauguration performance",
    caption: "Corporate inauguration — Joyalukkas event",
  },
  {
    file: "gallery-shrine-performers-group.jpeg",
    alt: "Performers at outdoor shrine",
    caption: "Shrine performers group — July 2026",
  },
  {
    file: "gallery-july-evening-ensemble.jpeg",
    alt: "July evening ensemble",
    caption: "July evening ensemble — latest program",
  },
];

export default galleryImages.map((item) => ({
  ...item,
  src: `${publicUrl}/${item.file}`,
  type: "image",
}));
