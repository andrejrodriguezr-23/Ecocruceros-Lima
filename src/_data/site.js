// Global site data — ONLY verified facts (Phase 1) + client-confirmed values.
// Anything unverified lives as a PENDING flag, never invented.
module.exports = {
  name: "Ecocruceros",
  brandLine: "Islas Palomino",
  // Confirmed sole booking number (client 2026-06-03). Legacy numbers retired.
  whatsapp: "51986671093",
  whatsappDisplay: "+51 986 671 093",
  // Client correction (MODIFICACIONES 2026-07): keep informes@ as the public email.
  // Landline (01) 226-8530 and the Miraflores office were retired — do not re-add.
  email: "informes@ecocruceros.com",
  location: "La Punta, Callao, Lima, Perú",
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
  years: 30, // "30 años de experiencia" (client, MODIFICACIONES 2026-07)
  social: {
    facebook: "https://www.facebook.com/ECOCRUCEROS",
    instagram: "https://www.instagram.com/ecocruceros_oficial/",
    youtube: "https://www.youtube.com/@ecocruceros8644",
    tiktok: "https://www.tiktok.com/@ecocruceros"
  },
  // Rating shown site-wide (client, MODIFICACIONES 2026-07): 4.9 referencing
  // GetYourGuide, Tripadvisor and Google reviews. Only URLs provided by the
  // client are linked; an empty url renders as plain text.
  rating: {
    value: "4.9",
    getyourguideUrl: "https://www.getyourguide.com/ecocruceros-islas-palomino-s131207/",
    googleUrl: "https://www.google.com/search?sca_esv=24bf5a2419cba2ed&rlz=1C5CHFA_enPE1144PE1144&sxsrf=APpeQnvehaB6BQcDwel7Syj5Y0Y1kVkLhw:1783087883323&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_-T97MLa6dt9xY0jJhf6nLTWVux96ZUFjDjyIdQdeYcRmmRyvehUoQ7IZMuDQ2D4sb3DYt0XfQDP56jFIrgF-KqRwQ42XacEZuo4Sea2nvUeVc_0Cg%3D%3D&q=Ecocruceros+%28Islas+Palomino%29+Opiniones&sa=X&ved=2ahUKEwjU343_17aVAxVVp5UCHcYFLhkQ0bkNegQIOBAH&biw=1600&bih=902&dpr=0.9#lrd=0x9105c73d6e51f705:0x543091e542cbcad0,1,,,,"
  },
  tripadvisor: {
    url: "https://www.tripadvisor.com/Attraction_Review-g294316-d2473812-Reviews-Ecocruceros-Lima_Lima_Region.html"
  },
  // Embarkation / meeting point. Client (MODIFICACIONES 2026-07): present it as
  // "Ecocruceros – La Punta (Punto de embarque)"; no restaurant references.
  embarkation: {
    name: "Ecocruceros – La Punta",
    role_es: "Punto de embarque e inicio del recorrido",
    role_en: "Boarding point and start of the route",
    address: "Malecón Figueredo 800, La Punta, Callao",
    directions_es: "A la altura de la cuadra 8 de la Av. Bolognesi. Ingresa al malecón por las calles Elías Aguirre o Diego Ferré.",
    directions_en: "By block 8 of Av. Bolognesi. Enter the boardwalk via Elías Aguirre or Diego Ferré streets.",
    // Google Business listing (ftid) — shows the "Ecocruceros" card pinned at
    // La Punta. Client-verified on the live embed test 2026-07-03.
    mapsLink: "https://maps.google.com/maps?q=Ecocruceros&ftid=0x9105c73d6e51f705:0x543091e542cbcad0",
    mapsEmbed: "https://maps.google.com/maps?q=Ecocruceros&ftid=0x9105c73d6e51f705:0x543091e542cbcad0&output=embed"
  },
  // VERIFIED pricing — official 2026 flyers (residents in S/, foreigners in US$).
  // Client (MODIFICACIONES 2026-07): title "Peruanos y Residentes"; Infantes info removed.
  pricing: {
    residents_title_es: "Peruanos y Residentes",
    residents_title_en: "Peruvians & Residents",
    residents: [
      { who_es: "Adultos", who_en: "Adults", price: "S/. 179" },
      { who_es: "Niños (2 a 12 años)", who_en: "Children (2–12)", price: "S/. 149" }
    ],
    foreigners_title_es: "Extranjeros",
    foreigners_title_en: "International visitors",
    foreigners: [
      { who_es: "Adultos", who_en: "Adults", price: "US$69" },
      { who_es: "Niños (2 a 12 años)", who_en: "Children (2–12)", price: "US$59" }
    ],
    // "No incluye" per the official flyers: S/. 26 residents · US$8 foreigners (SERNANP + tasa de embarque)
    extra_es: "No incluye: S/. 26 por persona (residentes) — ingreso al área natural protegida (SERNANP) y tasa de embarque en muelle privado. Visitantes extranjeros: US$8.",
    extra_en: "Not included: S/. 26 per person (residents) — protected-area entrance (SERNANP) and private-pier boarding fee. International visitors: US$8."
  },
  // VERIFIED route. Client (MODIFICACIONES 2026-07): La Punta is NOT a stop —
  // it is only the boarding point; the route has 5 "puntos del recorrido"
  // (never "paradas"), each with a photo and a brief description.
  // Island photos provided by the client 2026-07-03.
  routeStart: {
    es: "La Punta", en: "La Punta",
    desc_es: "Balneario, Cantolao, clubes náuticos y Escuela Naval. Aquí embarcas e inicia el recorrido.",
    desc_en: "Seaside district, Cantolao, yacht clubs and the Naval School. This is where you board and the route begins.",
    img: "/assets/img/malecon-figueredo-playa-cantolao-lapunta-1.jpg"
  },
  route: [
    {
      es: "El Camotal", en: "El Camotal",
      desc_es: "Navegamos sobre el Callao colonial sumergido, mientras dejamos atrás la bahía.",
      desc_en: "We sail over the submerged colonial Callao as we leave the bay behind.",
      img: "/assets/img/islas/el-camotal.webp"
    },
    {
      es: "Isla San Lorenzo", en: "San Lorenzo Island",
      desc_es: "La isla más grande del Perú, con la playa presidencial y una base naval.",
      desc_en: "Peru's largest island, home to the presidential beach and a naval base.",
      img: "/assets/img/islas/isla-san-lorenzo.jpg"
    },
    {
      es: "Isla El Frontón", en: "El Frontón Island",
      desc_es: "Conserva las ruinas de la antigua prisión, hoy rodeadas de fauna marina.",
      desc_en: "It keeps the ruins of the old prison, today surrounded by marine wildlife.",
      img: "/assets/img/islas/isla-el-fronton.jpg"
    },
    {
      es: "Islas Cavinzas", en: "Cavinzas Islands",
      desc_es: "Hogar de aves guaneras y de pingüinos de Humboldt.",
      desc_en: "Home to guano birds and Humboldt penguins.",
      img: "/assets/img/islas/islas-cavinzas.webp"
    },
    {
      es: "Islas Palomino", en: "Palomino Islands",
      desc_es: "Colonia de más de 5,000 lobos marinos y la experiencia opcional de nadar con ellos en su hábitat.",
      desc_en: "A colony of 5,000+ sea lions and the optional experience of swimming with them in their habitat.",
      img: "/assets/img/islas/islas-palomino.jpg"
    }
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
