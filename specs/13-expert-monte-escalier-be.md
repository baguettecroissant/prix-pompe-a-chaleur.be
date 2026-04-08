# expert-monte-escalier.be — Project Spec

## Identité
- **Domaine** : `expert-monte-escalier.be`
- **Type** : EMD single-niche
- **Baseline** : Monte-escalier — Prix, marques et installation pour seniors en Belgique
- **Ton éditorial** : Ergothérapeute bienveillant. On parle autonomie, maintien à domicile, rail courbe, siège pivotant, télécommande, Stannah, ThyssenKrupp, Handicare. Ton chaleureux et empathique : "Restez chez vous, en toute sécurité. Un monte-escalier change la vie."
- **Persona** : Senior 65-85 ans (ou leur enfant adulte 45-60 ans qui cherche pour eux), mobilité réduite, maison à étage(s), refuse la maison de repos. Souvent couple dont l'un a des douleurs aux genoux/hanches. Budget 3 000-10 000€.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Monte-escalier / Traplift | `100090` | **30€** | `110530` |

> **30€/lead fixe.** Marché de niche mais ultra-qualifié. Chaque lead est un projet CONCRET (le parent ne monte plus les escaliers). Cycle court (décision rapide, souvent émotionnelle). Ticket 3 500-9 000€.

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Hébergement** : Cloudflare Pages (Static Export)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — SENIORS / CONFORT / ACCESSIBILITÉ)

### Typographie
- **Headings** : `Merriweather` (serif chaleureuse, lisible, confiance senior)
- **Body** : `Atkinson Hyperlegible` (conçue pour la basse vision, très lisible)
- **Data/prix** : `Roboto Mono` (grands chiffres lisibles)
- **Taille minimum** : 18px body (accessibilité seniors ++)

### Palette
```css
--primary: #7C3AED;        /* Violet-600 — douceur/premium */
--primary-light: #F5F3FF;  /* Violet-50 */
--secondary: #0369A1;      /* Sky-700 — confiance */
--accent: #059669;         /* Emerald-600 — sécurité */
--text: #1E1B4B;           /* Indigo-950 — très contrasté */
--bg: #F5F3FF;             /* Violet-50 — doux */
--card-bg: #FFFFFF;
--cta: #7C3AED;            /* Violet — CTA chaleureux */
--safe: #059669;           /* Emerald — sécurité */
--heart: #EC4899;          /* Pink — humanité/soin */
```

### Layout Homepage
- **Hero** : Senior souriant dans son monte-escalier, intérieur belge chaleureux (boiseries, tapis). "Gardez votre indépendance. Installation en 1 journée." CTA violet, GROS boutons, texte lisible.
- **Style** : Accessible et humain. Très grands textes. Beaucoup d'espace blanc. Photos de seniors heureux (pas de clichés tristes). Style "brochure médicale premium". Boutons TRÈS grands et clairs.
- **Icônes** : Lucide Icons stroke 2.5px (plus épais pour visibilité), violet + émeraude
- **Section separators** : Ligne ondulée douce (confort)

### Style des composants
- **Cards** : `border-radius: 16px`, fond white, border 2px violet-200, shadow-md, GRANDE typo
- **Boutons CTA** : Rounded-xl, fond violet-600, text white, h-16 (GRAND), icône Heart, "Demander un Devis Gratuit"
- **Badges** : "★ N°1 Belgique" en violet, "Installation 1 jour" en green, "Garantie 5 ans" en sky
- **Témoignages** : Photo + citation du senior/famille, très mis en avant
- **Configurateur** : "Escalier droit ou courbe ? Intérieur ou extérieur ? → prix estimé"
- **Footer** : Fond indigo-950, accent violet-300, numéro de contact GRAND (seniors appellent)

---

## 📄 Template Page Commune

### Pattern titre H1
```
Monte-escalier à {VILLE} ({CODE_POSTAL}) — Prix et installation 2025
```

### Pattern intro
```
Vous cherchez un monte-escalier à {VILLE} ? {VARIANTE_INTRO}.
Les installateurs certifiés en {PROVINCE} proposent la fourniture et pose
entre {PRIX_MIN}€ et {PRIX_MAX}€ selon le type d'escalier (droit ou courbe).
```

### Modules spécifiques
- **Configurateur** : "Escalier droit (3 000-5 000€) vs courbe (6 000-10 000€)"
- **Témoignage local** : "Mme Dumont, 78 ans, à {VILLE} : 'Je revis depuis l'installation'"
- **Aides financières** : "AViQ, mutuelle et déduction fiscale en Belgique"
- **Installation** : "Posé en 1/2 journée, sans travaux de maçonnerie"
- **Marques** : Stannah, ThyssenKrupp, Handicare, Otolift

---

## Structure des pages

```
/                                  → Homepage (hero senior heureux)
/devis                             → Formulaire natif Bobex (type.id 100090)
/monte-escalier/[slug]             → Pages communes (271)
/escalier-droit · /escalier-courbe · /exterieur
/aides-financieres                 → Guide aides et déductions
/marques + /marques/[slug]
/guides + /guides/[slug]
/faq · /mentions-legales
```

## Guides piliers (6)
1. Prix monte-escalier en Belgique 2025 : droit, courbe, extérieur
2. Stannah vs ThyssenKrupp vs Handicare : le comparatif complet
3. Monte-escalier courbe : particularités, prix et installation
4. Aides financières monte-escalier en Belgique : AViQ, mutuelles et fiscal
5. Alternatives au monte-escalier : ascenseur privatif, plateforme, déménagement
6. Monte-escalier d'occasion ou reconditionné : bonne affaire ou piège ?

## Marques (4 fiches)
Stannah, ThyssenKrupp HomeLifts, Handicare, Otolift

## Maillage externe
- Pas de maillage direct (niche unique, pas d'autre site thématique dans le réseau)

### Repo : `baguettecroissant/expert-monte-escalier.be` → Cloudflare Pages → 0€
