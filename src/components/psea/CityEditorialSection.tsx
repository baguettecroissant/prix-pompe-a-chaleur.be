"use client";

import type { CityContent } from "@/data/city-content";
import { Building2, Leaf, Home } from "lucide-react";

interface Props {
  content: CityContent;
  cityName: string;
}

export function CityEditorialSection({ content, cityName }: Props) {
  const { editorial, localFact } = content;

  return (
    <section className="py-12">
      <div className="space-y-10">
        {/* Contexte local */}
        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mt-1">
              <Building2 className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Pompe à chaleur à {cityName} : contexte local
              </h2>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {editorial.contexteParagraph}
              </p>
            </div>
          </div>
        </div>

        {/* Patrimoine immobilier */}
        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mt-1">
              <Home className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Le patrimoine immobilier de {cityName}
              </h2>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {editorial.patrimoineParagraph}
              </p>
            </div>
          </div>
        </div>

        {/* Profil énergétique */}
        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mt-1">
              <Leaf className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Profil énergétique et transition à {cityName}
              </h2>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {editorial.energieParagraph}
              </p>
            </div>
          </div>
        </div>

        {/* Local fact callout */}
        {localFact && (
          <div className="mt-6 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 rounded-2xl p-5">
            <p className="text-sm text-teal-800 leading-relaxed">
              <span className="font-semibold text-teal-900">💡 Le saviez-vous ?</span>{" "}
              {localFact}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
