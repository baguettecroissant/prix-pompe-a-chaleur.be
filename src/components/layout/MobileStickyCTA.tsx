import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export function MobileStickyCTA() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 px-4 py-2.5 bg-white/95 backdrop-blur-md border-t border-slate-200 z-50 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
            <Link href="/devis" className="block w-full">
                <Button size="sm" className="w-full bg-teal-600 hover:bg-teal-700 text-white h-11 rounded-full text-sm font-bold shadow-md flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <FileText className="mr-1.5 h-4 w-4" />
                    Devis Gratuit 🇧🇪
                </Button>
            </Link>
        </div>
    );
}
