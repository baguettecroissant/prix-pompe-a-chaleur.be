import { City } from '@/types';

/**
 * Simple deterministic hash from string → number.
 * Used to pick spintax variants consistently per city slug.
 */
function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return Math.abs(hash);
}

function pickVariant(options: string[], seed: string): string {
    return options[hashCode(seed) % options.length];
}

export function getCityIntro(city: City): string {
    const pop = city.population || 0;
    const seed = city.slug;

    if (pop > 50000) {
        const options = [
            `Pôle économique majeur de la province de ${city.province_name}, l'agglomération de ${city.name} est au cœur de la transition énergétique belge avec un réseau d'installateurs certifiés RESCert particulièrement dense.`,
            `Dans la grande ville de ${city.name}, de nombreux ménages font le choix de la pompe à chaleur pour anticiper la hausse du prix du mazout et du gaz en Belgique.`,
            `Le bassin de vie de ${city.name} concentre les meilleurs experts en transition thermique de la ${city.region}, prêts à intervenir rapidement pour votre confort.`,
            `Installer une PAC en zone urbaine dense comme à ${city.name} demande un savoir-faire spécifique que maîtrisent nos partenaires certifiés RESCert.`,
            `Avec ses ${pop.toLocaleString('fr-BE')} habitants, ${city.name} fait partie des grandes villes où la demande en rénovation énergétique est la plus forte en ${city.province_name}.`,
            `L'agglomération de ${city.name} offre un maillage exceptionnel d'installateurs PAC, garantissant des délais d'intervention courts et des tarifs compétitifs.`
        ];
        return pickVariant(options, seed);
    }

    if (pop > 10000) {
        const options = [
            `Ville dynamique de la province de ${city.province_name}, ${city.name} voit fleurir les projets de rénovation globale et d'installation de pompes à chaleur air/eau.`,
            `À ${city.name}, l'amélioration du certificat PEB des logements est une priorité. Les installateurs de la région interviennent rapidement pour remplacer votre ancienne chaudière au mazout.`,
            `Commune stratégique de ${city.region}, ${city.name} dispose d'un réseau idéal de professionnels agréés pour le déploiement de solutions thermiques durables.`,
            `Que votre bien soit dans le centre de ${city.name} ou en périphérie, optimisez votre facture d'énergie grâce à une pompe à chaleur moderne.`,
            `Avec une population de ${pop.toLocaleString('fr-BE')} habitants, ${city.name} bénéficie d'un vivier important de professionnels RESCert spécialisés en aérothermie.`,
            `La ville de ${city.name} se distingue en ${city.province_name} par un taux élevé de projets de rénovation énergétique aidés par la Prime Habitation.`
        ];
        return pickVariant(options, seed);
    }

    if (pop > 2000) {
        const options = [
            `Le parc immobilier situé autour de ${city.name} se métamorphose. L'adoption de la pompe à chaleur y est facilitée par la présence d'installateurs de proximité.`,
            `En pleine province de ${city.province_name}, ${city.name} bénéficie d'une couverture complète par des experts de la rénovation énergétique.`,
            `Résider à ${city.name} ne vous empêche pas d'accéder aux technologies de chauffage de pointe, soutenues par les primes régionales belges.`,
            `Les propriétés individuelles de ${city.name} représentent un terrain idéal pour l'installation d'une pompe à chaleur aérothermique sur-mesure.`,
            `Avec environ ${pop.toLocaleString('fr-BE')} résidents, ${city.name} offre un cadre propice aux installations PAC air/eau, particulièrement adaptées aux maisons de briques belges.`,
            `Les foyers de ${city.name} et des communes voisines font de plus en plus appel aux installateurs certifiés de ${city.province_name} pour leur projet thermique.`
        ];
        return pickVariant(options, seed);
    }

    if (pop > 0) {
        const options = [
            `Dans la quiétude de ${city.name}, le remplacement des chaudières au mazout par des pompes à chaleur de dernière génération s'accélère grâce aux artisans du secteur.`,
            `Au sein de la commune de ${city.name}, le confort thermique hivernal n'est plus un luxe. Nos professionnels labellisés RESCert interviennent jusque dans les zones rurales de ${city.region}.`,
            `Vivre à ${city.name} vous donne les mêmes droits aux primes habitation que dans les grandes villes pour l'installation de votre PAC.`,
            `L'habitat en zone rurale autour de ${city.name} nécessite des solutions de chauffage performantes et économiques proposées par nos partenaires locaux.`,
            `Commune de ${pop.toLocaleString('fr-BE')} habitants en ${city.province_name}, ${city.name} est idéalement située pour bénéficier des tournées d'installation de nos artisans certifiés.`,
            `Le calme de ${city.name}, en plein cœur de la province de ${city.province_name}, n'empêche pas ses habitants de profiter des meilleures offres en pompes à chaleur.`
        ];
        return pickVariant(options, seed);
    }

    const options = [
        `Dans la province de ${city.province_name}, le secteur de ${city.name} est activement couvert par notre réseau de techniciens spécialisés en pompes à chaleur.`,
        `Propriétaire à ${city.name}, lancez sereinement votre projet de transition énergétique en comparant les devis d'installateurs validés.`,
        `La commune de ${city.name} fait partie des zones d'intervention privilégiées par nos partenaires chauffagistes en ${city.region}.`,
        `Pour chiffrer précisément votre installation à ${city.name}, appuyez-vous sur notre comparateur gratuit de professionnels certifiés.`
    ];
    return pickVariant(options, seed);
}
