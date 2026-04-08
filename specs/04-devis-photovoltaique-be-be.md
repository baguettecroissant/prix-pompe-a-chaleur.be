# devis-photovoltaique-be.be — Project Spec

## Identité
- **Domaine** : `devis-photovoltaique-be.be`
- **Type** : EMD single-niche
- **Baseline** : Photovoltaïque — Demandez et comparez 3 devis gratuits d'installateurs certifiés
- **Ton éditorial** : Facilitateur de mise en relation. Ton direct, rassurant et orienté action. Style "service public digitalisé" : "On s'occupe de tout. Décrivez votre projet, on trouve vos 3 installateurs."
- **Persona** : Propriétaire décidé, 35-65 ans, prêt à passer à l'action MAINTENANT. A déjà fait ses recherches, veut juste des devis concrets. Urgence modérée.

## Bobex
| Catégorie | type.id | CPL BEFR | aff |
|-----------|---------|----------|-----|
| Zonnepanelen / Panneaux solaires | `11364` | **25€** | `110530` |

> **25€/lead fixe.** Ce domaine EMD est un "closer" — l'internaute tape littéralement "devis photovoltaique". Taux de conversion formulaire attendu : 15-25%. Le site entier est un funnel optimisé vers la soumission.

## Stack technique
- **Framework** : Next.js 16 (App Router, TypeScript)
- **Styling** : Vanilla CSS / Tailwind minimal
- **Hébergement** : Cloudflare Pages (Static Export `output: 'export'`)
- **Données** : JSON statique (communes-be.json)
- **Monétisation** : Formulaire natif multi-étapes + Cloudflare Function proxy → Bobex API

---

## 🎨 Design System (UNIQUE — CONVERSION FUNNEL / TRUST)

### Typographie
- **Headings** : `Plus Jakarta Sans` (forte, moderne, confiance tech)
- **Body** : `Lato` (neutre, universelle, grand public)
- **Data/prix** : `Tabular Nums` (chiffres alignés dans les tableaux)

### Palette
```css
--primary: #2563EB;        /* Blue-600 — confiance */
--primary-light: #EFF6FF;  /* Blue-50 */
--secondary: #D97706;      /* Amber-600 — urgence douce */
--accent: #059669;         /* Emerald-600 — validé/gratuit */
--text: #1E293B;           /* Slate-800 */
--bg: #EFF6FF;             /* Blue-50 — fond confiance */
--card-bg: #FFFFFF;
--success: #059669;        /* Green — étape validée */
--step-active: #2563EB;    /* Blue — étape courante */
--step-done: #059669;      /* Green — étape passée */
```

### Layout Homepage
- **Hero** : Formulaire multi-étapes directement dans le hero (pas de scroll nécessaire). Fond bleu pâle. Compteur "3 247 demandes ce mois" (social proof). Grosse headline "3 Devis Gratuits en 2 Minutes".
- **Style** : Conversion-first. Le formulaire EST le hero. Tout le reste est du trust content (témoignages, logos installateurs, chiffres clés). Le plus épuré de tous les sites.
- **Icônes** : Tabler Icons stroke 1.5px, bleu + émeraude
- **Section separators** : Checkmark animé entre les sections

### Style des composants
- **Cards** : `border-radius: 14px`, fond white, double border (inner glow + outer shadow), minimal
- **Boutons CTA** : Rounded-xl, fond blue-600, text white, BIG (h-14), full-width on mobile, icône Zap
- **Badges étapes** : Cercles numérotés 1→2→3 avec ligne de connexion, progression animated
- **Social proof** : Compteur live, avatars installateurs, "Dernière demande il y a 4 min"
- **Trust bar** : "100% Gratuit | Sans Engagement | Installateurs Certifiés" — fixed top sur mobile
- **Footer** : Minimaliste, fond white, texte slate-500, juste les légales

---

## 📄 Template Page Commune (UNIQUE wording)

### Pattern titre H1
```
Devis photovoltaïque gratuit à {VILLE} ({CODE_POSTAL}) — 3 offres en 2 min
```

### Pattern intro (spintax)
```
Vous cherchez un installateur photovoltaïque à {VILLE} ? {VARIANTE_INTRO}.
Décrivez votre projet ci-dessous et recevez jusqu'à 3 devis gratuits
d'installateurs certifiés en {PROVINCE}.
```

Variantes intro :
1. "Notre service met en relation les propriétaires avec les meilleurs installateurs de la zone {CODE_POSTAL}"
2. "En moyenne, comparer 3 devis permet d'économiser 2 200€ sur une installation solaire"
3. "Les installateurs partenaires en {PROVINCE} interviennent sous 5 jours ouvrés"
4. "Service 100% gratuit et sans engagement — vous choisissez l'offre qui vous convient"

### Pattern CTA
```
Recevoir mes devis gratuits à {VILLE}
```

### Modules spécifiques
- **Formulaire intégré** : Même formulaire que l'accueil, pré-rempli avec le code postal de la ville
- **Comment ça marche** : 3 étapes illustrées (Décrivez → Comparez → Choisissez)
- **Témoignage local** : "M. Dupont à {VILLE} a économisé 2 800€ en comparant 3 devis"
- **Stats locale** : "{N} installations réalisées dans la zone {CODE_POSTAL} en 2024"

---

## Structure des pages

```
/                                  → Homepage (formulaire-hero)
/devis                             → Formulaire natif Bobex fullscreen (type.id 11364)
/devis/[slug]                      → Pages communes (271) avec formulaire pré-rempli
/comment-ca-marche                 → Process en 3 étapes
/checklist-devis                   → 10 points à vérifier sur un devis
/guides + /guides/[slug]
/faq · /mentions-legales
/sitemap.xml · /robots.txt · /llms.txt
```

## Guides piliers (5)
1. Comment lire et décrypter un devis photovoltaïque ligne par ligne
2. Bien négocier son devis solaire : 7 astuces d'experts
3. Arnaques photovoltaïque en Belgique : les signaux d'alerte
4. TVA 6% panneaux solaires : conditions d'éligibilité 2025
5. Financement solaire : prêt vert, prêt à tempérament et tiers-investisseur

## Maillage externe
- `primes-panneaux-solaires.be` → "maximisez vos primes avant de signer"
- `prix-panneaux-belgique.be` → "vérifiez le prix moyen dans votre commune"
- `comparatif-panneaux.be` → "quel panneau fait partie des 3 meilleurs ?"

---

## ⚡ Optimisation Cloudflare Pages

| Page | Route | Rendu | Config |
|------|-------|-------|--------|
| Homepage, Devis, FAQ | statiques | **Statique** | `output: 'export'` |
| Guides | `/guides/[slug]` | **SSG** | `generateStaticParams()` |
| **Pages communes** | `/devis/[slug]` | **SSG** | `generateStaticParams()` |

### Repo : `baguettecroissant/devis-photovoltaique-be.be` → Cloudflare Pages auto-deploy → Coût = 0€
