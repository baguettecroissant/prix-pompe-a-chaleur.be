# comparateur-chassis.be — Project Spec

## Identité
- **Domaine** : `comparateur-chassis.be`
- **Type** : EMD single-niche
- **Baseline** : Châssis — Comparez les menuisiers et recevez des offres chiffrées
- **Ton éditorial** : Courtier en menuiserie. Ton commercial mais honnête, orienté mise en relation : "Ne signez pas le premier devis. Comparez 3 menuisiers de votre région et économisez en moyenne 2 800€."
- **Persona** : Propriétaire belge qui a DÉJÀ un devis ou qui en cherche, 35-60 ans, veut un benchmark. Souvent en couple, décision partagée. Budget 10 000-30 000€.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Châssis, portes et fenêtres | `11452` | **25€** | `110530` |

> **25€/lead fixe.** Le mot "comparateur" indique un lead en phase de décision finale. Conversion très élevée. Ce site est le pendant "action" de prix-chassis-belgique.be.

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Hébergement** : Cloudflare Pages (Static Export)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — MARKETPLACE / COMPARATEUR)

### Typographie
- **Headings** : `Manrope` (géométrique, confiance, fintech-like)
- **Body** : `Public Sans` (gov-style, neutre, accessible)
- **Data/prix** : `Overpass Mono`

### Palette
```css
--primary: #0F766E;        /* Teal-700 — confiance pro */
--primary-light: #F0FDFA;  /* Teal-50 */
--secondary: #7C3AED;      /* Violet — premium */
--accent: #F97316;         /* Orange — CTA action */
--text: #0F172A;           /* Slate-900 */
--bg: #F0FDFA;             /* Teal-50 */
--card-bg: #FFFFFF;
--rank-1: #F59E0B;         /* Gold — 1er */
--rank-2: #94A3B8;         /* Silver — 2ème */
--rank-3: #B45309;         /* Bronze — 3ème */
```

### Layout Homepage
- **Hero** : Interface de comparateur avec 3 colonnes "Menuisier A / B / C" en preview. Barre de recherche code postal proéminente. "Comparez les meilleurs menuisiers de votre commune".
- **Style** : Marketplace/fintech. Cards classement avec avatar pro, note, nombre d'avis. Tableaux comparatifs interactifs avec tri. Style "Trustpilot rencontre Immoweb".
- **Icônes** : Heroicons solid, teal + orange
- **Section separators** : Trait horizontal teal avec diamant central

### Style des composants
- **Cards** : `border-radius: 12px`, fond white, border 1px, hover shadow-lg, badge "Recommandé"
- **Boutons CTA** : Rounded-lg, fond orange-500, text white, pulse subtle, "Comparer maintenant"
- **Classement** : Podium visuel avec médailles (or/argent/bronze)
- **Critères** : Slider interactif (prix, qualité, délais)
- **Footer** : Fond slate-900, accent teal-300

---

## 📄 Template Page Commune

### Pattern titre H1
```
Comparateur châssis à {VILLE} — Meilleurs menuisiers {CODE_POSTAL}
```

### Modules spécifiques
- **Formulaire code postal** : Pré-rempli, "Trouvez les 3 meilleurs menuisiers à {VILLE}"
- **Nombre pros** : "{N} menuisiers certifiés dans un rayon de 30 km"
- **Économie** : "Les habitants de {VILLE} économisent en moyenne 2 800€ en comparant"

---

## Structure des pages

```
/                                  → Homepage (comparateur-hero)
/devis                             → Formulaire natif Bobex (type.id 11452)
/comparateur/[slug]                → Pages communes (271)
/guide-comparaison                 → Comment bien comparer
/criteres-qualite                  → Les 8 critères d'un bon menuisier
/guides + /guides/[slug]
/faq · /mentions-legales
```

## Guides piliers (5)
1. Comment comparer les devis châssis : 8 critères essentiels
2. Menuisier indépendant vs grande enseigne : avantages et inconvénients
3. Délais de livraison châssis en Belgique : à quoi s'attendre
4. Garantie châssis : ce que couvre (ou pas) votre menuisier
5. Remplacement partiel ou total : quand faut-il tout changer ?

## Maillage externe
- `prix-chassis-belgique.be` → "consultez les prix moyens par matériau"
- `primes-isolation-wallonie.be` → "primes châssis en Wallonie"
- `prix-renovation-toiture.be` → "fenêtres de toit dans votre devis"

### Repo : `baguettecroissant/comparateur-chassis.be` → Cloudflare Pages → 0€
