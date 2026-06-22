/**
 * Fauna of the Palomino Islands — 25 species.
 *
 * Content transcribed from the original branded info-cards so it can be
 * rebuilt as a real-photo grid + tap-to-expand detail (client request:
 * keep the info, use real photos, combine image + text, less wall-of-text).
 *
 * Photos are supplied by the client and uploaded to
 * /assets/img/fauna/real/NN-slug.jpg (see plan / shopping list).
 * Until a photo exists the card shows a branded placeholder tile.
 *
 * Bilingual: ES fields render on the Spanish gallery, EN on /en/.
 */
const base = "/assets/img/fauna/real/";

module.exports = [
  {
    n: 1, slug: "pinguino-humboldt", type_es: "Ave", type_en: "Bird",
    name_es: "Pingüino de Humboldt", name_en: "Humboldt Penguin", sci: "Spheniscus humboldti",
    photo: base + "01-pinguino-humboldt.jpg", lifespan: 20,
    behavior_es: "Son monógamos, pescan en grupos pequeños y anidan en grandes colonias. Puede bucear hasta 80 m de profundidad.",
    behavior_en: "Monogamous; they fish in small groups and nest in large colonies. They can dive to depths of up to 80 m.",
    food_es: ["Anchoveta", "Pejerrey", "Sardinas"], food_en: ["Anchovy", "Silverside", "Sardines"],
    habitat_es: "Islas y puntas rocosas del Perú y norte de Chile.", habitat_en: "Islands and rocky points of Peru and northern Chile.",
    repro_es: "Forma colonias para anidar y guarderías para proteger a los pichones.", repro_en: "Forms colonies to nest and nurseries to protect the chicks."
  },
  {
    n: 2, slug: "guanay", type_es: "Ave", type_en: "Bird",
    name_es: "Guanay", name_en: "Guanay cormorant", sci: "Phalacrocorax bougainvillii",
    photo: base + "02-guanay.jpg", lifespan: 20,
    behavior_es: "Sociable y forma colonias para anidar. Produce el guano de mejor calidad (unos 50 g).",
    behavior_en: "Sociable and forms colonies to nest. It produces the highest-quality guano (about 50 g).",
    food_es: ["Anchoveta", "Pejerrey", "Sardinas", "Calamares"], food_en: ["Anchovy", "Silverside", "Sardines", "Squid"],
    habitat_es: "Costas e islas de peñas.", habitat_en: "Rocky coasts and islands.",
    repro_es: "Nidifica en los suelos planos de las islas, formando cráteres con guano y algas.", repro_en: "Nests on the flat ground of the islands, forming craters of guano and algae."
  },
  {
    n: 3, slug: "cormoran-pata-roja", type_es: "Ave", type_en: "Bird",
    name_es: "Chuita o Cormorán de pata roja", name_en: "Red-legged cormorant", sci: "Phalacrocorax gaimardi",
    photo: base + "03-cormoran-pata-roja.jpg", lifespan: 25,
    behavior_es: "Sociable y forma colonias para anidar. Puede bucear impulsándose con sus patas.",
    behavior_en: "Sociable and forms colonies to nest. It can dive by propelling itself with its legs.",
    food_es: ["Peces", "Crustáceos", "Pequeños anfibios"], food_en: ["Fish", "Crustaceans", "Small amphibians"],
    habitat_es: "Acantilados rocosos elevados.", habitat_en: "High rocky cliffs.",
    repro_es: "Nidifica cerca de la línea de marea, entre los meses de agosto y octubre.", repro_en: "Nests near the tide line, between August and October."
  },
  {
    n: 4, slug: "cormoran-neotropical", type_es: "Ave", type_en: "Bird",
    name_es: "Cormorán neotropical", name_en: "Neotropic cormorant", sci: "Phalacrocorax brasilianus",
    photo: base + "04-cormoran-neotropical.jpg", lifespan: 15,
    behavior_es: "Sociable y forma colonias siempre cerca del agua. Produce gruñidos como un cerdo y aletea sobre el agua para llamar a los peces.",
    behavior_en: "Sociable and forms colonies always near water. It grunts like a pig and flaps over the water to attract fish.",
    food_es: ["Peces", "Crustáceos", "Pequeños anfibios"], food_en: ["Fish", "Crustaceans", "Small amphibians"],
    habitat_es: "Costas, islas, playas y cuerpos de agua dulce hasta los 4500 m s. n. m.", habitat_en: "Coasts, islands, beaches and freshwater bodies up to 4,500 m above sea level.",
    repro_es: "Nidifica en árboles o sobre el suelo de las islas. Son monógamos y arman el nido con ramas.", repro_en: "Nests in trees or on island ground. They are monogamous and build their nests with branches."
  },
  {
    n: 5, slug: "pelicano-peruano", type_es: "Ave", type_en: "Bird",
    name_es: "Pelícano peruano", name_en: "Peruvian Pelican", sci: "Pelecanus thagus",
    photo: base + "05-pelicano-peruano.jpg", lifespan: 25,
    behavior_es: "Pesca en grupos pequeños. Tiene un saco gular bajo el pico que le permite pescar drenando el agua como una red.",
    behavior_en: "Fishes in small groups. It has a gular sac under its beak that lets it fish by draining water like a net.",
    food_es: ["Jurel", "Anchoveta", "Sardinas"], food_en: ["Horse mackerel", "Anchovy", "Sardines"],
    habitat_es: "Islas y costas.", habitat_en: "Islands and coasts.",
    repro_es: "Forma colonias para anidar en acantilados de islas. En esta época, el saco bajo su pico se vuelve más brillante.", repro_en: "Forms colonies to nest on island cliffs. During this season, the sac under its beak becomes brighter."
  },
  {
    n: 6, slug: "zarcillo", type_es: "Ave", type_en: "Bird",
    name_es: "Zarcillo", name_en: "Inca Tern", sci: "Larosterna inca",
    photo: base + "06-zarcillo.jpg", lifespan: 15,
    behavior_es: "Sociable; vive en bandadas de hasta 1000 individuos. Considerada la gaviota más hermosa del Perú.",
    behavior_en: "Sociable; lives in flocks of up to 1,000 individuals. Considered the most beautiful gull in Peru.",
    food_es: ["Anchoveta", "Crustáceos", "Pejerrey"], food_en: ["Anchovy", "Crustaceans", "Silverside"],
    habitat_es: "Islas y costas. Originaria de la corriente peruana.", habitat_en: "Islands and coasts. Native to the Peruvian Current.",
    repro_es: "Elige grietas y acantilados de roca. Su época es todo el año, principalmente en abril, mayo, octubre y noviembre.", repro_en: "Chooses cracks and rock cliffs. Its season is all year round, mainly in April, May, October and November."
  },
  {
    n: 7, slug: "gaviota-peruana", type_es: "Ave", type_en: "Bird",
    name_es: "Gaviota peruana", name_en: "Band-tailed Gull", sci: "Larus belcheri",
    photo: base + "07-gaviota-peruana.jpg", lifespan: 15,
    behavior_es: "Sociable y anda en grandes colonias. Es un ave cleptoparásita: roba el alimento de otras aves.",
    behavior_en: "Sociable and lives in large colonies. It is a kleptoparasitic bird — it steals food from other birds.",
    food_es: ["Peces", "Anfibios", "Moluscos", "Huevos", "Pichones", "Carroña"], food_en: ["Fish", "Amphibians", "Mollusks", "Eggs", "Chicks", "Carrion"],
    habitat_es: "Playas costeras, sobre rocas o islotes y en zonas bajas al ras del agua.", habitat_en: "Coastal beaches, on rocks or islets, and in low areas at water level.",
    repro_es: "Son agresivos en la época de anidamiento.", repro_en: "They are aggressive during nesting season."
  },
  {
    n: 8, slug: "gaviota-dominicana", type_es: "Ave", type_en: "Bird",
    name_es: "Gaviota dominicana", name_en: "Kelp Gull", sci: "Larus dominicanus",
    photo: base + "08-gaviota-dominicana.jpg", lifespan: 15,
    behavior_es: "Sociable y monógama. Es reconocida como la gaviota más grande de América del Sur.",
    behavior_en: "Sociable and monogamous. Recognized as the largest gull in South America.",
    food_es: ["Peces", "Anfibios", "Moluscos", "Huevos", "Pichones", "Carroña"], food_en: ["Fish", "Amphibians", "Mollusks", "Eggs", "Chicks", "Carrion"],
    habitat_es: "Playas y zonas rocosas.", habitat_en: "Beaches and rocky areas.",
    repro_es: "Nidifica en costas, islas y ríos.", repro_en: "Nests on coasts, islands and rivers."
  },
  {
    n: 9, slug: "gaviotin-elegante", type_es: "Ave", type_en: "Bird",
    name_es: "Gaviotín elegante", name_en: "Elegant Tern", sci: "Thalasseus elegans",
    photo: base + "09-gaviotin-elegante.jpg", lifespan: 15,
    behavior_es: "Aves costeras migratorias que llegan a las costas del Perú durante su temporada no reproductiva.",
    behavior_en: "Migratory coastal birds that arrive on Peru's coast during their non-breeding season.",
    food_es: ["Anchovetas", "Sardinas"], food_en: ["Anchovies", "Sardines"],
    habitat_es: "Costas, playas y estuarios.", habitat_en: "Coasts, beaches and estuaries.",
    repro_es: "Anida en colonias y construye sus nidos en el suelo de la playa.", repro_en: "Nests in colonies and builds its nests on the beach floor."
  },
  {
    n: 10, slug: "piquero-peruano", type_es: "Ave", type_en: "Bird",
    name_es: "Piquero peruano", name_en: "Peruvian Booby", sci: "Sula variegata",
    photo: base + "10-piquero-peruano.jpg", lifespan: 17,
    behavior_es: "Sociable y forma colonias para anidar. Se lanza en picada y puede bucear hasta 10 m.",
    behavior_en: "Sociable and forms colonies to nest. It dives and can plunge to depths of up to 10 m.",
    food_es: ["Anchoveta", "Pejerrey", "Sardina"], food_en: ["Anchovy", "Silverside", "Sardine"],
    habitat_es: "Islas mar adentro.", habitat_en: "Offshore islands.",
    repro_es: "Forma colonias para anidar y, en ocasiones, no construye ningún nido.", repro_en: "Forms colonies to nest and sometimes builds no nest at all."
  },
  {
    n: 11, slug: "ostrero-negro", type_es: "Ave", type_en: "Bird",
    name_es: "Ostrero negro suramericano", name_en: "Blackish Oystercatcher", sci: "Haematopus ater",
    photo: base + "11-ostrero-negro.jpg", lifespan: 15,
    behavior_es: "Suele estar solo o en pareja (monógamo). No es frecuente, pero puede encontrarse en bandadas pequeñas.",
    behavior_en: "Usually found alone or in pairs (monogamous). Uncommon, but can be found in small flocks.",
    food_es: ["Choros", "Muimuyes", "Gusanos", "Crustáceos"], food_en: ["Mussels", "Mole crabs", "Worms", "Crustaceans"],
    habitat_es: "Costas, praderas y pantanos.", habitat_en: "Coasts, grasslands and marshes.",
    repro_es: "Su época de reproducción es entre setiembre y diciembre.", repro_en: "Its breeding season is between September and December."
  },
  {
    n: 12, slug: "churrete-marisquero", type_es: "Ave", type_en: "Bird",
    name_es: "Churrete marisquero", name_en: "Surf Cinclodes", sci: "Cinclodes taczanowskii",
    photo: base + "12-churrete-marisquero.jpg", lifespan: 15,
    behavior_es: "Vive en pequeños grupos, saltando entre las rocas donde revientan las olas del mar.",
    behavior_en: "Lives in small groups, hopping among the rocks where the waves break.",
    food_es: ["Caracoles", "Plantas marinas", "Invertebrados"], food_en: ["Snails", "Marine plants", "Invertebrates"],
    habitat_es: "Costas áridas rocosas.", habitat_en: "Arid rocky coasts.",
    repro_es: "Su época es entre octubre y enero. Hace sus nidos en quebradas pedregosas.", repro_en: "Its season is between October and January. It builds its nests in rocky ravines."
  },
  {
    n: 13, slug: "gallinazo-cabeza-negra", type_es: "Ave", type_en: "Bird",
    name_es: "Gallinazo de cabeza negra", name_en: "Black Vulture", sci: "Coragyps atratus",
    photo: base + "13-gallinazo-cabeza-negra.jpg", lifespan: 20,
    behavior_es: "Sociable y forma colonias. Tiene un olfato desarrollado, así localiza su alimento.",
    behavior_en: "Sociable and forms colonies. It has a well-developed sense of smell to locate its food.",
    food_es: ["Carroña", "Basura", "Mamíferos"], food_en: ["Carrion", "Refuse", "Mammals"],
    habitat_es: "Costas, praderas y pantanos.", habitat_en: "Coasts, grasslands and marshes.",
    repro_es: "Anida en árboles huecos, cuevas y en el suelo. Su época es noviembre y diciembre.", repro_en: "Nests in hollow trees, caves and on the ground. Its season is November and December."
  },
  {
    n: 14, slug: "gallinazo-cabeza-roja", type_es: "Ave", type_en: "Bird",
    name_es: "Gallinazo de cabeza roja", name_en: "Turkey Vulture", sci: "Cathartes aura",
    photo: base + "14-gallinazo-cabeza-roja.jpg", lifespan: 20,
    behavior_es: "Solitario de día, pero se agrupa en las noches. Resulta raro verlo en lugares poblados.",
    behavior_en: "Solitary by day, but gathers at night. It is rare to see it in populated areas.",
    food_es: ["Carroña", "Semillas", "Hojas"], food_en: ["Carrion", "Seeds", "Leaves"],
    habitat_es: "En el Perú es común en la costa, sierra y selva.", habitat_en: "In Peru it is common on the coast, in the highlands and in the jungle.",
    repro_es: "Anida en árboles huecos, cuevas y en el suelo. Su época es noviembre y diciembre.", repro_en: "Nests in hollow trees, caves and on the ground. Its season is November and December."
  },
  {
    n: 15, slug: "garcita-blanca", type_es: "Ave", type_en: "Bird",
    name_es: "Garcita blanca", name_en: "Snowy Egret", sci: "Egretta thula",
    photo: base + "15-garcita-blanca.jpg", lifespan: 15,
    behavior_es: "Sociable; se reúne en bandadas para dormir sobre los árboles. Hace movimientos circulares en el agua para encontrar alimento.",
    behavior_en: "Sociable; it gathers in flocks to roost in trees. It makes circular movements in the water to find food.",
    food_es: ["Peces", "Invertebrados", "Anfibios"], food_en: ["Fish", "Invertebrates", "Amphibians"],
    habitat_es: "Cuerpos de agua dulce y salada, pantanos, playas y lagunas.", habitat_en: "Freshwater and saltwater bodies, marshes, beaches and lagoons.",
    repro_es: "Su época es noviembre y diciembre. Ambos padres incuban durante 24 días.", repro_en: "Its season is November and December. Both parents incubate for 24 days."
  },
  {
    n: 16, slug: "gaviota-gris", type_es: "Ave", type_en: "Bird",
    name_es: "Gaviota gris", name_en: "Grey Gull", sci: "Leucophaeus modestus",
    photo: base + "16-gaviota-gris.jpg", lifespan: 20,
    behavior_es: "Sociable; forma colonias para anidar. Se para en la orilla e introduce el pico para atrapar muimuyes.",
    behavior_en: "Sociable; forms colonies to nest. It stands on the shore and dips its beak to catch mole crabs.",
    food_es: ["Anchoveta", "Pequeños crustáceos"], food_en: ["Anchovy", "Small crustaceans"],
    habitat_es: "Costas e islas de América del Sur.", habitat_en: "Coasts and islands of South America.",
    repro_es: "Nidifica sobre la arena, en zonas desérticas, de enero a marzo.", repro_en: "Nests on sand in desert areas, from January to March."
  },
  {
    n: 17, slug: "golondrina-mar-chica", type_es: "Ave", type_en: "Bird",
    name_es: "Golondrina de mar chica", name_en: "White-vented storm petrel", sci: "Oceanites gracilis",
    photo: base + "17-golondrina-mar-chica.jpg", lifespan: 7,
    behavior_es: "Es solitaria y anida en pequeños grupos dispersos. Su capacidad de caminar es limitada.",
    behavior_en: "It is solitary and nests in small scattered groups. Its ability to walk is limited.",
    food_es: ["Invertebrados", "Peces"], food_en: ["Invertebrates", "Fish"],
    habitat_es: "Mar abierto, en la corriente de Humboldt.", habitat_en: "Open sea, in the Humboldt Current.",
    repro_es: "Nidifica en cavidades subterráneas o grietas de rocas durante todo el año.", repro_en: "Nests in underground cavities or rock crevices throughout the year."
  },
  {
    n: 18, slug: "halcon-peregrino", type_es: "Ave", type_en: "Bird",
    name_es: "Halcón peregrino", name_en: "Peregrine Falcon", sci: "Falco peregrinus",
    photo: base + "18-halcon-peregrino.jpg", lifespan: 15,
    behavior_es: "Es territorial. Vuela a más de 100 km/h: es uno de los animales más rápidos del planeta.",
    behavior_en: "Territorial. It flies at over 100 km/h — one of the fastest animals on the planet.",
    food_es: ["Aves", "Mamíferos", "Reptiles", "Insectos"], food_en: ["Birds", "Mammals", "Reptiles", "Insects"],
    habitat_es: "Costas y acantilados.", habitat_en: "Coasts and cliffs.",
    repro_es: "Suele anidar en acantilados. La incubación dura 33 días.", repro_en: "It usually nests on cliffs. Incubation lasts 33 days."
  },
  {
    n: 19, slug: "petrel-gris", type_es: "Ave", type_en: "Bird",
    name_es: "Petrel gris", name_en: "Grey Petrel", sci: "Procellaria cinerea",
    photo: base + "19-petrel-gris.jpg", lifespan: 15,
    behavior_es: "Se asocia con cetáceos para aprovechar los restos de sus presas. Parece correr sobre el agua para tomar impulso al volar.",
    behavior_en: "It associates with cetaceans to take advantage of their prey's remains. It seems to run on the water to gain momentum for flight.",
    food_es: ["Peces", "Camarones", "Pulpos"], food_en: ["Fish", "Shrimp", "Octopus"],
    habitat_es: "Muy raro en las costas; puede encontrarse en el litoral peruano.", habitat_en: "Very rare on the coast; it can be found along the Peruvian shore.",
    repro_es: "Cría en colonias y anida en lugares secos. Su época es entre setiembre y abril.", repro_en: "It breeds in colonies and nests in dry places. Its season is between September and April."
  },
  {
    n: 20, slug: "piquero-patas-azules", type_es: "Ave", type_en: "Bird",
    name_es: "Piquero de patas azules", name_en: "Blue-footed Booby", sci: "Sula nebouxii",
    photo: base + "20-piquero-patas-azules.jpg", lifespan: 17,
    behavior_es: "Sociable y forma colonias para anidar. A diferencia de otras aves, respira por la boca por su adaptación al buceo.",
    behavior_en: "Sociable and forms colonies to nest. Unlike other birds, it breathes through its mouth as an adaptation to diving.",
    food_es: ["Anchoveta", "Caballa", "Sardina", "Calamares"], food_en: ["Anchovy", "Mackerel", "Sardine", "Squid"],
    habitat_es: "Costas e islas.", habitat_en: "Coasts and islands.",
    repro_es: "Elige partes planas de las islas y usa sus patas para calentar los huevos.", repro_en: "Chooses flat parts of islands and uses its feet to warm the eggs."
  },
  {
    n: 21, slug: "vuelvepiedras-rojizo", type_es: "Ave", type_en: "Bird",
    name_es: "Vuelvepiedras rojizo", name_en: "Ruddy Turnstone", sci: "Arenaria interpres",
    photo: base + "21-vuelvepiedras-rojizo.jpg", lifespan: 15,
    behavior_es: "Solitario, pero se asocia en grupos pequeños. Es migratorio: llega al Perú en septiembre y abril.",
    behavior_en: "Solitary, but associates in small groups. It is migratory, arriving in Peru in September and April.",
    food_es: ["Moluscos", "Crustáceos", "Pequeños insectos"], food_en: ["Mollusks", "Crustaceans", "Small insects"],
    habitat_es: "Orillas marinas, arenosas y rocosas.", habitat_en: "Sandy and rocky sea shores.",
    repro_es: "Su época de reproducción es entre mayo y junio; la incubación dura 21 días.", repro_en: "Its breeding season is between May and June; incubation lasts 21 days."
  },
  {
    n: 22, slug: "zarapito-trinador", type_es: "Ave", type_en: "Bird",
    name_es: "Zarapito trinador", name_en: "Whimbrel", sci: "Numenius phaeopus",
    photo: base + "22-zarapito-trinador.jpg", lifespan: 15,
    behavior_es: "Solitario; suele formar bandadas pequeñas con otras aves. Para alimentarse camina por la orilla hundiendo su pico.",
    behavior_en: "Solitary; it usually forms small flocks with other birds. To feed, it walks along the shore plunging its beak.",
    food_es: ["Gusanos", "Moluscos", "Bayas", "Pequeños insectos"], food_en: ["Worms", "Mollusks", "Berries", "Small insects"],
    habitat_es: "Migratorio; costas y orillas marinas de todo el planeta.", habitat_en: "Migratory; coasts and sea shores around the world.",
    repro_es: "Se reproduce todo el año. Las crías abandonan el nido al nacer.", repro_en: "It breeds year-round. The young leave the nest at birth."
  },
  {
    n: 23, slug: "delfin-comun", type_es: "Mamífero", type_en: "Mammal",
    name_es: "Delfín común", name_en: "Common Dolphin", sci: "Delphinus delphis",
    photo: base + "23-delfin-comun.jpg", lifespan: 40,
    behavior_es: "Vive en grupos de hasta 12 individuos. Usa la ecolocalización por ondas acústicas para encontrar su alimento.",
    behavior_en: "Lives in groups of up to 12 individuals. It uses echolocation through sound waves to find its food.",
    food_es: ["Peces", "Moluscos", "Crustáceos"], food_en: ["Fish", "Mollusks", "Crustaceans"],
    habitat_es: "Mar abierto y zonas costeras.", habitat_en: "Open sea and coastal areas.",
    repro_es: "Son polígamos; el tiempo de gestación es de 12 meses.", repro_en: "They are polygamous; the gestation period is 12 months."
  },
  {
    n: 24, slug: "lobo-fino", type_es: "Mamífero", type_en: "Mammal",
    name_es: "Lobo fino", name_en: "South American fur seal", sci: "Arctocephalus australis",
    photo: base + "24-lobo-fino.jpg", lifespan: 15,
    behavior_es: "Se desplaza en grupos de 15 a 20 individuos, aunque también se moviliza en solitario.",
    behavior_en: "It travels in groups of 15 to 20 individuals, although it also moves around alone.",
    food_es: ["Crustáceos", "Moluscos", "Aves", "Peces"], food_en: ["Crustaceans", "Mollusks", "Birds", "Fish"],
    habitat_es: "Costas rocosas; suele buscar algún tipo de sombra.", habitat_en: "Rocky coasts; it usually seeks some kind of shade.",
    repro_es: "Su tiempo de gestación es de 18 meses.", repro_en: "Its gestation period is 18 months."
  },
  {
    n: 25, slug: "lobo-chusco", type_es: "Mamífero", type_en: "Mammal",
    name_es: "Lobo chusco (lobo marino)", name_en: "South American Sea Lion", sci: "Otaria flavescens",
    photo: base + "25-lobo-chusco.jpg", lifespan: 15,
    behavior_es: "Es social. Vive en colonias en las épocas de reproducción y cría.",
    behavior_en: "It is social. It lives in colonies during the breeding and rearing seasons.",
    food_es: ["Peces", "Crustáceos", "Moluscos", "Aves"], food_en: ["Fish", "Crustaceans", "Mollusks", "Birds"],
    habitat_es: "Zonas rocosas con grietas o cuevas.", habitat_en: "Rocky areas with crevices or caves.",
    repro_es: "Se juntan en loberas y forman un harén de un macho y 15 hembras. La gestación dura 8 meses.", repro_en: "They gather in rookeries, forming a harem of one male and 15 females. Gestation lasts 8 months."
  }
];
