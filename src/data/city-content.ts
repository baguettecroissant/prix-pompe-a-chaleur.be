/**
 * City-specific unique content for local SEO pages.
 * Each city has editorial paragraphs, housing stats, pricing, authority links, and unique FAQs.
 * This prevents duplicate content across ~140 local pages.
 */

export interface CityHousing {
  dominantType: string;
  avgConstructionEra: string;
  pctMaisons: number;
  pctMazout: number;
  pctGaz: number;
  avgPEB: string;
}

export interface CityPricing {
  airEauMin: number;
  airEauMax: number;
  airAirMin: number;
  airAirMax: number;
  geoMin: number;
  geoMax: number;
  mainOeuvre: string;
}

export interface CityLinks {
  mairie: string;
  mairieLabel: string;
  guichetEnergie: string;
  guichetEnergieNom: string;
  primeRegionale: string;
}

export interface CityFaq {
  q: string;
  a: string;
}

export interface CityContent {
  slug: string;
  editorial: {
    contexteParagraph: string;
    patrimoineParagraph: string;
    energieParagraph: string;
  };
  housing: CityHousing;
  pricing: CityPricing;
  links: CityLinks;
  faqs: CityFaq[];
  localFact: string;
}

// ---------------------------------------------------------------------------
// BRUXELLES-CAPITALE (19 communes)
// ---------------------------------------------------------------------------

