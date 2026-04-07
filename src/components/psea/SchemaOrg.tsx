import { City } from "@/types";

interface SchemaOrgProps {
    city: City;
}

export function SchemaOrg({ city }: SchemaOrgProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Installation Pompe à Chaleur à ${city.name}`,
        "description": `Service d'installation et de maintenance de pompe à chaleur à ${city.name} (${city.zip}). Devis gratuits d'installateurs certifiés RESCert.`,
        "areaServed": {
            "@type": "City",
            "name": city.name,
            "address": {
                "@type": "PostalAddress",
                "postalCode": city.zip,
                "addressCountry": "BE"
            }
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.lat,
            "longitude": city.coordinates.lng
        },
        "url": `https://www.prix-pompe-a-chaleur.be/prix-pac/${city.slug}`,
        "provider": {
            "@type": "Organization",
            "name": "Prix-Pompe-a-Chaleur.be",
            "url": "https://www.prix-pompe-a-chaleur.be"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
