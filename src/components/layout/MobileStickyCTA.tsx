import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export function MobileStickyCTA() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
            <Link href="/devis" className="block w-full">
                <Button size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-white h-14 rounded-full text-lg font-bold shadow-lg flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <FileText className="mr-2 h-5 w-5" />
                    Devis Gratuit 🇧🇪
                </Button>
            </Link>
        </div>
    );
}