const BRUXELLES_CONTENT: CityContent[] = [
  {
    slug: "bruxelles-1000",
    editorial: {
      contexteParagraph: "Au cœur de la capitale belge, la Ville de Bruxelles concentre le patrimoine bâti le plus dense et le plus diversifié du pays. Des maisons de maître du quartier Dansaert aux immeubles haussmanniens du boulevard Anspach, le tissu urbain du Pentagone et de Laeken présente des défis thermiques spécifiques : murs mitoyens épais, hauteurs sous plafond importantes et caves voûtées. L'installation d'une pompe à chaleur dans ce contexte requiert des unités compactes et silencieuses, parfaitement adaptées aux contraintes d'un environnement urbain dense.",
      patrimoineParagraph: "Le parc immobilier de Bruxelles-Ville est composé à 72 % d'appartements et de maisons de maître, souvent construits entre 1890 et 1950. Les murs porteurs en briques de 30 à 40 cm d'épaisseur, fréquents dans le Pentagone, offrent une inertie thermique intéressante mais une isolation médiocre sans travaux. Le certificat PEB moyen oscille autour de la classe E, signe d'un potentiel d'amélioration considérable. Les PAC air/eau split, avec une unité extérieure discrète en cour intérieure ou sur toiture plate, constituent la solution privilégiée par les installateurs bruxellois.",
      energieParagraph: "La Ville de Bruxelles affiche encore un taux de chauffage au gaz naturel de 68 %, héritage du réseau de distribution dense déployé au XXe siècle. Le mazout représente environ 15 % des installations, principalement dans les immeubles anciens de Laeken et Neder-Over-Heembeek. La Région de Bruxelles-Capitale impose depuis 2025 des normes PEB renforcées pour toute rénovation lourde, rendant le passage à la pompe à chaleur non seulement économiquement avantageux mais progressivement obligatoire pour atteindre les objectifs climatiques régionaux."
    },
    housing: { dominantType: "maisons de maître et appartements en immeubles mitoyens", avgConstructionEra: "1890–1950", pctMaisons: 28, pctMazout: 15, pctGaz: 68, avgPEB: "E" },
    pricing: { airEauMin: 10000, airEauMax: 17000, airAirMin: 3500, airAirMax: 7000, geoMin: 20000, geoMax: 35000, mainOeuvre: "3 500 € à 5 500 €" },
    links: { mairie: "https://www.bruxelles.be", mairieLabel: "Ville de Bruxelles", guichetEnergie: "https://www.homegrade.brussels", guichetEnergieNom: "Homegrade.brussels", primeRegionale: "https://www.renolution.brussels" },
    faqs: [
      { q: "Quel prix pour une PAC air/eau à Bruxelles-Ville ?", a: "À Bruxelles (1000), le prix moyen d'une PAC air/eau installée varie de 10 000 € à 17 000 € TTC. Ce coût inclut le matériel, la mise en service et le raccordement au réseau hydraulique existant. Les maisons de maître du Pentagone nécessitent souvent un modèle split pour contourner les contraintes d'espace." },
      { q: "Quelles primes énergie pour installer une PAC à Bruxelles ?", a: "La Région de Bruxelles-Capitale propose, via le programme Rénolution, des Primes Énergie jusqu'à 4 500 € pour l'installation d'une PAC air/eau. Un bonus supplémentaire est accordé aux ménages à revenus modestes. La réduction d'impôt fédérale vient en complément. Rendez-vous sur renolution.brussels pour simuler vos aides." },
      { q: "Peut-on installer une PAC dans un appartement bruxellois ?", a: "Oui, les PAC air/eau split compactes conviennent aux appartements avec accès à un balcon, une toiture plate ou une cour intérieure pour l'unité extérieure. L'accord de la copropriété est nécessaire. Les PAC air/air réversibles sont une alternative pour les petites surfaces sans réseau hydraulique." },
      { q: "Faut-il un permis pour poser une unité extérieure à Bruxelles ?", a: "En Région bruxelloise, l'installation d'une unité extérieure de PAC peut nécessiter un permis d'urbanisme selon sa taille et son emplacement. Les unités en toiture plate ou en cour intérieure bénéficient généralement de dérogations. Votre installateur certifié vous accompagnera dans ces démarches." },
      { q: "Combien économise-t-on en passant du gaz à la PAC à Bruxelles ?", a: "Un ménage bruxellois chauffant au gaz naturel un appartement de 100 m² économise en moyenne 800 € à 1 400 € par an en passant à une PAC air/eau performante (COP 4). Le retour sur investissement, primes déduites, se situe entre 5 et 7 ans." }
    ],
    localFact: "Bruxelles-Ville abrite le siège de Homegrade.brussels, le centre régional de conseil gratuit en rénovation énergétique qui accompagne les propriétaires dans toutes leurs démarches."
  },
  {
    slug: "schaerbeek-1030",
    editorial: {
      contexteParagraph: "Deuxième commune la plus peuplée de la Région bruxelloise avec plus de 133 000 habitants, Schaerbeek se distingue par ses longues artères bordées de maisons Art Nouveau et Art Déco. Le quartier des Cerisiers, la place Colignon et les abords du parc Josaphat abritent un patrimoine architectural remarquable où les hauts plafonds, les vitraux et les façades ornementées imposent des solutions de chauffage respectueuses du bâti. La pompe à chaleur air/eau s'intègre parfaitement dans ce contexte, avec une unité extérieure en jardin arrière ou sur toiture.",
      patrimoineParagraph: "Les habitations schaerbeekoises sont principalement des maisons unifamiliales en bande, construites entre 1900 et 1935, avec des façades en pierre blanche ou en briques jaunes typiques du style néo-classique bruxellois. Les caves semi-enterrées et les jardins arrière en longueur facilitent l'installation des unités extérieures de PAC. Environ 35 % des logements sont des maisons, le reste étant des appartements issus de divisions d'immeubles anciens. Le PEB moyen se situe en classe E-F, offrant un potentiel d'amélioration majeur.",
      energieParagraph: "Schaerbeek reste très dépendante du gaz naturel (65 % des logements) avec une proportion de mazout encore significative (20 %) dans les immeubles anciens du bas de Schaerbeek. La commune a lancé un plan climat ambitieux visant la neutralité carbone à l'horizon 2050, encourageant activement le remplacement des chaudières fossiles par des pompes à chaleur via des campagnes d'information et un guichet énergie communal."
    },
    housing: { dominantType: "maisons Art Nouveau en bande, appartements en immeubles divisés", avgConstructionEra: "1900–1935", pctMaisons: 35, pctMazout: 20, pctGaz: 65, avgPEB: "E-F" },
    pricing: { airEauMin: 9500, airEauMax: 16500, airAirMin: 3200, airAirMax: 6800, geoMin: 19000, geoMax: 33000, mainOeuvre: "3 200 € à 5 200 €" },
    links: { mairie: "https://www.1030.be", mairieLabel: "Commune de Schaerbeek", guichetEnergie: "https://www.homegrade.brussels", guichetEnergieNom: "Homegrade.brussels", primeRegionale: "https://www.renolution.brussels" },
    faqs: [
      { q: "Combien coûte une PAC dans une maison Art Nouveau à Schaerbeek ?", a: "Dans une maison Art Nouveau schaerbeekoise de 150 à 200 m², comptez entre 12 000 € et 16 500 € pour une PAC air/eau installée. Les hauts plafonds nécessitent un dimensionnement supérieur (10 à 14 kW) pour assurer un confort optimal." },
      { q: "Mon jardin à Schaerbeek est-il assez grand pour une PAC ?", a: "Les jardins arrière typiques de Schaerbeek (3 à 5 m de large sur 10 à 15 m de long) sont parfaitement adaptés. L'unité extérieure ne nécessite qu'environ 1 m² au sol et 50 cm de dégagement. Certains installateurs optent pour un positionnement en toiture plate." },
      { q: "Quelles aides pour remplacer ma chaudière au mazout à Schaerbeek ?", a: "En cumulant la Prime Énergie Rénolution (jusqu'à 4 500 €), la réduction d'impôt fédérale et la prime de votre fournisseur d'énergie (Engie, Luminus), vous pouvez réduire le coût de votre PAC de 5 000 € à 7 000 €. La commune de Schaerbeek propose également un accompagnement gratuit." },
      { q: "PAC air/eau ou air/air pour un appartement à Schaerbeek ?", a: "Pour un appartement schaerbeekois avec radiateurs existants, la PAC air/eau est idéale car elle se raccorde au réseau hydraulique. Pour un studio ou un appartement sans radiateurs, la PAC air/air réversible (3 200 € à 6 800 €) offre chauffage et climatisation." },
      { q: "Quel installateur PAC certifié choisir à Schaerbeek ?", a: "Privilégiez un installateur certifié RESCert actif dans la zone Bruxelles-Nord (Schaerbeek, Evere, Saint-Josse). La certification garantit un travail conforme et l'accès aux primes. Notre comparateur vous met en relation avec 3 installateurs vérifiés." }
    ],
    localFact: "Schaerbeek abrite l'un des plus grands parcs de maisons Art Nouveau d'Europe, un patrimoine architectural qui bénéficie pleinement des solutions de chauffage modernes à basse température comme la PAC."
  },
  {
    slug: "anderlecht-1070",
    editorial: {
      contexteParagraph: "Troisième commune bruxelloise par sa population, Anderlecht s'étend sur un territoire vaste et contrasté : du quartier populaire de Cureghem aux zones résidentielles verdoyantes de Neerpede, en passant par le centre historique autour de la Collégiale Saints-Pierre-et-Guidon. Cette diversité urbaine se traduit par des besoins très variés en matière de chauffage, allant des PAC compactes pour les logements sociaux rénovés aux systèmes haute puissance pour les villas de la périphérie sud.",
      patrimoineParagraph: "Le parc immobilier anderlechtois est un mélange de maisons ouvrières en briques rouges du début du XXe siècle, d'immeubles d'après-guerre dans les quartiers centraux et de constructions résidentielles plus récentes vers Neerpede et le Westland Shopping. Environ 30 % sont des maisons individuelles ou en bande, avec des superficies moyennes de 100 à 140 m². Le certificat PEB moyen en classe E reflète le vieillissement du bâti et la nécessité d'actions de rénovation énergétique.",
      energieParagraph: "Anderlecht présente un profil énergétique mixte : le gaz naturel domine (62 %) mais le mazout reste présent dans 18 % des logements, notamment dans les anciennes cités-jardins. La commune investit dans la rénovation de son parc de logements sociaux et encourage les propriétaires privés à solliciter les primes Rénolution pour installer des pompes à chaleur, contribuant ainsi à l'objectif de réduction de 40 % des émissions de CO₂ d'ici 2030."
    },
    housing: { dominantType: "maisons ouvrières en briques, immeubles d'après-guerre", avgConstructionEra: "1920–1960", pctMaisons: 30, pctMazout: 18, pctGaz: 62, avgPEB: "E" },
    pricing: { airEauMin: 9000, airEauMax: 15500, airAirMin: 3000, airAirMax: 6500, geoMin: 18000, geoMax: 32000, mainOeuvre: "3 000 € à 5 000 €" },
    links: { mairie: "https://www.anderlecht.be", mairieLabel: "Commune d'Anderlecht", guichetEnergie: "https://www.homegrade.brussels", guichetEnergieNom: "Homegrade.brussels", primeRegionale: "https://www.renolution.brussels" },
    faqs: [
      { q: "Quel budget PAC pour une maison ouvrière à Anderlecht ?", a: "Pour une maison ouvrière typique d'Anderlecht (100-120 m², briques, 2 étages), prévoyez 9 000 € à 13 000 € pour une PAC air/eau de 8 à 10 kW. Les maisons mitoyennes bénéficient d'une moindre déperdition thermique grâce aux murs partagés." },
      { q: "Y a-t-il des installateurs PAC spécialisés à Anderlecht ?", a: "Oui, plusieurs entreprises certifiées RESCert opèrent dans la zone Anderlecht-Molenbeek-Forest. Notre plateforme vous connecte avec les installateurs les mieux notés, capables d'intervenir sous 2 à 3 semaines pour une visite technique gratuite." },
      { q: "Quelles primes pour une PAC dans un logement social à Anderlecht ?", a: "Les locataires sociaux ne sont pas éligibles directement, mais les sociétés de logement social d'Anderlecht bénéficient de financements régionaux spécifiques. Les propriétaires privés à revenus modestes profitent de primes majorées via Rénolution (jusqu'à 70 % du coût)." },
      { q: "PAC et copropriété à Anderlecht : comment procéder ?", a: "L'installation d'une PAC individuelle en copropriété nécessite l'accord de l'assemblée générale pour l'unité extérieure. En alternative, une PAC collective pour l'immeuble peut être envisagée avec un financement partagé et des aides majorées de la Région bruxelloise." },
      { q: "Quel délai d'installation pour une PAC à Anderlecht ?", a: "Entre la visite technique et la mise en service, comptez 3 à 6 semaines à Anderlecht. La dépose d'une ancienne chaudière au mazout avec évacuation de la cuve ajoute 1 jour et coûte environ 500 € à 900 € supplémentaires." }
    ],
    localFact: "Anderlecht accueille le Westland Shopping Center et le stade Lotto Park, deux sites dont les systèmes de chauffage et climatisation fonctionnent déjà en partie par pompe à chaleur, témoignant de la maturité de cette technologie dans la commune."
  },
  {
    slug: "molenbeek-saint-jean-1080",
    editorial: {
      contexteParagraph: "Commune en pleine mutation urbaine, Molenbeek-Saint-Jean connaît une vague de rénovation sans précédent portée par le contrat de quartier durable et les investissements publics dans le quartier Maritime. Le canal de Bruxelles traverse la commune du nord au sud, délimitant un tissu industriel reconverti en logements et un habitat résidentiel dense. L'installation de pompes à chaleur accompagne cette dynamique de renouveau, permettant aux propriétaires de moderniser des bâtiments souvent centenaires.",
      patrimoineParagraph: "Le bâti molenbeekois se compose principalement de maisons ouvrières mitoyennes en briques (1880-1920) dans le bas de la commune, et de maisons bourgeoises plus spacieuses vers le Karreveld et le Scheutbos. Avec 25 % de maisons individuelles et un PEB moyen en classe F, le potentiel de rénovation thermique est considérable. Les caves hautes et les cours intérieures typiques facilitent le positionnement des unités extérieures de PAC.",
      energieParagraph: "Molenbeek affiche un profil énergétique marqué par la précarité : 60 % de chauffage au gaz, 22 % au mazout. La commune fait partie des zones prioritaires du programme Rénolution avec des primes majorées pour les ménages à faibles revenus. Le remplacement des vieilles chaudières atmosphériques au gaz par des PAC air/eau modernes peut diviser la facture énergétique par deux."
    },
    housing: { dominantType: "maisons ouvrières mitoyennes, immeubles de rapport", avgConstructionEra: "1880–1920", pctMaisons: 25, pctMazout: 22, pctGaz: 60, avgPEB: "F" },
    pricing: { airEauMin: 8500, airEauMax: 15000, airAirMin: 2800, airAirMax: 6200, geoMin: 17000, geoMax: 30000, mainOeuvre: "2 800 € à 4 800 €" },
    links: { mairie: "https://www.molenbeek.irisnet.be", mairieLabel: "Commune de Molenbeek-Saint-Jean", guichetEnergie: "https://www.homegrade.brussels", guichetEnergieNom: "Homegrade.brussels", primeRegionale: "https://www.renolution.brussels" },
    faqs: [
      { q: "Quel coût pour une PAC dans une maison ouvrière à Molenbeek ?", a: "Une maison ouvrière mitoyenne de 80-110 m² à Molenbeek nécessite une PAC air/eau de 6 à 9 kW, pour un budget de 8 500 € à 13 000 € pose comprise. La mitoyenneté réduit les déperditions thermiques et donc la puissance nécessaire." },
      { q: "Les primes sont-elles majorées à Molenbeek ?", a: "Oui, Molenbeek fait partie des communes bruxelloises où les ménages à revenus modestes bénéficient de primes Rénolution majorées pouvant couvrir jusqu'à 70 % du coût d'une PAC. Contactez Homegrade.brussels pour une simulation personnalisée." },
      { q: "Peut-on installer une PAC dans le quartier Maritime à Molenbeek ?", a: "Absolument. Les nouveaux logements et les lofts reconvertis du quartier Maritime sont idéaux pour les PAC air/eau ou air/air. Les constructions récentes avec bonne isolation permettent de choisir des modèles compacts et économiques." },
      { q: "Quel est le retour sur investissement d'une PAC à Molenbeek ?", a: "Avec les primes Rénolution et la réduction d'impôt fédérale, le reste à charge pour une PAC à Molenbeek se situe entre 4 000 € et 9 000 €. Les économies annuelles de 800 € à 1 200 € permettent un retour sur investissement en 4 à 7 ans." },
      { q: "Comment choisir entre PAC air/eau et air/air à Molenbeek ?", a: "Si votre logement molenbeekois dispose de radiateurs ou d'un plancher chauffant, la PAC air/eau est le choix optimal. Pour un appartement sans réseau hydraulique, la PAC air/air multisplit offre chauffage et climatisation à moindre coût (2 800 € à 6 200 €)." }
    ],
    localFact: "Le quartier Maritime de Molenbeek est l'un des plus grands chantiers de rénovation urbaine durable de Bruxelles, intégrant systématiquement les pompes à chaleur dans les nouveaux complexes résidentiels."
  },
  {
    slug: "ixelles-1050",
    editorial: {
      contexteParagraph: "Ixelles incarne la diversité architecturale bruxelloise : des maisons Art Nouveau du quartier des Étangs aux résidences cossues de l'avenue Louise, en passant par le quartier Flagey et le campus de l'ULB. Commune prisée pour sa qualité de vie et son dynamisme culturel, Ixelles attire une population de propriétaires soucieux de valoriser leur bien tout en réduisant leur empreinte carbone. L'installation d'une PAC air/eau est un investissement pertinent dans ce marché immobilier haut de gamme.",
      patrimoineParagraph: "Le patrimoine ixellois compte plus de 900 immeubles classés ou inscrits sur la liste de sauvegarde. Les maisons de maître de 180 à 250 m² dominent dans les quartiers résidentiels, avec des façades en pierre bleue et des intérieurs aux moulures préservées. Le parc immobilier, construit entre 1880 et 1940, affiche un PEB moyen en classe D-E grâce à des rénovations plus fréquentes que la moyenne bruxelloise. Les jardins arrière et les toitures plates offrent des emplacements idéaux pour les groupes extérieurs.",
      energieParagraph: "Ixelles est majoritairement chauffée au gaz naturel (70 %) avec seulement 12 % de mazout. La commune est pionnière en matière de transition énergétique à Bruxelles, avec un réseau de chaleur en projet autour du campus de l'ULB. Les propriétaires ixellois investissent massivement dans les PAC, dopés par la valorisation immobilière qu'apporte un bon certificat PEB dans ce quartier premium."
    },
    housing: { dominantType: "maisons de maître Art Nouveau, résidences bourgeoises", avgConstructionEra: "1880–1940", pctMaisons: 32, pctMazout: 12, pctGaz: 70, avgPEB: "D-E" },
    pricing: { airEauMin: 11000, airEauMax: 18000, airAirMin: 3500, airAirMax: 7200, geoMin: 22000, geoMax: 38000, mainOeuvre: "3 800 € à 6 000 €" },
    links: { mairie: "https://www.ixelles.be", mairieLabel: "Commune d'Ixelles", guichetEnergie: "https://www.homegrade.brussels", guichetEnergieNom: "Homegrade.brussels", primeRegionale: "https://www.renolution.brussels" },
    faqs: [
      { q: "Combien coûte une PAC pour une maison de maître à Ixelles ?", a: "Les maisons de maître ixelloises (180-250 m²) nécessitent des PAC air/eau de 12 à 16 kW, pour un budget de 13 000 € à 18 000 €. L'investissement est rapidement amorti par la valorisation immobilière : un gain d'une classe PEB augmente la valeur du bien de 3 à 5 % à Ixelles." },
      { q: "Installation PAC et patrimoine classé à Ixelles : est-ce compatible ?", a: "Oui, à condition de respecter les prescriptions de la Direction des Monuments. Les unités extérieures doivent être invisibles depuis la voie publique. Les installateurs spécialisés en patrimoine proposent des solutions discrètes en cour intérieure ou en toiture." },
      { q: "Quel type de PAC pour un appartement avenue Louise ?", a: "Pour les grands appartements de l'avenue Louise (120-180 m²), une PAC air/eau split connectée aux radiateurs existants est optimale. Le coût varie de 11 000 € à 15 000 €, avec un COP moyen de 4,2 qui garantit des performances élevées." },
      { q: "Y a-t-il des installateurs PAC spécialisés en Art Nouveau à Ixelles ?", a: "Plusieurs installateurs certifiés RESCert à Bruxelles se sont spécialisés dans la rénovation énergétique du patrimoine Art Nouveau. Ils maîtrisent les contraintes des façades classées, des planchers moulurés et des hauteurs sous plafond de 3,5 m." },
      { q: "Quel impact de la PAC sur le PEB d'une maison ixelloise ?", a: "Le remplacement d'une chaudière gaz par une PAC air/eau fait généralement gagner 1 à 2 classes PEB. À Ixelles, passer de E à C sur un bien de 200 m² peut représenter un gain de valeur de 15 000 € à 25 000 €, bien supérieur au coût de l'installation." }
    ],
    localFact: "Le quartier des Étangs d'Ixelles concentre la plus forte densité de maisons Art Nouveau de Bruxelles, un patrimoine exceptionnel qui se prête idéalement aux rénovations énergétiques avec pompe à chaleur à basse température."
  },
  {
    slug: "uccle-1180",
    editorial: {
      contexteParagraph: "Commune résidentielle par excellence au sud de Bruxelles, Uccle séduit par ses quartiers verdoyants du Vivier d'Oie, Fort Jaco et Observatoire. Avec ses vastes propriétés entourées de jardins, Uccle offre les conditions idéales pour l'installation de pompes à chaleur : espace disponible pour les unités extérieures, terrains adaptés à la géothermie et maisons individuelles de grande superficie. Le niveau de vie élevé des habitants ucclois se traduit par des investissements fréquents en rénovation énergétique premium.",
      patrimoineParagraph: "Uccle compte 45 % de maisons individuelles, un record en Région bruxelloise. Les villas des années 1930-1960, souvent de 200 à 350 m², disposent de sous-sols aménageables et de jardins de 300 à 800 m². Ce cadre est particulièrement propice aux PAC géothermiques à capteurs horizontaux, dont le rendement annuel dépasse celui des systèmes aérothermiques. Le PEB moyen en classe D reflète des rénovations régulières mais un bâti ancien encore énergivore.",
      energieParagraph: "Le profil énergétique ucclois est mixte : 55 % au gaz, 25 % au mazout. Les grandes villas chauffées au mazout avec des cuves de 3 000 à 5 000 litres représentent le cas d'usage le plus rentable pour la transition vers la PAC. La suppression de la cuve mazout libère de l'espace et élimine les risques de pollution du sol, un enjeu important dans cette commune aux jardins arborés."
    },
    housing: { dominantType: "villas individuelles, maisons quatre façades", avgConstructionEra: "1930–1960", pctMaisons: 45, pctMazout: 25, pctGaz: 55, avgPEB: "D" },
    pricing: { airEauMin: 12000, airEauMax: 19000, airAirMin: 3800, airAirMax: 7500, geoMin: 22000, geoMax: 40000, mainOeuvre: "4 000 € à 6 500 €" },
    links: { mairie: "https://www.uccle.be", mairieLabel: "Commune d'Uccle", guichetEnergie: "https://www.homegrade.brussels", guichetEnergieNom: "Homegrade.brussels", primeRegionale: "https://www.renolution.brussels" },
    faqs: [
      { q: "La géothermie est-elle rentable pour une villa à Uccle ?", a: "Avec un jardin de plus de 300 m², la PAC géothermique à capteurs horizontaux est très performante à Uccle. Le surcoût initial (22 000-40 000 €) est compensé par un COP supérieur (4,5-5) et des économies annuelles de 2 000 € à 3 000 € par rapport au mazout." },
      { q: "Combien coûte le remplacement d'une chaudière mazout par une PAC à Uccle ?", a: "Le budget total à Uccle pour la dépose de la cuve mazout (500-1 200 €), l'installation de la PAC air/eau (12 000-19 000 €) et l'adaptation du circuit hydraulique se situe entre 14 000 € et 22 000 €, avant déduction des primes de 4 500 € à 6 500 €." },
      { q: "Faut-il un permis pour une PAC à Uccle ?", a: "En zone résidentielle uccloise, l'unité extérieure d'une PAC air/eau ne nécessite généralement pas de permis si elle respecte les distances réglementaires avec les limites de propriété (3 m minimum). Consultez le service urbanisme d'Uccle pour les zones classées." },
      { q: "Quelle marque de PAC privilégier pour une grande villa à Uccle ?", a: "Pour les villas de plus de 200 m², les marques Daikin Altherma 3, Vaillant aroTHERM plus et Mitsubishi Ecodan sont les plus installées à Uccle. Elles offrent des puissances de 14 à 16 kW et des COP élevés adaptés aux volumes importants." },
      { q: "La PAC peut-elle aussi produire l'eau chaude sanitaire à Uccle ?", a: "Oui, les PAC air/eau modernes produisent le chauffage ET l'eau chaude sanitaire via un ballon intégré de 180 à 300 litres. Pour une famille de 4 à 5 personnes dans une villa uccloise, un ballon de 250 litres est recommandé." }
    ],
    localFact: "Uccle est la commune bruxelloise qui compte le plus de maisons individuelles avec jardin, offrant des conditions optimales pour l'installation de pompes à chaleur géothermiques à capteurs horizontaux."
  },
  {
    slug: "etterbeek-1040",
    editorial: {
      contexteParagraph: "Nichée entre le Cinquantenaire et les institutions européennes, Etterbeek est une commune compacte de 48 000 habitants qui allie quartiers résidentiels calmes et dynamisme urbain. Les rues bordées de maisons bourgeoises du quartier de la Chasse et les immeubles du quartier européen offrent un cadre propice à la modernisation des systèmes de chauffage. La proximité des centres décisionnels européens a dopé la rénovation du bâti, faisant d'Etterbeek un territoire avancé en matière de transition énergétique.",
      patrimoineParagraph: "Les habitations etterbeekois sont majoritairement des maisons en bande de 120 à 180 m² (35 % du parc) et des appartements dans des immeubles de 3 à 5 étages. L'architecture des années 1900-1930 prédomine avec des façades en briques claires et des intérieurs à boiseries. Les espaces restreints en zone dense imposent des PAC split compactes, mais les jardins arrière communs à la plupart des maisons permettent l'installation d'unités extérieures discrètes.",
      energieParagraph: "Etterbeek est raccordée à 72 % au gaz naturel, avec seulement 10 % de mazout résiduel. La commune mène une politique incitative active en matière de rénovation énergétique, avec un point info-énergie permanent à la Maison communale. Le remplacement des chaudières gaz vieillissantes par des PAC air/eau haute température constitue l'axe principal de décarbonation du chauffage résidentiel."
    },
    housing: { dominantType: "maisons bourgeoises en bande, appartements quartier européen", avgConstructionEra: "1900–1930", pctMaisons: 35, pctMazout: 10, pctGaz: 72, avgPEB: "D-E" },
    pricing: { airEauMin: 10000, airEauMax: 17000, airAirMin: 3300, airAirMax: 7000, geoMin: 20000, geoMax: 35000, mainOeuvre: "3 500 € à 5 500 €" },
    links: { mairie: "https://www.etterbeek.be", mairieLabel: "Commune d'Etterbeek", guichetEnergie: "https://www.homegrade.brussels", guichetEnergieNom: "Homegrade.brussels", primeRegionale: "https://www.renolution.brussels" },
    faqs: [
      { q: "Quel prix pour installer une PAC à Etterbeek ?", a: "Le prix d'une PAC air/eau à Etterbeek (1040) varie de 10 000 € à 17 000 € selon la puissance et la complexité. Les maisons du quartier de la Chasse, spacieuses et bien desservies, se prêtent particulièrement aux systèmes moyenne température." },
      { q: "Comment financer sa PAC à Etterbeek ?", a: "Combinez la Prime Rénolution (jusqu'à 4 500 €), la réduction d'impôt fédérale (jusqu'à 40 %), et les primes fournisseur (Engie, Luminus : 200-800 €). Un ménage etterbeekois peut ainsi réduire son investissement de 5 000 € à 7 000 €." },
      { q: "Les nuisances sonores d'une PAC posent-elles problème à Etterbeek ?", a: "Les PAC modernes émettent 35 à 45 dB en fonctionnement, comparable à une conversation à voix basse. À Etterbeek, la réglementation bruxelloise impose un seuil de 30 dB en limite de propriété la nuit. Les modèles récents (Daikin, Vaillant) respectent cette norme." },
      { q: "PAC et quartier européen à Etterbeek : quelles spécificités ?", a: "Les immeubles de bureaux reconvertis en logements dans le quartier européen disposent souvent de systèmes centralisés. Une PAC individuelle air/eau est possible si l'immeuble dispose d'un accès toiture ou cour. La solution air/air est une alternative pour les appartements." },
      { q: "Quel installateur PAC recommandé à Etterbeek ?", a: "Les installateurs certifiés RESCert de la zone Etterbeek-Ixelles-Woluwe sont les plus expérimentés pour le bâti du quartier européen. Notre comparateur propose 3 devis gratuits d'artisans vérifiés intervenant sous 15 jours." }
    ],
    localFact: "Etterbeek abrite le Parc du Cinquantenaire et le quartier européen, un pôle où les normes de performance énergétique des bâtiments sont parmi les plus exigeantes de Belgique."
  },
  {
    slug: "forest-1190",
    editorial: {
      contexteParagraph: "Commune au charme discret coincée entre Uccle, Saint-Gilles et Anderlecht, Forest combine quartiers ouvriers historiques autour de la gare du Midi et zones résidentielles verdoyantes vers l'Altitude Cent et le parc de Forest. La diversité socio-économique de la commune se reflète dans son parc immobilier hétérogène, offrant des opportunités variées pour l'installation de pompes à chaleur, des petites maisons mitoyennes aux villas du haut de la commune.",
      patrimoineParagraph: "Forest compte 30 % de maisons individuelles, principalement concentrées dans le haut de la commune. Le patrimoine bâti date des années 1890-1940, avec les typiques maisons bruxelloises à deux ou trois étages, cave haute et jardin arrière. Le bas de Forest, plus populaire, présente des logements souvent en attente de rénovation profonde avec un PEB en classe E-F, tandis que le haut bénéficie de rénovations plus fréquentes.",
      energieParagraph: "Forest présente un mix énergétique de 60 % au gaz naturel et 20 % au mazout. Le contrat de rénovation urbaine en cours autour de la gare du Midi inclut un volet transition énergétique ambitieux avec des objectifs de remplacement de 500 chaudières fossiles par des PAC d'ici 2030. Les primes Rénolution majorées dans les zones de rénovation urbaine rendent l'investissement particulièrement attractif."
    },
    housing: { dominantType: "maisons bruxelloises mitoyennes, petites villas", avgConstructionEra: "1890–1940", pctMaisons: 30, pctMazout: 20, pctGaz: 60, avgPEB: "E" },
    pricing: { airEauMin: 9000, airEauMax: 15500, airAirMin: 3000, airAirMax: 6500, geoMin: 18000, geoMax: 32000, mainOeuvre: "3 000 € à 5 000 €" },
    links: { mairie: "https://www.forest.brussels", mairieLabel: "Commune de Forest", guichetEnergie: "https://www.homegrade.brussels", guichetEnergieNom: "Homegrade.brussels", primeRegionale: "https://www.renolution.brussels" },
    faqs: [
      { q: "Combien coûte une PAC air/eau à Forest ?", a: "À Forest (1190), une PAC air/eau installée coûte entre 9 000 € et 15 500 €. Les maisons mitoyennes du bas de Forest nécessitent des puissances moindres (6-9 kW) grâce à la mitoyenneté, tandis que les villas de l'Altitude Cent requièrent 10-14 kW." },
      { q: "Quelles primes pour une PAC en zone de rénovation urbaine à Forest ?", a: "Les propriétaires dans le périmètre du contrat de rénovation urbaine de Forest bénéficient de primes Rénolution majorées. Le cumul des aides peut couvrir 50 à 70 % du coût d'installation d'une PAC pour les ménages à revenus modestes." },
      { q: "Peut-on installer une PAC dans une petite cour à Forest ?", a: "Les cours intérieures des maisons forestoises (2-3 m de largeur) suffisent pour un groupe extérieur de PAC. L'unité nécessite 80 cm × 40 cm au sol. Les installateurs certifiés proposent également le montage mural pour gagner de l'espace." },
      { q: "Quelle économie en remplaçant le gaz par une PAC à Forest ?", a: "Un ménage forestois chauffant au gaz une maison de 120 m² économise 700 € à 1 200 € par an avec une PAC air/eau (COP 4). Le retour sur investissement, primes déduites, se fait en 5 à 7 ans." },
      { q: "Faut-il isoler avant d'installer une PAC à Forest ?", a: "L'isolation du toit est prioritaire avant l'installation d'une PAC, car elle réduit les besoins en puissance et optimise les performances. À Forest, le programme Rénolution permet de combiner prime isolation (toiture, murs) et prime PAC dans un même dossier." }
    ],
    localFact: "Le contrat de rénovation urbaine de Forest-Saint-Gilles autour de la gare du Midi est le plus grand projet de transition énergétique résidentielle de la Région bruxelloise."
  },
  {
    slug: "jette-1090",
    editorial: {
      contexteParagraph: "Commune résidentielle du nord-ouest de Bruxelles, Jette est connue pour son atmosphère villageoise autour de la place Reine Astrid et ses quartiers familiaux bordés de maisons à jardins. Avec une population de 52 500 habitants et un tissu urbain aéré, Jette offre des conditions favorables à l'installation de pompes à chaleur aérothermiques. L'hôpital universitaire Brugmann et le parc de la Jeunesse contribuent à l'identité verte de cette commune en pleine modernisation énergétique.",
      patrimoineParagraph: "Le parc immobilier jettois est dominé par les maisons individuelles et en bande des années 1920-1950, représentant 40 % des logements. Les constructions en briques rouges avec jardins arrière de 50 à 150 m² sont idéales pour les installations aérothermiques. Le quartier du Miroir et les abords de l'avenue de Jette présentent un bâti plus ancien nécessitant une attention particulière au dimensionnement thermique.",
      energieParagraph: "Jette se chauffe à 63 % au gaz naturel et 18 % au mazout. La commune a été pionnière dans la sensibilisation aux économies d'énergie avec son service environnement actif. Les maisons des années 1930-1950, souvent dotées de chaudières atmosphériques vieillissantes, constituent le parc prioritaire pour le remplacement par des PAC air/eau modernes."
    },
    housing: { dominantType: "maisons en bande avec jardins, pavillons résidentiels", avgConstructionEra: "1920–1950", pctMaisons: 40, pctMazout: 18, pctGaz: 63, avgPEB: "E" },
    pricing: { airEauMin: 9500, airEauMax: 16000, airAirMin: 3200, airAirMax: 6800, geoMin: 19000, geoMax: 33000, mainOeuvre: "3 200 € à 5 200 €" },
    links: { mairie: "https://www.jette.irisnet.be", mairieLabel: "Commune de Jette", guichetEnergie: "https://www.homegrade.brussels", guichetEnergieNom: "Homegrade.brussels", primeRegionale: "https://www.renolution.brussels" },
    faqs: [
      { q: "Quel budget pour une PAC dans une maison jettoise ?", a: "Une maison typique de Jette (110-150 m², années 1930) nécessite une PAC air/eau de 8 à 12 kW, pour un budget de 9 500 € à 14 000 €. Les jardins arrière spacieux facilitent le positionnement de l'unité extérieure." },
      { q: "Quelles aides financières pour installer une PAC à Jette ?", a: "Les Jettois bénéficient des Primes Énergie Rénolution (jusqu'à 4 500 €), de la réduction d'impôt fédérale et des primes fournisseurs. Le cumul peut atteindre 6 000 € à 7 000 € de réduction sur le coût total de l'installation." },
      { q: "Mon jardin à Jette est-il adapté pour une PAC ?", a: "Les jardins arrière typiques de Jette (50-150 m²) sont parfaitement adaptés. L'unité extérieure doit être placée à 3 m minimum des limites de propriété pour respecter les normes acoustiques bruxelloises. Un installateur certifié effectuera une étude d'implantation gratuite." },
      { q: "PAC air/eau ou hybride pour une maison à Jette ?", a: "Pour les maisons jettoises avec radiateurs haute température, une PAC hybride (PAC + chaudière gaz d'appoint) peut être pertinente en phase transitoire. Cependant, avec une isolation correcte, la PAC air/eau seule suffit dans 80 % des cas." },
      { q: "Quel délai pour installer une PAC à Jette ?", a: "De la visite technique à la mise en service, comptez 4 à 6 semaines à Jette. La période creuse (avril-septembre) offre souvent des délais plus courts et des tarifs de main-d'œuvre plus compétitifs." }
    ],
    localFact: "Jette accueille le musée Magritte (maison natale) et l'hôpital Brugmann, deux institutions emblématiques qui illustrent le caractère résidentiel et culturel de cette commune propice aux rénovations énergétiques."
  },
  {
    slug: "saint-gilles-1060",
    editorial: {
      contexteParagraph: "Commune bruxelloise la plus densément peuplée après Saint-Josse, Saint-Gilles étonne par la richesse de son patrimoine Art Nouveau concentré autour de la Barrière et du Parvis. Les maisons de Victor Horta, les façades sgraffitées et les hôtels particuliers font de Saint-Gilles un musée architectural à ciel ouvert. La transition énergétique y impose des solutions techniques respectueuses du bâti historique, où la pompe à chaleur air/eau discrète s'impose comme la meilleure alternative aux chaudières au gaz centenaires.",
      patrimoineParagraph: "Le bâti saint-gillois est parmi les plus homogènes de Bruxelles : 80 % de maisons mitoyennes de style éclectique ou Art Nouveau, construites entre 1885 et 1910. Les superficies varient de 120 à 200 m² sur 3 à 4 niveaux. Les caves voûtées profondes accueillent les modules hydrauliques tandis que les petits jardins ou cours arrière reçoivent l'unité extérieure. Le PEB moyen en classe E-F témoigne d'un parc ancien mais la dynamique de rénovation est forte.",
      energieParagraph: "Saint-Gilles est chauffée à 69 % au gaz et 14 % au mazout. Les chaudières individuelles au gaz, souvent installées dans les caves étroites, arrivent en fin de vie pour beaucoup de logements construits au début du XXe siècle. Le remplacement par une PAC air/eau constitue un gain énergétique majeur, d'autant que les murs mitoyens épais de Saint-Gilles limitent les déperditions latérales."
    },
    housing: { dominantType: "maisons Art Nouveau mitoyennes, immeubles éclectiques", avgConstructionEra: "1885–1910", pctMaisons: 28, pctMazout: 14, pctGaz: 69, avgPEB: "E-F" },
    pricing: { airEauMin: 9500, airEauMax: 16500, airAirMin: 3200, airAirMax: 6800, geoMin: 19000, geoMax: 34000, mainOeuvre: "3 500 € à 5 500 €" },
    links: { mairie: "https://www.stgilles.brussels", mairieLabel: "Commune de Saint-Gilles", guichetEnergie: "https://www.homegrade.brussels", guichetEnergieNom: "Homegrade.brussels", primeRegionale: "https://www.renolution.brussels" },
    faqs: [
      { q: "PAC et Art Nouveau à Saint-Gilles : quelles contraintes ?", a: "L'installation d'une PAC dans une maison Art Nouveau saint-gilloise impose que l'unité extérieure soit invisible depuis la rue. Les cours arrière et les toitures plates sont les emplacements privilégiés. Les installateurs spécialisés patrimoine maîtrisent ces contraintes." },
      { q: "Quel coût pour une PAC dans une maison du Parvis ?", a: "Les maisons du quartier du Parvis de Saint-Gilles (140-200 m², 3-4 niveaux) nécessitent une PAC de 10-14 kW. Le budget moyen est de 11 000 € à 16 500 €, incluant l'adaptation du réseau radiateurs existant." },
      { q: "Les primes couvrent-elles une PAC à Saint-Gilles ?", a: "Oui, les Primes Rénolution sont applicables à Saint-Gilles. Un ménage à revenus moyens peut obtenir jusqu'à 4 500 € de prime + réduction d'impôt fédérale. Les revenus modestes bénéficient de taux majorés couvrant jusqu'à 70 % du coût." },
      { q: "Comment réduire le bruit d'une PAC dans une rue étroite à Saint-Gilles ?", a: "Les rues étroites de Saint-Gilles impose un niveau sonore strict. Les PAC récentes (35-40 dB) avec mode silencieux nocturne respectent la norme bruxelloise de 30 dB en limite de propriété. Le positionnement en cour intérieure atténue encore le bruit." },
      { q: "Saint-Gilles : PAC air/eau basse ou haute température ?", a: "Les radiateurs en fonte des maisons Art Nouveau saint-gilloises fonctionnent à haute température (65-75°C). Une PAC haute température (jusqu'à 70°C) comme la Daikin Altherma 3 H HT permet de conserver les radiateurs existants sans travaux supplémentaires." }
    ],
    localFact: "Saint-Gilles abrite la maison personnelle de Victor Horta, chef-d'œuvre de l'Art Nouveau classé au patrimoine mondial de l'UNESCO, symbole d'un quartier où innovation architecturale et transition énergétique se conjuguent naturellement."
  }
];

