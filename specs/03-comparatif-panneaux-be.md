# comparatif-panneaux.be — Project Spec

## Identité
- **Domaine** : `comparatif-panneaux.be`
- **Type** : EMD single-niche
- **Baseline** : Panneaux solaires — Comparatif marques, technologies et rendements
- **Ton éditorial** : Testeur tech indépendant. On parle rendement cellule, coefficient de température, dégradation annuelle, garantie linéaire, NOCT. Ton expert et objectif, style Les Numériques/Que Choisir : "Nous avons analysé 47 modèles pour vous dire lesquels valent vraiment leur prix."
- **Persona** : Techno-curieux 30-50 ans, a déjà décidé de passer au solaire mais veut LE meilleur panneau pour son toit. Lit les fiches techniques, compare les certifications.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Zonnepanelen / Panneaux solaires | `11364` | **25€** | `110530` |

> **25€/lead fixe.** Ce visiteur est le lead le plus qualifié du funnel solaire : il compare activement les technologies. Il va acheter dans les 30 jours. Lead premium.

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Styling** : Vanilla CSS / Tailwind minimal
- **Hébergement** : Cloudflare Pages (Static Export `output: 'export'`)
- **Données** : JSON statique (panneaux.json, specs-techniques.json)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — TECH REVIEW / MAGAZINE)

### Typographie
- **Headings** : `Space Grotesk` (tech, géométrique, futuriste)
- **Body** : `Nunito Sans` (ronde, amicale, lecture agréable)
- **Data/specs** : `Fira Code` (pour les specs techniques mono)

### Palette
```css
--primary: #7C3AED;        /* Violet-600 — tech/innovation */
--primary-light: #FAF5FF;  /* Violet-50 */
--secondary: #06B6D4;      /* Cyan-500 — énergie */
--accent: #EC4899;         /* Pink-500 — badges/highlights */
--text: #1E1B4B;           /* Indigo-950 — texte premium */
--bg: #FAF5FF;             /* Violet-50 — fond tech */
--card-bg: #FFFFFF;
--rating-gold: #F59E0B;    /* Amber — étoiles rating */
--vs-left: #7C3AED;        /* Violet — colonne gauche VS */
--vs-right: #06B6D4;       /* Cyan — colonne droite VS */
```

### Layout Homepage
- **Hero** : Panneau solaire en gros plan avec un overlay de données techniques holographiques (rendement %, puissance Wc). Style "review tech". Fond violet pâle, CTA rose néon.
- **Style** : Magazine premium. Cards "fiches produit" avec photo, note /10, specs clés. Layouts VS split-screen (Marque A vs Marque B). Badges performance.
- **Icônes** : Lucide Icons stroke 2px, violet + cyan
- **Section separators** : Gradient mesh violet → cyan subtil

### Style des composants
- **Cards** : `border-radius: 20px`, fond white, border glow violet on hover (box-shadow inset), badge note /10
- **Boutons CTA** : Pill rounded-full, fond violet-600, text white, hover glow, icône Sparkles
- **Badges** : "★ Best Value" en green, "★ Performance" en violet, "★ Budget" en cyan, "Nouveau" en pink
- **Comparateur VS** : Split-screen avec animation slide-in, specs face-à-face, winner highlight
- **Ratings** : Étoiles dorées + barre de score animée
- **Footer** : Fond indigo-950, accent violet-400, mention "tests indépendants"

---

## 📄 Template Page Marque (UNIQUE wording)

### Pattern titre H1
```
{MARQUE} : Test, avis et prix des panneaux solaires en Belgique
```

### Pattern intro
```
{MARQUE} figure parmi les {RANG} fabricants de panneaux solaires les plus installés en Belgique.
{VARIANTE_INTRO}. Voici notre analyse complète : rendement réel, garanties, prix constatés
et avis d'installateurs belges certifiés.
```

Variantes intro :
1. "Marque premium avec un rendement cellule parmi les plus élevés du marché"
2. "Excellent rapport qualité-prix, plébiscité par les installateurs wallons"
3. "Technologie innovante mais prix supérieur à la moyenne — est-ce justifié ?"
4. "N°1 des ventes en Belgique, mais les alternatives gagnent du terrain"

### Modules spécifiques
- **Fiche technique** : Specs côte-à-côte (rendement, puissance, dimensions, poids, garantie)
- **Score /10** : Note globale avec radar chart (rendement, prix, garantie, esthétique, disponibilité)
- **VS rapide** : "{MARQUE} vs les 2 alternatives les plus proches"
- **Avis installateurs** : Citations anonymisées d'installateurs belges
- **Prix constatés** : Fourchette de prix installé avec cette marque en Belgique

---

## Structure des pages

```
/                                  → Homepage (magazine hero)
/devis                             → Formulaire natif Bobex (type.id 11364)
/classement                        → Top panneaux classés /10
/vs                                → Hub des comparaisons face-à-face
/vs/[slug]                         → Ex: /vs/sunpower-vs-lg
/technologie                       → Mono vs Poly vs Thin-Film
/marques + /marques/[slug]         → Fiches marques détaillées (12)
/guides + /guides/[slug]
/faq · /mentions-legales
/sitemap.xml · /robots.txt · /llms.txt
```

## Guides piliers (7)
1. SunPower vs LG vs Trina : le comparatif définitif 2025
2. Panneaux chinois : faut-il faire confiance à Jinko, Longi, JA Solar ?
3. Micro-onduleur vs String : quel système pour votre installation ?
4. Rendement réel des panneaux : ce que les fabricants ne disent pas
5. Garantie panneaux solaires : décryptage 10/25/30 ans
6. Panneau bifacial : vaut-il le surcoût de 15-20% ?
7. Panneau noir full-black : esthétique vs performance chiffrée

## Marques (12 fiches)
SunPower, LG Solar, Trina Solar, Jinko Solar, Canadian Solar, REC, Longi, JA Solar, Enphase, SolarEdge, Q Cells, Meyer Burger

## Maillage externe
- `primes-panneaux-solaires.be` → "les primes disponibles pour ces panneaux"
- `prix-panneaux-belgique.be` → "prix moyen d'installation dans votre commune"
- `devis-photovoltaique-be.be` → "demandez 3 devis pour comparer"

---

## ⚡ Optimisation Cloudflare Pages

| Page | Route | Rendu | Config |
|------|-------|-------|--------|
| Homepage, Devis, FAQ | statiques | **Statique** | `output: 'export'` |
| Guides + Marques + VS | dynamiques | **SSG** | `generateStaticParams()` |
| Classement | `/classement` | **Statique** | Défaut |

### Repo : `baguettecroissant/comparatif-panneaux.be` → Cloudflare Pages auto-deploy → Coût = 0€
