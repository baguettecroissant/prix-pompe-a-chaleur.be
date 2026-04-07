export interface BrandModel {
    name: string;
    type: 'air-air' | 'air-eau' | 'hybride' | 'geothermie';
    priceRange: string;
    features: string[];
}

export interface Brand {
    slug: string;
    name: string;
    countryFlag: string;
    seoTitle: string;
    seoDescription: string;
    tagline: string;
    founded: string;
    headquarters: string;
    description: string;
    models: BrandModel[];
    pros: string[];
    cons: string[];
    qualityRating: number;
    savRating: number;
    priceRating: number;
    priceRange: { airAir: string; airEau: string };
    warranty: string;
    faq: { question: string; answer: string }[];
    heroImage?: string;
}

export const BRANDS: Brand[] = [
    {
        slug: "daikin",
        heroImage: "/images/marques/daikin.png",
        name: "Daikin",
        countryFlag: "🇯🇵",
        seoTitle: "Daikin Pompe à Chaleur Belgique — Prix, Modèles & Avis 2026",
        seoDescription: "Découvrez les pompes à chaleur Daikin Altherma disponibles en Belgique. Prix, modèles, avantages et avis. Comparez les devis d'installateurs RESCert.",
        tagline: "N°1 mondial de la climatisation et du chauffage thermodynamique",
        founded: "1924",
        headquarters: "Osaka, Japon — Usine européenne à Ostende (Belgique !)",
        description: "Daikin est le leader mondial incontesté des pompes à chaleur, avec une particularité unique pour le marché belge : son usine européenne est située à Ostende, en Flandre. Cela en fait un acteur local majeur, avec une chaîne d'approvisionnement optimisée pour la Belgique.\n\nLa gamme Daikin Altherma 3 représente le summum de la technologie air/eau, incorporant le réfrigérant R-32 à faible GWP. Les modèles haute température (jusqu'à 70°C) sont idéaux pour les maisons belges anciennes équipées de radiateurs classiques.",
        models: [
            { name: "Daikin Altherma 3 H HT", type: "air-eau", priceRange: "10 000€ – 16 000€", features: ["Haute temp. 70°C", "R-32", "Chauffage + ECS", "Idéal rénovation belge"] },
            { name: "Daikin Altherma 3 H MT", type: "air-eau", priceRange: "8 000€ – 13 000€", features: ["Moyenne temp. 55°C", "SCOP 4.64", "Plancher chauffant", "Ultra-silencieuse"] },
            { name: "Daikin Altherma 3 R", type: "air-eau", priceRange: "12 000€ – 18 000€", features: ["Bi-bloc", "R-32", "Solaire compatible", "WiFi intégré"] },
            { name: "Daikin Perfera", type: "air-air", priceRange: "2 500€ – 5 000€", features: ["Réversible", "Capteur intelligent", "Silencieux 19 dB", "Wifi"] },
        ],
        pros: ["Usine à Ostende (Belgique) = pièces rapides et SAV local", "SCOP parmi les plus élevés du marché", "Gamme haute température idéale pour rénovation", "Large réseau d'installateurs certifiés en Belgique"],
        cons: ["Prix d'achat supérieur à la moyenne", "Interface de commande perfectible", "Maintenance spécifique recommandée"],
        qualityRating: 5,
        savRating: 5,
        priceRating: 3,
        priceRange: { airAir: "2 500€ – 5 000€", airEau: "8 000€ – 18 000€" },
        warranty: "5 ans compresseur",
        faq: [
            { question: "Daikin fabrique-t-il ses PAC en Belgique ?", answer: "Oui ! L'usine Daikin d'Ostende est le plus grand site de production de PAC en Europe. Les modèles Altherma vendus en Belgique y sont assemblés, garantissant une disponibilité rapide des pièces." },
            { question: "Quelle Daikin Altherma pour une maison belge ancienne ?", answer: "La Daikin Altherma 3 H HT est recommandée pour les maisons belges avec radiateurs existants. Sa capacité haute température (70°C) permet de conserver vos radiateurs classiques sans modification." },
            { question: "Quel est le prix moyen d'une Daikin Altherma en Belgique ?", answer: "Comptez entre 10 000€ et 18 000€ pose comprise pour une Altherma 3 air/eau, avant déduction des primes (Prime Habitation en Wallonie ou Primes Énergie à Bruxelles)." },
        ]
    },
    {
        slug: "vaillant",
        heroImage: "/images/marques/vaillant.png",
        name: "Vaillant",
        countryFlag: "🇩🇪",
        seoTitle: "Vaillant Pompe à Chaleur Belgique — Prix, aroTHERM & Avis 2026",
        seoDescription: "Vaillant aroTHERM plus en Belgique : prix, performances et avis. Comparez les installateurs certifiés Vaillant près de chez vous.",
        tagline: "Le confort intelligent made in Germany, très populaire en Belgique",
        founded: "1874",
        headquarters: "Remscheid, Allemagne",
        description: "Vaillant est l'une des marques les plus populaires en Belgique pour les pompes à chaleur, grâce à sa longue implantation commerciale dans le pays et un réseau d'installateurs partenaires très dense. La marque allemande est particulièrement reconnue pour la fiabilité de ses chaudières, facilitant la transition vers la PAC.\n\nL'aroTHERM plus est le fer de lance de la gamme, utilisant le réfrigérant naturel R-290 (propane) qui offre un bilan environnemental exemplaire et un excellent rendement sous climat belge.",
        models: [
            { name: "aroTHERM plus", type: "air-eau", priceRange: "9 000€ – 15 000€", features: ["R-290 propane", "75°C max", "COP 5.0 (A7/W35)", "Green iQ"] },
            { name: "flexoTHERM exclusive", type: "geothermie", priceRange: "14 000€ – 22 000€", features: ["Géothermie", "SCOP 5.8", "Modular", "Silencieux"] },
            { name: "aroTHERM Split", type: "air-eau", priceRange: "7 000€ – 12 000€", features: ["Bi-bloc", "Compacte", "ECS intégrée", "SensoNet"] },
        ],
        pros: ["R-290 propane : réfrigérant naturel à faible impact", "Très large réseau d'installateurs agréés en Belgique", "Température de sortie 75°C = parfait pour rénovation belge", "Excellente intégration avec les chaudières Vaillant existantes"],
        cons: ["Prix en hausse sur les modèles premium", "SAV parfois lent pour les pièces spécifiques", "App SensoNet en amélioration continue"],
        qualityRating: 5,
        savRating: 4,
        priceRating: 3,
        priceRange: { airAir: "N/A", airEau: "7 000€ – 22 000€" },
        warranty: "5 ans échangeur, 2 ans pièces",
        faq: [
            { question: "Vaillant est-il un bon choix en Belgique ?", answer: "Oui, Vaillant dispose d'un des réseaux les plus denses en Belgique. La marque est historiquement présente sur le marché belge du chauffage, ce qui facilite le SAV et la maintenance." },
            { question: "L'aroTHERM plus fonctionne-t-elle bien par temps froid ?", answer: "Oui. L'aroTHERM plus maintient d'excellentes performances jusqu'à -25°C grâce au réfrigérant R-290, parfaitement adapté au climat belge." },
            { question: "Quel budget pour une Vaillant en Belgique ?", answer: "Comptez 9 000€ à 15 000€ pose comprise pour une aroTHERM plus, avant primes. La Prime Habitation wallonne et les Primes Énergie bruxelloises sont applicables." },
        ]
    },
    {
        slug: "mitsubishi",
        heroImage: "/images/marques/mitsubishi.png",
        name: "Mitsubishi Electric",
        countryFlag: "🇯🇵",
        seoTitle: "Mitsubishi Pompe à Chaleur Belgique — Prix Ecodan & Avis 2026",
        seoDescription: "Mitsubishi Ecodan : la PAC qui ne craint pas le froid belge. Prix, performances et installateurs certifiés en Belgique.",
        tagline: "La référence des hivers rigoureux avec la technologie Zubadan",
        founded: "1921",
        headquarters: "Tokyo, Japon",
        description: "Mitsubishi Electric est réputé pour ses performances exceptionnelles par temps froid grâce à la technologie Zubadan, qui maintient 100% de la puissance calorifique jusqu'à -15°C. C'est un argument de poids pour les hivers belges, particulièrement en Ardenne.\n\nLa gamme Ecodan Hydrobox et Ecodan Cylinder offre des solutions air/eau complètes pour la rénovation et le neuf, avec une intégration simplifiée dans les circuits de chauffage existants.",
        models: [
            { name: "Ecodan Zubadan PUHZ", type: "air-eau", priceRange: "9 500€ – 16 000€", features: ["Zubadan -15°C", "SCOP 4.06", "R-32", "Cascade possible"] },
            { name: "Ecodan Hydrobox", type: "air-eau", priceRange: "8 000€ – 14 000€", features: ["Compact", "Modulable", "Chauffage + ECS", "WiFi MELCloud"] },
            { name: "MSZ-LN Kirigamine Style", type: "air-air", priceRange: "2 800€ – 5 500€", features: ["Design flat", "3D i-see Sensor", "22 dB", "Plasma Quad"] },
        ],
        pros: ["Zubadan = performance garantie par -15°C (Ardenne belge)", "Fiabilité japonaise reconnue mondialement", "MELCloud app pour pilotage à distance", "Excellente intégration dans les circuits existants"],
        cons: ["Prix premium sur la gamme Zubadan", "Réseau d'installateurs moins dense que Daikin/Vaillant en Belgique", "Design des unités extérieures imposant"],
        qualityRating: 5,
        savRating: 4,
        priceRating: 3,
        priceRange: { airAir: "2 800€ – 5 500€", airEau: "8 000€ – 16 000€" },
        warranty: "5 ans compresseur",
        faq: [
            { question: "Mitsubishi Zubadan convient-il à l'Ardenne belge ?", answer: "Parfaitement. La technologie Zubadan est conçue pour les climats froids, maintenant 100% de puissance jusqu'à -15°C. C'est le choix n°1 pour les régions ardennaises." },
            { question: "Ecodan ou Altherma pour la Belgique ?", answer: "Les deux sont excellents. L'Ecodan Zubadan est recommandé en Ardenne pour son maintien de puissance par grand froid. L'Altherma 3 excelle en zone plus tempérée (Brabant, Hainaut)." },
            { question: "Prix d'une Mitsubishi Ecodan en Belgique ?", answer: "Budget de 8 000€ à 16 000€ pose incluse pour une Ecodan Hydrobox, avant déduction des primes régionales belges (Wallonie ou Bruxelles)." },
        ]
    },
    {
        slug: "atlantic",
        heroImage: "/images/marques/atlantic.png",
        name: "Atlantic",
        countryFlag: "🇫🇷",
        seoTitle: "Atlantic Pompe à Chaleur Belgique — Prix Alfea & Avis 2026",
        seoDescription: "Atlantic Alfea Extensa/Excellia en Belgique : prix, performances. Le meilleur rapport qualité/prix pour les PAC air/eau.",
        tagline: "Fabrication française, excellent rapport qualité-prix",
        founded: "1968",
        headquarters: "La Roche-sur-Yon, France",
        description: "Atlantic est le champion français de la pompe à chaleur et a su conquérir une part importante du marché belge grâce à son excellent rapport qualité-prix. Les gammes Alfea Extensa et Alfea Excellia offrent des solutions air/eau performantes à des tarifs très compétitifs.\n\nLa proximité géographique France-Belgique facilite la logistique et le SAV, ce qui en fait un choix pragmatique pour les installateurs belges. Le groupe Atlantic (incluant Thermor et Sauter) dispose d'un maillage commercial bien implanté en Wallonie.",
        models: [
            { name: "Alfea Excellia Duo A.I.", type: "air-eau", priceRange: "8 000€ – 14 000€", features: ["Intelligence artificielle", "R-32", "ECS intégrée", "SCOP 4.5"] },
            { name: "Alfea Extensa Duo A.I.", type: "air-eau", priceRange: "6 500€ – 11 000€", features: ["Entrée de gamme", "Compacte", "ECS", "Silencieuse"] },
            { name: "Alfea Hybrid Duo Gaz", type: "hybride", priceRange: "9 000€ – 15 000€", features: ["Hybride PAC + gaz", "Transition douce", "Economique", "R-32"] },
        ],
        pros: ["Rapport qualité-prix imbattable sur le marché belge", "Fabrication 100% française, proximité logistique", "Gamme hybride PAC+gaz pour transition progressive", "SAV facilité par la proximité France-Belgique"],
        cons: ["Moins de notoriété que Daikin ou Vaillant en Belgique", "Puissance parfois juste pour les grandes maisons", "Réseau d'installateurs certifiés à développer"],
        qualityRating: 4,
        savRating: 4,
        priceRating: 5,
        priceRange: { airAir: "2 000€ – 4 000€", airEau: "6 500€ – 15 000€" },
        warranty: "5 ans pièces",
        faq: [
            { question: "Atlantic est-il disponible en Belgique ?", answer: "Oui, Atlantic est bien distribué en Belgique via un réseau de grossistes et d'installateurs. La proximité France-Belgique facilite les approvisionnements et le SAV." },
            { question: "Alfea Excellia ou Extensa pour la Belgique ?", answer: "L'Alfea Extensa convient pour les maisons bien isolées (PEB B+). L'Excellia avec IA est préférable pour la rénovation ou les maisons plus anciennes nécessitant plus de puissance." },
            { question: "Quel est le prix d'une Atlantic Alfea en Belgique ?", answer: "De 6 500€ à 14 000€ pose comprise pour la gamme Alfea air/eau, avant primes. C'est l'un des meilleurs ratios prix/performance disponibles sur le marché belge." },
        ]
    },
    {
        slug: "bosch",
        heroImage: "/images/marques/bosch.png",
        name: "Bosch",
        countryFlag: "🇩🇪",
        seoTitle: "Bosch Pompe à Chaleur Belgique — Prix Compress & Avis 2026",
        seoDescription: "Bosch Compress 7000i AW : la PAC allemande pour maison belge. Prix, avis et installateurs certifiés en Belgique.",
        tagline: "L'ingénierie allemande au service du confort belge",
        founded: "1886",
        headquarters: "Stuttgart, Allemagne",
        description: "Bosch Thermotechnik, filiale du géant Robert Bosch, propose une gamme de pompes à chaleur compactes et efficaces. La Compress 7000i AW est particulièrement adaptée au marché belge grâce à son encombrement réduit et sa compatibilité avec les circuits de chauffage existants.\n\nLa marque Bosch bénéficie d'une image de fiabilité et de qualité très forte en Belgique, un marché où l'industrie allemande est historiquement appréciée. Le réseau commercial Bosch/Buderus couvre l'ensemble de la Belgique francophone.",
        models: [
            { name: "Compress 7000i AW", type: "air-eau", priceRange: "8 500€ – 14 000€", features: ["R-290 propane", "Très silencieuse", "SCOP 5.1", "HomeCom Easy"] },
            { name: "Compress 6000 AW", type: "air-eau", priceRange: "7 000€ – 11 000€", features: ["Entrée de gamme", "R-410A", "Compacte", "ECS possible"] },
            { name: "Compress 7400i AW", type: "air-eau", priceRange: "10 000€ – 17 000€", features: ["Premium", "R-290", "70°C", "Connectée"] },
        ],
        pros: ["Image de marque allemande excellente en Belgique", "R-290 propane sur les modèles récents", "Très silencieuse (gamme 7000i)", "Réseau Bosch/Buderus dense en Belgique"],
        cons: ["Gamme moins étendue que Daikin ou Mitsubishi", "Prix premium sur les modèles Compress 7400i", "App HomeCom en développement"],
        qualityRating: 4,
        savRating: 4,
        priceRating: 4,
        priceRange: { airAir: "N/A", airEau: "7 000€ – 17 000€" },
        warranty: "5 ans compresseur, 2 ans pièces",
        faq: [
            { question: "Bosch est-il un bon choix pour une PAC en Belgique ?", answer: "Absolument. La marque Bosch (et sa filiale Buderus) est très bien implantée en Belgique. La qualité allemande, combinée à un réseau de SAV dense, en fait un choix de confiance." },
            { question: "Compress 7000i ou aroTHERM de Vaillant ?", answer: "Les deux utilisent le R-290 et offrent d'excellentes performances. La Compress 7000i est légèrement plus compacte, tandis que l'aroTHERM plus atteint des températures de sortie plus élevées." },
            { question: "Prix d'une Bosch Compress en Belgique ?", answer: "De 7 000€ à 17 000€ pose comprise, selon le modèle choisi. Les primes belges (Wallonie/Bruxelles) s'appliquent pour réduire significativement l'investissement." },
        ]
    },
];

export function getBrandBySlug(slug: string): Brand | undefined {
    return BRANDS.find(b => b.slug === slug);
}

export function getAllBrandSlugs(): string[] {
    return BRANDS.map(b => b.slug);
}
