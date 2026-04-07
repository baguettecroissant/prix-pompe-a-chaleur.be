import { NextResponse } from "next/server";

const BASE = "https://www.prix-pompe-a-chaleur.be";
const TOTAL_SITEMAPS = 2;

export async function GET() {
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from({ length: TOTAL_SITEMAPS }, (_, i) => `  <sitemap><loc>${BASE}/sitemap/${i + 1}</loc></sitemap>`).join("\n")}
</sitemapindex>`;

    return new NextResponse(sitemapIndex, {
        status: 200,
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
