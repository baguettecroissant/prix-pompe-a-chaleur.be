import { City } from "@/types";
import { Euro, Building2, FileCheck, Wallet } from "lucide-react";

interface LocalAidsModuleProps {
    city: City;
}

export function LocalAidsModule({ city }: LocalAidsModuleProps) {
    const isWallonie = city.region === "Wallonie";

    return (
        <section className="py-12 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                    Primes disponibles à {city.name}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Regional Prime */}
                    <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-teal-100 p-3 rounded-lg text-teal-600">
                                <Building2 className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">
                                    {isWallonie ? "Prime Habitation" : "Primes Énergie Bruxelles"}
                                </h3>
                                <p className="text-sm text-slate-600 mb-3">
                                    {isWallonie
                                        ? `La Prime Habitation wallonne finance l'installation de pompes à chaleur pour les propriétaires en ${city.province_name}. Elle est accessible via l'Audit Logement.`
                                        : "Les Primes Énergie bruxelloises (Rénolution) soutiennent l'installation de PAC air/eau et géothermiques pour les logements de la Région de Bruxelles-Capitale."
                                    }
                                </p>
                                <div className="text-xs font-medium text-teal-700 bg-teal-100 inline-block px-2 py-1 rounded">
                                    {isWallonie ? "Jusqu'à 6 000€ d'aide" : "Jusqu'à 4 500€ d'aide"}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Federal Tax Reduction */}
                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                                <Euro className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Réduction d&apos;impôt fédérale</h3>
                                <p className="text-sm text-slate-600 mb-3">
                                    Le gouvernement fédéral belge accorde une déduction fiscale pour les investissements en économie d&apos;énergie dans votre habitation à {city.name}.
                                </p>
                                <div className="text-xs font-medium text-amber-700 bg-amber-100 inline-block px-2 py-1 rounded">
                                    Réduction d&apos;impôt jusqu&apos;à 40%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rénopack / Prêt vert bruxellois */}
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-green-100 p-3 rounded-lg text-green-600">
                                <Wallet className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">
                                    {isWallonie ? "Rénopack (Prêt à taux 0%)" : "Prêt vert bruxellois"}
                                </h3>
                                <p className="text-sm text-slate-600 mb-3">
                                    {isWallonie
                                        ? "Le Rénopack combine prime et prêt à taux 0% pour financer votre pompe à chaleur sans apport initial."
                                        : "Le Prêt vert offre un financement avantageux pour vos travaux de rénovation énergétique à Bruxelles."
                                    }
                                </p>
                                <div className="text-xs font-medium text-green-700 bg-green-100 inline-block px-2 py-1 rounded">
                                    {isWallonie ? "Prêt jusqu'à 60 000€ à 0%" : "Taux réduit de 0 à 2%"}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                                <Euro className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Primes énergie fournisseurs</h3>
                                <p className="text-sm text-slate-600 mb-3">
                                    Engie Electrabel, Luminus, TotalEnergies et Mega proposent des primes complémentaires pour le remplacement de votre chaudière à {city.name}.
                                </p>
                                <div className="text-xs font-medium text-purple-700 bg-purple-100 inline-block px-2 py-1 rounded">
                                    200€ à 800€ de prime supplémentaire
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-3">
                    <FileCheck className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600">
                        <strong>Bon à savoir :</strong> Pour bénéficier de ces primes à {city.name} ({city.zip}), {isWallonie
                            ? "un Audit Logement préalable est requis et les travaux doivent être réalisés par un installateur certifié RESCert."
                            : "les travaux doivent être réalisés par un installateur certifié RESCert et déclarés via le portail Rénolution."
                        } Ces aides sont <strong>cumulables</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
}
