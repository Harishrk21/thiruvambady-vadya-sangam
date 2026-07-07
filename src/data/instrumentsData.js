import ChendaImage from "../assets/chenda.jpg";
import MaddalamImage from "../assets/maddalam.jpg";
import IdakkaImage from "../assets/idakka.jpg";
import ThimilaImage from "../assets/Thimila.jpg";
import KurumkuzhalImage from "../assets/kurumkuzhal.jpg";
import EzhathalamImage from "../assets/ezhathalam.jpg";
import KombuImage from "../assets/kombu.jpg";
import MizhavuImage from "../assets/mizhavu.jpg";
import UdukkuImage from "../assets/udukkku.jpg";

const instruments = [
  {
    id: 1,
    name: "Chenda",
    image: ChendaImage,
    category: "Percussion · Asura Vadyam",
    description:
      "The Chenda is a hollow cylindrical drum carved from jackfruit wood with cowhide stretched across both ends. Its powerful, resonant beats are the rhythmic heartbeat of Kerala — from temple poorams and melams to Kathakali, Koodiyattam, Theyyam, and Yakshagana. Tension loops along the drum's sides allow fine tuning; greater tension produces a sharper tone.",
    usage:
      "Played suspended from the waist with two curved sticks, the Chenda leads Chenda Melam ensembles and anchors Kathakali orchestras. In Kathakali, the Chenda artist follows the actor's movements, intensifying battle scenes and dramatic pauses. Melam forms include Panchari, Pandi, Champa, Chempada, Adantha, and Anchadatha — each with distinct rhythmic frameworks performed at temple festivals across Kerala.",
    details:
      "Crafted from seasoned jackfruit wood with parchment and leather bracing. The right head (Valanthala) produces bass tones; the left head (Edamthala) carries treble patterns. Renowned crafting centres include Peruvembu, Nemmara, Lakkidi, Vellarkad, and Valappaya. Chenda-making is a hereditary craft passed through generations of artisan families.",
    heritage:
      "Historically part of Thayambaka and Melam orchestras before Vettathu Raja integrated it into Kathakali. Classified as an Asura Vadyam (demonic instrument) in Kerala's temple taxonomy — instruments that traditionally do not harmonise melodically but command rhythm and energy. For over 300 years, Chenda Melam has been indispensable to Kerala's festival culture.",
    performances:
      "Thrissur Pooram Ilanjithara Melam, Arattupuzha Pooram, Peruvanam Pooram, Koodalmanikyam Utsavam, temple seeveli processions, Kathakali, Theyyam, and Kannyar Kali.",
  },
  {
    id: 2,
    name: "Maddalam",
    image: MaddalamImage,
    category: "Percussion · Deva Vadyam",
    description:
      "The Maddalam is a barrel-shaped drum classified as a Deva Vadyam (divine instrument) in Kerala's temple music tradition. Its deep, resonant tones provide the bass foundation in Kathakali and Krishnanattam, complementing the sharper Chenda and the melodic Idakka.",
    usage:
      "Worn horizontally around the waist, the Maddalam is struck with the right hand on the left head and a curved stick on the right head. Two varieties exist: Sudha Maddalam (standard) and Thoppi Maddalam (miniature), used in Kottipadi Seva, Pooja Kottu, Krishnanattam, and Ottanthullal. In Panchavadyam, the Maddalam line stands opposite the Thimila, creating rhythmic dialogue.",
    details:
      "Carved from jackfruit wood with cowhide on both faces, secured by leather straps. Though similar in shape to the Mridangam, the Maddalam differs in structure, mounting, and playing technique. The instrument's weight requires the player to stand, allowing dynamic body movement during long performances.",
    heritage:
      "A core instrument of Kerala's Pakkamelam — the five-instrument ensemble accompanying Kathakali. Along with Chenda, Idakka, Chengila, and Ilathalam, it forms the sonic architecture of classical dance-drama. In Panchavadyam, late masters Venkichan Swami and Madhava Warrier helped elevate the Maddalam's role in the modern five-stage concert form.",
    performances:
      "Kathakali, Krishnanattam, Panchavadyam, temple Keli rituals, Kottipadi Seva, Ottanthullal, and festival poorams.",
  },
  {
    id: 3,
    name: "Idakka",
    image: IdakkaImage,
    category: "Percussion · Hourglass Drum",
    description:
      "The Idakka (Edakka) is a small hourglass-shaped drum whose pitch changes when the player squeezes the cotton-thread lacing between the two heads. This rare melodic capability among percussion instruments gives it a vocal, almost speaking quality — earning it a sacred place in Kerala's temple arts.",
    usage:
      "Hung from the neck and played with a curved stick in one hand while the other hand manipulates the tension strings. In Kathakali, Idakka accompanies female characters and delicate scenes. It is the sole percussion instrument in Sopana Sangeetham — devotional music sung on temple steps. Also essential in Panchavadyam, Mohiniyattam, and ritual processions.",
    details:
      "About a quarter metre long, made of jackfruit wood with parchment heads held by interlaced cotton threads. The extreme sensitivity of the drum demands years of training to control pitch, tone, and rhythm simultaneously. Pattirath Sankara Marar was among the masters who shaped its role in modern Panchavadyam.",
    heritage:
      "Idakka is central to Sopana Sangeetham — music of the sopanam (temple steps) — traditionally performed as Kottipadi Seva, where the singer beats the drum while singing Jayadeva's Ashtapadis and devotional compositions. It invokes bhakti within temple premises and is considered too sacred for casual performance.",
    performances:
      "Sopana Sangeetham, Panchavadyam, Kathakali (female roles), Mohiniyattam, temple seeveli, and pooram processions.",
  },
  {
    id: 4,
    name: "Kurumkuzhal",
    image: KurumkuzhalImage,
    category: "Wind · Sushira Vadyam",
    description:
      "The Kurumkuzhal is a small double-reed wind instrument — Kerala's counterpart to the Nadaswaram family, but with a higher, sharper pitch. Its bright, penetrating tone cuts through percussion ensembles, providing melodic contour to temple rituals and melams.",
    usage:
      "Played in Panchari Melam and other Chenda Melam ensembles alongside Chenda, Kombu, and Ilathalam. Also featured in Panchavadyam-related processions, Koodiyattam, and Koothu. The player uses precise breath control and fingering to navigate the instrument's limited but expressive note range.",
    details:
      "Carved from jackfruit or rosewood with a double-reed mouthpiece (seevali). The cylindrical bore and reed combination produces the characteristic nasal, vibrant tone. Maintenance of the reed and breath technique are critical — a skilled Kurumkuzhal artist can sustain long phrases over hours of festival performance.",
    heritage:
      "Part of the Ashtadasha Vadyam (eighteen temple instruments) of Kerala. In Chenda Melam, the ensemble traditionally comprises Edamthala & Valanthala Chendas, Kombu, Kurumkuzhal, and Elathalam — five instruments creating layered rhythmic and melodic textures that have defined temple festival soundscapes for centuries.",
    performances:
      "Panchari Melam, Pandi Melam, temple poorams, Koodiyattam, Koothu, and religious processions across central Kerala.",
  },
  {
    id: 5,
    name: "Thimila",
    image: ThimilaImage,
    category: "Percussion · Panchavadyam Lead",
    description:
      "The Thimila is an hourglass-shaped drum that leads the Panchavadyam ensemble — Kerala's celebrated orchestra of five instruments. Its crisp, commanding beats set the tempo and structure for the entire performance, making the Thimila artist the anchor of the concert.",
    usage:
      "Played with two sticks, the Thimila artist stands at the centre of the Panchavadyam formation, directing the ensemble through composed and improvised sections across five kalams (tempo stages). Also performed in temple seeveli processions and Keli rituals. Masters Annamanada Achutha Marar and Chengamanad Sekhara Kurup were pioneers of the modern Panchavadyam form.",
    details:
      "Made from polished jackfruit wood with calf-hide drumheads held by leather braces twined around the drum's waist. The tension mechanism allows real-time pitch adjustment. The Thimila produces a higher pitch than the Chenda, with precise finger and stick techniques creating its characteristic bright attack.",
    heritage:
      "Panchavadyam evolved into its present elaborate form in the 1930s through the collaboration of Maddalam masters Venkichan Swami and Madhava Warrier with Thimila and Idakka experts. A major Panchavadyam features up to 60 artists in two facing semicircles, building from a slow Pathikaalam to exhilarating climaxes.",
    performances:
      "Thrissur Pooram Madathil Varavu (Thiruvambady), temple utsavams, seeveli, corporate and cultural festivals, and poorams across Kerala.",
  },
  {
    id: 6,
    name: "Ilathalam (Ezhathalam)",
    image: EzhathalamImage,
    category: "Percussion · Cymbals",
    description:
      "Ilathalam — also known as Ezhathalam — is a pair of small bronze or bell-metal cymbals that provide the metallic rhythmic backbone of Kerala's temple ensembles. Their sharp, resonant clang maintains the tala (rhythmic cycle) across hours-long performances.",
    usage:
      "Struck together in controlled patterns, the player varies force and speed to match the ensemble's tempo. In Panchavadyam, Ilathalam players line up behind the Thimila leader. In Chenda Melam, they accompany the Chenda line. Also used in Kathakali, Theyyam, and folk performances to mark rhythmic accents.",
    details:
      "Cast from an alloy of bronze and tin, the cymbals are held by a cord through the centre hole. Players develop extraordinary stamina — Panchavadyam and Melam performances can last two hours or more with continuous playing. The Ilathalam is classified as a Ghana Vadyam (solid-body instrument).",
    heritage:
      "One of the five instruments of Panchavadyam (Thimila, Maddalam, Idakka, Ilathalam, Kombu). While excluded from the Pakkamelam of Kathakali, it remains essential to virtually every temple festival orchestra in Kerala. To many Keralites, the sound of Ilathalam marks the beginning of auspicious celebration.",
    performances:
      "Panchavadyam, all Chenda Melam forms, Kathakali, Theyyam, Kannyar Kali, and temple festival processions.",
  },
  {
    id: 7,
    name: "Kombu",
    image: KombuImage,
    category: "Wind · Temple Horn",
    description:
      "The Kombu is a C-shaped brass or copper horn whose name literally means 'horn.' Its piercing, triumphant blare announces the arrival of temple processions and marks climactic moments in percussion ensembles, often played in call-and-response with the Chenda.",
    usage:
      "In Panchavadyam, Kombu players stand behind the Maddalam line, their shrill notes weaving through the percussion texture. In Panchari and Pandi Melam, Kombu provides melodic punctuation. Played with strong breath and lip pressure modulation, it requires significant lung capacity for festival-length performances.",
    details:
      "A hollow curved tube of brass or copper, open at both ends. The player produces notes by varying embouchure and breath pressure. Unlike melodic wind instruments, the Kombu's role is primarily rhythmic and ceremonial — signalling, accenting, and elevating the ensemble's energy.",
    heritage:
      "The fifth instrument completing the Panchavadyam quintet. Panchavadyam concerts traditionally begin with three stylised blows on the conch (Shankhu) before the Kombu and percussion enter. At Thrissur Pooram, the Madathil Varavu Panchavadyam of Thiruvambady temple is among the most celebrated Kombu showcases in Kerala.",
    performances:
      "Panchavadyam, Panchari Melam, Pandi Melam, temple poorams, Theyyam, and ceremonial processions.",
  },
  {
    id: 8,
    name: "Mizhavu",
    image: MizhavuImage,
    category: "Percussion · Sacred Copper Drum",
    description:
      "The Mizhavu is a large pot-shaped copper drum with a narrow neck and wide base, covered with calf-skin parchment. Considered sacred, it is the principal percussion instrument of Koodiyattam — the oldest surviving Sanskrit theatre tradition, recognised by UNESCO as intangible cultural heritage.",
    usage:
      "Played exclusively in Koodiyattam and Nangyar Koothu by the Ambalavasi Nambiar community, who undergo years of rigorous training. The Mizhavu artist controls the entire rhythmic and emotional arc of the performance — different rhythms signify different characters, moods, and narrative moments. Not used in Melam or Panchavadyam.",
    details:
      "Made of copper or clay with a mouth covered by stretched hide. The player sits with the Mizhavu beside them, striking with hands and fingers to produce a rich spectrum from deep resonance to sharp accents. Traditionally, performance rights were restricted to specific communities due to the instrument's sacred status.",
    heritage:
      "Koodiyattam, performed in Kerala temples for over a thousand years, depends entirely on the Mizhavu for its sonic world. The instrument is classified among Kerala's Kshetra Vadyam (temple instruments). Its tones are considered pure and classical, enriched with ritual significance that transcends mere accompaniment.",
    performances:
      "Koodiyattam, Nangyar Koothu, Kutiyattam festivals at temples like Ammannur Chachu Chakyar Smaraka Gurukulam, and Natyashastra-based Sanskrit theatre.",
  },
  {
    id: 9,
    name: "Udukku",
    image: UdukkuImage,
    category: "Percussion · Hourglass Drum",
    description:
      "The Udukku is a small hourglass-shaped drum similar in form to the Damaru, used in Kerala's folk and devotional traditions. Its warm, resonant tone adds rhythmic depth to temple rituals and Bhagavathy worship ceremonies.",
    usage:
      "Played with one hand striking the head while the other manipulates tension strings to alter pitch — a technique shared with the Idakka. Common in Theyyam, Bhagavathy Seva, Ayyappan Vilakku, and folk devotional gatherings. Also accompanies Ottamthullal and village festival performances.",
    details:
      "Carved from jackfruit wood with an animal-skin membrane stretched over one or both openings. Lightweight and portable, the Udukku is accessible to village performers and temple assistants. The pitch-bending capability allows expressive rhythmic improvisation in devotional contexts.",
    heritage:
      "Rooted in Kerala's folk percussion lineage, the Udukku bridges temple orthodoxy and community celebration. It appears in rituals honouring deities like Bhagavathy, Ayyappan, and local goddesses — where rhythmic invocation is as important as melodic prayer.",
    performances:
      "Theyyam, Bhagavathy worship, Ayyappan Vilakku, Ottamthullal, village temple festivals, and folk music gatherings.",
  },
];

export default instruments;
