# prix-panneaux-belgique.be — Project Spec

## Identité
- **Domaine** : `prix-panneaux-belgique.be`
- **Type** : EMD single-niche
- **Baseline** : Panneaux solaires — Prix d'installation, tarifs par kWc et comparatif installateurs
- **Ton éditorial** : Analyste énergie indépendant. On parle chiffres bruts : €/kWc, ROI, courbes d'amortissement, prix au m². Ton data-driven et direct, style "étude de marché accessible" : "Voici ce que paient réellement les Belges pour leurs panneaux solaires."
- **Persona** : Propriétaire belge pragmatique 30-55 ans, compare activement les offres, veut le meilleur rapport qualité/prix avant de signer. Budget 5 000-15 000€.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Zonnepanelen / Panneaux solaires | `11364` | **25€** | `110530` |

> **25€/lead fixe.** L'internaute qui tape "prix panneaux belgique" est en phase de comparaison active — il va demander un devis dans les 48h. Lead ultra-chaud. Volume de recherche massif (2 400/mois sur cette requête + longue traîne).

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Styling** : Vanilla CSS / Tailwind minimal
- **Hébergement** : Cloudflare Pages (Static Export `output: 'export'`)
- **Données** : JSON statique (communes-be.json, prix-moyens.json)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — DATA / COMPARATIF PRIX)

### Typographie
- **Headings** : `Sora` (moderne, tech, géométrique-arrondi)
- **Body** : `DM Sans` (propre, tech-friendly, grande lisibilité)
- **Data/prix** : `Space Mono` (pour tableaux de prix et chiffres clés)

### Palette
```css
--primary: #EA580C;        /* Orange-600 — énergie, prix */
--primary-light: #FFF7ED;  /* Orange-50 */
--secondary: #4338CA;      /* Indigo-700 — confiance, data */
--accent: #16A34A;         /* Green-600 — économies */
--text: #0F172A;           /* Slate-900 — texte fort */
--bg: #FFF7ED;             /* Orange-50 — fond chaleureux */
--card-bg: #FFFFFF;
--chart-up: #16A34A;       /* Green — hausse/positif */
--chart-down: #DC2626;     /* Red — baisse */
--highlight: #FDE68A;      /* Amber-200 — surlignage prix */
```

### Layout Homepage
- **Hero** : Dashboard de prix avec compteur animé "Prix moyen en Belgique : 1,15€/Wc". Graphique stylisé montrant l'évolution des prix (baisse). Fond orange pâle, CTA indigo proéminent.
- **Style** : Data-dashboard accessible. Cards avec barres de progression, pourcentages animés, tableaux comparatifs. Style "rapport financier rendu sexy".
- **Icônes** : Phosphor Icons fill, orange + indigo
- **Section separators** : Ligne horizontale orange pointillée

### Style des composants
- **Cards** : `border-radius: 16px`, fond white, border-top 3px orange, shadow hover-lift, data highlight
- **Boutons CTA** : Rounded-xl, dégradé orange→red, text white, hover scale 1.02, icône TrendingDown
- **Badges** : "Meilleur prix" en green, "Premium" en indigo, "Budget" en amber
- **Comparateur** : Tableau interactif tri par prix/kWc/marque avec barres horizontales colorées
- **Prix cards** : Grande typo prix €, sous-texte "installé, TVA 6% incluse", badge économie
- **Footer** : Fond slate-900, accent orange-400, dernière mise à jour visible

---

## 📄 Template Page Commune (UNIQUE wording)

### Pattern titre H1
```
Prix panneaux solaires à {VILLE} ({CODE_POSTAL}) — Tarifs installation 2025
```

### Pattern intro (spintax)
```
Combien coûtent réellement des panneaux solaires à {VILLE} ? {VARIANTE_INTRO}.
En {PROVINCE}, le prix moyen constaté est de {PRIX_MOY}€/kWc installé (TVA 6%),
soit entre {PRIX_MIN}€ et {PRIX_MAX}€ pour une installation résidentielle standard de 6 kWc.
```

Variantes intro :
1. "Les prix ont baissé de 40% en 5 ans mais varient encore de 20% entre installateurs"
2. "Comparer au moins 3 devis reste la meilleure stratégie pour économiser 1 500 à 3 000€"
3. "Les installateurs de la zone {CODE_POSTAL} affichent des prix légèrement inférieurs/supérieurs à la moyenne belge"
4. "Avec la TVA à 6% pour les habitations de +10 ans, le prix net chute significativement"

### Pattern CTA
```
Comparer les prix des installateurs à {VILLE}
```

### Modules spécifiques
- **Tableau de prix** : "Prix moyen par puissance (3 kWc / 6 kWc / 9 kWc / 12 kWc)"
- **Graphique évolution** : "Évolution des prix solaires en Belgique (2020-2025)"
- **Comparatif installateurs** : Nombre d'installateurs dans la zone, fourchette de prix
- **Calculateur** : "Votre surface de toit → puissance recommandée → prix estimé"
- **TVA** : Encadré "TVA 6% ou 21% ? Conditions d'éligibilité"

---

## Structure des pages

```
/                                  → Homepage (hero data-dashboard)
/devis-gratuit                     → Formulaire natif Bobex (type.id 11364)
/prix-solaires/[slug]              → Pages communes (271)
/prix-installation                 → Guide prix global
/prix-par-marque                   → Comparatif marques/prix
/simulateur                        → Calculateur de coût
/guides + /guides/[slug]
/faq · /mentions-legales
/sitemap.xml · /robots.txt · /llms.txt
```

## Guides piliers (6)
1. Prix panneaux solaires Belgique 2025 : tarifs par kWc et par type
2. Prix par marque : SunPower vs LG vs Trina vs Jinko (comparatif chiffré)
3. Combien de panneaux faut-il ? Dimensionnement par consommation
4. Comment décrypter un devis photovoltaïque ligne par ligne
5. Les meilleurs installateurs par province (critères et classement)
6. Location vs achat de panneaux : quelle formule est la plus rentable ?

## Marques
SunPower, LG Solar, Trina Solar, Jinko Solar, Canadian Solar, REC, Longi, JA Solar

## Maillage externe
- `primes-panneaux-solaires.be` → "découvrez les primes disponibles dans votre commune"
- `comparatif-panneaux.be` → "notre test indépendant des meilleurs panneaux"
- `devis-photovoltaique-be.be` → "recevez 3 offres chiffrées gratuitement"

---

## ⚡ Optimisation Cloudflare Pages

| Page | Route | Rendu | Config |
|------|-------|-------|--------|
| Homepage, Devis, FAQ, Mentions | statiques | **Statique** | `output: 'export'` |
| Guides | `/guides/[slug]` | **SSG** | `generateStaticParams()` |
| **Pages communes** | `/prix-solaires/[slug]` | **SSG** | `generateStaticParams()` |

### Cloudflare Setup
```
DNS : CNAME @ → pages.dev | Proxy: ON
Custom domain dans Cloudflare Pages dashboard
Functions : /api/submit-lead → proxy Bobex API (type.id 11364)
```

### Repo : `baguettecroissant/prix-panneaux-belgique.be` → Cloudflare Pages auto-deploy → Coût = 0€
