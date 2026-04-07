import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BobexNativeForm } from "@/components/affiliation/BobexNativeForm";
import {
    ArrowRight,
    Shield,
    Users,
    Award,
    FileText,
    Thermometer,
    Euro,
    CheckCircle,
    MapPin,
    BookOpen,
    Star,
} from "lucide-react";
import { guides } from "@/data/guides";
import { BRANDS } from "@/data/brands";

export const metadata: Metadata = {
    title: "Prix Pompe à Chaleur Belgique 2026 — Devis Gratuit & Primes",
    description:
        "Comparez les prix des pompes à chaleur en Belgique. Devis gratuits d'installateurs certifiés RESCert. Primes Wallonie & Bruxelles. Guide indépendant 🇧🇪",
    alternates: { canonical: "https://www.prix-pompe-a-chaleur.be" },
    openGraph: {
        title: "Prix Pompe à Chaleur Belgique 2026 — Devis Gratuit & Primes",
        description: "Comparez les prix des pompes à chaleur en Belgique. Devis gratuits, primes et guide indépendant.",
        url: "https://www.prix-pompe-a-chaleur.be",
    },
};

const POPULAR_CITIES = [
    { name: "Bruxelles", slug: "bruxelles-1000" },
    { name: "Liège", slug: "liege-4000" },
    { name: "Namur", slug: "namur-5000" },
    { name: "Charleroi", slug: "charleroi-6000" },
    { name: "Mons", slug: "mons-7000" },
    { name: "Wavre", slug: "wavre-1300" },
    { name: "Tournai", slug: "tournai-7500" },
    { name: "Arlon", slug: "arlon-6700" },
    { name: "Verviers", slug: "verviers-4800" },
    { name: "Waterloo", slug: "waterloo-1410" },
    { name: "La Louvière", slug: "la-louviere-7100" },
    { name: "Nivelles", slug: "nivelles-1400" },
];

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* ───────── HERO SECTION ───────── */}
            <section className="relative bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-teal-500/30">
                                <span>🇧🇪</span>
                                <span>Guide indépendant — Belgique francophone</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                                Prix <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Pompe à Chaleur</span> en Belgique
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                                Comparez les devis d&apos;installateurs certifiés <strong className="text-white">RESCert</strong> en Wallonie et à Bruxelles.
                                Jusqu&apos;à <strong className="text-teal-300">6 000€ de primes</strong> pour votre transition énergétique.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/devis">
                                    <Button size="lg" className="bg-teal-500 hover:bg-teal-400 text-white shadow-xl hover:shadow-teal-500/30 text-lg px-8 h-14 rounded-full w-full sm:w-auto transition-all">
                                        <FileText className="mr-2 h-5 w-5" />
                                        Devis Gratuit
                                    </Button>
                                </Link>
                                <Link href="/guides/prix-pompe-a-chaleur-belgique">
                                    <Button variant="outline" size="lg" className="border-slate-500 text-slate-200 hover:bg-slate-800 text-lg px-8 h-14 rounded-full w-full sm:w-auto">
                                        Voir les prix →
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/30 border border-white/10">
                                <Image
                                    src="/images/hero-pac-belgique.png"
                                    alt="Pompe à chaleur installée sur une maison belge en briques"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                                    <div className="flex gap-4 text-sm text-white">
                                        <span className="bg-teal-600/80 backdrop-blur px-3 py-1 rounded-full">🏠 Air/Eau</span>
                                        <span className="bg-teal-600/80 backdrop-blur px-3 py-1 rounded-full">💰 Dès 8 000€</span>
                                        <span className="bg-teal-600/80 backdrop-blur px-3 py-1 rounded-full">🇧🇪 Primes incluses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───────── TRUST BAR ───────── */}
            <section className="bg-white border-b border-slate-200 py-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { icon: Shield, label: "100% gratuit", sub: "Sans engagement" },
                            { icon: Users, label: "Installateurs RESCert", sub: "Certifiés Belgique" },
                            { icon: Award, label: "Jusqu'à 6 000€", sub: "De primes belges" },
                            { icon: Star, label: "Guide indépendant", sub: "Conseils neutres" },
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col items-center gap-2">
                                <item.icon className="h-6 w-6 text-teal-600" />
                                <span className="font-bold text-sm text-slate-900">{item.label}</span>
                                <span className="text-xs text-slate-500">{item.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────── PRIX TABLEAU ───────── */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Prix d&apos;une pompe à chaleur en <span className="text-teal-600">Belgique</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Tarifs moyens constatés en 2026, pose comprise, avant déduction des primes régionales.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { type: "PAC Air/Air", price: "2 500€ – 5 000€", icon: Thermometer, desc: "Complément ou climatisation", color: "bg-cyan-50 border-cyan-100" },
                            { type: "PAC Air/Eau", price: "8 000€ – 15 000€", icon: Euro, desc: "Remplacement chaudière", color: "bg-teal-50 border-teal-100", popular: true },
                            { type: "PAC Géothermique", price: "15 000€ – 25 000€", icon: MapPin, desc: "Performance maximale", color: "bg-emerald-50 border-emerald-100" },
                        ].map((item) => (
                            <div key={item.type} className={`${item.color} border rounded-2xl p-8 relative ${item.popular ? "ring-2 ring-teal-500 shadow-lg" : ""}`}>
                                {item.popular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                                        Le + populaire 🇧🇪
                                    </span>
                                )}
                                <item.icon className="h-8 w-8 text-teal-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.type}</h3>
                                <p className="text-2xl font-extrabold text-teal-700 mb-2">{item.price}</p>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/guides/prix-pompe-a-chaleur-belgique" className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-1">
                            Guide complet des prix en Belgique <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ───────── PRIMES SECTION ───────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Primes pompe à chaleur en <span className="text-teal-600">Belgique</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Wallonie et Bruxelles offrent des primes généreuses, cumulables avec la réduction d&apos;impôt fédérale.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                🏛️ Wallonie — Prime Habitation
                            </h3>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-slate-600"><CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />PAC Air/Eau : jusqu&apos;à <strong>6 000€</strong></li>
                                <li className="flex items-start gap-2 text-slate-600"><CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />Audit Logement obligatoire</li>
                                <li className="flex items-start gap-2 text-slate-600"><CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />Rénopack : prêt à taux 0%</li>
                                <li className="flex items-start gap-2 text-slate-600"><CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />Cumulable avec réduction impôt</li>
                            </ul>
                            <Link href="/guides/primes-pompe-a-chaleur-wallonie" className="text-teal-600 hover:text-teal-700 font-semibold text-sm inline-flex items-center gap-1">
                                Guide complet Wallonie <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                🏙️ Bruxelles — Primes Énergie
                            </h3>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-slate-600"><CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />PAC Air/Eau : jusqu&apos;à <strong>4 500€</strong></li>
                                <li className="flex items-start gap-2 text-slate-600"><CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />Programme Rénolution</li>
                                <li className="flex items-start gap-2 text-slate-600"><CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />Prêt Vert à taux réduit</li>
                                <li className="flex items-start gap-2 text-slate-600"><CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />Bonus revenus modestes</li>
                            </ul>
                            <Link href="/guides/primes-pompe-a-chaleur-bruxelles" className="text-amber-600 hover:text-amber-700 font-semibold text-sm inline-flex items-center gap-1">
                                Guide complet Bruxelles <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───────── DEVIS WIDGET ───────── */}
            <section className="py-16 bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Comparez les devis <span className="text-teal-300">gratuitement</span>
                        </h2>
                        <p className="text-lg text-teal-100 max-w-2xl mx-auto">
                            Renseignez votre projet ci-dessous et recevez jusqu&apos;à 3 propositions chiffrées d&apos;installateurs certifiés RESCert.
                        </p>
                    </div>
                    <BobexNativeForm />
                </div>
            </section>

            {/* ───────── MARQUES POPULAIRES ───────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Marques populaires en <span className="text-teal-600">Belgique</span>
                        </h2>
                        <p className="text-lg text-slate-600">Les marques préférées des installateurs et consommateurs belges.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {BRANDS.map((brand) => (
                            <Link
                                key={brand.slug}
                                href={`/marques/${brand.slug}`}
                                className="bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl p-4 text-center transition-all group"
                            >
                                <span className="text-3xl mb-2 block">{brand.countryFlag}</span>
                                <span className="font-bold text-slate-800 group-hover:text-teal-700">{brand.name}</span>
                                <span className="text-xs text-slate-500 block mt-1">{brand.priceRange.airEau}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/marques" className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-1">
                            Tous les comparatifs marques <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ───────── GUIDES ───────── */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            <BookOpen className="inline h-8 w-8 mr-2 text-teal-600" />
                            Nos guides experts
                        </h2>
                        <p className="text-lg text-slate-600">Tout savoir avant d&apos;installer une pompe à chaleur en Belgique.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {guides.slice(0, 8).map((guide) => (
                            <Link
                                key={guide.slug}
                                href={`/guides/${guide.slug}`}
                                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-md transition-all group"
                            >
                                <h3 className="font-semibold text-slate-800 group-hover:text-teal-700 text-sm mb-2 line-clamp-2">{guide.title}</h3>
                                <p className="text-xs text-slate-500 line-clamp-2 mb-3">{guide.excerpt}</p>
                                <span className="flex items-center gap-1 text-xs font-medium text-teal-600">
                                    Lire le guide <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────── VILLES POPULAIRES ───────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            <MapPin className="inline h-8 w-8 mr-2 text-teal-600" />
                            Installation PAC près de chez vous
                        </h2>
                        <p className="text-lg text-slate-600">Trouvez un installateur dans votre ville en Wallonie ou à Bruxelles.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {POPULAR_CITIES.map((city) => (
                            <Link
                                key={city.slug}
                                href={`/prix-pac/${city.slug}`}
                                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-teal-50 hover:border-teal-200 border border-slate-100 transition-all group"
                            >
                                <span className="font-medium text-slate-700 group-hover:text-teal-700">{city.name}</span>
                                <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-teal-500" />
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/annuaire" className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-1">
                            Voir toutes les provinces <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ───────── SEO TEXT + INTERNAL LINKING MESH ───────── */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-slate">
                    <h2>Le marché de la pompe à chaleur en Belgique en 2026</h2>
                    <p>
                        La Belgique connaît une accélération sans précédent de l&apos;adoption des pompes à chaleur.
                        En Wallonie, où près de 40% des logements sont encore chauffés au mazout, la <Link href="/guides/remplacement-chaudiere-mazout" className="text-teal-600 font-semibold">transition vers la PAC</Link> est devenue une priorité
                        gouvernementale avec la <Link href="/guides/primes-pompe-a-chaleur-wallonie" className="text-teal-600 font-semibold">Prime Habitation pouvant atteindre 6 000€</Link>.
                    </p>
                    <p>
                        À Bruxelles-Capitale, les normes <Link href="/guides/certificat-peb-belgique" className="text-teal-600 font-semibold">PEB</Link> de plus en plus strictes et le programme <Link href="/guides/primes-pompe-a-chaleur-bruxelles" className="text-teal-600 font-semibold">Rénolution</Link> encouragent les propriétaires à opter pour des solutions de chauffage renouvelable. La <Link href="/guides/air-eau-vs-air-air-vs-geothermique" className="text-teal-600 font-semibold">PAC air/eau</Link> reste le choix n°1 des ménages belges, devant la géothermie et la PAC air/air.
                    </p>
                    <p>
                        Le marché belge est dominé par <Link href="/marques/daikin" className="text-teal-600 font-semibold">Daikin</Link> (dont l&apos;usine européenne est à Ostende),
                        <Link href="/marques/vaillant" className="text-teal-600 font-semibold"> Vaillant</Link> (très implanté historiquement) et <Link href="/marques/mitsubishi" className="text-teal-600 font-semibold">Mitsubishi</Link> (référence pour les régions froides comme l&apos;Ardenne). Les installateurs doivent être certifiés <strong>RESCert</strong> pour que les propriétaires puissent bénéficier des primes régionales. Consultez notre <Link href="/guides/daikin-vs-vaillant-vs-mitsubishi-belgique" className="text-teal-600 font-semibold">comparatif détaillé des 3 marques leaders</Link>.
                    </p>

                    <h3>Quel est le prix moyen d&apos;une PAC en Belgique ?</h3>
                    <p>
                        Le <Link href="/guides/prix-pompe-a-chaleur-belgique" className="text-teal-600 font-semibold">prix d&apos;une pompe à chaleur</Link> varie de 2 500€ (air/air) à 25 000€ (géothermique), pose comprise. La PAC air/eau, la plus demandée, coûte entre 8 000€ et 15 000€. L&apos;<Link href="/guides/entretien-pompe-a-chaleur-belgique" className="text-teal-600 font-semibold">entretien annuel</Link> représente un budget supplémentaire de 150€ à 300€. Pour obtenir le juste prix, <Link href="/devis" className="text-teal-600 font-semibold">comparez 3 devis gratuits</Link> d&apos;installateurs certifiés.
                    </p>

                    <h3>Trouvez un installateur près de chez vous</h3>
                    <p>
                        Notre <Link href="/annuaire" className="text-teal-600 font-semibold">annuaire par province</Link> couvre l&apos;ensemble de la Belgique francophone : <Link href="/prix-pac/bruxelles-1000" className="text-teal-600 font-semibold">Bruxelles</Link>, <Link href="/prix-pac/liege-4000" className="text-teal-600 font-semibold">Liège</Link>, <Link href="/prix-pac/namur-5000" className="text-teal-600 font-semibold">Namur</Link>, <Link href="/prix-pac/charleroi-6000" className="text-teal-600 font-semibold">Charleroi</Link>, <Link href="/prix-pac/mons-7000" className="text-teal-600 font-semibold">Mons</Link>, <Link href="/prix-pac/waterloo-1410" className="text-teal-600 font-semibold">Waterloo</Link> et 140+ communes avec des tarifs et données locales. Consultez notre <Link href="/faq" className="text-teal-600 font-semibold">FAQ complète</Link> pour répondre à toutes vos questions.
                    </p>
                </div>
            </section>
        </div>
    );
}
