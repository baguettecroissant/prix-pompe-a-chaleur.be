# prix-renovation-toiture.be — Project Spec

## Identité
- **Domaine** : `prix-renovation-toiture.be`
- **Type** : EMD single-niche
- **Baseline** : Toiture — Rénovation, remplacement, isolation et étanchéité en Belgique
- **Ton éditorial** : Couvreur-zingueur expert. On parle tuile Koramic, Eternit, ardoise naturelle, sous-toiture, chéneau zinc, écran de sous-toiture HPV, lattage/contre-lattage. Ton métier, direct et crédible : "Une toiture belge dure 40 ans. Après, il faut agir."
- **Persona** : Propriétaire belge maison 1950-1990, 45-70 ans, commence à voir des tuiles glisser ou des infiltrations. Urgence variable. Budget 15 000-45 000€.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Travaux de toiture | `11962` | **45€** 🔥🔥 | `110530` |

> **45€/lead — Le CPL le PLUS ÉLEVÉ de tout le réseau Bobex !** La toiture est le chantier le plus coûteux en rénovation. Lead ultra-premium. Ticket moyen 20 000-50 000€. Volume de recherche élevé et urgence fréquente (infiltration).

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Hébergement** : Cloudflare Pages (Static Export)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — BÂTIMENT / ROBUSTE / MÉTÉO)

### Typographie
- **Headings** : `Archivo` (robuste, architecturale, industrielle)
- **Body** : `Source Serif 4` (éditorial premium, serif moderne)
- **Data/prix** : `Azeret Mono`

### Palette
```css
--primary: #991B1B;        /* Red-800 — tuile belge */
--primary-light: #FEF2F2;  /* Red-50 */
--secondary: #44403C;      /* Stone-700 — ardoise */
--accent: #CA8A04;         /* Yellow-600 — zinc doré */
--text: #1C1917;           /* Stone-900 */
--bg: #FAFAF9;             /* Stone-50 — neutre bâtiment */
--card-bg: #FFFFFF;
--urgence: #DC2626;        /* Red — infiltration urgente */
--zinc: #A1A1AA;           /* Zinc-400 — zinguerie */
--ardoise: #1E293B;        /* Slate-800 — ardoise */
```

### Layout Homepage
- **Hero** : Vue aérienne drone d'un toit belge en cours de rénovation — échafaudage, tuiles neuves côté vs anciennes. Ciel belge gris dramatique. CTA rouge tuile "Estimez votre toiture".
- **Style** : Robuste et pro. Photos métier (couvreurs en action). Cards avec sections "avant/après". Style magazine BTP premium. Ambiance "chantier professionnel".
- **Icônes** : Material Symbols outlined, rouge + stone
- **Section separators** : Pattern tuile SVG stylisé

### Style des composants
- **Cards** : `border-radius: 4px` (très anguleux, industriel), fond white, border-top 4px rouge, shadow-md
- **Boutons CTA** : Rounded-sm, fond red-800, text white, BIG, icône HardHat
- **Badges** : "Urgent" en red, "Entretien" en amber, "Rénovation complète" en stone
- **Avant/Après** : Slider horizontal avec drag (avant gauche / après droite)
- **Checklist urgence** : "5 signes que votre toiture nécessite une intervention"
- **Footer** : Fond stone-900, accent zinc-300, contact urgence visible

---

## 📄 Template Page Commune

### Pattern titre H1
```
Rénovation toiture à {VILLE} ({CODE_POSTAL}) — Prix et couvreurs 2025
```

### Pattern intro
```
Votre toiture à {VILLE} montre des signes d'usure ? {VARIANTE_INTRO}.
Les couvreurs en {PROVINCE} facturent entre {PRIX_MIN}€ et {PRIX_MAX}€
pour une rénovation complète (charpente + couverture + isolation).
```

### Modules spécifiques
- **Diagnostic visuel** : "Les 7 signes qu'il faut rénover votre toiture"
- **Comparatif couvertures** : Tuiles vs Ardoise vs Zinc vs EPDM
- **Calculateur** : Surface toiture × type de couverture → prix estimé
- **Urgence** : Encadré rouge "Infiltration ? Intervention rapide en {PROVINCE}"
- **Primes** : Primes isolation toiture (type.id 30002) combinées

---

## Structure des pages

```
/                                  → Homepage (hero drone toiture)
/devis                             → Formulaire natif Bobex (type.id 11962)
/renovation-toiture/[slug]         → Pages communes (271)
/tuiles · /ardoise · /zinc · /toiture-plate
/isolation-toiture                 → Guide isolation sous-toiture
/guides + /guides/[slug]
/faq · /mentions-legales
```

## Guides piliers (7)
1. Prix rénovation toiture Belgique 2025 : au m² par type de couverture
2. Tuiles en Belgique : Koramic, Wienerberger et alternatives
3. Toiture ardoise : prix, pose et durée de vie
4. Toiture plate EPDM : étanchéité, prix et entretien
5. Isolation sous-toiture : sarking vs entre-chevrons vs sous-rampants
6. Charpente : signes de fatigue et prix de rénovation
7. Zinguerie : chéneaux, gouttières, noues — prix et entretien

## Maillage externe
- `primes-isolation-wallonie.be` → "primes isolation toiture en Wallonie"
- `traitement-humidite-belgique.be` → "infiltrations liées à la toiture"
- `prix-chassis-belgique.be` → "fenêtres de toit et Velux"

### Repo : `baguettecroissant/prix-renovation-toiture.be` → Cloudflare Pages → 0€
