import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCityFromSlug, generateCityMetadata, getAllCitySlugs } from "@/lib/seo-utils";
import { getCityContent } from "@/data/city-content";
import { CityHero } from "@/components/psea/CityHero";
import { CityEditorialSection } from "@/components/psea/CityEditorialSection";
import { CityPricingTable } from "@/components/psea/CityPricingTable";
import { CityOfficialResources } from "@/components/psea/CityOfficialResources";
import { ClimateZoneModule } from "@/components/psea/ClimateZoneModule";
import { LocalAidsModule } from "@/components/psea/LocalAidsModule";
import { StepsModule } from "@/components/psea/StepsModule";
import { NearbyCitiesModule } from "@/components/psea/NearbyCitiesModule";
import { SchemaOrg } from "@/components/psea/SchemaOrg";
import { ProvinceBreadcrumb } from "@/components/psea/ProvinceBreadcrumb";
import { BobexNativeForm } from "@/components/affiliation/BobexNativeForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return getAllCitySlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const city = getCityFromSlug(slug);
    if (!city) return {};
    return generateCityMetadata(city);
}

export default async function CityPage({ params }: Props) {
    const { slug } = await params;
    const city = getCityFromSlug(slug);
    if (!city) notFound();

    // Get unique content for this city (hand-written for top cities, generated for the rest)
    const content = getCityContent(city);
    const faqs = content.faqs;

    return (
        <div className="min-h-screen bg-white">
            <SchemaOrg city={city} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(f => ({
                        "@type": "Question",
                        "name": f.q,
                        "acceptedAnswer": { "@type": "Answer", "text": f.a }
                    }))
                })
            }} />

            <CityHero city={city} />

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <ProvinceBreadcrumb city={city} />

                {/* Unique editorial content — replaces old spintax intro */}
                <CityEditorialSection content={content} cityName={city.name} />

                {/* Local pricing data */}
                <CityPricingTable content={content} cityName={city.name} />

                <ClimateZoneModule city={city} />

                {/* Authority links — E-E-A-T boost */}
                <CityOfficialResources content={content} cityName={city.name} />
            </div>

            <LocalAidsModule city={city} />
            <StepsModule city={city} />

            {/* CTA + Widget */}
            <section className="py-12 bg-gradient-to-br from-teal-900 to-emerald-900 text-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-3">Devis gratuit à {city.name}</h2>
                        <p className="text-teal-100">Recevez jusqu&apos;à 3 devis d&apos;installateurs certifiés en {city.province_name}.</p>
                    </div>
                    <BobexNativeForm />
                </div>
            </section>

            {/* FAQ — unique per city */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Questions fréquentes — {city.name}</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((f, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="border-b-slate-200">
                                <AccordionTrigger className="text-lg font-bold text-slate-900 py-5">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-5">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <NearbyCitiesModule city={city} />

            {/* Final CTA */}
            <section className="py-16 bg-teal-50 text-center border-t border-teal-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-extrabold text-teal-950 mb-4">Projet PAC à {city.name} ?</h2>
                    <p className="text-lg text-teal-800 mb-8">Comparez 3 devis gratuits d&apos;installateurs certifiés RESCert.</p>
                    <Link href="/devis">
                        <Button size="lg" className="bg-teal-600 text-white hover:bg-teal-700 font-bold text-lg px-10 py-6 rounded-full shadow-xl">
                            Comparer les devis <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
