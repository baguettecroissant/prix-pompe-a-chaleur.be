import { City } from "@/types";
import citiesData from "@/lib/db/cities.json";
import provincesData from "@/lib/db/provinces-infos.json";

const cities = citiesData as City[];

export function getCityFromSlug(slug: string): City | undefined {
    const city = cities.find(c => c.slug === slug);
    if (!city) return undefined;

    const provInfo = provincesData.find(d => d.code === city.province_code);
    return {
        ...city,
        province_info: provInfo
    };
}

export function getAllCitySlugs(): string[] {
    return [...cities]
        .sort((a, b) => (b.population || 0) - (a.population || 0))
        .map(c => c.slug);
}

export function generateCityMetadata(city: City) {
    const title = `Prix pompe à chaleur à ${city.name} (${city.zip}) — Devis installation PAC`;
    const description = `Quel est le prix d'une pompe à chaleur à ${city.name} ? Comparez les tarifs des installateurs certifiés RESCert en ${city.province_name} et obtenez votre devis gratuit.`;
    const url = `https://www.prix-pompe-a-chaleur.be/prix-pac/${city.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: 'article' as const,
        },
        twitter: {
            card: 'summary' as const,
            title,
            description,
        },
    };
}

export function getAllProvinceCodes(): string[] {
    return provincesData.map(d => d.code);
}

export function getCitiesByProvince(provinceCode: string): City[] {
    return cities.filter(c => c.province_code === provinceCode);
}
