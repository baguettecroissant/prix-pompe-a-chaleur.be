import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guides } from "@/data/guides";
import { GUIDE_CATEGORIES } from "@/types/guide";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
    title: "Guides Pompe à Chaleur Belgique — Tout Savoir sur les PAC",
    description: "Guides complets sur les pompes à chaleur en Belgique : prix, primes wallonnes et bruxelloises, PEB, types, entretien, marques. Conseils d'experts.",
    alternates: { canonical: 'https://www.prix-pompe-a-chaleur.be/guides' },
};

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Guides" }]} />
                    <div className="text-center mt-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Guides <span className="text-teal-400">Pompe à Chaleur</span> Belgique
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Tout comprendre avant d&apos;installer une PAC en Belgique : prix, primes, types, marques et réglementation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-6">
                        {guides.map((guide) => {
                            const cat = GUIDE_CATEGORIES[guide.category];
                            return (
                                <Link
                                    key={guide.slug}
                                    href={`/guides/${guide.slug}`}
                                    className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-teal-300 hover:shadow-lg transition-all"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-medium">
                                            {cat.emoji} {cat.label}
                                        </span>
                                        <span className="text-xs text-slate-400">{guide.readTime}</span>
                                    </div>
                                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 mb-2 line-clamp-2">
                                        {guide.title}
                                    </h2>
                                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">{guide.excerpt}</p>
                                    <span className="text-sm font-semibold text-teal-600 flex items-center gap-1">
                                        Lire le guide <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
