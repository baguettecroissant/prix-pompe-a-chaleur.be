# expert-humidite-be.be — Project Spec

## Identité
- **Domaine** : `expert-humidite-be.be`
- **Type** : EMD single-niche
- **Baseline** : Humidité — Trouvez un expert certifié pour un diagnostic professionnel
- **Ton éditorial** : Annuaire professionnel premium. Ton de recommandation officielle, style Chambre des Métiers : "Seul un expert certifié peut poser le bon diagnostic. Ne confiez pas vos murs à n'importe qui."
- **Persona** : Propriétaire belge qui SAIT qu'il a un problème d'humidité et cherche spécifiquement un EXPERT (pas un bricoleur). 40-70 ans, prêt à payer pour un diagnostic professionnel. Budget diagnostic 200-500€, budget travaux 5 000-20 000€.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Traitement de l'humidité | `11461` | **25€** | `110530` |

> **25€/lead fixe.** Le mot "expert" dans la requête indique un prospect très qualifié qui veut un PRO, pas un comparateur de prix. Taux de conversion élevé, panier moyen supérieur.

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Hébergement** : Cloudflare Pages (Static Export)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — ANNUAIRE PRO / CORPORATE)

### Typographie
- **Headings** : `Lexend` (optimisée lecture, accessible, corporate)
- **Body** : `Karla` (humaniste, chaleureuse, professionnelle)
- **Data** : `Red Hat Mono`

### Palette
```css
--primary: #1E40AF;        /* Blue-800 — expertise */
--primary-light: #DBEAFE;  /* Blue-100 */
--secondary: #0F766E;      /* Teal-700 — certifié */
--accent: #9333EA;         /* Purple-600 — premium */
--text: #111827;           /* Gray-900 */
--bg: #F9FAFB;             /* Gray-50 — corporate neutre */
--card-bg: #FFFFFF;
--certified: #059669;      /* Emerald — certifié ✓ */
--rating: #F59E0B;         /* Amber — étoiles */
```

### Layout Homepage
- **Hero** : Professionnel en combinaison avec hygromètre sur un mur, lunettes de protection. "Trouvez un expert humidité certifié près de chez vous". Fond gris corporate, CTA bleu premium.
- **Style** : Annuaire haut-de-gamme. Cards "profils experts" avec photo, certifications, zones d'intervention, note. Style LinkedIn/Doctolib pour le bâtiment.
- **Icônes** : Lucide Icons stroke 1.5px, bleu + teal
- **Section separators** : Fine ligne bleue avec badge "Certifié"

### Style des composants
- **Cards pro** : `border-radius: 12px`, fond white, border 1px, avatar rond, badge "✓ Certifié", rating étoiles
- **Boutons CTA** : Rounded-lg, fond blue-800, text white, icône UserCheck, "Trouver mon Expert"
- **Badges** : "✓ Certifié" en emerald, "★ Recommandé" en amber, "Urgence 24h" en red
- **Carte** : Carte Belgique interactive avec zones couvertes par des experts
- **Footer** : Fond gray-900, accent blue-300, mentions légales pro

---

## 📄 Template Page Commune

### Pattern titre H1
```
Expert humidité à {VILLE} ({CODE_POSTAL}) — Diagnostic professionnel
```

### Modules spécifiques
- **Carte experts** : Nombre d'experts certifiés dans un rayon de 20 km
- **Profils** : Fiches experts avec zone d'intervention, spécialités, ancienneté
- **Diagnostic** : "Ce que comprend un diagnostic professionnel" (rapport écrit, mesures, préconisations)
- **Urgence** : "Expert disponible en 48h dans la zone {CODE_POSTAL}"

---

## Structure des pages

```
/                                  → Homepage (annuaire experts)
/devis                             → Formulaire natif Bobex (type.id 11461)
/expert-humidite/[slug]            → Pages communes (271)
/diagnostic-professionnel          → Guide : que comprend un diagnostic
/certifications                    → Les labels et certifications
/guides + /guides/[slug]
/faq · /mentions-legales
```

## Guides piliers (5)
1. Diagnostic humidité professionnel : déroulement, prix et rapport
2. Comment choisir son expert humidité en Belgique : critères et labels
3. Les certifications des experts en traitement d'humidité
4. Différence entre expert indépendant et entreprise de traitement
5. Recours et garanties après un traitement d'humidité

## Maillage externe
- `traitement-humidite-belgique.be` → "tout savoir sur les techniques de traitement"
- `primes-isolation-wallonie.be` → "primes pour les travaux post-diagnostic"
- `prix-renovation-toiture.be` → "infiltrations toiture : un expert évalue"

### Repo : `baguettecroissant/expert-humidite-be.be` → Cloudflare Pages → 0€