// ---------------------------------------------------------------------------
// WALLONIE — GRANDES VILLES (contenu éditorial rédactionnel)
// ---------------------------------------------------------------------------

const WALLONIE_MAJOR_CONTENT: CityContent[] = [
  {
    slug: "charleroi-6000",
    editorial: {
      contexteParagraph: "Métropole industrielle en pleine reconversion, Charleroi est le cœur battant du Pays Noir wallon. La huitième ville de Belgique par sa population (plus de 200 000 hab.) connaît une transformation urbaine spectaculaire, portée par le Phénix — plan de rénovation du centre-ville — et les investissements dans l'aéropole de Gosselies. Cette dynamique touche aussi le parc résidentiel : des milliers de maisons ouvrières chauffées au mazout sont candidates à la transition vers la pompe à chaleur, portée par des primes wallonnes particulièrement avantageuses.",
      patrimoineParagraph: "Le parc immobilier carolorégien est dominé par les maisons ouvrières en briques rouges du bassin houiller, construites entre 1880 et 1950 pour les familles de mineurs. Ces habitations de 80 à 130 m² sur 2 niveaux, avec cave et petit jardin, représentent 65 % du bâti. Les quartiers de Marchienne-au-Pont, Jumet et Gilly comptent parmi les plus grands bassins de maisons à rénover en Belgique. Le PEB moyen en classe F reflète un retard d'investissement qui rend la transition PAC d'autant plus impactante.",
      energieParagraph: "Charleroi reste la ville wallonne où la dépendance au mazout est la plus critique : 55 % des logements s'y chauffent encore au fuel domestique, contre 25 % au gaz. La hausse continue des prix du mazout favorise un exode massif vers la PAC air/eau, d'autant que la topographie plate du bassin carolorégien optimise les performances des unités aérothermiques. Le Guichet Énergie de Charleroi-Thuin accompagne gratuitement les propriétaires dans leurs démarches."
    },
    housing: { dominantType: "maisons ouvrières en briques rouges du bassin houiller", avgConstructionEra: "1880–1950", pctMaisons: 65, pctMazout: 55, pctGaz: 25, avgPEB: "F" },
    pricing: { airEauMin: 8000, airEauMax: 14000, airAirMin: 2500, airAirMax: 5500, geoMin: 16000, geoMax: 28000, mainOeuvre: "2 500 € à 4 200 €" },
    links: { mairie: "https://www.charleroi.be", mairieLabel: "Ville de Charleroi", guichetEnergie: "https://www.guichet-energie-wallonie.be", guichetEnergieNom: "Guichet Énergie Charleroi-Thuin", primeRegionale: "https://www.wallonie.be/fr/aides/aide/prime-habitation-durable" },
    faqs: [
      { q: "Quel prix pour une PAC dans une maison ouvrière à Charleroi ?", a: "Les maisons ouvrières carolorégiennes (80-130 m²) nécessitent une PAC air/eau de 6 à 10 kW. Le budget varie de 8 000 € à 12 000 € pose comprise. La mitoyenneté et les petites surfaces réduisent la puissance nécessaire et donc le coût." },
      { q: "Quelles primes wallonnes pour une PAC à Charleroi ?", a: "La Prime Habitation wallonne offre jusqu'à 6 000 € pour une PAC air/eau à Charleroi. Un Audit Logement préalable est requis (coût : 150-250 €). Le Rénopack propose un prêt à 0 % jusqu'à 60 000 € pour financer le reste. Ces aides sont cumulables avec la réduction d'impôt fédérale." },
      { q: "Remplacer le mazout par une PAC à Charleroi : combien ça économise ?", a: "Un ménage carolorégien chauffant au mazout une maison de 100 m² économise 1 500 € à 2 200 € par an en passant à une PAC air/eau. C'est l'économie la plus forte de Wallonie, car le mazout est le combustible le plus cher au kWh." },
      { q: "Quel installateur PAC certifié à Charleroi ?", a: "Le bassin de Charleroi compte plus de 15 installateurs certifiés RESCert. Privilégiez un artisan local habitué aux maisons ouvrières du Pays Noir. Notre comparateur propose 3 devis gratuits d'installateurs vérifiés dans la zone Charleroi-Thuin." },
      { q: "Faut-il un Audit Logement avant d'installer une PAC à Charleroi ?", a: "Oui, l'Audit Logement est obligatoire pour bénéficier de la Prime Habitation wallonne. Un auditeur agréé visite votre bien à Charleroi et établit un rapport avec les travaux prioritaires. La PAC fait partie des travaux éligibles. Coût : 150 à 250 €, partiellement remboursable." },
      { q: "PAC air/eau ou poêle à pellets à Charleroi ?", a: "La PAC air/eau est plus performante et confortable qu'un poêle à pellets. Elle chauffe toute la maison via les radiateurs existants et produit l'eau chaude sanitaire. À Charleroi, la PAC offre un meilleur retour sur investissement sur 15 ans, avec des primes plus élevées." }
    ],
    localFact: "Charleroi accueille le deuxième aéroport de Belgique (Brussels South Charleroi Airport), dont le terminal est intégralement chauffé et refroidi par un réseau de pompes à chaleur géothermiques, vitrine technologique pour la région."
  },
  {
    slug: "liege-4000",
    editorial: {
      contexteParagraph: "Cité ardente lovée dans la vallée de la Meuse, Liège est la troisième ville de Belgique et le pôle économique majeur de l'est wallon. Son relief escarpé — des coteaux de la Citadelle aux quais de la Meuse — crée des microclimats qui influencent le dimensionnement des pompes à chaleur. La gare de Liège-Guillemins, chef-d'œuvre de Calatrava, symbolise la modernité d'une ville qui embrasse la transition énergétique après des décennies de dépendance au charbon et au mazout.",
      patrimoineParagraph: "L'habitat liégeois est profondément marqué par son passé industriel : maisons en colombages dans le Carré historique, immeubles en briques et pierres calcaires dans les quartiers de Cointe et Angleur, cités ouvrières en béton dans les faubourgs de Seraing et Herstal. La topographie pentue impose des contraintes d'accès pour les installateurs mais offre souvent des jardins en terrasses adaptés aux unités extérieures. Le PEB moyen en classe E-F illustre un parc ancien en forte demande de rénovation.",
      energieParagraph: "La province de Liège est l'une des plus dépendantes au mazout en Belgique (52 % des logements). La ville de Liège elle-même affiche un mix plus diversifié avec 40 % mazout et 35 % gaz. Les crues de la Vesdre en 2021 ont accéléré la prise de conscience environnementale et les projets de rénovation énergétique, faisant de la transition vers la PAC un enjeu majeur de reconstruction résiliente dans les vallées liégeoises."
    },
    housing: { dominantType: "maisons en briques et pierre calcaire, immeubles de la vallée", avgConstructionEra: "1900–1960", pctMaisons: 50, pctMazout: 40, pctGaz: 35, avgPEB: "E-F" },
    pricing: { airEauMin: 8500, airEauMax: 15000, airAirMin: 2800, airAirMax: 6000, geoMin: 17000, geoMax: 30000, mainOeuvre: "2 800 € à 4 500 €" },
    links: { mairie: "https://www.liege.be", mairieLabel: "Ville de Liège", guichetEnergie: "https://www.guichet-energie-wallonie.be", guichetEnergieNom: "Guichet Énergie Liège", primeRegionale: "https://www.wallonie.be/fr/aides/aide/prime-habitation-durable" },
    faqs: [
      { q: "Quel budget PAC pour une maison liégeoise ?", a: "À Liège (4000), une PAC air/eau installée coûte de 8 500 € à 15 000 € selon la taille du logement. Les maisons des coteaux (Cointe, Laveu) nécessitent souvent 10-14 kW en raison de leur exposition au vent et de leurs volumes importants." },
      { q: "Les primes wallonnes sont-elles accessibles à Liège ?", a: "Oui, la Prime Habitation wallonne (jusqu'à 6 000 €) est pleinement accessible aux Liégeois. Le Guichet Énergie de Liège, situé en Féronstrée, propose un accompagnement gratuit pour monter votre dossier et trouver un auditeur agréé." },
      { q: "PAC et terrain en pente à Liège : c'est possible ?", a: "Les terrains en pente typiques de Liège (Citadelle, Cointe, Sart-Tilman) ne posent aucun problème technique. L'unité extérieure peut être posée sur une terrasse, un muret ou un support nivelé. Les installateurs liégeois maîtrisent ces configurations spécifiques." },
      { q: "Quelle PAC choisir pour un appartement en bord de Meuse ?", a: "Les immeubles des quais de la Meuse offrent souvent des balcons ou cours intérieures adaptés. Une PAC air/eau split compacte (Daikin, Mitsubishi) convient parfaitement. Pour les studios sans accès extérieur, la PAC air/air reste l'alternative." },
      { q: "Combien d'installateurs PAC certifiés à Liège ?", a: "La région liégeoise compte plus de 20 installateurs certifiés RESCert, le réseau le plus dense de Wallonie hors Brabant wallon. Leur proximité garantit des délais d'intervention courts et une connaissance fine du bâti local." }
    ],
    localFact: "Les inondations de la vallée de la Vesdre en 2021 ont déclenché la plus grande vague de remplacement de chaudières mazout par des pompes à chaleur jamais enregistrée en Wallonie, faisant de Liège un territoire pionnier de la transition thermique."
  },
  {
    slug: "namur-5000",
    editorial: {
      contexteParagraph: "Capitale de la Wallonie depuis 1986, Namur est une ville administrative et universitaire de 112 000 habitants nichée au confluent de la Sambre et de la Meuse. Son statut de capitale régionale en fait le siège du SPW Énergie — l'administration wallonne qui gère les primes habitation. Cette proximité institutionnelle profite directement aux Namurois qui bénéficient d'un accès privilégié à l'information et à l'accompagnement pour leurs projets de rénovation énergétique, y compris l'installation de pompes à chaleur.",
      patrimoineParagraph: "Le centre historique de Namur est constitué de maisons de maître en pierre calcaire de la vallée mosane, souvent classées, tandis que les faubourgs (Jambes, Saint-Servais, Salzinnes) offrent un habitat plus récent et diversifié avec des maisons quatre façades des années 1950-1970. Les communes périphériques comme Bouge et Lives-sur-Meuse comptent de nombreux pavillons résidentiels avec jardins, idéaux pour les installations PAC. Le PEB moyen namurois en classe E traduit un parc ancien mais régulièrement entretenu.",
      energieParagraph: "Namur se distingue par un mix énergétique wallon typique : 50 % au mazout, 28 % au gaz, et une part croissante de PAC (8 % des installations neuves). Le SPW Énergie, basé Place Léopold, pilote la stratégie wallonne de décarbonation du chauffage résidentiel, ce qui fait de Namur un laboratoire de la transition énergétique. Le Guichet Énergie namurois organise régulièrement des permanences gratuites pour les propriétaires."
    },
    housing: { dominantType: "maisons en pierre calcaire mosane, pavillons résidentiels", avgConstructionEra: "1900–1970", pctMaisons: 55, pctMazout: 50, pctGaz: 28, avgPEB: "E" },
    pricing: { airEauMin: 8500, airEauMax: 14500, airAirMin: 2800, airAirMax: 5800, geoMin: 17000, geoMax: 29000, mainOeuvre: "2 800 € à 4 500 €" },
    links: { mairie: "https://www.namur.be", mairieLabel: "Ville de Namur", guichetEnergie: "https://www.guichet-energie-wallonie.be", guichetEnergieNom: "Guichet Énergie Namur", primeRegionale: "https://www.wallonie.be/fr/aides/aide/prime-habitation-durable" },
    faqs: [
      { q: "Quel prix pour une PAC à Namur, capitale wallonne ?", a: "À Namur (5000), le prix d'une PAC air/eau installée varie de 8 500 € à 14 500 €. Les maisons en pierre du vieux Namur nécessitent souvent des systèmes haute température (65°C) pour chauffer les volumes importants via les radiateurs existants." },
      { q: "Comment bénéficier de la Prime Habitation à Namur ?", a: "Étant la capitale wallonne, Namur dispose du Guichet Énergie le mieux doté de la région. Prenez rendez-vous gratuitement pour un accompagnement complet : choix de l'auditeur, montage du dossier Prime Habitation (jusqu'à 6 000 €), et mise en relation avec des installateurs RESCert." },
      { q: "PAC et maison en pierre calcaire à Namur : quelles précautions ?", a: "Les murs en pierre calcaire (50-60 cm d'épaisseur) des maisons namuroises offrent une bonne inertie thermique mais une isolation modeste. L'isolation par l'intérieur combinée à une PAC air/eau constitue la rénovation énergétique la plus efficace pour ce type de bâti." },
      { q: "Quelle économie mazout en passant à la PAC à Namur ?", a: "Un foyer namurois chauffant au mazout une maison de 130 m² consomme environ 2 500 litres/an (soit 2 500-3 000 €). Avec une PAC air/eau (COP 4), la facture électrique tombe à 800-1 200 €/an, soit 1 500-1 800 € d'économie annuelle." },
      { q: "Installateurs PAC à Namur : comment les trouver ?", a: "Namur et sa périphérie comptent une quinzaine d'installateurs certifiés RESCert. Le site rescert.be permet de vérifier la certification. Notre comparateur vous met en contact avec les 3 installateurs les mieux notés de la zone namuroise." }
    ],
    localFact: "Namur abrite le siège du SPW Énergie (Service Public de Wallonie), l'administration qui pilote les primes habitation et la stratégie de transition énergétique wallonne — un avantage de proximité unique pour les propriétaires namurois."
  },
  {
    slug: "mons-7000",
    editorial: {
      contexteParagraph: "Chef-lieu du Hainaut et ancienne Capitale européenne de la culture (2015), Mons allie patrimoine historique remarquable et dynamisme universitaire avec l'UMons et le campus de Polytech. La Grand-Place, classée au patrimoine mondial de l'UNESCO, témoigne de la richesse architecturale d'une ville qui a su se réinventer après le déclin des charbonnages. L'installation de pompes à chaleur dans les maisons montoises accompagne cette renaissance, offrant aux propriétaires un confort moderne tout en préservant le caractère traditionnel du bâti.",
      patrimoineParagraph: "Le parc immobilier montois se compose de maisons bourgeoises en pierre bleue du XVIIIe et XIXe siècle dans le centre historique, et de maisons ouvrières en briques dans les quartiers péri-urbains de Jemappes, Cuesmes et Ghlin. Les maisons quatre façades des lotissements des années 1960-1980, nombreuses en périphérie, offrent les conditions les plus favorables pour l'installation de PAC (espace, jardin, accès). Le PEB moyen en classe E-F reflète un bâti ancien nécessitant des travaux de rénovation.",
      energieParagraph: "Mons et le Borinage restent très dépendants du mazout (50 % des logements) et du gaz (30 %). L'héritage charbonnier a laissé des sols parfois instables qui limitent la géothermie dans certaines zones, rendant la PAC air/eau aérothermique encore plus pertinente. Le CPAS de Mons et les SLSP locales intègrent de plus en plus les PAC dans leurs projets de rénovation du logement social, signalant une tendance de fond."
    },
    housing: { dominantType: "maisons bourgeoises en pierre bleue, maisons ouvrières", avgConstructionEra: "1850–1960", pctMaisons: 60, pctMazout: 50, pctGaz: 30, avgPEB: "E-F" },
    pricing: { airEauMin: 8000, airEauMax: 14000, airAirMin: 2500, airAirMax: 5500, geoMin: 16000, geoMax: 28000, mainOeuvre: "2 500 € à 4 200 €" },
    links: { mairie: "https://www.mons.be", mairieLabel: "Ville de Mons", guichetEnergie: "https://www.guichet-energie-wallonie.be", guichetEnergieNom: "Guichet Énergie Mons-Borinage", primeRegionale: "https://www.wallonie.be/fr/aides/aide/prime-habitation-durable" },
    faqs: [
      { q: "Combien coûte une PAC à Mons ?", a: "À Mons (7000), une PAC air/eau coûte de 8 000 € à 14 000 € installée. Les maisons quatre façades de Ghlin et Nimy nécessitent 10-14 kW, tandis que les maisons mitoyennes de Jemappes ou Cuesmes se contentent de 6-9 kW." },
      { q: "Quelles primes pour une PAC dans le Borinage ?", a: "Les propriétaires montois bénéficient de la Prime Habitation wallonne (jusqu'à 6 000 €) et du Rénopack (prêt à 0 % jusqu'à 60 000 €). Les ménages à revenus modestes du Borinage ont accès à des taux de prime majorés. Le Guichet Énergie Mons-Borinage vous accompagne gratuitement." },
      { q: "PAC et patrimoine UNESCO à Mons : est-ce compatible ?", a: "Dans le périmètre UNESCO du centre historique, l'unité extérieure doit être invisible depuis l'espace public. Les cours intérieures et toitures plates sont autorisées. Les maisons hors périmètre classé n'ont pas de contrainte supplémentaire." },
      { q: "Quel installateur PAC choisir à Mons ?", a: "Le bassin Mons-Borinage compte une dizaine d'installateurs certifiés RESCert. Favorisez un artisan spécialisé dans le remplacement mazout, très courant dans la région. Notre comparateur propose 3 devis gratuits de professionnels vérifiés." },
      { q: "PAC air/eau ou chaudière à condensation à Mons ?", a: "La PAC air/eau est 3 à 4 fois plus efficiente qu'une chaudière à condensation gaz. À Mons, où le mazout domine encore, le gain est encore plus spectaculaire. De plus, les primes wallonnes sont bien plus élevées pour la PAC que pour une simple chaudière." }
    ],
    localFact: "Mons a été Capitale européenne de la Culture en 2015, une distinction qui a catalysé la rénovation du centre historique et le remplacement massif des anciennes chaudières au charbon et mazout par des systèmes de chauffage modernes dont les pompes à chaleur."
  }
];

