# prix-chassis-belgique.be — Project Spec

## Identité
- **Domaine** : `prix-chassis-belgique.be`
- **Type** : EMD single-niche
- **Baseline** : Châssis et fenêtres — Prix remplacement, matériaux et primes en Belgique
- **Ton éditorial** : Menuisier conseil. On parle Uw, vitrage K, PVC vs alu vs bois, Reynaers, Deceuninck, triple vitrage, profilé à rupture de pont thermique. Ton technique mais accessible : "Vos châssis ont plus de 20 ans ? Voici combien coûte un remplacement complet."
- **Persona** : Propriétaire belge dont les fenêtres sont vétustes (simple ou double vitrage ancien), 40-65 ans, maison 1960-1990, courants d'air, condensation. Budget 8 000-25 000€.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Châssis, portes et fenêtres | `11452` | **25€** | `110530` |

> **25€/lead fixe.** Les châssis représentent le 2ème poste de rénovation énergétique en Belgique. Cycle de vente court (4-8 semaines). Le visiteur qui tape "prix chassis belgique" a un projet imminent. Ticket moyen 10 000-20 000€.

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Styling** : Vanilla CSS / Tailwind minimal
- **Hébergement** : Cloudflare Pages (Static Export `output: 'export'`)
- **Données** : JSON statique (communes-be.json, prix-chassis.json)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — MENUISERIE / CRAFT / MINIMALISME)

### Typographie
- **Headings** : `Instrument Sans` (précis, architectural, moderne)
- **Body** : `Inter Tight` (compacte, technique, fonctionnelle)
- **Data/prix** : `IBM Plex Mono` (industriel, pour specs techniques)

### Palette
```css
--primary: #1D4ED8;        /* Blue-700 — vitre/verre */
--primary-light: #DBEAFE;  /* Blue-100 */
--secondary: #78716C;      /* Stone-500 — alu/PVC */
--accent: #B45309;         /* Amber-700 — bois/chêne */
--text: #1C1917;           /* Stone-900 */
--bg: #F5F5F4;             /* Stone-100 — fond neutre craft */
--card-bg: #FFFFFF;
--pvc: #64748B;            /* Slate — PVC */
--alu: #A1A1AA;            /* Zinc — Aluminium */
--bois: #B45309;           /* Amber — Bois */
--triple: #059669;         /* Emerald — Triple vitrage premium */
```

### Layout Homepage
- **Hero** : Vue intérieure d'une pièce avec une grande baie vitrée moderne, lumière naturelle. Compteur "Prix moyen : 450-850€/châssis installé". Fond stone pâle, CTA bleu verre.
- **Style** : Minimaliste et architectural. Cards avec coupes techniques de profilés (PVC/alu/bois). Tableaux comparatifs épurés. Style "showroom digital".
- **Icônes** : Lucide Icons stroke 1.5px, bleu + stone
- **Section separators** : Ligne fine grise, style architectural

### Style des composants
- **Cards** : `border-radius: 6px` (très anguleux, style industriel), fond white, border 1px stone-200, hover border-blue-400
- **Boutons CTA** : Rounded-md, fond blue-700, text white, hover bg-blue-800, icône Window
- **Badges matériaux** : "PVC" en slate, "Alu" en zinc, "Bois" en amber, "Mixte" en indigo
- **Configurateur** : "Nombre de fenêtres × matériau × vitrage → estimation de prix"
- **Coupe technique** : SVG interactif montrant les couches du profilé
- **Footer** : Fond stone-900, accent blue-300, normes CE et certifications

---

## 📄 Template Page Commune (UNIQUE wording)

### Pattern titre H1
```
Prix châssis à {VILLE} ({CODE_POSTAL}) — Devis remplacement fenêtres 2025
```

### Pattern intro (spintax)
```
Besoin de remplacer vos châssis à {VILLE} ? {VARIANTE_INTRO}.
Les menuisiers en {PROVINCE} facturent entre {PRIX_MIN}€ et {PRIX_MAX}€ par fenêtre standard
(PVC, double vitrage), pose et finitions incluses.
```

Variantes intro :
1. "Le remplacement de châssis réduit immédiatement les déperditions de chaleur de 15 à 20%"
2. "PVC, aluminium ou bois : chaque matériau a son prix et ses avantages en Belgique"
3. "Avec la TVA à 6% pour les habitations de +10 ans, le moment est idéal pour rénover"
4. "Les menuisiers de la zone {CODE_POSTAL} proposent généralement un délai de 4 à 8 semaines"

### Modules spécifiques
- **Configurateur** : "Combien de châssis ? Quel matériau ? Quel vitrage ? → prix estimé"
- **Comparatif matériaux** : PVC vs Alu vs Bois vs Mixte (prix, isolation, entretien, durée de vie)
- **Primes** : "Primes châssis en {REGION} : conditions et montants"
- **Marques** : Reynaers, Deceuninck, Schüco, Internorm, Kömmerling

---

## Structure des pages

```
/                                  → Homepage (hero baie vitrée)
/devis                             → Formulaire natif Bobex (type.id 11452)
/prix-chassis/[slug]               → Pages communes (271)
/pvc                               → Guide châssis PVC
/aluminium                         → Guide châssis alu
/bois                              → Guide châssis bois
/triple-vitrage                    → Guide triple vitrage
/guides + /guides/[slug]
/marques + /marques/[slug]
/faq · /mentions-legales
/sitemap.xml · /robots.txt · /llms.txt
```

## Guides piliers (6)
1. Prix châssis en Belgique 2025 : PVC, alu, bois et mixte comparés
2. Châssis PVC : prix, avantages et meilleures marques belges
3. Châssis aluminium : quand le premium se justifie
4. Triple vitrage : surcoût vs économie d'énergie réelle
5. Primes remplacement châssis : Wallonie, Bruxelles et Flandre
6. Comment reconnaître un châssis de qualité : critères techniques décryptés

## Marques (6 fiches)
Reynaers, Deceuninck, Schüco, Internorm, Kömmerling, Velux (toiture)

## Maillage externe
- `comparateur-chassis.be` → "comparez les offres des menuisiers"
- `primes-isolation-wallonie.be` → "combinez châssis + isolation pour maximiser vos primes"
- `prix-renovation-toiture.be` → "fenêtres de toit et Velux"

---

## ⚡ Optimisation Cloudflare Pages

| Page | Route | Rendu | Config |
|------|-------|-------|--------|
| Homepage, Devis, FAQ | statiques | **Statique** | `output: 'export'` |
| Guides + Marques | dynamiques | **SSG** | `generateStaticParams()` |
| **Pages communes** | `/prix-chassis/[slug]` | **SSG** | `generateStaticParams()` |

### Repo : `baguettecroissant/prix-chassis-belgique.be` → Cloudflare Pages auto-deploy → Coût = 0€
