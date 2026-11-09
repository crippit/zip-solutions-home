import { ChevronDown, ExternalLink } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "./ui/dropdown-menu";

interface DesktopNavProps {
  currentPath: string;
  isFr: boolean;
}

export function DesktopNav({ currentPath, isFr }: DesktopNavProps) {
  const l = (path: string) => {
    if (path.startsWith("http")) return path;
    if (!isFr) return path;
    if (path === "/") return "/fr";
    return `/fr${path}`;
  };

  const normalizedPath = currentPath.replace(/^\/fr(?=\/|$)/, "") || "/";

  const isHomeActive = normalizedPath === "/";
  const isProductsActive = [
    "/products",
    "/easyspeak",
    "/zippanel",
    "/zipconnect",
    "/zipvmix",
    "/zipcaptionscompanion",
    "/zipspeech",
    "/equibrowse",
    "/zipmath",
    "/events",
    "/live-event-quotes",
  ].includes(normalizedPath);
  const isZipCaptionsActive =
    normalizedPath === "/zipcaptions" ||
    normalizedPath.startsWith("/use-cases");
  const isPricingActive =
    normalizedPath === "/pricing" || normalizedPath === "/enterprise-pricing";
  const isAboutActive = [
    "/story",
    "/about-us",
    "/advisory",
    "/testimonial",
    "/press",
    "/pressrelease",
    "/privacy",
    "/terms",
    "/cookies",
  ].includes(normalizedPath);

  return (
    <nav
      className="hidden lg:flex items-center space-x-1 xl:space-x-2"
      aria-label={isFr ? "Navigation principale" : "Main Navigation"}
    >
      {/* Home Link */}
      <a
        href={l("/")}
        aria-current={isHomeActive ? "page" : undefined}
        className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
          isHomeActive
            ? "text-amethyst bg-purple-50"
            : "text-slate-700 hover:text-midnight hover:bg-slate-100"
        }`}
      >
        {isFr ? "Accueil" : "Home"}
      </a>

      {/* Products & Services Dropdown (Grouped by the 5 Product Families) */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-amethyst data-[state=open]:text-amethyst data-[state=open]:bg-purple-50 group ${
              isProductsActive
                ? "text-amethyst bg-purple-50"
                : "text-slate-700 hover:text-midnight hover:bg-slate-100"
            }`}
          >
            <span>{isFr ? "Produits et services" : "Products & Services"}</span>
            <ChevronDown className="w-4 h-4 text-slate-600 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-76">
          <DropdownMenuItem asChild>
            <a
              href={l("/products")}
              className="font-semibold text-midnight hover:text-amethyst focus:text-amethyst"
            >
              {isFr
                ? "Aperçu des 5 familles de solutions"
                : "All 5 Product & Service Families"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuLabel className="text-amethyst">
            {isFr
              ? "01 • Diffusion et sous-titrage"
              : "01 • Broadcast & Integrations"}
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a href={l("/zipvmix")}>
              {isFr ? "Passerelle vMix Zip Captions" : "Zip Captions vMix Bridge"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/zipcaptionscompanion")}>
              {isFr
                ? "Zip Captions Companion (Stream Deck)"
                : "Stream Deck Companion"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/zippanel")}>
              {isFr ? "Extension Zip Panel" : "Zip Panel Extension"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/zipconnect")}>
              {isFr ? "Extension Zip Connect" : "Zip Connect Extension"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuLabel className="text-teal-dark">
            {isFr ? "02 • CAA et synthèse vocale" : "02 • AAC & Speech Synthesis"}
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a href={l("/easyspeak")}>
              {isFr ? "EasySpeak CAA et IA locale" : "EasySpeak AAC & Offline AI"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/zipspeech")}>
              {isFr ? "Zip Speech (Google Meet)" : "Zip Speech for Google Meet"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuLabel className="text-indigo-700">
            {isFr
              ? "03 • Lecture et apprentissage"
              : "03 • Reading & K-13 Learning"}
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a href={l("/equibrowse")}>
              {isFr
                ? "Extension de lecture EquiBrowse"
                : "EquiBrowse Reading Extension"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/zipmath")}>
              {isFr
                ? "Zip Math Remediator (Google Workspace)"
                : "Zip Math Remediator (Workspace)"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuLabel className="text-slate-600">
            {isFr
              ? "04–05 • Événements, formations et AV"
              : "04–05 • Events, PD & AV Consultancy"}
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a href={l("/events")}>
              {isFr
                ? "Événements hybrides, AV et formations"
                : "Event Production, AV & Certified PD"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/live-event-quotes")}>
              {isFr
                ? "Solutions sur mesure pour événements"
                : "Custom Live Event Solutions"}
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Zip Captions Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-amethyst data-[state=open]:text-teal-brand data-[state=open]:bg-teal-50 group ${
              isZipCaptionsActive
                ? "text-teal-brand bg-teal-50"
                : "text-slate-700 hover:text-midnight hover:bg-slate-100"
            }`}
          >
            <span>Zip Captions</span>
            <ChevronDown className="w-4 h-4 text-slate-600 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-72">
          <DropdownMenuItem asChild>
            <a
              href={l("/zipcaptions")}
              className="font-semibold text-midnight hover:text-teal-brand focus:text-teal-brand"
            >
              {isFr ? "Découvrir Zip Captions" : "About Zip Captions"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href="https://zipcaptions.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between font-semibold text-teal-brand hover:text-teal-dark focus:text-teal-dark"
            >
              <span>{isFr ? "Lancer l'application" : "Launch Web App"}</span>
              <ExternalLink className="w-3.5 h-3.5 text-teal-brand" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuLabel>
            {isFr ? "Trousses sectorielles gratuites" : "Free Printable Sector Kits"}
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a
              href={l("/use-cases")}
              className="font-semibold text-midnight hover:text-teal-brand focus:text-teal-brand"
            >
              {isFr ? "Tous les secteurs et affiches" : "All Sectors & Printables"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={l("/use-cases/education")}
              className="text-xs text-slate-600 hover:text-teal-brand focus:text-teal-brand"
            >
              {isFr ? "Éducation et salles de classe" : "Education & Classrooms"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={l("/use-cases/live-events")}
              className="text-xs text-slate-600 hover:text-teal-brand focus:text-teal-brand"
            >
              {isFr ? "Événements et conférences" : "Live Events & Conferences"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={l("/use-cases/places-of-worship")}
              className="text-xs text-slate-600 hover:text-teal-brand focus:text-teal-brand"
            >
              {isFr ? "Lieux de culte et santé" : "Places of Worship & Healthcare"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuLabel>
            {isFr ? "Documentation et communauté" : "Docs & Community"}
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a
              href="https://help.zipcaptions.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between"
            >
              <span>{isFr ? "Centre d'aide" : "Help Center"}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href="https://discord.gg/5Hyu7sQTHv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between"
            >
              <span>{isFr ? "Communauté Discord" : "Community Discord"}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href="https://patreon.com/zipcaptions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between"
            >
              <span>{isFr ? "Soutenir sur Patreon" : "Support on Patreon"}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Pricing & Quotes Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-amethyst data-[state=open]:text-amethyst data-[state=open]:bg-purple-50 group ${
              isPricingActive
                ? "text-amethyst bg-purple-50"
                : "text-slate-700 hover:text-midnight hover:bg-slate-100"
            }`}
          >
            <span>{isFr ? "Tarifs et devis" : "Pricing & Quotes"}</span>
            <ChevronDown className="w-4 h-4 text-slate-600 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-72">
          <DropdownMenuLabel>
            {isFr ? "Individuel et libre (USD)" : "Personal & Free Core (USD)"}
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a href={l("/pricing")}>
              {isFr
                ? "Gratuit à vie + paliers IA (5 $–30 $/mois)"
                : "$0 Free Forever + Personal AI ($5–$30/mo)"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-teal-dark">
            {isFr ? "Entreprise et événements (CAD)" : "Enterprise & Events (CAD)"}
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a
              href={l("/enterprise-pricing")}
              className="font-semibold text-teal-brand hover:text-teal-dark focus:text-teal-dark"
            >
              {isFr
                ? "Calculateur de devis instantané (Bon de commande)"
                : "Instant Quote Calculator (PO Ready)"}
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* About Us Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-amethyst data-[state=open]:text-amethyst data-[state=open]:bg-purple-50 group ${
              isAboutActive
                ? "text-amethyst bg-purple-50"
                : "text-slate-700 hover:text-midnight hover:bg-slate-100"
            }`}
          >
            <span>{isFr ? "À propos" : "About Us"}</span>
            <ChevronDown className="w-4 h-4 text-slate-600 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64">
          <DropdownMenuLabel>
            {isFr ? "Mission et gouvernance" : "Mission & Governance"}
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a href={l("/story")}>{isFr ? "Notre histoire" : "Our Story"}</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/about-us")}>{isFr ? "Notre équipe" : "Our Team"}</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/advisory")}>
              {isFr ? "Comité consultatif" : "Advisory Board"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>
            {isFr ? "Impact et médias" : "Impact & Media"}
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a href={l("/testimonial")}>
              {isFr ? "Témoignages" : "Testimonials"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/press")}>{isFr ? "Presse et prix" : "In the Press"}</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/pressrelease")}>
              {isFr ? "Communiqués de presse" : "Press Releases"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>
            {isFr ? "Confidentialité et politiques" : "Privacy & Legal"}
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a href={l("/privacy")}>
              {isFr ? "Politique de confidentialité" : "Privacy Policy"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/terms")}>
              {isFr ? "Conditions d'utilisation" : "Terms of Service"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/cookies")}>
              {isFr ? "Politique des témoins (cookies)" : "Cookie Policy"}
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
