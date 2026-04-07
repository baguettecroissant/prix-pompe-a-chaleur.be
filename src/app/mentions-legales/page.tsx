import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales — Prix-Pompe-a-Chaleur.be",
    description: "Mentions légales du site Prix-Pompe-a-Chaleur.be — Guide indépendant sur les pompes à chaleur en Belgique.",
    alternates: { canonical: 'https://www.prix-pompe-a-chaleur.be/mentions-legales' },
};

export default function MentionsLegalesPage() {
    return (
        <div className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-4 max-w-3xl prose prose-slate prose-lg">
                <h1>Mentions légales</h1>

                <h2>Éditeur du site</h2>
                <p>
                    Le site <strong>Prix-Pompe-a-Chaleur.be</strong> est un guide informatif indépendant dédié aux pompes à chaleur en Belgique francophone (Wallonie et Bruxelles-Capitale).
                </p>

                <h2>Hébergement</h2>
                <p>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Coppell, TX 75019, États-Unis.</p>

                <h2>Avertissements</h2>
                <p>
                    Les informations présentes sur ce site (prix, montants de primes, réglementations) sont données à titre
                    indicatif. Elles sont mises à jour régulièrement mais ne peuvent remplacer les informations officielles
                    des administrations régionales (SPW Énergie, Bruxelles Environnement).
                </p>
                <p>
                    Les prix mentionnés sont des fourchettes moyennes constatées sur le marché belge.
                    Seul un devis personnalisé établi par un installateur certifié peut fournir un montant exact.
                </p>

                <h2>Affiliation et monétisation</h2>
                <p>
                    Ce site peut percevoir une commission lorsque vous demandez un devis via nos partenaires.
                    Ce modèle nous permet de maintenir un contenu gratuit, indépendant et de qualité.
                    Les recommandations éditoriales ne sont pas influencées par ces partenariats.
                </p>

                <h2>Données personnelles (RGPD)</h2>
                <p>
                    Conformément au RGPD, les données collectées via le formulaire de devis sont transmises à nos
                    partenaires installateurs pour la seule finalité de vous fournir un devis.
                    Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
                </p>

                <h2>Propriété intellectuelle</h2>
                <p>
                    L&apos;intégralité du contenu du site (textes, images, illustrations) est protégée par le droit d&apos;auteur.
                    Toute reproduction totale ou partielle est interdite sans autorisation préalable.
                </p>

                <h2>Contact</h2>
                <p>Pour toute question, contactez-nous à : contact@prix-pompe-a-chaleur.be</p>
            </div>
        </div>
    );
}
