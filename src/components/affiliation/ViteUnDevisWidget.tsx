"use client";

import { useEffect, useRef } from "react";

export function ViteUnDevisWidget() {
    const containerRef = useRef<HTMLDivElement>(null);
    const injected = useRef(false);

    useEffect(() => {
        if (injected.current) return;
        injected.current = true;

        // Set global variables for the ViteUnDevis script
        const w = window as any;
        w.vud_partenaire_id = '2353';
        w.vud_categorie_id = '36'; // 36 = Pompe à chaleur

        // Create script — exact URL from ViteUnDevis partner portal
        const vud_js = document.createElement('script');
        vud_js.type = 'text/javascript';
        vud_js.src = '//www.viteundevis.com/25cfa7a4dc/' + w.vud_partenaire_id + '/' + w.vud_categorie_id + '/';

        // Inject script at the top of document
        const s = document.getElementsByTagName('script')[0];
        if (s && s.parentNode) {
            s.parentNode.insertBefore(vud_js, s);
        }
    }, []);

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            {/* Target DIV — must match ViteUnDevis hash exactly: v25cfa7a4dcd */}
            <div id="v25cfa7a4dcd" ref={containerRef} className="min-h-[400px] flex items-center justify-center text-slate-400">
                {/* ViteUnDevis form will be injected here */}
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">
                Service gratuit et sans engagement
            </p>
        </div>
    );
}
