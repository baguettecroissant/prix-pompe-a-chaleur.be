"use client";

import { useState } from "react";

interface BobexWidgetProps {
    /** Bobex category type.id — default 11428 = Pompe à chaleur */
    typeId?: string;
    /** Affiliate ID */
    affId?: string;
    /** UTM source — your domain name */
    utmSource?: string;
    /** Height of the iframe */
    height?: string;
}

export function BobexWidget({
    typeId = "11428",
    affId = "110530",
    utmSource = "prix-pompe-a-chaleur.be",
    height = "750px",
}: BobexWidgetProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    const iframeSrc = `https://www.guide-renovation.be/bobex-form/typeid/${typeId}?aff=${affId}&utm_source=${utmSource}&multistep=true`;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Loading state */}
            {!isLoaded && (
                <div
                    className="flex flex-col items-center justify-center bg-slate-50 animate-pulse"
                    style={{ height }}
                >
                    <div className="w-10 h-10 border-3 border-teal-600 border-t-transparent rounded-full animate-spin mb-3" />
                    <p className="text-sm text-slate-500">
                        Chargement du formulaire…
                    </p>
                </div>
            )}

            {/* Bobex iframe */}
            <iframe
                src={iframeSrc}
                width="100%"
                style={{
                    height,
                    border: "none",
                    display: isLoaded ? "block" : "none",
                }}
                title="Demande de devis pompe à chaleur — Bobex.be"
                loading="lazy"
                allow="geolocation"
                onLoad={() => setIsLoaded(true)}
            />

            <p className="text-center text-xs text-slate-400 py-2 bg-slate-50 border-t border-slate-100">
                Service gratuit et sans engagement — Powered by{" "}
                <a
                    href="https://www.bobex.be"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-slate-500 hover:text-teal-600 transition-colors"
                >
                    Bobex.be
                </a>
            </p>
        </div>
    );
}
