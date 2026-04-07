/**
 * Belgian regional data for city pages.
 * Provides climate context, regional characteristics, and PAC recommendations.
 * Belgium has a temperate oceanic climate (Cfb) across all regions.
 */

import { City } from "@/types";

// Belgium uses a single climate zone - temperate oceanic
export type ClimateZone = 'oceanique';

export function getClimateZone(): ClimateZone {
    return 'oceanique';
}

interface ClimateProfile {
    label: string;
    description: string;
    winterTemp: string;
    heatingDays: string;
    recommendedPAC: string;
    recommendedCOP: string;
    estimatedSavings: string;
    estimatedBill: string;
    dimensioning: string;
}

const CLIMATE_PROFILE: ClimateProfile = {
    label: "Climat océanique tempéré — Belgique",
    description: "hiver frais et humide, températures modérées mais besoins en chauffage importants",
    winterTemp: "-3°C à 5°C",
    heatingDays: "200 à 240 jours",
    recommendedPAC: "PAC Air/Eau moyenne température (idéale pour les maisons belges)",
    recommendedCOP: "COP moyen de 3,5 à 4,5 selon la saison",
    estimatedSavings: "50 à 65%",
    estimatedBill: "900 € à 1 400 €/an en chauffage PAC (vs 2 500 € à 3 800 € en mazout)",
    dimensioning: "Puissance recommandée : 8 à 14 kW pour une maison de 120 m². Le climat belge humide nécessite un dimensionnement précis par un installateur certifié RESCert."
};

export function getClimateProfile(): ClimateProfile {
    return CLIMATE_PROFILE;
}

// --- Regional housing & context ---

interface RegionalProfile {
    housingType: string;
    architecture: string;
    energyContext: string;
    localAdvantage: string;
}

const REGIONAL_PROFILES: Record<string, RegionalProfile> = {
    "Wallonie": {
        housingType: "maisons quatre façades en briques, fermettes rénovées et pavillons résidentiels",
        architecture: "Le bâti wallon traditionnel en briques rouges ou pierres calcaires, souvent datant d'avant 1970, présente un fort potentiel d'amélioration énergétique via l'installation d'une PAC.",
        energyContext: "La Wallonie est la région belge où la dépendance au mazout de chauffage reste la plus forte, rendant la transition vers la pompe à chaleur particulièrement rentable.",
        localAdvantage: "La Prime Habitation wallonne couvre jusqu'à 6 000 € pour l'installation d'une PAC, cumulable avec la réduction d'impôt fédérale et les prêts à taux zéro Rénopack."
    },
    "Bruxelles-Capitale": {
        housingType: "maisons de maître, appartements en immeubles mitoyens et habitations bruxelloises typiques",
        architecture: "L'habitat bruxellois dense et mitoyen nécessite des PAC compactes et silencieuses. Les unités air/eau split sont idéales pour les jardins urbains étroits.",
        energyContext: "Bruxelles impose des normes PEB strictes. Le remplacement des chaudières au gaz ou mazout par une PAC améliore significativement le certificat PEB du logement.",
        localAdvantage: "Les Primes Énergie bruxelloises offrent des montants attractifs pour les PAC, avec des bonus pour les ménages à revenus modestes. Le programme Rénolution simplifie les démarches."
    },
};

export function getRegionalProfile(region: string): RegionalProfile {
    return REGIONAL_PROFILES[region] || REGIONAL_PROFILES["Wallonie"];
}

// --- Estimated annual savings ---

export function getEstimatedSavings(population: number): {
    annualSavingMin: number;
    annualSavingMax: number;
    paybackYears: string;
} {
    // Belgium is uniformly oceanic climate, savings depend mainly on housing type
    const urbanBonus = population > 10000 ? 1.1 : population > 2000 ? 1.05 : 1.0;

    return {
        annualSavingMin: Math.round(1000 * urbanBonus / 100) * 100,
        annualSavingMax: Math.round(1800 * urbanBonus / 100) * 100,
        paybackYears: '5 à 8'
    };
}

// --- Housing type context based on population ---

export function getHousingContext(population: number): string {
    if (population > 50000) return "appartements en copropriété, maisons mitoyennes et maisons de maître";
    if (population > 10000) return "maisons quatre façades, bel-étages et petits immeubles résidentiels";
    if (population > 2000) return "maisons individuelles en briques, fermettes rénovées et pavillons de lotissement";
    if (population > 0) return "maisons individuelles, corps de ferme rénovés et habitations rurales";
    return "habitations individuelles et bâtiments ruraux";
}
