# prix-chaudiere-condensation.be — Project Spec

## Identité
- **Domaine** : `prix-chaudiere-condensation.be`
- **Type** : EMD single-niche
- **Baseline** : Chaudière à condensation — Prix, installation et remplacement en Belgique
- **Ton éditorial** : Chauffagiste conseil agréé. On parle rendement >100% (PCS), modulante, label A+, Viessmann Vitodens, Vaillant ecoTEC, raccordement gaz, évacuation condensats. Ton technique modéré : "Votre chaudière a plus de 15 ans ? Une condensation moderne vous fera économiser 30% sur votre facture gaz."
- **Persona** : Propriétaire belge avec vieille chaudière (atmosphérique, >15 ans), 40-65 ans, facture gaz >1 800€/an. Remplacement planifié ou urgence (panne en hiver). Budget 3 000-7 000€.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Chaudière à condensation | `11426` | **20€** | `110530` |

> **20€/lead fixe.** Le remplacement de chaudière est souvent URGENT (panne en hiver). Lead à haute urgence, conversion rapide. Volume important en saison froide (oct-mars). Ticket 3 000-6 000€ pose + raccordement.

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Hébergement** : Cloudflare Pages (Static Export)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — CHAUFFAGE / INDUSTRIEL PROPRE)

### Typographie
- **Headings** : `Albert Sans` (industriel doux, germanique moderne)
- **Body** : `Libre Franklin` (classique, éditorial, sérieux sans être froid)
- **Data/prix** : `Cousine`

### Palette
```css
--primary: #DC2626;        /* Red-600 — chaleur/flamme */
--primary-light: #FEF2F2;  /* Red-50 */
--secondary: #1D4ED8;      /* Blue-700 — gaz/technique */
--accent: #16A34A;         /* Green-600 — économie */
--text: #18181B;           /* Zinc-900 */
--bg: #FAFAFA;             /* Zinc-50 — neutre technique */
--card-bg: #FFFFFF;
--flame: #F97316;          /* Orange — gaz */
--eco: #22C55E;            /* Green — A+ label */
--old: #6B7280;            /* Gray-500 — ancienne chaudière */
```

### Layout Homepage
- **Hero** : Chauffagiste en train d'installer une chaudière murale moderne, cuisine belge en arrière-plan. Badge label énergétique A+. "Remplacez votre vieille chaudière et économisez 30%". CTA rouge flamme.
- **Style** : Industriel propre. Cards techniques avec labels énergétiques (A+ → G). Photos de chaudières (pas de stock). Calculateur d'économies. Style "documentation produit haut de gamme".
- **Icônes** : Tabler Icons stroke 2px, rouge + bleu
- **Section separators** : Flamme SVG stylisée minimaliste

### Style des composants
- **Cards** : `border-radius: 10px`, fond white, border-top 3px rouge, étiquette énergie latérale
- **Boutons CTA** : Rounded-lg, fond red-600, text white, icône Flame, "Estimer mon Remplacement"
- **Badges** : Label A+ en vert, "Urgence" en red, "Promo" en amber
- **Comparateur** : Viessmann vs Vaillant vs Buderus vs Bosch (prix, rendement, garantie)
- **Calculateur** : "Ancienne chaudière → nouvelle condensation = X€/an d'économie"
- **Footer** : Fond zinc-900, accent red-300, urgence dépannage hiver

---

## 📄 Template Page Commune

### Pattern titre H1
```
Prix chaudière condensation à {VILLE} ({CODE_POSTAL}) — Remplacement 2025
```

### Pattern intro
```
Besoin de remplacer votre chaudière à {VILLE} ? {VARIANTE_INTRO}.
Les chauffagistes agréés en {PROVINCE} installent une chaudière à condensation
entre {PRIX_MIN}€ et {PRIX_MAX}€ (fourniture, pose et raccordement).
```

### Modules spécifiques
- **Calculateur économies** : "Ancienne chaudière atmosphérique → condensation = -30% sur la facture"
- **Label énergie** : Étiquette visuelle A+ avec explication
- **Comparatif marques** : Viessmann, Vaillant, Buderus — prix et particularités
- **Urgence** : "Panne de chaudière en hiver ? Intervention 24h en {PROVINCE}"
- **Primes** : Primes chaudière à condensation par région

---

## Structure des pages

```
/                                  → Homepage (hero installation)
/devis                             → Formulaire natif Bobex (type.id 11426)
/prix-chaudiere/[slug]             → Pages communes (271)
/marques + /marques/[slug]
/guides + /guides/[slug]
/faq · /mentions-legales
```

## Guides piliers (6)
1. Prix chaudière à condensation Belgique 2025 : gaz, mazout, hybride
2. Viessmann vs Vaillant vs Buderus : le comparatif chauffage belge
3. Remplacement chaudière : quand, comment et quel budget prévoir
4. Chaudière gaz vs pompe à chaleur : le match 2025
5. Entretien obligatoire chaudière en Belgique : fréquence et prix
6. Primes remplacement chaudière : Wallonie, Bruxelles et Flandre

## Marques (5 fiches)
Viessmann (Vitodens), Vaillant (ecoTEC), Buderus, Bosch, De Dietrich

## Maillage externe
- `prix-adoucisseur-belgique.be` → "protégez votre chaudière du calcaire"
- `primes-isolation-wallonie.be` → "isolez avant de chauffer"
- `traitement-humidite-belgique.be` → "condensation ≠ humidité : comment distinguer"

### Repo : `baguettecroissant/prix-chaudiere-condensation.be` → Cloudflare Pages → 0€
