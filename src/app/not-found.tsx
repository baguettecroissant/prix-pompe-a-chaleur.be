import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search, FileText } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 px-4 py-16 text-center">
      <div className="max-w-lg w-full bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-8xl md:text-9xl font-black text-teal-100 mb-6 font-heading">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Page introuvable</h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Oups ! Il semble que la page que vous recherchez ait été déplacée, supprimée ou n&apos;ait jamais existé.
        </p>
        
        <div className="flex flex-col gap-4">
          <Link href="/devis" className="w-full">
            <Button size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full h-14 text-lg shadow-md">
              <FileText className="mr-2 h-5 w-5" />
              Demander un devis gratuit
            </Button>
          </Link>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link href="/" className="w-full">
              <Button size="lg" variant="outline" className="w-full rounded-full border-slate-300 text-slate-700 hover:bg-slate-50 h-12">
                <Home className="mr-2 h-4 w-4" />
                Accueil
              </Button>
            </Link>
            <Link href="/guides" className="w-full">
              <Button size="lg" variant="outline" className="w-full rounded-full border-slate-300 text-slate-700 hover:bg-slate-50 h-12">
                <Search className="mr-2 h-4 w-4" />
                Nos guides
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
