"use client";

import { useState, useRef } from "react";
import { CheckCircle, ArrowRight, ArrowLeft, Loader2, Zap, Home, Phone, User, MapPin, ThermometerSun, Droplets, Wind } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────── */
interface FormData {
    projectType: string;
    projectUsage: string[];
    buildingType: string;
    currentHeating: string;
    postcode: string;
    city: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    remarks: string;
}

interface BobexNativeFormProps {
    typeId?: string;
    utmSource?: string;
}

const INITIAL_DATA: FormData = {
    projectType: "",
    projectUsage: [],
    buildingType: "",
    currentHeating: "",
    postcode: "",
    city: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    remarks: "",
};

/* ─── Main Component ─────────────────────────────────────────── */
export function BobexNativeForm({ typeId = "11428", utmSource = "prix-pompe-a-chaleur.be" }: BobexNativeFormProps) {
    const [step, setStep] = useState(0);
    const [data, setData] = useState<FormData>(INITIAL_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");
    const formRef = useRef<HTMLDivElement>(null);

    const totalSteps = 3;
    const progress = isSuccess ? 100 : ((step + 1) / totalSteps) * 100;

    const update = (field: keyof FormData, value: string | string[]) => {
        setData(prev => ({ ...prev, [field]: value }));
        setError("");
    };

    const toggleUsage = (val: string) => {
        setData(prev => ({
            ...prev,
            projectUsage: prev.projectUsage.includes(val)
                ? prev.projectUsage.filter(v => v !== val)
                : [...prev.projectUsage, val],
        }));
    };

    /* ─── Validation ──────────────────────────────────────────── */
    const validateStep = (): boolean => {
        if (step === 0) {
            if (!data.projectType) { setError("Sélectionnez un type de pompe à chaleur"); return false; }
            if (data.projectUsage.length === 0) { setError("Sélectionnez au moins un usage"); return false; }
            return true;
        }
        if (step === 1) {
            if (!data.postcode || data.postcode.length !== 4) { setError("Entrez un code postal belge valide (4 chiffres)"); return false; }
            if (!data.buildingType) { setError("Sélectionnez un type de bâtiment"); return false; }
            return true;
        }
        if (step === 2) {
            if (!data.firstName.trim()) { setError("Entrez votre prénom"); return false; }
            if (!data.lastName.trim()) { setError("Entrez votre nom"); return false; }
            if (!data.email.includes("@")) { setError("Entrez un email valide"); return false; }
            if (!data.phone || data.phone.length < 9) { setError("Entrez un numéro de téléphone valide"); return false; }
            return true;
        }
        return true;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep(s => Math.min(s + 1, totalSteps - 1));
            formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const prevStep = () => {
        setStep(s => Math.max(s - 1, 0));
        setError("");
    };

    /* ─── Submit ──────────────────────────────────────────────── */
    const handleSubmit = async () => {
        if (!validateStep()) return;
        setIsSubmitting(true);
        setError("");

        const remarks = [
            `Type: ${data.projectType}`,
            `Usage: ${data.projectUsage.join(", ")}`,
            `Bâtiment: ${data.buildingType}`,
            data.currentHeating ? `Chauffage actuel: ${data.currentHeating}` : "",
        ].filter(Boolean).join(" | ");

        try {
            const res = await fetch("/api/submit-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    phone: data.phone,
                    postcode: data.postcode,
                    city: data.city,
                    address: data.address,
                    remarks,
                    typeId,
                    utmSource,
                }),
            });

            const result = await res.json();
            if (result.success) {
                setIsSuccess(true);
            } else {
                setError(result.error || "Une erreur est survenue. Veuillez réessayer.");
            }
        } catch {
            setError("Erreur de connexion. Vérifiez votre connexion internet.");
        } finally {
            setIsSubmitting(false);
        }
    };

    /* ─── Success State ───────────────────────────────────────── */
    if (isSuccess) {
        return (
            <div ref={formRef} className="bg-white rounded-2xl border border-teal-200 shadow-lg overflow-hidden">
                <div className="bg-teal-600 h-1.5 w-full" />
                <div className="p-8 md:p-12 text-center">
                    <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                        <CheckCircle className="h-10 w-10 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Demande envoyée avec succès !
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto mb-6">
                        Merci {data.firstName} ! Vous allez recevoir jusqu&apos;à 3 devis d&apos;installateurs certifiés
                        dans la zone {data.postcode} sous 48h.
                    </p>
                    <div className="bg-teal-50 rounded-xl p-4 max-w-sm mx-auto">
                        <p className="text-sm text-teal-800 font-medium">📧 Un email de confirmation a été envoyé à</p>
                        <p className="text-sm text-teal-900 font-bold">{data.email}</p>
                    </div>
                </div>
            </div>
        );
    }

    /* ─── Render ──────────────────────────────────────────────── */
    return (
        <div ref={formRef} className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-slate-100 h-1.5">
                <div
                    className="bg-teal-600 h-full transition-all duration-500 ease-out rounded-r-full"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Step Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                    <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                        Étape {step + 1} sur {totalSteps}
                    </p>
                    <h3 className="text-lg font-bold text-slate-900">
                        {step === 0 && "Votre projet PAC"}
                        {step === 1 && "Votre habitation"}
                        {step === 2 && "Vos coordonnées"}
                    </h3>
                </div>
                <div className="flex gap-1">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                        <div key={i} className={`w-2.5 h-2.5 rounded-full transition-colors ${i <= step ? "bg-teal-600" : "bg-slate-200"}`} />
                    ))}
                </div>
            </div>

            {/* Form Body */}
            <div className="p-6 md:p-8">
                {/* ─── STEP 1: Project Type ───────────────────── */}
                {step === 0 && (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">
                                Quel type de pompe à chaleur vous intéresse ?
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {[
                                    { value: "Air/Eau", icon: Droplets, desc: "La plus populaire", popular: true },
                                    { value: "Air/Air", icon: Wind, desc: "Climatisation réversible" },
                                    { value: "Géothermique", icon: ThermometerSun, desc: "Sol/Eau – Haute performance" },
                                ].map(opt => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => update("projectType", opt.value)}
                                        className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md ${
                                            data.projectType === opt.value
                                                ? "border-teal-600 bg-teal-50 shadow-md"
                                                : "border-slate-200 hover:border-teal-300"
                                        }`}
                                    >
                                        {opt.popular && (
                                            <span className="absolute -top-2.5 right-3 bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                POPULAIRE
                                            </span>
                                        )}
                                        <opt.icon className={`h-6 w-6 mb-2 ${data.projectType === opt.value ? "text-teal-600" : "text-slate-400"}`} />
                                        <p className="font-bold text-slate-900">{opt.value}</p>
                                        <p className="text-xs text-slate-500">{opt.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">
                                Pour quel usage ? (plusieurs choix possibles)
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { value: "Chauffage", icon: "🔥" },
                                    { value: "Eau chaude sanitaire", icon: "🚿" },
                                    { value: "Climatisation", icon: "❄️" },
                                    { value: "Piscine", icon: "🏊" },
                                ].map(opt => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => toggleUsage(opt.value)}
                                        className={`p-3 rounded-lg border-2 text-left text-sm font-medium transition-all ${
                                            data.projectUsage.includes(opt.value)
                                                ? "border-teal-600 bg-teal-50 text-teal-800"
                                                : "border-slate-200 text-slate-600 hover:border-teal-300"
                                        }`}
                                    >
                                        <span className="mr-2">{opt.icon}</span>{opt.value}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ─── STEP 2: Building ───────────────────────── */}
                {step === 1 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    <MapPin className="inline h-4 w-4 mr-1" />Code postal *
                                </label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={4}
                                    placeholder="1000"
                                    value={data.postcode}
                                    onChange={e => update("postcode", e.target.value.replace(/\D/g, ""))}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-lg font-bold text-center focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Commune
                                </label>
                                <input
                                    type="text"
                                    placeholder="Bruxelles"
                                    value={data.city}
                                    onChange={e => update("city", e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">
                                <Home className="inline h-4 w-4 mr-1" />Type de bâtiment *
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {["Maison", "Appartement", "Villa", "Bureaux"].map(val => (
                                    <button
                                        key={val}
                                        type="button"
                                        onClick={() => update("buildingType", val)}
                                        className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                                            data.buildingType === val
                                                ? "border-teal-600 bg-teal-50 text-teal-800"
                                                : "border-slate-200 text-slate-600 hover:border-teal-300"
                                        }`}
                                    >
                                        {val}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">
                                Chauffage actuel (optionnel)
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {["Mazout", "Gaz naturel", "Électrique", "Charbon/Bois", "PAC existante", "Aucun"].map(val => (
                                    <button
                                        key={val}
                                        type="button"
                                        onClick={() => update("currentHeating", val)}
                                        className={`p-2.5 rounded-lg border-2 text-xs font-medium transition-all ${
                                            data.currentHeating === val
                                                ? "border-teal-600 bg-teal-50 text-teal-800"
                                                : "border-slate-200 text-slate-600 hover:border-teal-300"
                                        }`}
                                    >
                                        {val}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ─── STEP 3: Contact Details ────────────────── */}
                {step === 2 && (
                    <div className="space-y-4">
                        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-2">
                            <p className="text-sm text-teal-800">
                                <strong>🔒 Vos données sont protégées.</strong> Elles sont uniquement transmises aux installateurs certifiés de votre région.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    <User className="inline h-4 w-4 mr-1" />Prénom *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Jean"
                                    value={data.firstName}
                                    onChange={e => update("firstName", e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    Nom *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Dupont"
                                    value={data.lastName}
                                    onChange={e => update("lastName", e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                📧 Email *
                            </label>
                            <input
                                type="email"
                                placeholder="jean.dupont@email.be"
                                value={data.email}
                                onChange={e => update("email", e.target.value)}
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                <Phone className="inline h-4 w-4 mr-1" />Téléphone *
                            </label>
                            <input
                                type="tel"
                                placeholder="04XX XX XX XX"
                                value={data.phone}
                                onChange={e => update("phone", e.target.value)}
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                Adresse (optionnel)
                            </label>
                            <input
                                type="text"
                                placeholder="Rue de la Loi 16"
                                value={data.address}
                                onChange={e => update("address", e.target.value)}
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                            />
                        </div>

                        <p className="text-xs text-slate-400 mt-2">
                            En soumettant ce formulaire, vous acceptez d&apos;être contacté par des installateurs certifiés.
                            Service 100% gratuit et sans engagement.
                        </p>
                    </div>
                )}

                {/* ─── Error Display ──────────────────────────── */}
                {error && (
                    <div className="mt-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 font-medium">
                        ⚠️ {error}
                    </div>
                )}

                {/* ─── Navigation ─────────────────────────────── */}
                <div className="flex items-center justify-between mt-8">
                    {step > 0 ? (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 font-medium transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" /> Retour
                        </button>
                    ) : (
                        <div />
                    )}

                    {step < totalSteps - 1 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
                        >
                            Suivant <ArrowRight className="h-4 w-4" />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours…
                                </>
                            ) : (
                                <>
                                    <Zap className="h-4 w-4" /> Recevoir mes devis gratuits
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>

            {/* Footer Trust Badges */}
            <div className="bg-slate-50 border-t border-slate-100 px-6 py-3 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">🔒 Données sécurisées</span>
                <span className="flex items-center gap-1">✅ 100% gratuit</span>
                <span className="flex items-center gap-1">🇧🇪 Installateurs belges certifiés</span>
            </div>
        </div>
    );
}
