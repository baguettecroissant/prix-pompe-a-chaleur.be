import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains",
    subsets: ["latin"],
    display: "swap",
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.prix-pompe-a-chaleur.be"),
    title: {
        template: "%s | Prix-Pompe-a-Chaleur.be",
        default: "Prix Pompe à Chaleur Belgique 2026 — Devis Gratuit & Primes",
    },
    description: "Comparez les prix des pompes à chaleur en Belgique. Devis gratuits d'installateurs certifiés RESCert. Primes Wallonie & Bruxelles. Guide indépendant 🇧🇪",
    openGraph: {
        type: "website",
        locale: "fr_BE",
        siteName: "Prix-Pompe-a-Chaleur.be",
    },
    twitter: {
        card: "summary",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr-BE">
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable} font-sans antialiased`}
            >
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1 pb-24 md:pb-0">{children}</main>
                    <Footer />
                </div>
                <MobileStickyCTA />
            </body>
        </html>
    );
}
