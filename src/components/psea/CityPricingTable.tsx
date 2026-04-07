import type { CityContent } from "@/data/city-content";
import { ThermometerSun, Wind, Droplets, Wrench } from "lucide-react";

interface Props {
  content: CityContent;
  cityName: string;
}

export function CityPricingTable({ content, cityName }: Props) {
  const { pricing, housing } = content;

  const rows = [
    {
      icon: <Wind className="w-5 h-5 text-sky-500" />,
      type: "PAC Air/Eau",
      desc: "Chauffage + eau chaude — le choix le plus courant",
      min: pricing.airEauMin,
      max: pricing.airEauMax,
      highlight: true,
    },
    {
      icon: <ThermometerSun className="w-5 h-5 text-orange-500" />,
      type: "PAC Air/Air",
      desc: "Chauffage + climatisation — idéal appartements",
      min: pricing.airAirMin,
      max: pricing.airAirMax,
      highlight: false,
    },
    {
      icon: <Droplets className="w-5 h-5 text-emerald-500" />,
      type: "PAC Géothermique",
      desc: "COP supérieur — nécessite jardin > 200 m²",
      min: pricing.geoMin,
      max: pricing.geoMax,
      highlight: false,
    },
    {
      icon: <Wrench className="w-5 h-5 text-slate-500" />,
      type: "Main-d'œuvre",
      desc: "Installation et mise en service comprises",
      label: pricing.mainOeuvre,
      highlight: false,
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Prix pompe à chaleur à {cityName} — tarifs locaux
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        Estimation pour le parc immobilier de {cityName} ({housing.dominantType}, PEB {housing.avgPEB}).
      </p>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 px-5 py-4 ${
              i < rows.length - 1 ? "border-b border-slate-100" : ""
            } ${row.highlight ? "bg-teal-50/50" : ""}`}
          >
            <div className="shrink-0">{row.icon}</div>
            <div className="flex-1 min-w-0">
              <p className={`font-semibold text-sm ${row.highlight ? "text-teal-900" : "text-slate-800"}`}>
                {row.type}
              </p>
              <p className="text-xs text-slate-500 truncate">{row.desc}</p>
            </div>
            <div className="shrink-0 text-right">
              {row.label ? (
                <span className="text-sm font-bold text-slate-700">{row.label}</span>
              ) : (
                <span className={`text-sm font-bold ${row.highlight ? "text-teal-700" : "text-slate-700"}`}>
                  {row.min!.toLocaleString("fr-BE")} € — {row.max!.toLocaleString("fr-BE")} €
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Housing stats mini bar */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="bg-slate-50 rounded-xl px-4 py-3 text-center">
          <p className="text-2xl font-extrabold text-slate-800">{housing.pctMaisons}%</p>
          <p className="text-xs text-slate-500 mt-0.5">maisons individuelles</p>
        </div>
        <div className="bg-slate-50 rounded-xl px-4 py-3 text-center">
          <p className="text-2xl font-extrabold text-red-600">{housing.pctMazout}%</p>
          <p className="text-xs text-slate-500 mt-0.5">chauffage mazout</p>
        </div>
        <div className="bg-slate-50 rounded-xl px-4 py-3 text-center">
          <p className="text-2xl font-extrabold text-blue-600">{housing.pctGaz}%</p>
          <p className="text-xs text-slate-500 mt-0.5">chauffage gaz</p>
        </div>
      </div>
    </section>
  );
}
