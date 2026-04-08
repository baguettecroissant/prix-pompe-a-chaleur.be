# prix-adoucisseur-belgique.be — Project Spec

## Identité
- **Domaine** : `prix-adoucisseur-belgique.be`
- **Type** : EMD single-niche
- **Baseline** : Adoucisseur d'eau — Prix, marques et installation en Belgique
- **Ton éditorial** : Technicien eau spécialisé. On parle °fH (dureté), résines échangeuses d'ions, débit, capacité litres, BWT, Ecowater, entretien sel. Ton pédagogique et quotidien : "L'eau calcaire en Belgique abîme vos appareils, votre peau et votre plomberie. Voici la solution."
- **Persona** : Propriétaire belge avec eau très calcaire (>25°fH, courant en Brabant/Hainaut/Flandre), 30-55 ans, en a marre du calcaire sur les robinets, machine à laver qui lâche. Budget 1 500-3 500€.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Adoucisseur d'eau | `11982` | **30€** | `110530` |

> **30€/lead fixe.** L'adoucisseur est un marché spécifiquement belge (eau très calcaire dans 60% du pays). L'internaute qui tape "prix adoucisseur belgique" est en recherche active. Vente one-shot, installation rapide (1/2 journée). Ticket 1 500-4 000€.

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Hébergement** : Cloudflare Pages (Static Export)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — EAU / FRAÎCHEUR / QUOTIDIEN)

### Typographie
- **Headings** : `Quicksand` (ronde, douce, "eau qui coule")
- **Body** : `Mulish` (propre, moderne, sans aspérité)
- **Data/prix** : `Fira Code`

### Palette
```css
--primary: #0284C7;        /* Sky-600 — eau pure */
--primary-light: #F0F9FF;  /* Sky-50 */
--secondary: #E2E8F0;      /* Slate-200 — calcaire/blanc */
--accent: #14B8A6;         /* Teal-500 — solution/traité */
--text: #0F172A;           /* Slate-900 */
--bg: #F0F9FF;             /* Sky-50 — fond eau */
--card-bg: #FFFFFF;
--hard-water: #CBD5E1;     /* Slate-300 — eau dure/calcaire */
--soft-water: #7DD3FC;     /* Sky-300 — eau douce */
--danger-calc: #F97316;    /* Orange — dégât calcaire */
```

### Layout Homepage
- **Hero** : Robinet avec goutte d'eau cristalline, split-screen "Avant (calcaire visible) / Après (eau pure)". Carte de dureté de l'eau en Belgique. CTA sky "Testez la dureté de votre eau".
- **Style** : Frais et quotidien. Cards rondes, beaucoup de blanc. Photos lifestyle (salle de bain propre, machine à laver neuve). Style "brochure produit premium".
- **Icônes** : Lucide Icons stroke 2px, sky + teal
- **Section separators** : Vague SVG bleue subtile

### Style des composants
- **Cards** : `border-radius: 24px` (très arrondi, doux), fond white, shadow-sm, bleu léger
- **Boutons CTA** : Rounded-full pill, fond sky-600, text white, icône Droplets, "Comparer les Adoucisseurs"
- **Badges** : "Eau dure" en orange, "Eau douce" en sky, "Recommandé" en teal
- **Carte dureté** : Carte Belgique interactive avec zones de dureté par commune
- **Comparateur** : Tableau BWT vs Ecowater vs Culligan vs?"
- **Footer** : Fond sky-900, accent sky-300, FAQ dureté

---

## 📄 Template Page Commune

### Pattern titre H1
```
Adoucisseur d'eau à {VILLE} ({CODE_POSTAL}) — Prix et dureté locale
```

### Pattern intro
```
L'eau à {VILLE} affiche une dureté de {DURETE}°fH. {VARIANTE_INTRO}.
Un adoucisseur adapté pour votre foyer coûte entre {PRIX_MIN}€ et {PRIX_MAX}€
installation comprise, et protège votre plomberie pendant 15-20 ans.
```

### Modules spécifiques
- **Dureté locale** : "Dureté de l'eau à {VILLE} : {DURETE}°fH — {QUALIF}" (douce/moyennement dure/très dure)
- **Carte zone** : Position de la commune sur la carte de dureté belge
- **Calculateur** : "Nombre de personnes × dureté → adoucisseur recommandé + prix"
- **Marques** : BWT, Ecowater, Culligan, Permo — comparatif local
- **Entretien** : Coût annuel sel + maintenance (150-250€/an)

---

## Structure des pages

```
/                                  → Homepage (hero eau pure)
/devis                             → Formulaire natif Bobex (type.id 11982)
/adoucisseur/[slug]                → Pages communes (271)
/carte-durete                      → Carte interactive dureté BE
/marques + /marques/[slug]
/guides + /guides/[slug]
/faq · /mentions-legales
```

## Guides piliers (6)
1. Prix adoucisseur d'eau Belgique 2025 : comparatif par marque et capacité
2. Dureté de l'eau en Belgique : carte et données par commune
3. BWT vs Ecowater vs Culligan : le comparatif indépendant
4. Entretien adoucisseur : sel, résine, désinfection — coûts annuels
5. Adoucisseur au sel vs sans sel : technologies comparées
6. Effets du calcaire sur la santé, la plomberie et l'électroménager

## Maillage externe
- `traitement-humidite-belgique.be` → "humidité + calcaire : double problème"
- `prix-chaudiere-condensation.be` → "protégez votre chaudière du calcaire"

### Repo : `baguettecroissant/prix-adoucisseur-belgique.be` → Cloudflare Pages → 0€
