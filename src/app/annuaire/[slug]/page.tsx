import { notFound } from "next/navigation";
import { getAllProvinces, getProvinceByCode, getCitiesByProvince, getProvincesByRegion } from "@/lib/cities";
import Link from "next/link";
import { Metadata } from "next";
import { ProvinceCities } from "@/components/psea/ProvinceCities";
import { Map } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    const provs = getAllProvinces();
    return provs.map(d => ({
        slug: `${d.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}-${d.code}`
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const parts = slug.split('-');
    const code = parts[parts.length - 1];
    const prov = getProvinceByCode(code);
    if (!prov) return {};
    const title = `Pompe à Chaleur ${prov.name} — Installateurs & Devis`;
    const description = `Trouvez un installateur de pompe à chaleur certifié RESCert en ${prov.name}. Devis comparatifs gratuits et primes ${prov.region === 'Wallonie' ? 'wallonnes' : 'bruxelloises'}.`;
    const url = `https://www.prix-pompe-a-chaleur.be/annuaire/${slug}`;
    return { title, description, alternates: { canonical: url }, openGraph: { title, description, url } };
}

export default async function ProvincePage({ params }: Props) {
    const { slug } = await params;
    const parts = slug.split('-');
    const code = parts[parts.length - 1];
    const prov = getProvinceByCode(code);
    if (!prov) notFound();

    const cities = getCitiesByProvince(code);
    cities.sort((a, b) => (b.population || 0) - (a.population || 0));

    const neighborProvs = getProvincesByRegion(prov.region).filter(d => d.code !== prov.code);

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-slate-900 text-white relative pb-32 pt-12">
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ label: "Annuaire", href: "/annuaire" }, { label: `${prov.name} (${prov.code})` }]} />
                    <div className="text-center mt-4">
                        <div className="inline-block bg-white/10 text-teal-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-white/10">Province {prov.code}</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Installateurs PAC <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">{prov.name}</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Trouvez un installateur certifié RESCert en {prov.region}. {prov.prime_info}.
                        </p>
                    </div>
                </div>
            </section>
            <section className="pb-20 bg-slate-50 min-h-[500px]">
                <div className="container mx-auto px-4">
                    <ProvinceCities provinceName={prov.name} provinceCode={prov.code} cities={cities} />
                    {neighborProvs.length > 0 && (
                        <div className="mt-16 pt-16 border-t border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <Map className="h-6 w-6 text-teal-500" /> Autres provinces en {prov.region}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {neighborProvs.map((d) => (
                                    <Link key={d.code} href={`/annuaire/${d.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}-${d.code}`}
                                        className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-teal-500 hover:shadow-md transition-all group">
                                        <span className="font-medium text-slate-700 group-hover:text-teal-700">{d.name}</span>
                                        <span className="text-sm text-slate-400 bg-slate-50 px-2 py-1 rounded group-hover:bg-teal-50 group-hover:text-teal-600">{d.code}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
