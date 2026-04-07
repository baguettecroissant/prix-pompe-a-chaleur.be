import Link from 'next/link';
import { City } from '@/types';
import { ChevronRight, Home } from 'lucide-react';

interface ProvinceBreadcrumbProps {
    city: City;
}

export function ProvinceBreadcrumb({ city }: ProvinceBreadcrumbProps) {
    const provinceSlug = `${city.province_name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}-${city.province_code}`;

    return (
        <nav aria-label="Fil d'ariane" className="text-sm text-slate-500 mb-6 flex items-center flex-wrap gap-1">
            <Link href="/" className="hover:text-teal-600 flex items-center gap-1">
                <Home className="h-3 w-3" />
                Accueil
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-300" />

            <Link href={`/annuaire/${provinceSlug}`} className="hover:text-teal-600">
                {city.province_name}
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-300" />

            <span className="text-slate-900 font-medium" aria-current="page">
                {city.name}
            </span>
        </nav>
    );
}
