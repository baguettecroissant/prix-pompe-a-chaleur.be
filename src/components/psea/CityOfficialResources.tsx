import type { CityContent } from "@/data/city-content";
import { ExternalLink, Landmark, Zap, BadgeEuro } from "lucide-react";

interface Props {
  content: CityContent;
  cityName: string;
}

export function CityOfficialResources({ content, cityName }: Props) {
  const { links } = content;

  const resources = [
    {
      icon: <Landmark className="w-5 h-5 text-indigo-500" />,
      label: links.mairieLabel,
      url: links.mairie,
      desc: "Administration communale — urbanisme & permis",
      color: "bg-indigo-50 border-indigo-100",
    },
    {
      icon: <Zap className="w-5 h-5 text-teal-500" />,
      label: links.guichetEnergieNom,
      url: links.guichetEnergie,
      desc: "Conseil gratuit en rénovation énergétique",
      color: "bg-teal-50 border-teal-100",
    },
    {
      icon: <BadgeEuro className="w-5 h-5 text-amber-500" />,
      label: "Primes & aides financières",
      url: links.primeRegionale,
      desc: "Simulateur de primes et formulaires de demande",
      color: "bg-amber-50 border-amber-100",
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-xl font-bold text-slate-900 mb-2">
        Ressources officielles — {cityName}
      </h2>
      <p className="text-sm text-slate-500 mb-5">
        Liens vérifiés vers les organismes de référence pour votre projet PAC.
      </p>

      <div className="grid gap-3">
        {resources.map((r, i) => (
          <a
            key={i}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 px-5 py-4 rounded-xl border ${r.color} transition-all hover:shadow-md hover:-translate-y-0.5 group`}
          >
            <div className="shrink-0">{r.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-slate-800 group-hover:text-teal-700 transition-colors">
                {r.label}
              </p>
              <p className="text-xs text-slate-500">{r.desc}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 shrink-0 group-hover:text-teal-500 transition-colors" />
          </a>
        ))}
      </div>
    </section>
  );
}
