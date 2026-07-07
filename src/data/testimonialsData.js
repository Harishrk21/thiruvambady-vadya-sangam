import { BRAND_NAME } from "./contactInfo";

const getInitials = (name) =>
  name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const testimonials = [
  // —— Programs & performances (80%) ——
  {
    name: "Latha Menon",
    role: "Wedding Event Planner · Chennai",
    category: "program",
    rating: 5,
    text: `I recommend ${BRAND_NAME} to every Kerala wedding client in Chennai. Their groom-entry Chenda team adds unmatched grandeur — always on time, always professional, always authentic.`,
  },
  {
    name: "Arjun & Divya",
    role: "Wedding Couple · Anna Nagar",
    category: "program",
    rating: 5,
    text: "The Chenda Melam for our groom entry at Anna Nagar marriage hall was the emotional peak of our wedding. Guests still talk about the energy and traditional Kerala feel — it made our baraat unforgettable.",
  },
  {
    name: "Vinod Kumar",
    role: "Temple Committee Member · Tamil Nadu",
    category: "program",
    rating: 5,
    text: "Our temple engaged the team for a three-day utsavam. Panchari Melam on the final day drew over 2,000 devotees. Disciplined artists, proper traditional attire, and flawless timing throughout.",
  },
  {
    name: "Suresh Babu",
    role: "Corporate Event Organiser",
    category: "program",
    rating: 5,
    text: "We booked the Sangam for our company's Onam celebration in Chennai. The Panchavadyam ensemble was breathtaking — guests from outside Kerala were mesmerised. Professional, punctual, and deeply authentic.",
  },
  {
    name: "Joseph Mathew",
    role: "Church Festival Organiser",
    category: "program",
    rating: 5,
    text: "Our church festival cultural program featured a full Panchavadyam ensemble from the Sangam. The crowd response was overwhelming. They adapt traditional art for diverse audiences without diluting it.",
  },
  {
    name: "Kavitha Ramesh",
    role: "Bride's Family · Velachery",
    category: "program",
    rating: 5,
    text: "From bride entry to reception, the Chenda Melam team handled every moment with grace. The muhurtham procession felt like a temple festival — exactly the sacred atmosphere we wanted for our daughter's wedding.",
  },
  {
    name: "Prakash Nair",
    role: "Groom's Father · Madipakkam",
    category: "program",
    rating: 5,
    text: "We wanted a true Kerala baraat for our son's wedding in Madipakkam. The team arrived early, coordinated with our decorators, and delivered a powerful Chenda Melam procession that our relatives from Kerala praised.",
  },
  {
    name: "Anjali Thomas",
    role: "College Cultural Secretary",
    category: "program",
    rating: 5,
    text: "We invited the Sangam for our college arts week in Chennai. The live Chenda Melam demonstration was the highlight — students queued up to experience the drums. Educational, energetic, and perfectly organised.",
  },
  {
    name: "Ramesh Iyer",
    role: "Wedding Guest & Music Enthusiast",
    category: "program",
    rating: 5,
    text: "Attended a wedding reception where this team performed. The build-up through kalams, the coordination between Edamthala and Valanthala lines — world-class artistry. I immediately asked for their contact for my niece's wedding.",
  },
  {
    name: "Deepak Varma",
    role: "Hotel Banquet Manager · Chennai",
    category: "program",
    rating: 5,
    text: "We host many Kerala weddings at our banquet hall. This Chenda Melam team is our go-to recommendation — they understand venue logistics, sound limits, and guest flow without compromising tradition.",
  },
  {
    name: "Meenakshi Krishnan",
    role: "Housewarming Host · Porur",
    category: "program",
    rating: 5,
    text: "Booked a compact Chenda ensemble for our griha pravesh in Porur. The auspicious rhythms set the perfect tone for our new home. Neighbours gathered outside — it felt like a mini temple utsavam.",
  },
  {
    name: "Santhosh Reddy",
    role: "Wedding Planner · Hyderabad",
    category: "program",
    rating: 5,
    text: "For a Telugu-Kerala fusion wedding in Hyderabad, we needed authentic Kerala melam. The team travelled from Chennai, performed groom entry and reception sets flawlessly, and communicated via WhatsApp throughout planning.",
  },
  {
    name: "Girija Mohan",
    role: "Reception Organiser · T. Nagar",
    category: "program",
    rating: 5,
    text: "The evening reception Chenda Melam was the talking point of our 500-guest wedding. Premium costumes, powerful rhythms, and respectful volume for an indoor hall — exactly what we asked for.",
  },
  {
    name: "Harish Venkat",
    role: "Wedding Photographer",
    category: "program",
    rating: 5,
    text: "As a wedding photographer in Chennai, I've shot dozens of Kerala marriages. This team's groom-entry performances are consistently the most photogenic moments — disciplined formations and genuine festival energy.",
  },
  {
    name: "Nirmala Devi",
    role: "Community Association President",
    category: "program",
    rating: 5,
    text: "Our housing society Onam program featured a full Chenda Melam segment. Residents of all ages were on their feet. The team made traditional percussion accessible and exciting for a mixed Tamil-Kerala audience.",
  },
  {
    name: "Vikram Chandran",
    role: "Groom · Adyar Wedding",
    category: "program",
    rating: 5,
    text: "Walking in with Chenda Melam behind me was the proudest moment of my wedding day. The team customised the entry length to our procession route in Adyar — every beat felt personal and powerful.",
  },

  // —— Classes (20%) ——
  {
    name: "Priya Venugopal",
    role: "Online Chenda Student · Dubai",
    category: "class",
    rating: 5,
    text: "I learn Chenda online from Dubai with weekly sessions and recorded practice material. Guruji's attention to talam and stick technique despite the distance is remarkable. Worth every hour of practice.",
  },
  {
    name: "Rahul Nambiar",
    role: "Parent of Young Chenda Student",
    category: "class",
    rating: 5,
    text: "My 12-year-old son started Chenda classes here in Chennai and now performs at Kerala community events. The academy balances traditional rigour with encouragement — exactly what young learners need.",
  },
  {
    name: "Karthik Raj",
    role: "Software Engineer · Weekend Batch",
    category: "class",
    rating: 4,
    text: "Weekend Chenda batches fit my IT schedule perfectly. Progress from zero to performing a short Chempada segment in six months felt incredible. The practice discipline Guruji instils carries into daily life too.",
  },
  {
    name: "Harikrishnan Maarar",
    role: "Panchavadyam Student",
    category: "class",
    rating: 5,
    text: "Training in Panchavadyam Thimila here gave me the foundation to join temple ensembles during festival season. The emphasis on listening to the full ensemble, not just your own part, is invaluable.",
  },
];

export default testimonials.map((t) => ({
  ...t,
  initials: getInitials(t.name),
}));
