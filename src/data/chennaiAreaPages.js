/**
 * Chennai locality landing pages for Chenda Melam wedding SEO.
 * URL pattern: /chenda-melam-{slug}
 */
const areaFaqs = (name) => [
  {
    q: `How to book Chenda Melam in ${name}?`,
    a: `WhatsApp +91 6379 135 988 with your wedding date, venue in ${name}, and event type. We respond with team options and pricing for groom entry, baraat, or reception.`,
  },
  {
    q: `What is Chenda Melam price in ${name}, Chennai?`,
    a: `Pricing depends on ensemble size, duration, and venue logistics in ${name}. We offer compact entry teams to full Panchari Melam — contact us for a transparent quote.`,
  },
  {
    q: `Which wedding venues in ${name} do you serve?`,
    a: `We perform at marriage halls, hotels, resorts, and residential functions across ${name} and nearby Chennai neighbourhoods. Share your venue name for a tailored recommendation.`,
  },
];

const makeArea = (slug, name, nearby, highlight, extra, fullName) => ({
  slug,
  name,
  fullName,
  nearby,
  highlight,
  extra,
  faqs: areaFaqs(name),
});

export const CHENNAI_AREA_PAGES = [
  makeArea(
    "anna-nagar",
    "Anna Nagar",
    ["Kilpauk", "Aminjikarai", "Thirumangalam", "Mogappair"],
    "Anna Nagar is one of Chennai's most sought-after neighbourhoods for Kerala-style weddings, with premium marriage halls and large residential celebrations.",
    "Popular venues include tower-block banquet halls and tree-lined residential streets ideal for baraat processions. We coordinate with wedding planners across Anna Nagar West and East for seamless groom entry timing."
  ),
  makeArea(
    "velachery",
    "Velachery",
    ["Adambakkam", "Madipakkam", "Pallikaranai", "Guindy"],
    "Velachery hosts vibrant wedding celebrations across south Chennai — ideal for groom entry Chenda Melam and baraat processions through busy residential avenues.",
    "South Chennai's growing wedding corridor from Velachery to Pallikaranai sees high demand for compact Chenda teams that navigate tighter streets while delivering full festival energy."
  ),
  makeArea(
    "porur",
    "Porur",
    ["Mangadu", "Iyyappanthangal", "Ramapuram", "Valasaravakkam"],
    "Porur and western Chennai corridors are popular for spacious wedding venues — our Chenda Melam team performs at marriage halls and open-ground functions across the area.",
    "Western Chennai's larger marriage grounds suit full Panchari-style ensembles. We also serve Porur junction hotels and Valasaravakkam banquet halls for evening receptions."
  ),
  makeArea(
    "tambaram",
    "Tambaram",
    ["Chromepet", "Perungalathur", "Selaiyur", "Sanatorium"],
    "Tambaram anchors south Chennai weddings with traditional and modern venues — book Kerala Chenda Melam for muhurtham, reception, and groom procession.",
    "GST Road wedding venues from Tambaram to Perungalathur frequently book our team for morning muhurtham and evening reception — often on the same day with different ensemble sizes."
  ),
  makeArea(
    "omr",
    "OMR",
    ["Perungudi", "Sholinganallur", "Thoraipakkam", "Siruseri"],
    "OMR (IT Corridor) weddings demand premium Kerala wedding bands — we serve luxury hotels, beach resorts, and banquet halls along Old Mahabalipuram Road.",
    "IT corridor weddings often combine modern banquet settings with traditional groom entry — we tailor repertoire from Chempada to Panchari based on your venue acoustics and guest profile.",
    "Old Mahabalipuram Road"
  ),
  makeArea(
    "ecr",
    "ECR",
    ["Neelankarai", "Injambakkam", "Akkarai", "Mahabalipuram route"],
    "ECR beach weddings and resort receptions are perfect for grand Chenda Melam entrances — authentic Kerala percussion for seaside marriage celebrations.",
    "Beach resorts along ECR from Neelankarai to Mahabalipuram route are among our most requested venues — we plan sound levels and procession routes for open-air seaside weddings.",
    "East Coast Road"
  ),
  makeArea(
    "adyar",
    "Adyar",
    ["Besant Nagar", "Thiruvanmiyur", "Kotturpuram", "RA Puram"],
    "Adyar's classic Chennai wedding culture blends tradition with elegance — our Chenda Melam artists perform at sabha halls, hotels, and heritage venues.",
    "Central Chennai's Adyar and Besant Nagar belt favours refined entry ensembles — we match the sophistication of heritage marriage halls with authentic Kerala percussion artistry."
  ),
  makeArea(
    "tnagar",
    "T Nagar",
    ["Nungambakkam", "Mylapore", "West Mambalam", "Saidapet"],
    "T Nagar central Chennai weddings benefit from compact, high-impact Chenda Melam ensembles — groom entry, baraat, and reception packages available.",
    "Dense central Chennai venues in T Nagar and Nungambakkam need precise timing and compact teams — our artists are experienced with high-rise banquet halls and street-level processions."
  ),
  makeArea(
    "chromepet",
    "Chromepet",
    ["Tambaram", "Pallavaram", "Hastinapuram", "Chitlapakkam"],
    "Chromepet and the Pallavaram belt host large Kerala-Tamil wedding communities — book experienced Chenda Melam artists for authentic festival-style marriage music.",
    "The Chromepet-Pallavaram corridor has a strong Malayali wedding community — we regularly perform multi-day functions with separate teams for muhurtham and reception."
  ),
  makeArea(
    "avadi",
    "Avadi",
    ["Ambattur", "Poonamallee", "Thirumullaivoyal", "Red Hills"],
    "Avadi and northwest Chennai weddings — Kerala Chenda Melam for marriage halls, army cantonment area functions, and residential celebrations.",
    "Northwest Chennai from Avadi to Ambattur sees growing demand for Kerala wedding bands — we travel with full percussion setup for groom entry and evening programs."
  ),
  makeArea(
    "ambattur",
    "Ambattur",
    ["Avadi", "Mogappair", "Anna Nagar", "Padi"],
    "Ambattur industrial belt and residential weddings — professional Chenda Melam team for groom procession, baraat, and reception bookings.",
    "Ambattur's mix of industrial estates and residential colonies hosts diverse wedding formats — from compact apartment-complex entries to large marriage hall receptions."
  ),
  makeArea(
    "medavakkam",
    "Medavakkam",
    ["Velachery", "Perumbakkam", "Sholinganallur", "Karapakkam"],
    "Medavakkam and south-east Chennai weddings — book Chenda Melam for groom entry, muhurtham, and baraat along the Velachery-Sholinganallur corridor.",
    "Medavakkam's rapid residential growth means new banquet halls and community halls — we help couples choose the right ensemble size for first-floor and open-ground venues."
  ),
  makeArea(
    "pallikaranai",
    "Pallikaranai",
    ["Velachery", "Medavakkam", "Perungudi", "Thoraipakkam"],
    "Pallikaranai wetland-adjacent neighbourhoods host vibrant wedding celebrations — Kerala Chenda Melam for marriage functions across south-east Chennai.",
    "The Pallikaranai-Perungudi belt connects OMR and Velachery wedding circuits — ideal for couples wanting traditional melam with convenient access to IT corridor banquet halls."
  ),
  makeArea(
    "perungudi",
    "Perungudi",
    ["OMR", "Thoraipakkam", "Pallikaranai", "Sholinganallur"],
    "Perungudi OMR junction weddings — premium Kerala Chenda Melam for hotels, tech-park adjacent banquet venues, and residential marriage functions.",
    "Perungudi sits at the heart of the OMR wedding scene — we perform at star hotels, serviced-apartment banquet floors, and gated-community marriage events daily during season."
  ),
  makeArea(
    "sholinganallur",
    "Sholinganallur",
    ["OMR", "Perungudi", "Medavakkam", "Siruseri"],
    "Sholinganallur and far-OMR weddings — grand Chenda Melam for luxury marriage halls, resort receptions, and groom entry along the IT corridor.",
    "Sholinganallur to Siruseri hosts Chennai's newest premium wedding venues — our team is experienced with large guest counts, outdoor lawns, and multi-stage reception programs."
  ),
];

export const getAreaBySlug = (slug) =>
  CHENNAI_AREA_PAGES.find((a) => a.slug === slug);

export const getAreaPath = (slug) => `/chenda-melam-${slug}`;

export const getAreaSlugForName = (name) =>
  CHENNAI_AREA_PAGES.find((a) => a.name === name)?.slug;

export const getAreaSeo = (area) => ({
  title: `Chenda Melam ${area.name} | Wedding Kerala Melam ${area.name} Chennai`,
  description: `Book Chenda Melam ${area.name} Chennai for weddings — groom entry, baraat, reception. Professional Kerala Chenda Melam team near ${area.name}. WhatsApp booking.`,
  path: getAreaPath(area.slug),
});
