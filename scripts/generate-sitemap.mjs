#!/usr/bin/env node
/**
 * Pre-build script: generates sitemap.xml into public/ for static export.
 * Run with: node scripts/generate-sitemap.mjs
 */
import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');

const BASE = 'https://www.prix-pompe-a-chaleur.be';
const TODAY = new Date().toISOString().split('T')[0];

// Load data
const cities = JSON.parse(readFileSync(join(root, 'src/lib/db/cities.json'), 'utf-8'));
const provincesInfos = JSON.parse(readFileSync(join(root, 'src/lib/db/provinces-infos.json'), 'utf-8'));

// Load guides slugs from guides.ts (parse with regex since it's TS)
const guidesTs = readFileSync(join(root, 'src/data/guides.ts'), 'utf-8');
const guideSlugs = [...guidesTs.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);

// Load brand slugs
const brandsTs = readFileSync(join(root, 'src/data/brands.ts'), 'utf-8');
const brandSlugs = [...brandsTs.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);

function urlEntry(loc, priority, changefreq) {
    return `  <url><loc>${loc}</loc><lastmod>${TODAY}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

const urls = [];

// Static pages
urls.push(urlEntry(BASE, '1.0', 'daily'));
urls.push(urlEntry(`${BASE}/devis`, '0.9', 'weekly'));
urls.push(urlEntry(`${BASE}/faq`, '0.8', 'weekly'));
urls.push(urlEntry(`${BASE}/guides`, '0.8', 'weekly'));
urls.push(urlEntry(`${BASE}/marques`, '0.8', 'weekly'));
urls.push(urlEntry(`${BASE}/annuaire`, '0.8', 'weekly'));
urls.push(urlEntry(`${BASE}/mentions-legales`, '0.3', 'monthly'));

// Guides
guideSlugs.forEach(slug => {
    urls.push(urlEntry(`${BASE}/guides/${slug}`, '0.7', 'monthly'));
});

// Brands
brandSlugs.forEach(slug => {
    urls.push(urlEntry(`${BASE}/marques/${slug}`, '0.7', 'monthly'));
});

// Provinces
provincesInfos.forEach(prov => {
    const slug = `${prov.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}-${prov.code}`;
    urls.push(urlEntry(`${BASE}/annuaire/${slug}`, '0.6', 'weekly'));
});

// Cities
cities.sort((a, b) => (b.population || 0) - (a.population || 0));
cities.forEach(city => {
    urls.push(urlEntry(`${BASE}/prix-pac/${city.slug}`, '0.6', 'weekly'));
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`✅ sitemap.xml generated with ${urls.length} URLs`);
