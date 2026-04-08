# primes-isolation-wallonie.be — Project Spec

## Identité
- **Domaine** : `primes-isolation-wallonie.be`
- **Type** : EMD single-niche (mono-région)
- **Baseline** : Isolation — Primes habitation Wallonie : toiture, murs, sol et audit PEB
- **Ton éditorial** : Conseiller habitat wallon. On parle lambda, R-value, PEB, cellulose, polyuréthane projeté, crépi sur isolant. Ton chaleureux et ancré dans le territoire wallon : "Votre maison en Wallonie perd de la chaleur ? Voici vos primes."
- **Persona** : Propriétaire wallon d'une maison de +20 ans (brique pleines, simple vitrage), 40-65 ans, facture mazout/gaz > 2 500€/an, veut isoler mais craint le coût. Budget rénov 15 000-40 000€.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Isolation (général) | `11427` | **35€** | `110530` |
| Isolation toiture | `30002` | **35€** | `110530` |
| Isolation murs (ext.) | `30056` | **35€** | `110530` |
| Isolation sol | `30004` | **35€** | `110530` |

> **35€/lead fixe 🔥 — Le CPL le plus élevé du réseau après la toiture.** Le marché wallon de l'isolation explose avec les nouvelles obligations PEB. L'internaute qui cherche "primes isolation wallonie" a un projet concret et veut être accompagné. Ticket moyen 8 000-25 000€. Volume de recherche massif.

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Styling** : Vanilla CSS / Tailwind minimal
- **Hébergement** : Cloudflare Pages (Static Export `output: 'export'`)
- **Données** : JSON statique (communes-wallonnes.json, primes-habitation.json)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — HABITAT / WARMTH / TERRITORIAL)

### Typographie
- **Headings** : `Bricolage Grotesque` (friendly, artisanal, "travaux maison")
- **Body** : `Work Sans` (propre, lisible, contemporain)
- **Data/prix** : `Roboto Mono` (pour les montants de primes)

### Palette
```css
--primary: #C2410C;        /* Orange-700 — terracotta/brique */
--primary-light: #FFF7ED;  /* Orange-50 */
--secondary: #166534;      /* Green-800 — forêt ardennaise */
--accent: #D4A574;         /* Beige chaud — confort */
--text: #292524;           /* Stone-800 — terre */
--bg: #FEFCE8;             /* Yellow-50 — chaleur intérieure */
--card-bg: #FFFFFF;
--region: #E11D48;         /* Rose-600 — Wallonie officiel */
--peb-a: #16A34A;          /* Green — bon PEB */
--peb-g: #DC2626;          /* Red — mauvais PEB */
--savings: #059669;        /* Emerald — économies */
```

### Layout Homepage
- **Hero** : Maison wallonne en brique rouge avec thermographie infrarouge (rouge = déperditions, vert = isolé). Compteur "Jusqu'à 70% de primes sur vos travaux". Fond jaune chaud, CTA terracotta.
- **Style** : Territorial et chaleureux. Cards avec icônes "maison" (mur, toit, sol). Encadrés "Le saviez-vous ?" style carte postale wallonne. Ambiance "cocon domestique".
- **Icônes** : Feather Icons stroke 2px, terracotta + vert
- **Section separators** : Motif brique stylisé SVG (ligne horizontale)

### Style des composants
- **Cards** : `border-radius: 8px` (anguleux, style brique), fond white, border-left 4px terracotta, shadow-sm
- **Boutons CTA** : Rounded-md, fond orange-700, text white, hover bg-orange-800, icône Home
- **Badges PEB** : Échelle de couleur A (vert) → G (rouge), style étiquette énergie EU
- **Calculateur primes** : "Sélectionnez votre type d'isolation → montant estimé"
- **Checklist** : "Les 6 conditions pour obtenir la prime habitation"
- **Footer** : Fond stone-800, accent beige, logos partenaires wallons

---

## 📄 Template Page Commune (UNIQUE wording)

### Pattern titre H1
```
Primes isolation à {VILLE} ({CODE_POSTAL}) — Montants Wallonie 2025
```

### Pattern intro (spintax)
```
Vous envisagez des travaux d'isolation à {VILLE} ? {VARIANTE_INTRO}.
La commune de {VILLE} en {PROVINCE} donne accès aux primes habitation wallonnes
pouvant couvrir jusqu'à {PRIME_PCT}% du coût des travaux.
```

Variantes intro :
1. "La Wallonie offre les primes isolation les plus généreuses du pays — jusqu'à 70% pour les ménages à revenus modestes"
2. "Avec un PEB moyen de {PEB} dans la zone {CODE_POSTAL}, l'isolation est le meilleur investissement énergie"
3. "Les entrepreneurs isolateurs actifs à {VILLE} réalisent en moyenne {N} chantiers par mois"
4. "Isoler sa toiture reste le geste n°1 pour réduire sa facture de chauffage de 30%"

### Pattern CTA
```
Estimer mes primes isolation à {VILLE}
```

### Modules spécifiques
- **Calculateur primes** : Type d'isolation + revenus du ménage → prime estimée
- **Classement PEB** : PEB moyen du parc immobilier dans la commune vs moyenne wallonne
- **Guide travaux** : "Toiture → Murs → Sol : l'ordre optimal pour isoler"
- **Encadré fiscal** : "TVA 6% pour les habitations de +10 ans en Wallonie"
- **Auditeur PEB** : Lien vers le listing des auditeurs PAE agréés dans la zone

---

## Structure des pages

```
/                                  → Homepage (hero maison brique + thermographie)
/devis                             → Formulaire natif Bobex (type.id 11427)
/primes-isolation/[slug]           → Pages communes wallonnes (262)
/isolation-toiture                 → Guide primes toiture (type.id 30002)
/isolation-murs                    → Guide primes murs (type.id 30056)
/isolation-sol                     → Guide primes sol (type.id 30004)
/audit-energetique                 → Audit PAE : processus et coût
/guides + /guides/[slug]
/faq · /mentions-legales
/sitemap.xml · /robots.txt · /llms.txt
```

## Guides piliers (7)
1. Primes isolation Wallonie 2025 : montants, conditions et démarches officielles
2. Isolation toiture : techniques, prix et primes spécifiques
3. Isolation murs par l'extérieur (ETICS) : prix au m² et retour sur investissement
4. Isolation sol : performance vs contraintes (vide ventilé, dalle)
5. Certificat PEB en Wallonie : comprendre et améliorer sa note
6. Matériaux isolants comparés : laine de verre, cellulose, PUR, PIR, EPS
7. Prime habitation 2025 : conditions de revenus et calcul du montant

## Maillage externe
- `prix-chassis-belgique.be` → "complétez votre isolation par de nouveaux châssis"
- `traitement-humidite-belgique.be` → "avant d'isoler, traitez les problèmes d'humidité"
- `prix-renovation-toiture.be` → "combinez rénovation toiture + isolation"

---

## ⚡ Optimisation Cloudflare Pages

| Page | Route | Rendu | Config |
|------|-------|-------|--------|
| Homepage, Devis, FAQ | statiques | **Statique** | `output: 'export'` |
| Guides + Piliers | `/guides/[slug]` | **SSG** | `generateStaticParams()` |
| **Pages communes** | `/primes-isolation/[slug]` | **SSG** | `generateStaticParams()` |

### Repo : `baguettecroissant/primes-isolation-wallonie.be` → Cloudflare Pages auto-deploy → Coût = 0€
