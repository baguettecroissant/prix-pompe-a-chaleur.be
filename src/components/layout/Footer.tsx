import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FOOTER_CITIES = [
    { name: "Bruxelles", slug: "bruxelles-1000" },
    { name: "Liège", slug: "liege-4000" },
    { name: "Namur", slug: "namur-5000" },
    { name: "Charleroi", slug: "charleroi-6000" },
    { name: "Mons", slug: "mons-7000" },
    { name: "Wavre", slug: "wavre-1300" },
    { name: "Waterloo", slug: "waterloo-1410" },
    { name: "Tournai", slug: "tournai-7500" },
    { name: "Nivelles", slug: "nivelles-1400" },
    { name: "Arlon", slug: "arlon-6700" },
    { name: "Verviers", slug: "verviers-4800" },
    { name: "La Louvière", slug: "la-louviere-7100" },
    { name: "Uccle", slug: "uccle-1180" },
    { name: "Schaerbeek", slug: "schaerbeek-1030" },
    { name: "Ixelles", slug: "ixelles-1050" },
    { name: "Anderlecht", slug: "anderlecht-1070" },
];

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-50">
            {/* ───────── Internal Linking Mega-Bar ───────── */}
            <div className="border-b border-slate-800">
                <div className="container mx-auto px-4 py-10">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 text-center">
                        Prix pompe à chaleur par ville 🇧🇪
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
                        {FOOTER_CITIES.map(city => (
                            <Link
                                key={city.slug}
                                href={`/prix-pac/${city.slug}`}
                                className="text-slate-400 hover:text-teal-300 text-xs text-center py-1.5 px-2 rounded hover:bg-slate-800 transition-colors"
                            >
                                PAC {city.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className="container mx-auto px-4 py-14">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4 font-heading">
                            <span className="mr-1">🇧🇪</span> Prix-Pompe-a-Chaleur<span className="text-teal-500">.be</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Le guide indépendant n°1 pour choisir, installer et financer votre pompe à chaleur en Belgique. Conseils neutres, devis gratuits d&apos;installateurs certifiés RESCert.
                        </p>
                        <Link
                            href="/devis"
                            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-colors"
                        >
                            Devis gratuit →
                        </Link>
                    </div>

                    {/* Guides */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Guides PAC</h4>
                        <ul className="space-y-2">
                            <li><Link href="/guides/prix-pompe-a-chaleur-belgique" className="text-slate-400 hover:text-white text-sm transition-colors">Prix PAC Belgique 2026</Link></li>
                            <li><Link href="/guides/primes-pompe-a-chaleur-wallonie" className="text-slate-400 hover:text-white text-sm transition-colors">Primes Wallonie</Link></li>
                            <li><Link href="/guides/primes-pompe-a-chaleur-bruxelles" className="text-slate-400 hover:text-white text-sm transition-colors">Primes Bruxelles</Link></li>
                            <li><Link href="/guides/air-eau-vs-air-air-vs-geothermique" className="text-slate-400 hover:text-white text-sm transition-colors">Air/Eau vs Géothermique</Link></li>
                            <li><Link href="/guides/remplacement-chaudiere-mazout" className="text-slate-400 hover:text-white text-sm transition-colors">Remplacement mazout</Link></li>
                            <li><Link href="/guides/certificat-peb-belgique" className="text-slate-400 hover:text-white text-sm transition-colors">Certificat PEB</Link></li>
                            <li><Link href="/guides/entretien-pompe-a-chaleur-belgique" className="text-slate-400 hover:text-white text-sm transition-colors">Entretien PAC</Link></li>
                            <li><Link href="/guides/daikin-vs-vaillant-vs-mitsubishi-belgique" className="text-slate-400 hover:text-white text-sm transition-colors">Comparatif marques</Link></li>
                        </ul>
                    </div>

                    {/* Marques */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Marques</h4>
                        <ul className="space-y-2">
                            <li><Link href="/marques/daikin" className="text-slate-400 hover:text-white text-sm transition-colors">Daikin (Belgique)</Link></li>
                            <li><Link href="/marques/vaillant" className="text-slate-400 hover:text-white text-sm transition-colors">Vaillant</Link></li>
                            <li><Link href="/marques/mitsubishi" className="text-slate-400 hover:text-white text-sm transition-colors">Mitsubishi Electric</Link></li>
                            <li><Link href="/marques/atlantic" className="text-slate-400 hover:text-white text-sm transition-colors">Atlantic</Link></li>
                            <li><Link href="/marques/bosch" className="text-slate-400 hover:text-white text-sm transition-colors">Bosch</Link></li>
                            <li><Link href="/marques" className="text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors">Toutes les marques →</Link></li>
                        </ul>
                    </div>

                    {/* Provinces & Villes */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Provinces</h4>
                        <ul className="space-y-2">
                            <li><Link href="/prix-pac/bruxelles-1000" className="text-slate-400 hover:text-white text-sm transition-colors">Bruxelles-Capitale</Link></li>
                            <li><Link href="/prix-pac/liege-4000" className="text-slate-400 hover:text-white text-sm transition-colors">Province de Liège</Link></li>
                            <li><Link href="/prix-pac/namur-5000" className="text-slate-400 hover:text-white text-sm transition-colors">Province de Namur</Link></li>
                            <li><Link href="/prix-pac/charleroi-6000" className="text-slate-400 hover:text-white text-sm transition-colors">Hainaut</Link></li>
                            <li><Link href="/prix-pac/wavre-1300" className="text-slate-400 hover:text-white text-sm transition-colors">Brabant wallon</Link></li>
                            <li><Link href="/prix-pac/arlon-6700" className="text-slate-400 hover:text-white text-sm transition-colors">Luxembourg belge</Link></li>
                            <li><Link href="/annuaire" className="text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors">Annuaire complet →</Link></li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">Accueil</Link></li>
                            <li><Link href="/devis" className="text-slate-400 hover:text-white text-sm transition-colors">Devis Gratuit</Link></li>
                            <li><Link href="/annuaire" className="text-slate-400 hover:text-white text-sm transition-colors">Annuaire installateurs</Link></li>
                            <li><Link href="/marques" className="text-slate-400 hover:text-white text-sm transition-colors">Comparatif marques</Link></li>
                            <li><Link href="/faq" className="text-slate-400 hover:text-white text-sm transition-colors">FAQ</Link></li>
                            <li><Link href="/mentions-legales" className="text-slate-400 hover:text-white text-sm transition-colors">Mentions légales</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800">
                <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© 2026 Prix-Pompe-a-Chaleur.be — Tous droits réservés.</p>
                    <p>Guide indépendant · Devis gratuits d&apos;installateurs certifiés RESCert · Belgique francophone 🇧🇪</p>
                </div>
            </div>
        </footer>
    );
}
