import { getAllProvinces, ProvinceInfo } from '@/lib/cities';
import Link from 'next/link';
import { Metadata } from 'next';
import { Map as MapIcon, ChevronRight, ArrowRight, Shield, Users, BookOpen, Zap } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Annuaire Installateurs PAC par Province — Belgique 2026",
    description: "Parcourez notre annuaire pour trouver un installateur de pompe à chaleur certifié RESCert dans votre province en Wallonie ou à Bruxelles. Primes et tarifs locaux.",
    alternates: { canonical: 'https://www.prix-pompe-a-chaleur.be/annuaire' },
};

export default function AnnuairePage() {
    const provinces = getAllProvinces();
    const regionsMap = new Map<string, ProvinceInfo[]>();
    provinces.forEach(prov => {
        const current = regionsMap.get(prov.region) || [];
        current.push(prov);
        regionsMap.set(prov.region, current);
    });
    const sortedRegions = Array.from(regionsMap.keys()).sort();

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Installateurs pompe à chaleur Belgique",
                "description": "Annuaire des installateurs de pompes à chaleur certifiés RESCert en Belgique, organisé par province.",
                "numberOfItems": provinces.length,
                "itemListElement": provinces.map((p, i) => ({
                    "@type": "ListItem",
                    "position": i + 1,
                    "name": `Installateurs PAC ${p.name}`,
                }))
            })}} />

            {/* Hero */}
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Annuaire" }]} />
                    <div className="text-center mt-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Annuaire des <span className="text-teal-400">Installateurs PAC</span> 🇧🇪
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Sélectionnez votre province pour trouver des installateurs certifiés RESCert, les primes disponibles et les tarifs moyens.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust bar */}
            <section className="bg-white border-b border-slate-200 py-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
                        {[
                            { icon: Shield, label: "100% RESCert", sub: "Installateurs certifiés" },
                            { icon: Users, label: "140+ communes", sub: "Couverture complète" },
                            { icon: Zap, label: "Primes incluses", sub: "Wallonie & Bruxelles" },
                            { icon: BookOpen, label: "Devis gratuit", sub: "Sans engagement" },
                        ].map(item => (
                            <div key={item.label} className="flex flex-col items-center gap-1">
                                <item.icon className="h-5 w-5 text-teal-600" />
                                <span className="font-bold text-xs text-slate-900">{item.label}</span>
                                <span className="text-[10px] text-slate-500">{item.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Provinces grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 max-w-4xl mx-auto">
                        {sortedRegions.map(region => (
                            <div key={region} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                                <div className="bg-teal-50 px-6 py-4 border-b border-teal-100 flex items-center gap-2">
                                    <MapIcon className="h-5 w-5 text-teal-600" />
                                    <h2 className="text-xl font-bold text-slate-800">{region}</h2>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {regionsMap.get(region)?.map(prov => {
                                            const slug = `${prov.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}-${prov.code}`;
                                            return (
                                                <Link key={prov.code} href={`/annuaire/${slug}`} className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
                                                    <div className="flex items-center gap-3">
                                                        <span className="bg-slate-100 text-slate-600 font-mono text-sm font-bold px-2 py-1 rounded">{prov.code}</span>
                                                        <span className="text-slate-700 font-medium group-hover:text-teal-700">{prov.name}</span>
                                                    </div>
                                                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-teal-400" />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expert content SEO */}
            <section className="bg-slate-50 py-16 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-slate max-w-none">
                        <h2>Pourquoi utiliser notre annuaire d&apos;installateurs PAC ?</h2>
                        <p>L&apos;installation d&apos;une pompe à chaleur en Belgique nécessite un savoir-faire local. Les maisons belges en briques, les fermettes wallonnes et les bel-étages bruxellois ont des <strong>contraintes thermiques et acoustiques spécifiques</strong> que seul un installateur certifié RESCert connaît.</p>

                        <h3>La certification RESCert : votre garantie qualité</h3>
                        <p>En Belgique, la certification <strong>RESCert</strong> (Renewable Energy Systems Certificate) est la seule garantie officielle qu&apos;un installateur maîtrise les techniques de pose des pompes à chaleur. Cette certification est <strong>obligatoire</strong> pour que votre installation soit éligible aux <Link href="/guides/primes-pompe-a-chaleur-wallonie" className="text-teal-600 font-semibold">primes wallonnes</Link> et aux <Link href="/guides/primes-pompe-a-chaleur-bruxelles" className="text-teal-600 font-semibold">primes bruxelloises</Link>.</p>

                        <h3>Ce que nos installateurs font pour vous</h3>
                        <ul>
                            <li>Effectuer une <strong>visite technique gratuite</strong> et un dimensionnement précis</li>
                            <li>Établir un <Link href="/devis" className="text-teal-600 font-semibold">devis détaillé et sans engagement</Link></li>
                            <li>Vous accompagner dans les démarches de primes (Prime Habitation, Primes Énergie, Rénopack)</li>
                            <li>Assurer la mise en service et le suivi de performance (<Link href="/guides/entretien-pompe-a-chaleur-belgique" className="text-teal-600 font-semibold">contrat d&apos;entretien</Link>)</li>
                            <li>Fournir les attestations nécessaires pour améliorer votre <Link href="/guides/certificat-peb-belgique" className="text-teal-600 font-semibold">certificat PEB</Link></li>
                        </ul>

                        <h3>Quel budget prévoir par province ?</h3>
                        <p>Le <Link href="/guides/prix-pompe-a-chaleur-belgique" className="text-teal-600 font-semibold">prix d&apos;une pompe à chaleur</Link> en Belgique varie selon la région. En Brabant wallon et à Bruxelles, la PAC air/eau coûte entre 10 000€ et 17 000€. En Hainaut et dans le Luxembourg belge, les tarifs débutent à 8 000€. Le choix de la marque (<Link href="/marques/daikin" className="text-teal-600 font-semibold">Daikin</Link>, <Link href="/marques/vaillant" className="text-teal-600 font-semibold">Vaillant</Link>, <Link href="/marques/mitsubishi" className="text-teal-600 font-semibold">Mitsubishi</Link>) influence également le budget final.</p>
                    </div>

                    {/* Internal links grid */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            { href: "/devis", label: "Demander 3 devis gratuits" },
                            { href: "/guides/prix-pompe-a-chaleur-belgique", label: "Prix PAC Belgique 2026" },
                            { href: "/guides/primes-pompe-a-chaleur-wallonie", label: "Primes Wallonie" },
                            { href: "/guides/primes-pompe-a-chaleur-bruxelles", label: "Primes Bruxelles" },
                            { href: "/marques", label: "Comparatif marques PAC" },
                            { href: "/faq", label: "FAQ pompe à chaleur" },
                            { href: "/prix-pac/bruxelles-1000", label: "PAC Bruxelles" },
                            { href: "/prix-pac/liege-4000", label: "PAC Liège" },
                            { href: "/prix-pac/namur-5000", label: "PAC Namur" },
                        ].map(link => (
                            <Link key={link.href} href={link.href} className="text-sm text-slate-600 hover:text-teal-600 bg-white rounded-lg px-3 py-2 flex items-center justify-between hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-200">
                                {link.label} <ArrowRight className="h-3 w-3 shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
