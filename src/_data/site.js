// Global site data — ONLY verified facts (Phase 1) + client-confirmed values.
// Anything unverified lives as a PENDING flag, never invented.
module.exports = {
  name: "Ecocruceros",
  brandLine: "Islas Palomino",
  // Confirmed sole booking number (client 2026-06-03). Legacy numbers retired.
  whatsapp: "51986671093",
  whatsappDisplay: "+51 986 671 093",
  // Client correction (WEEB_CORRECIONES_FINALES): all enquiry/booking email → reservas@
  email: "reservas@ecocruceros.com",
  phone: "(01) 226-8530",
  location: "La Punta, Callao, Lima, Perú",
  // Office (client correction: show a location map, hide bank-account numbers)
  office: {
    address: "Av. Arequipa 4964, Of. 202, 2.º piso — Miraflores, Lima, Perú",
    mapsEmbed: "https://maps.google.com/maps?q=Av.+Arequipa+4964,+Miraflores,+Lima&z=16&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Av.+Arequipa+4964+Miraflores+Lima"
  },
  // Departure schedule (client correction). Tour runs daily, by prior reservation.
  schedule: [
    { es: "Lunes a viernes", en: "Monday to Friday", time: "11:30 a. m." },
    { es: "Sábados, domingos y feriados", en: "Sat, Sun & holidays", time: "10:00 a. m." }
  ],
  // Press / featured videos provided by the client
  video: {
    cnn: "924dvKLBvpQ",            // CNN report
    incas: "jyLkU4to6aY",          // "El Tour de los Incas" YouTube report
    incasChannel: "El Tour de los Incas"
  },
  yearsApprox: 30, // "casi 30 años" — exact founding year PENDING (A1)
  social: {
    facebook: "https://www.facebook.com/ECOCRUCEROS",
    instagram: "https://www.instagram.com/ecocruceros_oficial/",
    youtube: "https://www.youtube.com/@ecocruceros8644"
  },
  tripadvisor: {
    rating: "4.6",
    reviews: "193",
    rank: "#10 de 97",
    url: "https://www.tripadvisor.com/Attraction_Review-g294316-d2473812-Reviews-Ecocruceros-Lima_Lima_Region.html"
  },
  // Embarkation / meeting point (client address note, 2026)
  embarkation: {
    name: "Muelle Club Canottieri",
    address: "Malecón Figueredo 800, La Punta, Callao",
    directions_es: "A la altura de la cuadra 8 de la Av. Bolognesi. Ingresa al malecón por las calles Elías Aguirre o Diego Ferré.",
    directions_en: "By block 8 of Av. Bolognesi. Enter the boardwalk via Elías Aguirre or Diego Ferré streets.",
    mapsLink: "https://goo.gl/maps/fxPELJUwnQKw85LU8",
    mapsEmbed: "https://maps.google.com/maps?q=Club+Canottieri+La+Punta+Callao&z=15&output=embed"
  },
  // VERIFIED pricing — official 2026 flyers (residents in S/, foreigners in US$)
  pricing: {
    residents: [
      { who_es: "Adultos", who_en: "Adults", price: "S/. 179" },
      { who_es: "Niños (2 a 12 años)", who_en: "Children (2–12)", price: "S/. 149" },
      { who_es: "Infantes", who_en: "Infants", price_es: "Gratis (1 por familia)", price_en: "Free (1 per family)" }
    ],
    foreigners: [
      { who_es: "Adultos", who_en: "Adults", price: "US$69" },
      { who_es: "Niños (2 a 12 años)", who_en: "Children (2–12)", price: "US$59" }
    ],
    // "No incluye" per the official flyers: S/. 26 residents · US$8 foreigners (SERNANP + tasa de embarque)
    extra_es: "No incluye: S/. 26 por persona (residentes) — ingreso al área natural protegida (SERNANP) y tasa de embarque en muelle privado. Visitantes extranjeros: US$8.",
    extra_en: "Not included: S/. 26 per person (residents) — protected-area entrance (SERNANP) and private-pier boarding fee. International visitors: US$8."
  },
  // VERIFIED route stops
  route: [
    { es: "La Punta", en: "La Punta", desc_es: "Balneario, Cantolao, clubes náuticos y Escuela Naval", desc_en: "Seaside district, Cantolao, yacht clubs and the Naval School" },
    { es: "El Camotal", en: "El Camotal", desc_es: "El Callao colonial sumergido", desc_en: "The submerged colonial Callao" },
    { es: "Isla San Lorenzo", en: "San Lorenzo Island", desc_es: "Playa presidencial y base naval", desc_en: "Presidential beach and naval base" },
    { es: "Isla El Frontón", en: "El Frontón Island", desc_es: "Ruinas de la antigua prisión", desc_en: "Ruins of the old prison" },
    { es: "Islas Cavinzas", en: "Cavinzas Islands", desc_es: "Aves guaneras y pingüinos de Humboldt", desc_en: "Guano birds and Humboldt penguins" },
    { es: "Islas Palomino", en: "Palomino Islands", desc_es: "Colonia de 5,000+ lobos marinos · nado opcional", desc_en: "Colony of 5,000+ sea lions · optional swim" }
  ],
  // VERIFIED certifications. Logo files downloaded from ecocruceros.com (published). Captions/validity PENDING C1.
  // `verify`: official verification/listing URL for each credential. Fill once provided (C1) — a non-empty value
  // automatically turns the logo + name into a verification link on the certifications page.
  certs: [
    { name: "Green Destinations — Top 100 Stories 2023", img: "green-destinations.jpeg", verify: "" },
    { name: "Marca Perú", img: "marca-peru.jpeg", verify: "" },
    { name: "Sello CALTUR — Calidad y Compromiso", img: "caltur-calidad.jpeg", verify: "" },
    { name: "SERNANP", img: "sernanp.jpeg", verify: "" },
    { name: "Por la Conservación", img: "por-la-conservacion.jpeg", verify: "" },
    { name: "Gobierno Regional del Callao", img: "gobierno-regional-callao.jpeg", verify: "" },
    { name: "Protégeme — ESNNA, Turismo Responsable", img: "esnna.jpg", verify: "" }
  ],
  buildNote: "PENDING items are marked in templates; no content is invented."
};
