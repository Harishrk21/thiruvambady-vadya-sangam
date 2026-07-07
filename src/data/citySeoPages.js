/**
 * City landing pages for Chenda Melam wedding SEO across TN, AP, Telangana.
 * URL pattern: /chenda-melam-{slug}
 */
import { SITE_NAME } from "./seoData";

const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const makeCity = (name, state, highlight, nearby) => ({
  slug: toSlug(name),
  name,
  state,
  nearby,
  highlight,
  faqs: [
    {
      q: `How to book Chenda Melam for wedding in ${name}?`,
      a: `Contact ${SITE_NAME} via WhatsApp at +91 6379 135 988. Share your wedding date, venue in ${name}, and event type (groom entry, baraat, reception) for a custom quote.`,
    },
    {
      q: `What is Chenda Melam price in ${name}?`,
      a: `Chenda Melam cost in ${name} depends on team size, duration, and travel. We offer transparent pricing for wedding, temple, and corporate bookings across ${state}.`,
    },
    {
      q: `Do you travel to ${name} for weddings?`,
      a: `Yes. Our professional Kerala Chenda Melam team performs across ${name} and ${state} — groom entry, baraat, muhurtham, and reception packages available.`,
    },
  ],
});

export const CITY_SEO_PAGES = [
  makeCity(
    "Coimbatore",
    "Tamil Nadu",
    "Coimbatore hosts vibrant Kerala-Tamil wedding communities — we perform Chenda Melam at marriage halls, temples, and cultural venues across the city.",
    ["Pollachi", "Mettupalayam", "Tiruppur", "Sulur"]
  ),
  makeCity(
    "Madurai",
    "Tamil Nadu",
    "Madurai's temple city culture pairs beautifully with Kerala Chenda Melam — ideal for traditional groom processions and grand wedding receptions across the city.",
    ["Thirumangalam", "Melur", "Dindigul", "Virudhunagar"]
  ),
  makeCity(
    "Trichy",
    "Tamil Nadu",
    "Trichy (Tiruchirappalli) weddings benefit from authentic Panchari Melam and compact entry ensembles — we serve marriage halls and banquet venues across the district.",
    ["Srirangam", "Thanjavur", "Karur", "Perambalur"]
  ),
  makeCity(
    "Salem",
    "Tamil Nadu",
    "Salem and western Tamil Nadu wedding functions — book Kerala Chenda Melam for groom entry, baraat, and evening reception celebrations.",
    ["Namakkal", "Dharmapuri", "Attur", "Omalur"]
  ),
  makeCity(
    "Erode",
    "Tamil Nadu",
    "Erode district weddings and cultural events — professional Chenda Melam team for marriage functions and temple festival programs.",
    ["Tiruppur", "Gobichettipalayam", "Bhavani", "Sathyamangalam"]
  ),
  makeCity(
    "Tirunelveli",
    "Tamil Nadu",
    "Southern Tamil Nadu weddings in Tirunelveli — Kerala traditional percussion for muhurtham, groom entry, and reception bookings.",
    ["Nagercoil", "Thoothukudi", "Tenkasi", "Ambasamudram"]
  ),
  makeCity(
    "Vellore",
    "Tamil Nadu",
    "Vellore marriage celebrations — Chenda Melam artists for Kerala-style weddings, hospital-town receptions, and temple-linked marriage functions.",
    ["Ranipet", "Tirupattur", "Gudiyatham", "Arcot"]
  ),
  makeCity(
    "Thanjavur",
    "Tamil Nadu",
    "Thanjavur's rich cultural heritage meets Kerala Chenda Melam — perfect for traditional wedding entrances and classical marriage ceremonies.",
    ["Kumbakonam", "Pattukkottai", "Mannargudi", "Trichy"]
  ),
  makeCity(
    "Kanchipuram",
    "Tamil Nadu",
    "Kanchipuram silk wedding traditions pair with grand Chenda Melam processions — book groom entry and baraat ensembles for marriage functions.",
    ["Chengalpattu", "Sriperumbudur", "Tambaram", "Chennai"]
  ),
  makeCity(
    "Hosur",
    "Tamil Nadu",
    "Hosur and Krishnagiri belt weddings — Kerala Chenda Melam team for cross-border Tamil Nadu-Karnataka marriage celebrations.",
    ["Krishnagiri", "Denkanikottai", "Bagalur", "Electronic City"]
  ),
  makeCity(
    "Nagercoil",
    "Tamil Nadu",
    "Nagercoil Kanyakumari district weddings — authentic Kerala Chenda Melam at the southern tip of Tamil Nadu for Malayali and Tamil marriage communities.",
    ["Kanyakumari", "Marthandam", "Colachel", "Tirunelveli"]
  ),
  makeCity(
    "Visakhapatnam",
    "Andhra Pradesh",
    "Visakhapatnam beach weddings and banquet receptions — premium Kerala Chenda Melam for groom entry and grand marriage celebrations on the east coast.",
    ["Vizianagaram", "Anakapalle", "Bheemunipatnam", "Araku"]
  ),
  makeCity(
    "Vijayawada",
    "Andhra Pradesh",
    "Vijayawada is a major hub for Kerala-Telugu wedding Chenda Melam — groom procession, baraat, and reception packages across Krishna district.",
    ["Guntur", "Machilipatnam", "Nuzvid", "Mangalagiri"]
  ),
  makeCity(
    "Guntur",
    "Andhra Pradesh",
    "Guntur marriage halls and open-ground weddings — book experienced Chenda Melam artists for authentic Kerala wedding percussion.",
    ["Tenali", "Narasaraopet", "Chilakaluripet", "Vijayawada"]
  ),
  makeCity(
    "Nellore",
    "Andhra Pradesh",
    "Nellore district weddings — Kerala Chenda Melam team for groom entry, muhurtham, and evening reception functions.",
    ["Kavali", "Gudur", "Sullurpeta", "Tirupati"]
  ),
  makeCity(
    "Tirupati",
    "Andhra Pradesh",
    "Tirupati temple-town weddings — auspicious Chenda Melam for marriage muhurtham, groom entry, and reception near Sri Venkateswara region.",
    ["Chittoor", "Renigunta", "Nellore", "Madanapalle"]
  ),
  makeCity(
    "Kakinada",
    "Andhra Pradesh",
    "Kakinada and Godavari coast weddings — Kerala traditional melam for marriage processions and cultural evening programs.",
    ["Rajahmundry", "Samalkot", "Peddapuram", "Tuni"]
  ),
  makeCity(
    "Rajahmundry",
    "Andhra Pradesh",
    "Rajahmundry marriage celebrations on the Godavari — professional Chenda Melam for groom entry and wedding reception bookings.",
    ["Kakinada", "Kovvur", "Eluru", "Bhimavaram"]
  ),
  makeCity(
    "Kurnool",
    "Andhra Pradesh",
    "Kurnool and Rayalaseema weddings — Kerala Chenda Melam artists for traditional marriage functions across the region.",
    ["Nandyal", "Adoni", "Dhone", "Anantapur"]
  ),
  makeCity(
    "Anantapur",
    "Andhra Pradesh",
    "Anantapur district marriage functions — book Chenda Melam for groom procession, baraat, and reception events.",
    ["Hindupur", "Dharmavaram", "Guntakal", "Kurnool"]
  ),
  makeCity(
    "Kadapa",
    "Andhra Pradesh",
    "Kadapa (YSR district) weddings — authentic Kerala wedding band for marriage halls and residential celebrations.",
    ["Proddatur", "Rayachoti", "Rajampet", "Tirupati"]
  ),
  makeCity(
    "Hyderabad",
    "Telangana",
    "Hyderabad's premium wedding market demands top Kerala Chenda Melam — groom entry, baraat, and luxury reception packages across the city.",
    ["Secunderabad", "Gachibowli", "HITEC City", "Old City"]
  ),
  makeCity(
    "Warangal",
    "Telangana",
    "Warangal marriage functions — professional Kerala Chenda Melam for groom entry, muhurtham, and wedding reception bookings.",
    ["Hanamkonda", "Kazipet", "Jangaon", "Karimnagar"]
  ),
  makeCity(
    "Nizamabad",
    "Telangana",
    "Nizamabad district weddings — Chenda Melam team for Kerala-style marriage celebrations across northern Telangana.",
    ["Kamareddy", "Bodhan", "Armoor", "Hyderabad"]
  ),
  makeCity(
    "Karimnagar",
    "Telangana",
    "Karimnagar wedding halls and open venues — book Kerala Chenda Melam for groom procession and reception programs.",
    ["Jagtial", "Peddapalli", "Sircilla", "Warangal"]
  ),
  makeCity(
    "Khammam",
    "Telangana",
    "Khammam and eastern Telangana marriages — traditional Chenda Melam for wedding entry and evening cultural programs.",
    ["Bhadrachalam", "Sathupalli", "Wyra", "Vijayawada"]
  ),
  makeCity(
    "Ramagundam",
    "Telangana",
    "Ramagundam-Peddapalli belt wedding functions — Kerala Chenda Melam artists for marriage celebrations and temple programs.",
    ["Peddapalli", "Mancherial", "Karimnagar", "Warangal"]
  ),
  makeCity(
    "Mahbubnagar",
    "Telangana",
    "Mahbubnagar district weddings — book Chenda Melam for groom entry, baraat, and reception across the region.",
    ["Gadwal", "Wanaparthy", "Shadnagar", "Hyderabad"]
  ),
  makeCity(
    "Nalgonda",
    "Telangana",
    "Nalgonda marriage celebrations — professional Kerala wedding percussion for muhurtham and reception bookings.",
    ["Suryapet", "Miryalaguda", "Bhongir", "Hyderabad"]
  ),
  makeCity(
    "Adilabad",
    "Telangana",
    "Adilabad and northern Telangana weddings — Chenda Melam team for traditional Kerala marriage music and processions.",
    ["Mancherial", "Nirmal", "Utnoor", "Nizamabad"]
  ),
  makeCity(
    "Siddipet",
    "Telangana",
    "Siddipet district marriage functions — groom entry Chenda Melam and reception ensembles for wedding bookings.",
    ["Gajwel", "Medak", "Hyderabad", "Karimnagar"]
  ),
];

export const getCityBySlug = (slug) => CITY_SEO_PAGES.find((c) => c.slug === slug);

export const getCityPath = (slug) => `/chenda-melam-${slug}`;

export const getCitySlugForName = (name) => CITY_SEO_PAGES.find((c) => c.name === name)?.slug;

export const getCitySeo = (city) => ({
  title: `Chenda Melam ${city.name} | Wedding Kerala Melam ${city.name} ${city.state}`,
  description: `Book Chenda Melam ${city.name} for weddings — groom entry, baraat, reception. Professional Kerala Chenda Melam team in ${city.state}. WhatsApp booking.`,
  path: getCityPath(city.slug),
});
