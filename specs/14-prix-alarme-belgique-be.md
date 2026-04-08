# prix-alarme-belgique.be — Project Spec

## Identité
- **Domaine** : `prix-alarme-belgique.be`
- **Type** : EMD single-niche
- **Baseline** : Alarme et sécurité — Prix, marques et installation en Belgique
- **Ton éditorial** : Consultant sécurité résidentielle. On parle détection intrusion, caméra IP, centrale hybride, sirène extérieure, télésurveillance 24/7, label INCERT. Ton sécurisant et technique modéré : "Votre maison est-elle vraiment protégée ? Les cambriolages en Belgique augmentent de 12% par an."
- **Persona** : Propriétaire belge 30-60 ans, récemment cambriolé ou voisin cambriolé, maison ou villa, quartier résidentiel. Veut un système PRO (pas du DIY Amazon). Budget 1 500-5 000€ + abo.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Système d'alarme | `11406` | **20€** | `110530` |

> **20€/lead fixe.** Le marché de l'alarme en Belgique est dominé par la vente avec installation + abonnement télésurveillance (~30€/mois). Lead à forte valeur vie (LTV). Urgence post-cambriolage = conversion rapide. Ticket 2 000-5 000€ + abo.

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Hébergement** : Cloudflare Pages (Static Export)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — SÉCURITÉ / NOCTURNE / TECH)

### Typographie
- **Headings** : `Clash Display` (bold, futuriste, sécurité)
- **Body** : `General Sans` (neutre tech, moderne)
- **Data/prix** : `Space Mono`

### Palette
```css
--primary: #0F172A;        /* Slate-900 — nuit/protection */
--primary-light: #1E293B;  /* Slate-800 */
--secondary: #3B82F6;      /* Blue-500 — tech/digital */
--accent: #EF4444;         /* Red-500 — alerte/urgence */
--text: #F8FAFC;           /* Slate-50 — blanc sur fond sombre */
--bg: #0F172A;             /* Slate-900 — DARK MODE DEFAULT */
--card-bg: #1E293B;        /* Slate-800 */
--safe: #22C55E;           /* Green — sécurisé */
--alert: #EF4444;          /* Red — alarme */
--cam: #3B82F6;            /* Blue — caméra */
```

### Layout Homepage
- **Hero** : DARK MODE. Vue nocturne d'une villa belge avec spots LED périmétriques, caméra discrète visible. Dashboard sécurité overlay (zones OK en vert, porte ouverte en rouge). CTA rouge clignotant "Protégez votre Maison".
- **Style** : Dark mode tech. Ambiance "centre de contrôle". Cards avec pictogrammes de capteurs (mouvement, porte, caméra). Dashboard security vibes. Style "interface d'alarme premium".
- **Icônes** : Lucide Icons stroke 1.5px, bleu + rouge sur fond sombre
- **Section separators** : Scan line horizontale animation (style radar)

### Style des composants
- **Cards** : `border-radius: 12px`, fond slate-800, border 1px slate-700, glow bleu on hover
- **Boutons CTA** : Rounded-lg, fond red-500, text white, pulse animation, icône Shield, "Devis Alarme Gratuit"
- **Badges** : "INCERT" en blue, "Télésurveillance" en green, "Sans fil" en cyan
- **Zones** : Plan de maison interactif avec capteurs positionnables
- **Statistiques** : Compteur cambriolages par province (données Police Fédérale)
- **Footer** : Fond black, accent blue-400, "Alertez. Dissuadez. Protégez."

---

## 📄 Template Page Commune

### Pattern titre H1
```
Alarme maison à {VILLE} ({CODE_POSTAL}) — Prix et installateurs 2025
```

### Pattern intro
```
Vous cherchez un système d'alarme à {VILLE} ? {VARIANTE_INTRO}.
Les installateurs certifiés INCERT en {PROVINCE} proposent des systèmes complets
entre {PRIX_MIN}€ et {PRIX_MAX}€ (centrale + capteurs + installation).
```

### Modules spécifiques
- **Statistiques** : "Nombre de cambriolages dans la zone de police {ZONE} en 2024"
- **Configurateur** : "Nombre de pièces × portes/fenêtres → système recommandé + prix"
- **Comparatif** : Alarme filaire vs sans fil vs hybride
- **Télésurveillance** : "Avec ou sans abonnement : avantages et coûts"
- **Déduction fiscale** : "Réduction d'impôt de 730€ pour systèmes certifiés INCERT"

---

## Structure des pages

```
/                                  → Homepage DARK (hero nocturne)
/devis                             → Formulaire natif Bobex (type.id 11406)
/alarme/[slug]                     → Pages communes (271)
/telesurveillance · /cameras · /sans-fil · /incert
/marques + /marques/[slug]
/guides + /guides/[slug]
/faq · /mentions-legales
```

## Guides piliers (6)
1. Prix alarme maison Belgique 2025 : systèmes et abonnements comparés
2. Certification INCERT : pourquoi c'est obligatoire et comment vérifier
3. Alarme avec vs sans télésurveillance : ce que vous devez savoir
4. Caméras de surveillance : légalité, prix et RGPD en Belgique
5. Alarme sans fil : fiabilité, portée et vulnérabilité au brouillage
6. Réduction fiscale alarme : conditions et formulaire en Belgique

## Marques (5 fiches)
Verisure, Securitas, ADT/Tyco, Ajax Systems, Dahua

## Maillage externe
- Pas de maillage direct (niche unique sécurité)

### Repo : `baguettecroissant/prix-alarme-belgique.be` → Cloudflare Pages → 0€
