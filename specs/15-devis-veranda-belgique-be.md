# devis-veranda-belgique.be — Project Spec

## Identité
- **Domaine** : `devis-veranda-belgique.be`
- **Type** : EMD single-niche
- **Baseline** : Véranda — Devis, prix et construction en Belgique
- **Ton éditorial** : Architecte d'intérieur passionné. On parle véranda aluminium, bois-alu, polycarbonate vs verre trempé, toit ouvrant, store intégré, chauffage sol, permis d'urbanisme. Ton inspirant et concret : "Agrandissez votre maison sans déménager. Une véranda transforme votre quotidien."
- **Persona** : Propriétaire belge 40-65 ans, maison avec jardin, rêve d'une pièce de vie supplémentaire lumineuse. Projet réfléchi (6-12 mois de réflexion). Budget 15 000-45 000€.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Véranda | `30163` | **20€** | `110530` |

> **20€/lead fixe.** La véranda est un achat "plaisir de vivre" avec un ticket moyen très élevé (20 000-40 000€). Le cycle de vente est plus long mais le lead "devis veranda" est en phase finale de décision. Marché saisonnier (pics au printemps).

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Hébergement** : Cloudflare Pages (Static Export)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — LIFESTYLE / LUMINEUX / JARDIN)

### Typographie
- **Headings** : `Playfair Display` (élégant, lifestyle, premium feel)
- **Body** : `Jost` (géométrique, contemporain, aérien)
- **Data/prix** : `Space Grotesk`

### Palette
```css
--primary: #15803D;        /* Green-700 — jardin/nature */
--primary-light: #F0FDF4;  /* Green-50 */
--secondary: #78350F;      /* Amber-900 — bois */
--accent: #F5F5F4;         /* Stone-100 — lumière */
--text: #14532D;           /* Green-900 */
--bg: #F0FDF4;             /* Green-50 — fond nature */
--card-bg: #FFFFFF;
--glass: #DBEAFE;          /* Blue-100 — vitrages */
--wood: #92400E;           /* Amber-800 — bois chêne */
--alu: #9CA3AF;            /* Gray-400 — aluminium */
--light: #FEF9C3;          /* Yellow-100 — lumière soleil */
```

### Layout Homepage
- **Hero** : Intérieur d'une véranda luxueuse en alu/bois avec vue jardin belge (gazon, haie, pluie douce dehors mais confort dedans). Lumière naturelle abondante, plantes vertes. "Votre nouvelle pièce à vivre, baignée de lumière". CTA vert nature.
- **Style** : Lifestyle aspirationnel. Galeries photos avant/après, carrousels de réalisations. Style magazine déco (Elle Décoration / Marie Claire Maison). Beaucoup de photos de vérandas belges réelles.
- **Icônes** : Lucide Icons stroke 1.5px, vert + ambre
- **Section separators** : Feuille SVG stylisée ou verre biseauté

### Style des composants
- **Cards** : `border-radius: 20px`, fond white, shadow-lg, image hero en haut, effet parallax
- **Boutons CTA** : Rounded-xl, fond green-700, text white, icône Sparkles, "Imaginez votre Véranda"
- **Badges** : "Sur mesure" en green, "Bois-Alu" en amber, "Clé en main" en sky
- **Galerie** : Carrousel fullwidth de réalisations avec filtre (classique/contemporain/victorien)
- **Configurateur** : "Surface × Matériau × Toiture → estimation de prix"
- **Inspiration** : Section "Idées & Tendances" avec photos curatées
- **Footer** : Fond green-900, accent amber-300, inspiration nature

---

## 📄 Template Page Commune

### Pattern titre H1
```
Véranda à {VILLE} ({CODE_POSTAL}) — Prix et constructeurs 2025
```

### Pattern intro
```
Envie d'une véranda à {VILLE} ? {VARIANTE_INTRO}.
Les vérandalistes en {PROVINCE} construisent des vérandas sur mesure
entre {PRIX_MIN}€ et {PRIX_MAX}€ selon la surface et le matériau choisi.
```

Variantes intro :
1. "Une véranda ajoute en moyenne 15-20% de valeur à votre bien immobilier"
2. "Les vérandas alu et bois-alu dominent le marché belge pour leur rapport qualité/durabilité"
3. "Le climat belge rend la véranda idéale : profitez du jardin 12 mois par an"
4. "Permis d'urbanisme, isolation thermique, orientation : voici tout ce qu'il faut savoir"

### Modules spécifiques
- **Configurateur** : "Surface (10-40m²) × Matériau × Type de toit → prix indicatif"
- **Galerie locale** : "Réalisations récentes en {PROVINCE}"
- **Urbanisme** : "Permis de bâtir à {VILLE} : démarches et délais"
- **Matériaux** : Comparatif PVC vs Alu vs Bois vs Bois-Alu
- **Chauffage** : "Chauffer une véranda : solutions et coûts"

---

## Structure des pages

```
/                                  → Homepage (hero véranda lumineuse)
/devis                             → Formulaire natif Bobex (type.id 30163)
/veranda/[slug]                    → Pages communes (271)
/aluminium · /bois · /pvc · /bois-alu · /victorien
/permis-urbanisme                  → Guide permis par commune
/inspirations                      → Galerie de réalisations
/guides + /guides/[slug]
/faq · /mentions-legales
```

## Guides piliers (7)
1. Prix véranda en Belgique 2025 : au m² par matériau et configuration
2. Véranda aluminium vs bois vs PVC : le guide des matériaux
3. Permis d'urbanisme véranda : règles par région et par commune
4. Isolation véranda : double vitrage, toit opaque et chauffage
5. Véranda 4 saisons : aménagement et confort toute l'année
6. Véranda victorienne ou contemporaine : styles et tendances belges
7. Rentabilité véranda : plus-value immobilière et coût d'usage

## Marques
Willemen, Verandair, Veranda Royal, Reynaers (profilés alu), Keller

## Maillage externe
- `comparateur-chassis.be` → "les baies vitrées de votre véranda"
- `prix-chassis-belgique.be` → "vitrages haute performance pour vérandas"
- `prix-alarme-belgique.be` → "sécurisez aussi votre véranda"

### Repo : `baguettecroissant/devis-veranda-belgique.be` → Cloudflare Pages → 0€
