import { NextResponse } from "next/server";
import { getAllCitySlugs } from "@/lib/seo-utils";
import { guides } from "@/data/guides";
import { getAllBrandSlugs } from "@/data/brands";
import { getAllProvinces } from "@/lib/cities";

const BASE = "https://www.prix-pompe-a-chaleur.be";
const TODAY = new Date().toISOString().split("T")[0];

function urlEntry(loc: string, priority: string, changefreq: string) {
    return `  <url><loc>${loc}</loc><lastmod>${TODAY}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const num = parseInt(id, 10);

    let urls: string[] = [];

    if (num === 1) {
        // Static pages + guides + brands + provinces
        urls = [
            urlEntry(BASE, "1.0", "daily"),
            urlEntry(`${BASE}/devis`, "0.9", "weekly"),
            urlEntry(`${BASE}/faq`, "0.8", "weekly"),
            urlEntry(`${BASE}/guides`, "0.8", "weekly"),
            urlEntry(`${BASE}/marques`, "0.8", "weekly"),
            urlEntry(`${BASE}/annuaire`, "0.8", "weekly"),
            urlEntry(`${BASE}/mentions-legales`, "0.3", "monthly"),
        ];

        // Guides
        guides.forEach(g => {
            urls.push(urlEntry(`${BASE}/guides/${g.slug}`, "0.7", "monthly"));
        });

        // Brands
        getAllBrandSlugs().forEach(slug => {
            urls.push(urlEntry(`${BASE}/marques/${slug}`, "0.7", "monthly"));
        });

        // Provinces
        getAllProvinces().forEach(prov => {
            const slug = `${prov.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}-${prov.code}`;
            urls.push(urlEntry(`${BASE}/annuaire/${slug}`, "0.6", "weekly"));
        });
    } else if (num === 2) {
        // City pages
        const citySlugs = getAllCitySlugs();
        citySlugs.forEach(slug => {
            urls.push(urlEntry(`${BASE}/prix-pac/${slug}`, "0.6", "weekly"));
        });
    } else {
        return new NextResponse("Not Found", { status: 404 });
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

    return new NextResponse(xml, {
        status: 200,
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
