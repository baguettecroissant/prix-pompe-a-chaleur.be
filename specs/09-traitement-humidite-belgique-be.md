# traitement-humidite-belgique.be — Project Spec

## Identité
- **Domaine** : `traitement-humidite-belgique.be`
- **Type** : EMD single-niche
- **Baseline** : Humidité — Diagnostic, traitement et assèchement des murs en Belgique
- **Ton éditorial** : Expert en pathologie du bâtiment. On parle remontées capillaires, condensation, infiltrations latérales, mérule, salpêtre, barrière d'étanchéité par injection. Ton sérieux et alarmant (sans exagérer) : "L'humidité détruit silencieusement votre maison. Agissez maintenant."
- **Persona** : Propriétaire belge inquiet, 35-65 ans, observe des taches, moisissures, odeur de moisi, papier peint qui décolle. Souvent maison avant 1980, murs en brique sans fondations modernes. Urgence émotionnelle forte.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Traitement de l'humidité | `11461` | **25€** | `110530` |

> **25€/lead fixe.** L'humidité est le problème de bâtiment n°1 en Belgique (climat humide + vieux parc immobilier). Lead émotionnel : le propriétaire veut un diagnostic RAPIDE. Ticket moyen 3 000-15 000€.

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Hébergement** : Cloudflare Pages (Static Export)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — SANTÉ BÂTIMENT / CLINIQUE)

### Typographie
- **Headings** : `Figtree` (propre, moderne, rassurante)
- **Body** : `Atkinson Hyperlegible` (ultra-lisible, inclusif, sérieux)
- **Data/prix** : `Victor Mono`

### Palette
```css
--primary: #0E7490;        /* Cyan-700 — eau/humidité */
--primary-light: #ECFEFF;  /* Cyan-50 */
--secondary: #365314;      /* Lime-800 — moisissure */
--accent: #DC2626;         /* Red-600 — alerte/danger */
--text: #1C1917;           /* Stone-900 */
--bg: #ECFEFF;             /* Cyan-50 — fond "eau" pâle */
--card-bg: #FFFFFF;
--danger: #DC2626;         /* Red — mérule/urgence */
--warning: #EA580C;        /* Orange — condensation */
--healthy: #16A34A;        /* Green — sain */
--moisture: #06B6D4;       /* Cyan — eau */
```

### Layout Homepage
- **Hero** : Mur intérieur avec taches d'humidité marquées (photo pro, pas répugnante). Hygromètre digital affiché. "Votre mur est-il malade ? Diagnostic gratuit." Fond cyan pâle, CTA rouge urgence.
- **Style** : Clinique du bâtiment. Cards avec "symptômes" et "diagnostics" (style médical appliqué au bâtiment). Schémas techniques (remontées capillaires). Check-ups visuels.
- **Icônes** : Phosphor Icons duotone, cyan + rouge
- **Section separators** : Goutte d'eau SVG animée

### Style des composants
- **Cards** : `border-radius: 10px`, fond white, border-left 4px gradient (cyan → rouge selon gravité)
- **Boutons CTA** : Rounded-lg, fond red-600, text white, icône AlertTriangle, "Diagnostic Gratuit"
- **Badges** : "Urgent" en red, "Modéré" en orange, "Préventif" en green
- **Diagnostic** : Quiz "Où est l'humidité ?" : cave, mur, fenêtre, plafond → type probable
- **Schéma technique** : SVG interactif coupe de mur avec zones d'humidité annotées
- **Footer** : Fond slate-800, accent cyan-300, numéro urgence moisture

---

## 📄 Template Page Commune

### Pattern titre H1
```
Traitement humidité à {VILLE} ({CODE_POSTAL}) — Diagnostic et solutions 2025
```

### Pattern intro
```
Des problèmes d'humidité dans votre maison à {VILLE} ? {VARIANTE_INTRO}.
Les experts en assèchement de la zone {CODE_POSTAL} proposent un diagnostic gratuit
et des solutions durables contre les remontées capillaires, la condensation et les infiltrations.
```

### Modules spécifiques
- **Quiz diagnostic** : "Quel type d'humidité avez-vous ?" → résultat + solution
- **Symptômes** : Galerie photo des signes (salpêtre, moisissure, buée, papier peint)
- **Solutions** : Injection, drainage, VMC, cuvelage — comparatif prix
- **Urgence mérule** : Encadré rouge "Champignon mérule : traitement obligatoire sous peine d'amende"
- **Santé** : Impact de l'humidité sur la santé (asthme, allergies)

---

## Structure des pages

```
/                                  → Homepage (hero diagnostic humidité)
/devis                             → Formulaire natif Bobex (type.id 11461)
/traitement-humidite/[slug]        → Pages communes (271)
/remontees-capillaires · /condensation · /infiltrations · /merule
/diagnostic                        → Auto-diagnostic en ligne
/guides + /guides/[slug]
/faq · /mentions-legales
```

## Guides piliers (6)
1. Traitement humidité en Belgique : prix, techniques et devis
2. Remontées capillaires : causes, diagnostic et injection
3. Condensation et ventilation : VMC simple vs double flux
4. Mérule en Belgique : détection, traitement et obligations légales
5. Cuvelage cave : prix au m² et alternatives
6. Impact de l'humidité sur la santé : études et recommandations belges

## Maillage externe
- `expert-humidite-be.be` → "trouvez un expert certifié proche"
- `primes-isolation-wallonie.be` → "avant d'isoler, traitez l'humidité"
- `prix-renovation-toiture.be` → "infiltrations par la toiture ?"

### Repo : `baguettecroissant/traitement-humidite-belgique.be` → Cloudflare Pages → 0€
