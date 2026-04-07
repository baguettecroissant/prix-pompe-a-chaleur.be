import { Metadata } from "next";
import Link from "next/link";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Shield, CheckCircle, ArrowRight, Clock, Users, Award, Wrench, Zap, FileText, ThermometerSun } from "lucide-react";

export const metadata: Metadata = {
    title: "Devis Pompe à Chaleur Gratuit — Comparez 3 Offres RESCert",
    description: "Demandez votre devis gratuit pour une pompe à chaleur en Belgique. Comparez les prix de 3 installateurs certifiés RESCert près de chez vous.",
    alternates: { canonical: 'https://www.prix-pompe-a-chaleur.be/devis' },
};

export default function DevisPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Devis pompe à chaleur Belgique",
                "description": "Service gratuit de comparaison de devis pour l'installation de pompes à chaleur en Belgique par des installateurs certifiés RESCert.",
                "provider": { "@type": "Organization", "name": "Prix-Pompe-a-Chaleur.be" },
                "areaServed": { "@type": "Country", "name": "Belgium" },
                "serviceType": "Comparaison de devis pompe à chaleur"
            })}} />

            {/* Hero */}
            <section className="bg-teal-950 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Devis Gratuit" }]} />
                    <div className="max-w-3xl mt-6">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Votre <span className="text-teal-400">Devis Gratuit</span> en 2 minutes
                        </h1>
                        <p className="text-xl text-slate-300">
                            Renseignez votre projet ci-dessous et recevez jusqu&apos;à 3 propositions chiffrées d&apos;installateurs certifiés RESCert en Belgique.
                        </p>
                    </div>
                </div>
            </section>

            {/* Steps Process */}
            <section className="bg-white border-b border-slate-200 py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { step: "1", icon: FileText, label: "Décrivez votre projet", sub: "Type de PAC, surface, isolation" },
                            { step: "2", icon: Users, label: "3 installateurs répondent", sub: "Certifiés RESCert en Belgique" },
                            { step: "3", icon: ThermometerSun, label: "Comparez les devis", sub: "Prix, marques, garanties" },
                            { step: "4", icon: Wrench, label: "Choisissez & installez", sub: "Primes incluses dans le calcul" },
                        ].map(s => (
                            <div key={s.step} className="text-center">
                                <div className="w-10 h-10 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">{s.step}</div>
                                <p className="text-sm font-bold text-slate-800">{s.label}</p>
                                <p className="text-xs text-slate-500">{s.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Widget + Sidebar */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8">
                            <ViteUnDevisWidget />
                        </div>
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-teal-600" /> Pourquoi nous faire confiance ?
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" /><span>Service 100% gratuit et sans engagement</span></li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" /><span>Installateurs certifiés RESCert uniquement</span></li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" /><span>Jusqu&apos;à 6 000€ de primes déductibles</span></li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" /><span>Comparez 3 devis pour trouver le juste prix</span></li>
                                </ul>
                            </div>

                            {/* Internal linking sidebar */}
                            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Ressources utiles</h3>
                                <ul className="space-y-2">
                                    <li><Link href="/guides/prix-pompe-a-chaleur-belgique" className="text-sm text-teal-600 hover:text-teal-800 font-medium flex items-center gap-1">Prix PAC Belgique 2026 <ArrowRight className="h-3 w-3" /></Link></li>
                                    <li><Link href="/guides/primes-pompe-a-chaleur-wallonie" className="text-sm text-teal-600 hover:text-teal-800 font-medium flex items-center gap-1">Primes Wallonie <ArrowRight className="h-3 w-3" /></Link></li>
                                    <li><Link href="/guides/primes-pompe-a-chaleur-bruxelles" className="text-sm text-teal-600 hover:text-teal-800 font-medium flex items-center gap-1">Primes Bruxelles <ArrowRight className="h-3 w-3" /></Link></li>
                                    <li><Link href="/guides/remplacement-chaudiere-mazout" className="text-sm text-teal-600 hover:text-teal-800 font-medium flex items-center gap-1">Remplacement mazout <ArrowRight className="h-3 w-3" /></Link></li>
                                    <li><Link href="/guides/air-eau-vs-air-air-vs-geothermique" className="text-sm text-teal-600 hover:text-teal-800 font-medium flex items-center gap-1">Comparatif Air/Eau vs Géo <ArrowRight className="h-3 w-3" /></Link></li>
                                    <li><Link href="/faq" className="text-sm text-teal-600 hover:text-teal-800 font-medium flex items-center gap-1">FAQ complète <ArrowRight className="h-3 w-3" /></Link></li>
                                </ul>
                            </div>

                            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                                <h3 className="font-bold text-teal-900 mb-2">💡 Le saviez-vous ?</h3>
                                <p className="text-sm text-teal-800">
                                    Un foyer belge économise en moyenne <strong>1 400€ par an</strong> en passant d&apos;une chaudière mazout à une pompe à chaleur air-eau. Le retour sur investissement se fait en 5 à 8 ans.
                                </p>
                            </div>

                            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                <h3 className="font-bold text-amber-900 mb-2">📊 Tarifs moyens 2026</h3>
                                <ul className="space-y-1.5 text-sm text-amber-800">
                                    <li><strong>Air/Eau :</strong> 8 000€ – 15 000€</li>
                                    <li><strong>Air/Air :</strong> 2 500€ – 5 000€</li>
                                    <li><strong>Géothermique :</strong> 15 000€ – 25 000€</li>
                                </ul>
                                <Link href="/guides/prix-pompe-a-chaleur-belgique" className="text-xs text-amber-700 hover:text-amber-900 font-semibold mt-3 inline-flex items-center gap-1">
                                    Guide complet des prix <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert content section — SEO authority */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Comment bien comparer les devis PAC en Belgique ?</h2>
                    <div className="prose prose-slate max-w-none">
                        <p>Comparer les devis de pompe à chaleur est une étape cruciale pour optimiser votre investissement. En Belgique, où les prix varient significativement entre installateurs (écarts de 20 à 40 % constatés), la mise en concurrence par au moins 3 devis est fortement recommandée par les <Link href="/faq" className="text-teal-600 font-semibold">Guichets Énergie régionaux</Link>.</p>

                        <h3>Les 5 points clés à vérifier sur chaque devis</h3>
                        <ol>
                            <li><strong>La certification RESCert</strong> — Obligatoire pour accéder aux <Link href="/guides/primes-pompe-a-chaleur-wallonie" className="text-teal-600 font-semibold">primes wallonnes</Link> et <Link href="/guides/primes-pompe-a-chaleur-bruxelles" className="text-teal-600 font-semibold">bruxelloises</Link>. Exigez le numéro de certification.</li>
                            <li><strong>Le dimensionnement (kW)</strong> — Un installateur sérieux effectue un <Link href="/guides/certificat-peb-belgique" className="text-teal-600 font-semibold">calcul de déperditions thermiques</Link> basé sur votre PEB, votre superficie et votre isolation.</li>
                            <li><strong>La marque et le modèle exact</strong> — Comparez des pompes de puissance et qualité équivalentes. Les leaders belges sont <Link href="/marques/daikin" className="text-teal-600 font-semibold">Daikin</Link>, <Link href="/marques/vaillant" className="text-teal-600 font-semibold">Vaillant</Link> et <Link href="/marques/mitsubishi" className="text-teal-600 font-semibold">Mitsubishi</Link>.</li>
                            <li><strong>L&apos;inclusion du ballon ECS</strong> — Le devis doit préciser si la production d&apos;eau chaude sanitaire est comprise (ballon thermodynamique intégré ou séparé).</li>
                            <li><strong>Les garanties</strong> — Garantie compresseur (5 à 10 ans), garantie main-d&apos;œuvre (2 ans minimum), et conditions d&apos;<Link href="/guides/entretien-pompe-a-chaleur-belgique" className="text-teal-600 font-semibold">entretien obligatoire</Link>.</li>
                        </ol>

                        <h3>Quel budget prévoir selon votre situation ?</h3>
                        <p>Le <Link href="/guides/prix-pompe-a-chaleur-belgique" className="text-teal-600 font-semibold">prix d&apos;une pompe à chaleur en Belgique</Link> dépend principalement du type choisi :</p>
                        <ul>
                            <li><strong>PAC Air/Eau</strong> (80 % des installations) : 8 000€ à 15 000€ — idéale pour le <Link href="/guides/remplacement-chaudiere-mazout" className="text-teal-600 font-semibold">remplacement d&apos;une chaudière mazout</Link></li>
                            <li><strong>PAC Air/Air</strong> : 2 500€ à 5 000€ — adaptée aux appartements sans réseau hydraulique</li>
                            <li><strong>PAC Géothermique</strong> : 15 000€ à 25 000€ — <Link href="/guides/air-eau-vs-air-air-vs-geothermique" className="text-teal-600 font-semibold">performances supérieures</Link> pour les grandes propriétés</li>
                        </ul>

                        <h3>Délais d&apos;installation en 2026</h3>
                        <p>En Wallonie et à Bruxelles, comptez 3 à 8 semaines entre la signature du devis et la mise en service. Les périodes creuses (avril-septembre) offrent généralement des délais plus courts. L&apos;installation elle-même prend 2 à 4 jours.</p>
                    </div>

                    {/* Internal links mesh */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            { href: "/prix-pac/bruxelles-1000", label: "PAC Bruxelles" },
                            { href: "/prix-pac/liege-4000", label: "PAC Liège" },
                            { href: "/prix-pac/namur-5000", label: "PAC Namur" },
                            { href: "/prix-pac/charleroi-6000", label: "PAC Charleroi" },
                            { href: "/prix-pac/mons-7000", label: "PAC Mons" },
                            { href: "/prix-pac/waterloo-1410", label: "PAC Waterloo" },
                            { href: "/marques/daikin", label: "Daikin Belgique" },
                            { href: "/marques/vaillant", label: "Vaillant Belgique" },
                            { href: "/marques/mitsubishi", label: "Mitsubishi Belgique" },
                            { href: "/guides/daikin-vs-vaillant-vs-mitsubishi-belgique", label: "Comparatif marques" },
                            { href: "/annuaire", label: "Annuaire par province" },
                            { href: "/faq", label: "Questions fréquentes" },
                        ].map(link => (
                            <Link key={link.href} href={link.href} className="text-sm text-slate-600 hover:text-teal-600 bg-slate-50 rounded-lg px-3 py-2 flex items-center justify-between hover:bg-teal-50 transition-colors border border-slate-100">
                                {link.label} <ArrowRight className="h-3 w-3 shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
