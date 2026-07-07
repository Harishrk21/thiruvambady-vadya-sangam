/**
 * Classical Chenda Melam forms taught at Thiruvambady Vadyasangam & Kalakshethram.
 * References: Sahapedia, Wikipedia (Panchari Melam, Melam), Kerala melam tradition.
 */
import { SITE_NAME } from "./seoData";

export const melamIntro = {
  title: "Chenda Melam — Classical Forms",
  subtitle:
    `Kerala's temple percussion tradition features several classical melam forms, each with distinct talam structures, kaalams (tempos), and ritual contexts. Students learning Chenda at ${SITE_NAME} progress through these forms under gurukul-style training.`,
  note:
    "Panchari Melam stands as the premier model for the Chempada family of melams. Pandi Melam holds a distinctive structure of its own. Each form follows strict procedural rules — mastery comes through years of listening, ensemble practice, and live festival experience.",
};

const melams = [
  {
    id: "panchari",
    name: "Panchari Melam",
    malayalam: "പഞ്ചരി മേളം",
    category: "Chempada Melangal",
    talam: "Panchari Talam — 5 stages (96, 48, 24, 12, 6 beats)",
    duration: "Typically 3–4+ hours",
    context: "Performed inside temple precincts during poorams and utsavams",
    description:
      "Panchari Melam is the most celebrated and grammatically refined form of Chenda Melam in Kerala. The ensemble — Edamthala Chenda, Valanthala Chenda, Kombu, Kurumkuzhal, and Ilathalam — progresses through five rhythmic stages, building from a broad base to a climactic apex. The famous Ilanjithara Melam at Thrissur Pooram follows the Adantha thalam variant within the Panchari tradition.",
    features: [
      "Five stages (pathikaalam) with pyramid-like rhythmic structure",
      "Led by the Melapramani who controls kaalam progression",
      "Kurumkuzhal provides melodic contour through the performance",
      "Culminates with Muri-Panchari — a unique 3-beat concluding cycle",
      "Considered the prototype for other Chempada melangal",
    ],
    instruments: ["Edamthala Chenda", "Valanthala Chenda", "Kombu", "Kurumkuzhal", "Ilathalam"],
  },
  {
    id: "chempada",
    name: "Chempada Melam",
    malayalam: "ചെമ്പട മേളം",
    category: "Chempada Melangal",
    talam: "Chempata structure — 8-beat cycles",
    duration: "Varies by kaalam and venue",
    context: "Temple festivals across central and northern Kerala",
    description:
      "Chempada (also written Chembada or Chempata) Melam is one of the classical Chempada melangal closely associated with Panchari in structure and spirit. The name derives from the Chempata talam framework — an 8-akshara beat cycle that forms the rhythmic foundation. Along with Panchari, Adantha, Anchadatha, and Dhruvam, it belongs to the family of melams modelled on the Panchari tradition.",
    features: [
      "Built on 8-beat Chempata rhythmic framework",
      "Shares structural lineage with Panchari Melam",
      "Performed with full Chenda Melam ensemble",
      "Requires mastery of kaalam transitions",
      "Essential stepping stone toward advanced melam forms",
    ],
    instruments: ["Edamthala Chenda", "Valanthala Chenda", "Kombu", "Kurumkuzhal", "Ilathalam"],
  },
  {
    id: "adantha",
    name: "Adantha Melam",
    malayalam: "ആടന്ത മേളം",
    category: "Chempada Melangal",
    talam: "Adantha Talam — 14 aksharas (beats)",
    duration: "Extended temple festival format",
    context: "Temple poorams and major utsavams — including Ilanjithara Melam at Thrissur Pooram",
    description:
      "Adantha Melam is a 14-beat classical form and one of the most demanding melangal in the Chempada family. The Ilanjithara Melam at Thrissur Pooram — among the world's largest percussion gatherings — is performed in Adantha thalam. The form requires extraordinary stamina, precise stick control, and deep ensemble synchronisation as the Melapramani guides the artists through progressive kaalams.",
    features: [
      "14-akshara Adantha talam as rhythmic foundation",
      "Performed at Thrissur Pooram Ilanjithara Melam",
      "Demands exceptional physical endurance (4+ hours)",
      "Over 200 artists in grand pooram presentations",
      "One of the most prestigious melam forms to master",
    ],
    instruments: ["Edamthala Chenda", "Valanthala Chenda", "Kombu", "Kurumkuzhal", "Ilathalam"],
  },
  {
    id: "pandi",
    name: "Pandi Melam",
    malayalam: "പാണ്ടി മേളം",
    category: "Distinct Classical Form",
    talam: "Tripuda Talam — 7 beats, 4 stages (56, 28, 14, 7)",
    duration: "Typically 2.5+ hours",
    context: "Traditionally performed outside temple walls; notable exception at Vadakkunnathan Temple, Thrissur",
    description:
      "Pandi Melam stands apart from the Chempada family with its own unique rhythmic architecture based on Tripuda talam. Canonically performed outside temple compounds during poorams and processions, it progresses through four stages with beat cycles totalling 56, 28, 14, and 7 respectively. Masters of Panchari Melam are often equally accomplished in Pandi, though the two forms differ significantly in presentational gravitas and talam structure.",
    features: [
      "Distinct from Chempada melangal — own structural identity",
      "Four stages based on Tripuda talam (7 beats)",
      "Traditionally an outdoor temple festival form",
      "Famous performances at Aarattupuzha and Peruvanam Pooram",
      "Full ensemble with Chenda, Kombu, Kurumkuzhal, and Ilathalam",
    ],
    instruments: ["Edamthala Chenda", "Valanthala Chenda", "Kombu", "Kurumkuzhal", "Ilathalam"],
  },
  {
    id: "dhruvam",
    name: "Dhruvam Melam",
    malayalam: "ധ്രുവം മേളം",
    category: "Chempada Melangal",
    talam: "Based on Adantha — 14 beats, 3 kaalams only",
    duration: "Three kaalams: 56, 28, and 14 beats",
    context: "Temple festivals — rarer form requiring specialist training",
    description:
      "Dhruvam Melam is a distinctive classical form played exclusively in three kaalams (tempos), unlike other melams that progress through more stages. Its rhythmic basis connects to the 14-beat Adantha framework and shares conceptual links with the Dhruvam tala of Carnatic music. The performance moves through Onnam Kaalam (56 beats), Randaam Kaalam (28 beats), and Moonnaam Kaalam (14 beats), concluding with a theerukkootu (finale).",
    features: [
      "Unique three-kaalam structure (56 → 28 → 14 beats)",
      "Based on 14-beat Adantha rhythmic framework",
      "Rarer form — fewer artists specialise in Dhruvam",
      "Strict procedural rules with limited scope for improvisation",
      "Concludes with traditional theerukkootu finale",
    ],
    instruments: ["Edamthala Chenda", "Valanthala Chenda", "Kombu", "Kurumkuzhal", "Ilathalam"],
  },
];

export default melams;