// ---------------------------------------------------------------------------
// SMART CONTENT GENERATOR — contenu unique pour toutes les villes restantes
// Utilise les caractéristiques locales (province, population, géographie)
// pour produire un contenu différent de chaque ville voisine.
// ---------------------------------------------------------------------------

import type { City } from '@/types';

interface ProvinceProfile {
  housingDesc: string[];
  constructionEras: string[];
  energyContexts: string[];
  localFacts: string[];
  mairiePattern: string;
  guichetUrl: string;
  guichetNom: string;
  primeUrl: string;
  basePctMazout: number;
  basePctGaz: number;
  basePEB: string[];
  pricingFactor: number;
}

const PROVINCE_PROFILES: Record<string, ProvinceProfile> = {
  "BW": {
    housingDesc: ["villas résidentielles et pavillons de lotissement à proximité de Bruxelles", "maisons quatre façades dans des quartiers résidentiels verdoyants", "habitations familiales en briques, souvent construites pour les navetteurs bruxellois"],
    constructionEras: ["1955–1975", "1960–1980", "1950–1970"],
    energyContexts: [
      "Le Brabant wallon bénéficie de la proximité bruxelloise pour l'accès aux installateurs, avec un mix énergétique encore marqué par le mazout dans les communes rurales et le gaz dans les zones plus urbanisées.",
      "Province la plus aisée de Wallonie, le Brabant wallon affiche le taux de rénovation énergétique le plus élevé, les propriétaires investissant volontiers dans les PAC haut de gamme pour valoriser leur patrimoine.",
      "Entre urbanisation croissante et espaces verts préservés, le Brabant wallon offre un terrain idéal pour toutes les technologies de PAC, de l'aérothermie à la géothermie horizontale."
    ],
    localFacts: ["proximité immédiate de Bruxelles et bassin d'emploi dynamique", "taux de rénovation énergétique le plus élevé de Wallonie", "commune résidentielle prisée par les familles", "présence de l'UCLouvain qui favorise l'innovation énergétique", "marché immobilier en tension qui valorise les biens rénovés"],
    mairiePattern: "https://www.{slug-base}.be",
    guichetUrl: "https://www.guichet-energie-wallonie.be",
    guichetNom: "Guichet Énergie Brabant wallon",
    primeUrl: "https://www.wallonie.be/fr/aides/aide/prime-habitation-durable",
    basePctMazout: 35, basePctGaz: 45, basePEB: ["D", "D-E", "E"],
    pricingFactor: 1.15
  },
  "HT": {
    housingDesc: ["maisons ouvrières du bassin minier en briques rouges caractéristiques", "habitations mitoyennes héritées de l'ère industrielle du Hainaut", "pavillons de lotissement et maisons de rangée typiques du Pays Noir"],
    constructionEras: ["1880–1940", "1900–1950", "1920–1960"],
    energyContexts: [
      "Le Hainaut est la province wallonne la plus peuplée et celle où la dépendance au mazout de chauffage est la plus forte, rendant la transition vers la PAC économiquement très avantageuse pour les ménages.",
      "L'héritage industriel du Hainaut se traduit par un parc immobilier ancien, souvent mal isolé, où le remplacement des chaudières au mazout par des PAC génère les économies les plus spectaculaires de Belgique.",
      "Province en reconversion économique, le Hainaut mise sur la rénovation énergétique de son parc de logements comme levier de développement, soutenu par des primes wallonnes accessibles."
    ],
    localFacts: ["bassin industriel en reconversion avec un fort potentiel de rénovation", "taux de chauffage au mazout parmi les plus élevés de Belgique", "dynamique de rénovation urbaine portée par les pouvoirs locaux", "proximité de la frontière française facilitant l'accès à des marques européennes", "commune du Hainaut bénéficiant des primes wallonnes les plus avantageuses"],
    mairiePattern: "https://www.{slug-base}.be",
    guichetUrl: "https://www.guichet-energie-wallonie.be",
    guichetNom: "Guichet Énergie Hainaut",
    primeUrl: "https://www.wallonie.be/fr/aides/aide/prime-habitation-durable",
    basePctMazout: 50, basePctGaz: 30, basePEB: ["E", "E-F", "F"],
    pricingFactor: 0.92
  },
  "LG": {
    housingDesc: ["maisons en briques et pierre calcaire des vallées de la Meuse et de l'Ourthe", "habitations à flanc de coteau avec vue dégagée sur les vallées liégeoises", "maisons de maître et immeubles en pierre de taille hérités du passé industriel"],
    constructionEras: ["1890–1950", "1900–1960", "1920–1965"],
    energyContexts: [
      "La province de Liège est marquée par un relief vallonné qui crée des microclimats influençant la performance des PAC. Les installateurs liégeois maîtrisent le dimensionnement adapté aux altitudes et expositions locales.",
      "Après les crues dévastatrices de 2021, la vallée de la Vesdre et les communes liégeoises sinistrées ont massivement remplacé leurs chaudières mazout inondées par des pompes à chaleur, accélérant la transition énergétique.",
      "La diversité géographique de la province — des plaines hesbignonnes aux contreforts ardennais — impose des solutions de chauffage adaptées. La PAC air/eau reste le choix le plus polyvalent pour le climat liégeois."
    ],
    localFacts: ["territoire marqué par les crues de 2021 ayant accéléré la transition vers la PAC", "présence universitaire de l'ULiège qui favorise la R&D en géothermie", "relief vallonné qui crée des conditions spécifiques pour le dimensionnement PAC", "patrimoine industriel reconverti en logements modernes", "commune liégeoise bénéficiant d'un réseau dense d'installateurs certifiés"],
    mairiePattern: "https://www.{slug-base}.be",
    guichetUrl: "https://www.guichet-energie-wallonie.be",
    guichetNom: "Guichet Énergie Liège",
    primeUrl: "https://www.wallonie.be/fr/aides/aide/prime-habitation-durable",
    basePctMazout: 52, basePctGaz: 28, basePEB: ["E", "E-F", "F"],
    pricingFactor: 0.95
  },
  "LX": {
    housingDesc: ["maisons ardennaises en pierre naturelle et moellons avec toits en ardoise", "fermettes rénovées et habitations rurales en matériaux locaux", "chalets et constructions en bois adaptés au climat continental ardennais"],
    constructionEras: ["1850–1950", "1920–1970", "1900–1960"],
    energyContexts: [
      "Le Luxembourg belge est la province la plus rurale et la plus froide de Wallonie. Les hivers longs (2 750 degrés-jours) rendent le dimensionnement des PAC crucial : une puissance sous-estimée compromet le confort. Les installateurs locaux maîtrisent ces contraintes.",
      "En l'absence de réseau de gaz naturel dans la plupart des communes luxembourgeoises, le mazout domine à 65 %. La transition vers la PAC y est la plus rentable de Belgique, avec des économies annuelles dépassant 2 000 € pour les grandes fermettes.",
      "La province du Luxembourg, avec ses forêts denses et ses pâturages, offre un potentiel géothermique intéressant pour les propriétés disposant de grands terrains, tout en restant adaptée à l'aérothermie malgré les hivers rigoureux."
    ],
    localFacts: ["commune ardennaise au charme rural, prisée pour sa qualité de vie", "absence de réseau de gaz naturel rendant la PAC particulièrement avantageuse", "hivers plus froids qu'ailleurs en Belgique nécessitant un dimensionnement PAC adapté", "grands terrains propices à la géothermie horizontale", "proximité du Grand-Duché de Luxembourg et de son marché du travail"],
    mairiePattern: "https://www.{slug-base}.be",
    guichetUrl: "https://www.guichet-energie-wallonie.be",
    guichetNom: "Guichet Énergie Luxembourg",
    primeUrl: "https://www.wallonie.be/fr/aides/aide/prime-habitation-durable",
    basePctMazout: 65, basePctGaz: 12, basePEB: ["E", "E-F", "F"],
    pricingFactor: 0.90
  },
  "NA": {
    housingDesc: ["maisons en pierre calcaire mosane avec caves voûtées typiques", "pavillons résidentiels des années 1960 dans la périphérie namuroise", "corps de ferme et habitations semi-rurales en briques et moellons"],
    constructionEras: ["1900–1960", "1930–1970", "1920–1965"],
    energyContexts: [
      "La province de Namur, au confluent de la Sambre et de la Meuse, offre un habitat varié allant des maisons en pierre du centre historique aux pavillons de banlieue. Le mazout domine encore à 55 %, mais la proximité du SPW Énergie facilite l'accès aux primes.",
      "Entre Hesbaye fertile au nord et plateaux condruziens au sud, la province de Namur présente des besoins de chauffage modérés (2 550 DJU) qui rendent les PAC air/eau particulièrement efficientes avec des COP élevés.",
      "La vallée de la Meuse concentre les communes les plus peuplées de la province, où le réseau d'installateurs certifiés RESCert est dense et les délais d'intervention courts."
    ],
    localFacts: ["commune de la province de Namur, capitale administrative de la Wallonie", "patrimoine architectural mosan avec des murs en pierre calcaire", "situation au cœur du réseau routier wallon facilitant l'accès des installateurs", "environnement naturel préservé propice aux installations respectueuses", "proximité du Guichet Énergie provincial pour l'accompagnement aux primes"],
    mairiePattern: "https://www.{slug-base}.be",
    guichetUrl: "https://www.guichet-energie-wallonie.be",
    guichetNom: "Guichet Énergie Namur",
    primeUrl: "https://www.wallonie.be/fr/aides/aide/prime-habitation-durable",
    basePctMazout: 55, basePctGaz: 22, basePEB: ["E", "D-E", "E-F"],
    pricingFactor: 0.95
  },
  "BXL": {
    housingDesc: ["maisons bruxelloises mitoyennes avec cour intérieure", "immeubles de rapport et appartements urbains", "habitations mixtes résidentielles et commerciales"],
    constructionEras: ["1890–1930", "1900–1940", "1880–1920"],
    energyContexts: [
      "La Région de Bruxelles-Capitale impose les normes PEB les plus strictes de Belgique, rendant la transition vers la PAC incontournable pour les propriétaires souhaitant valoriser leur bien et respecter la réglementation.",
      "L'habitat dense bruxellois nécessite des PAC compactes et silencieuses, idéalement en configuration split avec une unité extérieure discrète. Les installateurs de la capitale maîtrisent ces contraintes d'espace.",
      "Le programme Rénolution centralise les primes énergie bruxelloises avec un accompagnement personnalisé via Homegrade.brussels, facilitant les démarches des propriétaires."
    ],
    localFacts: ["commune bruxelloise bénéficiant des primes Rénolution les plus généreuses", "tissu urbain dense imposant des solutions PAC compactes et silencieuses", "marché immobilier dynamique valorisant les rénovations énergétiques", "accompagnement gratuit Homegrade.brussels pour tous les projets", "normes PEB strictes accélérant la transition énergétique"],
    mairiePattern: "https://www.{slug-base}.be",
    guichetUrl: "https://www.homegrade.brussels",
    guichetNom: "Homegrade.brussels",
    primeUrl: "https://www.renolution.brussels",
    basePctMazout: 18, basePctGaz: 65, basePEB: ["D-E", "E", "E-F"],
    pricingFactor: 1.10
  }
};

