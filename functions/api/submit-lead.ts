/**
 * Cloudflare Pages Function — Bobex Lead Proxy
 * POST /api/submit-lead
 *
 * Proxies lead data to Bobex API to avoid CORS issues.
 * Keeps affiliate ID server-side for security.
 */

interface LeadData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    postcode: string;
    city?: string;
    address?: string;
    remarks?: string;
    typeId?: string;
    utmSource?: string;
}

export const onRequestPost: PagesFunction = async (context) => {
    const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    };

    try {
        const body: LeadData = await context.request.json();

        // Validate required fields
        const required = ["firstName", "lastName", "email", "phone", "postcode"];
        for (const field of required) {
            if (!body[field as keyof LeadData]) {
                return new Response(
                    JSON.stringify({ success: false, error: `Champ manquant: ${field}` }),
                    { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
                );
            }
        }

        // Build Bobex API URL
        const params = new URLSearchParams({
            "type.id": body.typeId || "11428", // Default: Pompe à chaleur
            aff: "110530",                     // Affiliate ID
            language: "fr",
            XML_country: "BE",
            companyType: "label.companytype.consumer",
            utm_medium: "aff",
            utm_source: body.utmSource || "prix-pompe-a-chaleur.be",
            firstName: body.firstName,
            lastName: body.lastName,
            address1: body.address || "",
            XML_postcode: body.postcode,
            companyCity: body.city || "",
            XML_telephone: body.phone,
            XML_email: body.email,
            XML_remarks: body.remarks || "",
            rem_id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            rem_source: "affiliate",
            promoOptin: "true",
        });

        const bobexUrl = `https://www.bobex.be/control/partner_concours_withheld?${params.toString()}`;

        // Send lead to Bobex
        const bobexResponse = await fetch(bobexUrl, {
            method: "GET",
            redirect: "follow",
            headers: {
                "User-Agent": "PrixPompeAChaleur-Affiliate/1.0",
            },
        });

        if (bobexResponse.ok || bobexResponse.status === 302 || bobexResponse.status === 301) {
            return new Response(
                JSON.stringify({ success: true, message: "Votre demande a bien été envoyée !" }),
                { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
            );
        } else {
            console.error("Bobex error:", bobexResponse.status, await bobexResponse.text());
            return new Response(
                JSON.stringify({ success: false, error: "Erreur lors de l'envoi. Veuillez réessayer." }),
                { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } }
            );
        }
    } catch (err) {
        console.error("Submit lead error:", err);
        return new Response(
            JSON.stringify({ success: false, error: "Erreur serveur. Veuillez réessayer." }),
            { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
    }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
    return new Response(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    });
};
