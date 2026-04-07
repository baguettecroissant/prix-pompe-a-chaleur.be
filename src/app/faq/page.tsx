import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Euro, Wrench, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "FAQ Pompe à Chaleur Belgique — 20+ Questions Répondues",
    description: "Réponses complètes à toutes vos questions sur les pompes à chaleur en Belgique : prix, primes, RESCert, PEB, entretien, marques. Guide expert 2026.",
    alternates: { canonical: 'https://www.prix-pompe-a-chaleur.be/faq' },
};

const faqCategories = [
    {
        title: "💰 Prix & Budget",
        icon: Euro,
        faqs: [
            { q: "Combien coûte une pompe à chaleur en Belgique en 2026 ?", a: "Le prix varie selon le type : PAC air-air de 2 500€ à 5 000€, PAC air-eau de 8 000€ à 15 000€, et PAC géothermique de 15 000€ à 25 000€ (pose comprise). Consultez notre guide complet des prix pour des estimations par ville et par type de logement." },
            { q: "Le prix de la PAC est-il le même partout en Belgique ?", a: "Non. Les tarifs varient de 10 à 20 % selon la province et la densité d'installateurs. Le Brabant wallon et Bruxelles sont légèrement plus chers en raison du coût de la vie et de la demande forte. Les provinces rurales (Luxembourg, Namur) offrent des tarifs légèrement inférieurs." },
            { q: "Quel est le retour sur investissement d'une PAC ?", a: "Le retour sur investissement se situe entre 5 et 8 ans en Belgique, primes déduites. Un foyer remplaçant une chaudière mazout par une PAC air/eau économise en moyenne 1 200€ à 2 000€ par an sur sa facture énergétique." },
            { q: "Faut-il prévoir des coûts cachés lors de l'installation ?", a: "Les principaux postes à anticiper : la dépose de l'ancienne cuve mazout (500-1 500€), l'adaptation du tableau électrique (200-500€), et l'éventuelle adaptation des émetteurs (radiateurs basse température ou plancher chauffant). Un devis complet doit détailler tous ces postes." },
        ]
    },
    {
        title: "🏛️ Primes & Aides financières",
        icon: Shield,
        faqs: [
            { q: "Quelles sont les primes en Wallonie pour une PAC ?", a: "La Prime Habitation wallonne peut atteindre 6 000€ pour l'installation d'une PAC air/eau, selon vos revenus. Un Audit Logement préalable est obligatoire. Le dispositif Rénopack combine prime et prêt à taux 0% jusqu'à 60 000€. Consultez notre guide des primes Wallonie." },
            { q: "Quelles sont les primes à Bruxelles pour une PAC ?", a: "Les Primes Énergie bruxelloises via le programme Rénolution offrent jusqu'à 4 500€ pour une PAC air/eau. Le Prêt Vert bruxellois complète le financement à taux réduit. Important : la demande doit être introduite AVANT le début des travaux." },
            { q: "La prime est-elle cumulable avec la réduction d'impôt fédérale ?", a: "Oui, les primes régionales (Wallonie ou Bruxelles) sont cumulables avec la réduction d'impôt fédérale pour investissement économiseur d'énergie. Le cumul total peut atteindre 8 000 à 10 000€ de réduction sur votre investissement." },
            { q: "Qu'est-ce que le Rénopack en Wallonie ?", a: "Le Rénopack est un prêt à taux 0% (jusqu'à 60 000€) proposé par la Société Wallonne du Crédit Social. Il avance le montant des primes et finance les travaux de rénovation énergétique, y compris l'installation d'une PAC. C'est le financement idéal pour les ménages sans épargne disponible." },
        ]
    },
    {
        title: "🔧 Installation & Technique",
        icon: Wrench,
        faqs: [
            { q: "Faut-il un installateur certifié RESCert ?", a: "Oui, obligatoire. La certification RESCert est la condition nécessaire pour bénéficier des primes régionales en Belgique. Un installateur non certifié vous prive de toutes les subventions. Vérifiez sur rescert.be la liste des professionnels agréés." },
            { q: "PAC air-eau ou air-air : que choisir en Belgique ?", a: "La PAC air-eau est le choix n°1 en Belgique (80% des installations) car elle remplace directement les chaudières au mazout via les radiateurs existants. La PAC air-air est adaptée aux appartements sans réseau hydraulique. La géothermique offre les meilleures performances pour les grandes propriétés." },
            { q: "Peut-on garder ses anciens radiateurs avec une PAC ?", a: "Oui, avec une PAC haute température (65-75°C). Les radiateurs en fonte fonctionnent parfaitement avec des modèles comme le Daikin Altherma 3 H HT ou le Vaillant aroTHERM plus. Pour les radiateurs récents, une PAC basse température standard (35-45°C) suffit avec un meilleur rendement." },
            { q: "Quelle est la durée de vie d'une PAC ?", a: "Une pompe à chaleur bien entretenue dure en moyenne 15 à 20 ans. Le compresseur, pièce maîtresse, est généralement garanti 5 ans par les fabricants (Daikin, Vaillant, Mitsubishi), extensible à 10 ans avec un contrat d'entretien." },
            { q: "L'entretien est-il obligatoire en Belgique ?", a: "Oui. En Wallonie, un entretien tous les 3 ans est obligatoire pour les PAC ≥ 12 kW. À Bruxelles, le contrôle périodique est requis tous les 2 ans. Coût moyen : 150€ à 300€ par intervention. Un contrat d'entretien annuel revient à environ 200€/an." },
            { q: "Combien de temps dure l'installation ?", a: "Comptez 2 à 4 jours de travaux pour une installation standard. La dépose d'une ancienne chaudière au mazout et de la cuve peut ajouter 1 jour. Entre la signature du devis et la mise en service, prévoyez 3 à 8 semaines selon la période." },
        ]
    },
    {
        title: "📋 Réglementation & PEB",
        icon: BookOpen,
        faqs: [
            { q: "Qu'est-ce que le certificat PEB ?", a: "Le PEB (Performance Énergétique des Bâtiments) est l'équivalent belge du DPE français. Il classe votre logement de A à G. L'installation d'une PAC améliore généralement le PEB de 1 à 2 classes, augmentant la valeur de votre bien de 3 à 5% par classe gagnée." },
            { q: "Faut-il un permis d'urbanisme pour une PAC ?", a: "En règle générale, l'unité extérieure d'une PAC ne nécessite pas de permis si elle respecte les distances réglementaires (3m minimum des limites de propriété). À Bruxelles, un permis peut être requis pour les unités visibles depuis la voie publique. Consultez votre service urbanisme communal." },
            { q: "La chaudière mazout sera-t-elle interdite en Belgique ?", a: "Oui. En Wallonie, l'installation de nouvelles chaudières mazout est interdite depuis mars 2025. La Flandre l'a devancée depuis 2022. Bruxelles vise la sortie complète des énergies fossiles avant 2050 via le programme Rénolution." },
            { q: "Daikin, Vaillant ou Mitsubishi en Belgique ?", a: "Daikin dispose d'une usine à Ostende, offrant un SAV local optimal. Vaillant a un réseau historique très dense. Mitsubishi Zubadan est imbattable pour les régions froides (Ardenne, Luxembourg belge). Le choix dépend de votre localisation et de votre budget." },
        ]
    },
];

