import { Metadata } from "next";
import Link from "next/link";
import { BRANDS } from "@/data/brands";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ArrowRight, Star, Award, Zap, ThermometerSun, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Marques Pompe à Chaleur Belgique — Comparatif Complet 2026",
    description: "Comparatif des meilleures marques de pompes à chaleur en Belgique : Daikin, Vaillant, Mitsubishi, Atlantic, Bosch. Prix, avis, modèles phares et SAV.",
    alternates: { canonical: 'https://www.prix-pompe-a-chaleur.be/marques' },
};

export default function MarquesPage() {
    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Marques de pompes à chaleur en Belgique",
                "description": "Classement des meilleures marques de PAC disponibles sur le marché belge",
                "numberOfItems": BRANDS.length,
                "itemListElement": BRANDS.map((b, i) => ({
                    "@type": "ListItem",
                    "position": i + 1,
                    "name": b.name,
                    "url": `https://www.prix-pompe-a-chaleur.be/marques/${b.slug}`,
                }))
            })}} />

            {/* Hero */}
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Marques" }]} />
                    <div className="text-center mt-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Marques de <span className="text-teal-400">PAC</span> en Belgique</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">Comparez les marques disponibles sur le marché belge, leurs modèles phares, tarifs et réseaux SAV.</p>
                    </div>
                </div>
            </section>

            {/* Key insights bar */}
            <section className="bg-white border-b border-slate-200 py-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
                        {[
                            { icon: Award, label: "Daikin n°1", sub: "Usine à Ostende" },
                            { icon: ThermometerSun, label: "Haute Temp.", sub: "Vaillant aroTHERM" },
                            { icon: Zap, label: "Froid extrême", sub: "Mitsubishi Zubadan" },
                            { icon: Shield, label: "Meilleur prix", sub: "Atlantic / Bosch" },
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

            {/* Brands list */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid gap-6">
                        {BRANDS.map((brand) => (
                            <Link key={brand.slug} href={`/marques/${brand.slug}`} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-teal-300 hover:shadow-lg transition-all">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-4xl">{brand.countryFlag}</span>
                                        <div>
                                            <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-700">{brand.name}</h2>
                                            <p className="text-sm text-slate-500">{brand.tagline}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-1">
                                            {[1,2,3,4,5].map(s => (<Star key={s} className={`h-4 w-4 ${s <= brand.qualityRating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`} />))}
                                        </div>
                                        <span className="text-sm font-bold text-teal-600">{brand.priceRange.airEau}</span>
                                        <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-teal-500" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expert content */}
            <section className="bg-slate-50 py-16 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-slate max-w-none">
                        <h2>Comment choisir sa marque de PAC en Belgique ?</h2>
                        <p>Le marché belge de la pompe à chaleur est dominé par trois acteurs majeurs : <Link href="/marques/daikin" className="text-teal-600 font-semibold">Daikin</Link> (dont l&apos;usine européenne est implantée à Ostende), <Link href="/marques/vaillant" className="text-teal-600 font-semibold">Vaillant</Link> (réseau historique très dense) et <Link href="/marques/mitsubishi" className="text-teal-600 font-semibold">Mitsubishi Electric</Link> (référence pour les régions froides comme l&apos;Ardenne). Deux challengers complètent l&apos;offre : <Link href="/marques/atlantic" className="text-teal-600 font-semibold">Atlantic</Link> et <Link href="/marques/bosch" className="text-teal-600 font-semibold">Bosch</Link>, qui offrent un excellent rapport qualité-prix.</p>

                        <h3>Les critères de choix essentiels</h3>
                        <ul>
                            <li><strong>Votre climat local</strong> — En <Link href="/prix-pac/arlon-6700" className="text-teal-600 font-semibold">Ardenne</Link>, optez pour une PAC performante à -15°C (Mitsubishi Zubadan). En <Link href="/prix-pac/bruxelles-1000" className="text-teal-600 font-semibold">zone urbaine bruxelloise</Link>, la discrétion sonore prime.</li>
                            <li><strong>Vos radiateurs existants</strong> — Radiateurs en fonte ? Choisissez une PAC haute température (Vaillant aroTHERM plus à 75°C). <Link href="/guides/air-eau-vs-air-air-vs-geothermique" className="text-teal-600 font-semibold">Plancher chauffant</Link> ? Toutes les marques conviennent.</li>
                            <li><strong>Le réseau SAV local</strong> — Daikin bénéficie de pièces détachées disponibles sous 24h depuis Ostende. Vaillant dispose du réseau de chauffagistes le plus dense de Belgique.</li>
                            <li><strong>Votre budget</strong> — Les <Link href="/guides/prix-pompe-a-chaleur-belgique" className="text-teal-600 font-semibold">prix varient de 8 000€ à 18 000€</Link> selon la marque et le modèle. Les <Link href="/guides/primes-pompe-a-chaleur-wallonie" className="text-teal-600 font-semibold">primes wallonnes</Link> réduisent significativement le budget net.</li>
                        </ul>

                        <h3>Notre recommandation par profil</h3>
                        <ul>
                            <li><strong>Maison standard (Brabant, Hainaut, Liège ville)</strong> : <Link href="/marques/daikin" className="text-teal-600 font-semibold">Daikin Altherma 3 H</Link> ou <Link href="/marques/vaillant" className="text-teal-600 font-semibold">Vaillant aroTHERM</Link></li>
                            <li><strong>Région froide (Ardenne, Luxembourg belge)</strong> : <Link href="/marques/mitsubishi" className="text-teal-600 font-semibold">Mitsubishi Ecodan Zubadan</Link></li>
                            <li><strong>Budget serré</strong> : <Link href="/marques/atlantic" className="text-teal-600 font-semibold">Atlantic Alfea Extensa</Link> ou <Link href="/marques/bosch" className="text-teal-600 font-semibold">Bosch Compress</Link></li>
                        </ul>
                    </div>

                    {/* Internal links */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            { href: "/devis", label: "Comparer 3 devis gratuits" },
                            { href: "/guides/daikin-vs-vaillant-vs-mitsubishi-belgique", label: "Daikin vs Vaillant vs Mitsubishi" },
                            { href: "/guides/prix-pompe-a-chaleur-belgique", label: "Prix PAC Belgique 2026" },
                            { href: "/guides/remplacement-chaudiere-mazout", label: "Remplacement chaudière mazout" },
                            { href: "/guides/entretien-pompe-a-chaleur-belgique", label: "Entretien PAC Belgique" },
                            { href: "/annuaire", label: "Annuaire par province" },
                            { href: "/prix-pac/bruxelles-1000", label: "PAC Bruxelles" },
                            { href: "/prix-pac/liege-4000", label: "PAC Liège" },
                            { href: "/faq", label: "FAQ pompe à chaleur" },
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
