const publicUrl = process.env.PUBLIC_URL || "";

const programs = [
  {
    title: "Temple Programs & Utsavams",
    image: "gallery-temple-shrine-group.jpeg",
    tag: "Sacred",
    desc: "Authentic Panchavadyam, Chenda Melam, and temple ritual performances for festivals and utsavams.",
    highlights: [
      "Panchari, Pandi, Chempada & Adantha Melam",
      "Panchavadyam five-instrument ensemble",
      "Seeveli and procession accompaniments",
      "Madathil Varavu and pooram-style programs",
    ],
    details:
      "Our temple programs carry the same repertoire heard at Thrissur Pooram, Arattupuzha, and Peruvanam — performed by seasoned artists and trained students. We provide full Chenda Melam ensembles with Edamthala and Valanthala lines, Kombu, Kurumkuzhal, and Ilathalam, led by an experienced Melapramani. Suitable for temple committees, devaswom boards, and religious trusts across Tamil Nadu and Kerala.",
  },
  {
    title: "Chenda Melam Ensembles",
    image: "gallery-shrine-performers-group.jpeg",
    tag: "Melam",
    desc: "Full-scale Chenda Melam for temple courtyards, poorams, and cultural arangams.",
    highlights: [
      "Scalable from 15 to 100+ artists",
      "All classical melam forms available",
      "Experienced Melapramani leadership",
      "Traditional costume and discipline",
    ],
    details:
      "From compact Panchari Melam to grand Pandi Melam presentations, we assemble artist lines matched to your venue and festival scale. Our students regularly perform in live melam settings, bringing authentic Kerala festival energy to every program. Ideal for Ayyappa vilakku, pooram celebrations, and temple anniversary events.",
  },
  {
    title: "Panchavadyam Concerts",
    image: "gallery-kombu-ensemble-group.jpeg",
    tag: "Ensemble",
    desc: "The five-instrument temple orchestra — Thimila, Maddalam, Idakka, Ilathalam, and Kombu.",
    highlights: [
      "Traditional five-stage concert structure",
      "Shankhu opening and theerukkootu finale",
      "Suitable for temple mandapams",
      "2–3 hour full concert format",
    ],
    details:
      "Panchavadyam is among Kerala's most sophisticated percussion art forms. Our ensemble follows the classical five-stage progression with disciplined talam cycles, featuring trained players on all five instruments. Perfect for temple festivals, cultural sabhas, and heritage events seeking the complete Panchavadyam experience.",
  },
  {
    title: "Social & Corporate Events",
    image: "gallery-corporate-inauguration.jpeg",
    tag: "Corporate",
    desc: "Cultural showcases for inaugurations, Onam, Vishu, and corporate gatherings.",
    highlights: [
      "Compact 6–12 artist ensembles",
      "Custom duration (15 min to 2 hours)",
      "Professional stage presentation",
      "Onam & Vishu specialty programs",
    ],
    details:
      "We customise performances for product launches, annual days, diaspora community celebrations, and hotel cultural evenings. From a powerful Chenda-Thimila duet to a 20-artist Panchavadyam showcase, every program is tailored to your venue, audience, and schedule. Trusted by corporate clients including major retail inaugurations in South India.",
  },
  {
    title: "Weddings & Celebrations",
    image: "gallery-flower-arch-ceremony.jpeg",
    tag: "Celebration",
    desc: "Auspicious percussion for weddings, housewarmings, and family celebrations.",
    highlights: [
      "Processional welcome beats",
      "Elegant shorter formats",
      "Indoor and outdoor venues",
      "Traditional Kerala wedding entry",
    ],
    details:
      "Add the grandeur of Kerala's festival drums to your special day. Our wedding programs include welcoming processions, mandapam accompaniments, and reception cultural segments. We coordinate with event planners to ensure punctual, visually striking performances that honour tradition without overwhelming the ceremony.",
  },
  {
    title: "Concerts & Stage Tours",
    image: "gallery-may-night-performance.jpeg",
    tag: "Concert",
    desc: "Proscenium concerts, Thayambaka recitals, and festival stage presentations.",
    highlights: [
      "Solo Thayambaka recitals",
      "Chenda Melam concert format",
      "Multi-city tour coordination",
      "Sound-system friendly arrangements",
    ],
    details:
      "Designed for cultural centres, music festivals, and proscenium stages, our concert programs blend classical Kerala frameworks with contemporary presentation. Artists have performed alongside legends of the percussion tradition and bring that concert discipline to every stage — from Chennai sabhas to international diaspora festivals.",
  },
  {
    title: "School & College Programs",
    image: "gallery-training-session-march.jpeg",
    tag: "Education",
    desc: "Interactive demonstrations and workshops for schools, colleges, and youth festivals.",
    highlights: [
      "Instrument demonstration sessions",
      "Student participation modules",
      "Cultural awareness talks",
      "Youth festival coaching",
    ],
    details:
      "Introduce young audiences to Kerala's living percussion heritage through engaging, educational programs. Students can try basic Chenda strokes, learn about Panchavadyam instruments, and understand the cultural context of temple music. Ideal for arts weeks, heritage days, and college cultural fests across Tamil Nadu.",
  },
  {
    title: "Fusion & Collaborations",
    image: "gallery-street-procession-artists.jpeg",
    tag: "Fusion",
    desc: "Cross-cultural projects with Mridangam, Parai, Kanjira, and contemporary composers.",
    highlights: [
      "Composer collaboration welcome",
      "Research and documentation projects",
      "Cross-regional rhythm workshops",
      "Respecting traditional roots",
    ],
    details:
      "Guru Thiruvambady Vineesh Maarar has pioneered collaborative works combining Kerala percussion with Mridangam, Parai, and indigenous instruments. We welcome fusion projects that explore cross-cultural rhythm while maintaining respect for traditional repertoire and performance ethics.",
  },
];

export default programs.map((p) => ({
  ...p,
  imageSrc: `${publicUrl}/${p.image}`,
}));