export default function FAQPage() {
    const allFaqs = faqCategories.flatMap(c => c.faqs);

    return (
        <div className="min-h-screen bg-slate-50">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": allFaqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a }
                }))
            })}} />

            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "FAQ" }]} />
                    <div className="max-w-3xl mt-6">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Foire Aux <span className="text-teal-400">Questions</span></h1>
                        <p className="text-xl text-slate-300">Tout ce que vous devez savoir avant d&apos;installer une pompe à chaleur en Belgique. {allFaqs.length} questions répondues par nos experts.</p>
                    </div>
                </div>
            </section>

            {/* Quick nav */}
            <section className="bg-white border-b border-slate-200 py-4">
                <div className="container mx-auto px-4 flex flex-wrap gap-3 justify-center">
                    {faqCategories.map((cat, i) => (
                        <a key={i} href={`#cat-${i}`} className="text-sm font-medium text-slate-600 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 px-4 py-2 rounded-full border border-slate-200 hover:border-teal-200 transition-colors">
                            {cat.title}
                        </a>
                    ))}
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl space-y-10">
                    {faqCategories.map((cat, ci) => (
                        <div key={ci} id={`cat-${ci}`}>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h2>
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                                <Accordion type="single" collapsible className="w-full">
                                    {cat.faqs.map((f, fi) => (
                                        <AccordionItem key={fi} value={`faq-${ci}-${fi}`} className="border-b-slate-200 last:border-b-0">
                                            <AccordionTrigger className="text-base font-bold text-slate-900 py-5 px-6">{f.q}</AccordionTrigger>
                                            <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-5 px-6">{f.a}</AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Internal linking mesh */}
            <section className="py-12 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Approfondir le sujet</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            { href: "/guides/prix-pompe-a-chaleur-belgique", label: "Guide complet des prix PAC en Belgique", tag: "Guide" },
                            { href: "/guides/primes-pompe-a-chaleur-wallonie", label: "Primes pompe à chaleur en Wallonie", tag: "Primes" },
                            { href: "/guides/primes-pompe-a-chaleur-bruxelles", label: "Primes Rénolution à Bruxelles", tag: "Primes" },
                            { href: "/guides/air-eau-vs-air-air-vs-geothermique", label: "Comparatif Air/Eau vs Air/Air vs Géo", tag: "Guide" },
                            { href: "/guides/remplacement-chaudiere-mazout", label: "Remplacement chaudière mazout", tag: "Guide" },
                            { href: "/guides/certificat-peb-belgique", label: "Comprendre le certificat PEB", tag: "PEB" },
                            { href: "/guides/entretien-pompe-a-chaleur-belgique", label: "Entretien PAC : obligations et coûts", tag: "Entretien" },
                            { href: "/guides/daikin-vs-vaillant-vs-mitsubishi-belgique", label: "Daikin vs Vaillant vs Mitsubishi", tag: "Marques" },
                            { href: "/devis", label: "Demander 3 devis gratuits", tag: "Devis" },
                            { href: "/annuaire", label: "Trouver un installateur par province", tag: "Annuaire" },
                        ].map(link => (
                            <Link key={link.href} href={link.href} className="flex items-center justify-between bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-200 rounded-xl px-4 py-3 group transition-colors">
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-teal-600 tracking-wider">{link.tag}</span>
                                    <p className="text-sm font-medium text-slate-700 group-hover:text-teal-700">{link.label}</p>
                                </div>
                                <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-teal-500 shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-teal-50 text-center border-t border-teal-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-extrabold text-teal-950 mb-4">Vous avez un projet ?</h2>
                    <p className="text-lg text-teal-800 mb-8">Obtenez 3 devis gratuits et comparez les offres d&apos;installateurs RESCert.</p>
                    <Link href="/devis"><Button size="lg" className="bg-teal-600 text-white hover:bg-teal-700 font-bold text-lg px-10 py-6 rounded-full shadow-xl">Comparer les devis<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                </div>
            </section>
        </div>
    );
}