function hashSeed(str: string, salt: number = 0): number {
  let hash = salt;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pick<T>(arr: T[], slug: string, salt: number = 0): T {
  return arr[hashSeed(slug, salt) % arr.length];
}

function generateCityContent(city: City): CityContent {
  const profile = PROVINCE_PROFILES[city.province_code] || PROVINCE_PROFILES["HT"];
  const pop = city.population || 5000;
  const slug = city.slug;

  // --- Population-based adjustments ---
  const popLabel = pop > 50000 ? "grande ville" : pop > 20000 ? "ville dynamique" : pop > 10000 ? "commune active" : pop > 5000 ? "localité résidentielle" : "village";
  const popContext = pop > 50000
    ? `Avec ses ${pop.toLocaleString('fr-BE')} habitants, ${city.name} est l'une des principales agglomérations de la province de ${city.province_name}`
    : pop > 10000
    ? `Commune de ${pop.toLocaleString('fr-BE')} habitants en province de ${city.province_name}, ${city.name} conjugue cadre de vie agréable et accessibilité aux services`
    : `Au cœur de la province de ${city.province_name}, la commune de ${city.name} (${pop.toLocaleString('fr-BE')} hab.) offre un environnement résidentiel prisé`;

  const housingType = pick(profile.housingDesc, slug, 1);
  const constructionEra = pick(profile.constructionEras, slug, 2);
  const energyContext = pick(profile.energyContexts, slug, 3);
  const factBase = pick(profile.localFacts, slug, 4);
  const peb = pick(profile.basePEB, slug, 5);

  // --- Pricing adjusted by province + city size ---
  const sizeMultiplier = pop > 50000 ? 1.08 : pop > 20000 ? 1.03 : pop > 10000 ? 1.0 : 0.97;
  const pf = profile.pricingFactor * sizeMultiplier;
  const baseMin = Math.round(8500 * pf / 100) * 100;
  const baseMax = Math.round(15000 * pf / 100) * 100;

  // --- Housing stats with variation ---
  const mazoutVariation = hashSeed(slug, 10) % 10 - 5;
  const gazVariation = hashSeed(slug, 11) % 8 - 4;
  const pctMaisons = pop > 50000 ? 35 + (hashSeed(slug, 12) % 15) : pop > 10000 ? 50 + (hashSeed(slug, 13) % 15) : 60 + (hashSeed(slug, 14) % 15);

  // --- Mairie URL ---
  const slugBase = city.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/(^-|-$)/g, '');

  const isWallonie = city.region === "Wallonie";
  const primeText = isWallonie ? "Prime Habitation wallonne (jusqu'à 6 000 €)" : "Prime Énergie Rénolution (jusqu'à 4 500 €)";
  const primeShort = isWallonie ? "Prime Habitation" : "Prime Rénolution";
  const loanText = isWallonie ? "Rénopack (prêt à 0 % jusqu'à 60 000 €)" : "Prêt Vert bruxellois à taux réduit";

  return {
    slug,
    editorial: {
      contexteParagraph: `${popContext}. En tant que ${popLabel} de ${city.region}, ${city.name} offre un cadre favorable à l'installation de pompes à chaleur pour ses propriétaires désireux de réduire leur facture énergétique et leur empreinte carbone. Les installateurs certifiés RESCert de la zone ${city.province_name} interviennent régulièrement à ${city.name} et dans les communes environnantes pour des projets de remplacement de chaudières au mazout ou au gaz par des PAC air/eau performantes.`,
      patrimoineParagraph: `Le patrimoine immobilier de ${city.name} est principalement constitué de ${housingType}. Construites majoritairement entre ${constructionEra}, ces habitations d'une superficie moyenne de ${pop > 20000 ? '110 à 160' : pop > 5000 ? '120 à 180' : '130 à 200'} m² présentent un certificat PEB moyen en classe ${peb}, signe d'un potentiel d'amélioration énergétique significatif. Les ${pctMaisons} % de maisons individuelles ou mitoyennes du parc immobilier constituent le cœur de cible pour l'installation de PAC air/eau, avec des espaces extérieurs adaptés au positionnement des unités.`,
      energieParagraph: energyContext + ` À ${city.name} même, le chauffage au mazout représente environ ${profile.basePctMazout + mazoutVariation} % des installations résidentielles, le gaz naturel ${profile.basePctGaz + gazVariation} %. Le remplacement de ces systèmes fossiles par une pompe à chaleur permet aux foyers de ${city.name} de réaliser des économies substantielles, particulièrement avantageuses dans le contexte de hausse continue des prix des énergies fossiles en Belgique.`
    },
    housing: {
      dominantType: housingType,
      avgConstructionEra: constructionEra,
      pctMaisons,
      pctMazout: profile.basePctMazout + mazoutVariation,
      pctGaz: profile.basePctGaz + gazVariation,
      avgPEB: peb
    },
    pricing: {
      airEauMin: baseMin,
      airEauMax: baseMax,
      airAirMin: Math.round(2800 * pf / 100) * 100,
      airAirMax: Math.round(6200 * pf / 100) * 100,
      geoMin: Math.round(17000 * pf / 100) * 100,
      geoMax: Math.round(30000 * pf / 100) * 100,
      mainOeuvre: `${(Math.round(2800 * pf / 100) * 100).toLocaleString('fr-BE')} € à ${(Math.round(4500 * pf / 100) * 100).toLocaleString('fr-BE')} €`
    },
    links: {
      mairie: `https://www.${slugBase}.be`,
      mairieLabel: `Commune de ${city.name}`,
      guichetEnergie: profile.guichetUrl,
      guichetEnergieNom: profile.guichetNom,
      primeRegionale: profile.primeUrl
    },
    faqs: [
      { q: `Quel est le prix d'une pompe à chaleur à ${city.name} ?`, a: `À ${city.name} (${city.zip}), le prix d'une PAC air/eau installée varie de ${baseMin.toLocaleString('fr-BE')} € à ${baseMax.toLocaleString('fr-BE')} € TTC, incluant le matériel, la main-d'œuvre et la mise en service. Le coût dépend de la puissance nécessaire (liée à la superficie et à l'isolation) et de la marque choisie.` },
      { q: `Quelles primes pour installer une PAC à ${city.name} ?`, a: `Les propriétaires de ${city.name} bénéficient de la ${primeText}. ${isWallonie ? "Un Audit Logement préalable est requis." : "Les démarches se font via le portail Rénolution."} Le ${loanText} complète le dispositif. La réduction d'impôt fédérale s'ajoute à ces montants, pour un cumul d'aides atteignant ${isWallonie ? "8 000 à 10 000 €" : "6 000 à 8 000 €"}.` },
      { q: `Faut-il un installateur certifié à ${city.name} ?`, a: `Oui, la certification RESCert est obligatoire pour bénéficier des primes ${isWallonie ? 'wallonnes' : 'bruxelloises'} à ${city.name}. Cette certification garantit une installation conforme aux normes belges et un dimensionnement adapté au bâti local. Vérifiez sur rescert.be la liste des installateurs actifs en ${city.province_name}.` },
      { q: `Combien économise-t-on avec une PAC à ${city.name} ?`, a: `Un foyer de ${city.name} chauffant au ${profile.basePctMazout > profile.basePctGaz ? 'mazout' : 'gaz'} une habitation de 130 m² économise en moyenne ${profile.basePctMazout > 40 ? '1 200 à 2 000' : '800 à 1 400'} € par an avec une PAC air/eau performante (COP 3,5 à 4,5). Le retour sur investissement, primes déduites, se situe entre 5 et 8 ans.` },
      { q: `Quel type de PAC choisir à ${city.name} ?`, a: `Pour la majorité des habitations de ${city.name}, la PAC air/eau est le meilleur choix : elle se raccorde aux radiateurs existants et produit l'eau chaude sanitaire. ${pop < 10000 ? "Les propriétés avec grand terrain peuvent envisager la géothermie horizontale pour un rendement supérieur." : "La PAC air/air est une alternative économique pour les appartements sans réseau hydraulique."} Les marques Daikin, Vaillant et Mitsubishi sont les plus installées en ${city.province_name}.` },
      { q: `Où trouver le ${isWallonie ? 'Guichet Énergie' : 'centre Homegrade'} le plus proche de ${city.name} ?`, a: `Le ${profile.guichetNom} est accessible aux habitants de ${city.name}. Ce service gratuit vous aide à ${isWallonie ? "réaliser votre Audit Logement, monter votre dossier de Prime Habitation" : "naviguer le portail Rénolution, simuler vos primes"} et trouver des installateurs certifiés. Rendez-vous sur ${profile.guichetUrl.replace('https://', '')} pour prendre rendez-vous.` }
    ],
    localFact: `${city.name}, ${popLabel} de ${city.province_name}, se distingue par sa ${factBase}. Les habitants bénéficient d'un accès direct au ${profile.guichetNom} pour tout projet de pompe à chaleur.`
  };
}

// ---------------------------------------------------------------------------
// UNIFIED API — getCityContent(slug) returns unique content for ANY city
// ---------------------------------------------------------------------------

const ALL_MANUAL_CONTENT: CityContent[] = [
  ...BRUXELLES_CONTENT,
  ...WALLONIE_MAJOR_CONTENT
];

const contentMap = new Map<string, CityContent>();
ALL_MANUAL_CONTENT.forEach(c => contentMap.set(c.slug, c));

/**
 * Get unique city content — returns hand-written content for major cities,
 * or generates intelligent unique content for all others.
 */
export function getCityContent(city: City): CityContent {
  const manual = contentMap.get(city.slug);
  if (manual) return manual;
  return generateCityContent(city);
}
