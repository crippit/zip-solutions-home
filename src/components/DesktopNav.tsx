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

  const isHomeActive = currentPath === "/" || currentPath === "/fr";
  const isAdvisoryActive = currentPath === "/advisory" || currentPath === "/fr/advisory";

  return (
    <nav
      className="hidden lg:flex items-center space-x-1 xl:space-x-2"
      aria-label={isFr ? "Navigation principale" : "Main Navigation"}
    >
      {/* Home Link */}
      <a
        href={l("/")}
        className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
          isHomeActive
            ? "text-amethyst bg-purple-50"
            : "text-slate-700 hover:text-midnight hover:bg-slate-100"
        }`}
      >
        {isFr ? "Accueil" : "Home"}
      </a>

      {/* Products & Services Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-midnight hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-amethyst data-[state=open]:text-amethyst data-[state=open]:bg-purple-50 group"
          >
            <span>{isFr ? "Produits et services" : "Products & Services"}</span>
            <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-68">
          <DropdownMenuItem asChild>
            <a href={l("/products")}>
              {isFr ? "Aperçu des services" : "Services Overview"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/zipcaptions")}>Zip Captions</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/easyspeak")}>
              {isFr ? "EasySpeak CAA" : "Easy Speak AAC"}
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
          <DropdownMenuItem asChild>
            <a href={l("/zipvmix")}>
              {isFr ? "Passerelle vMix Zip Captions" : "Zip Captions vMix Bridge"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/zipcaptionscompanion")}>
              {isFr ? "Zip Captions Companion (Stream Deck)" : "Stream Deck Companion"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/zipspeech")}>
              {isFr ? "Zip Speech (Google Meet)" : "Zip Speech for Google Meet"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/equibrowse")}>
              {isFr ? "Navigateur accessible EquiBrowse" : "EquiBrowse Reading Extension"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/zipmath")}>Zip Math Remediator</a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a href={l("/events")}>
              {isFr ? "Événements hybrides et formations" : "Event Production & Training"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/live-event-quotes")}>
              {isFr ? "Devis pour événements en direct" : "Custom Live Event Quotes"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/enterprise-pricing")}>
              {isFr ? "Calculateur de devis Entreprise" : "Enterprise Pricing Calculator"}
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Advisory Board Link */}
      <a
        href={l("/advisory")}
        className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
          isAdvisoryActive
            ? "text-amethyst bg-purple-50"
            : "text-slate-700 hover:text-midnight hover:bg-slate-100"
        }`}
      >
        {isFr ? "Comité consultatif" : "Advisory Board"}
      </a>

      {/* Zip Captions Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-midnight hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-amethyst data-[state=open]:text-teal-brand data-[state=open]:bg-teal-50 group"
          >
            <span>Zip Captions</span>
            <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-72">
          <DropdownMenuItem asChild>
            <a href={l("/zipcaptions")} className="hover:text-teal-brand focus:text-teal-brand">
              {isFr ? "À propos de Zip Captions" : "About Zip Captions"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/pricing")} className="hover:text-teal-brand focus:text-teal-brand">
              {isFr ? "Tarifs individuels (Patreon)" : "Personal Pricing (Patreon)"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/enterprise-pricing")} className="font-semibold text-teal-brand hover:text-teal-dark focus:text-teal-dark">
              {isFr ? "Calculateur de devis Entreprise" : "Enterprise Pricing Calculator"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>
            {isFr ? "Secteurs et ressources" : "Sectors & Printables"}
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a href={l("/use-cases")} className="font-semibold text-midnight hover:text-teal-brand focus:text-teal-brand">
              {isFr ? "Tous les secteurs et affiches" : "All Sectors & Printables"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/use-cases/education")} className="text-xs text-slate-600 hover:text-teal-brand focus:text-teal-brand">
              {isFr ? "Éducation et écoles" : "Education & Classrooms"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/use-cases/places-of-worship")} className="text-xs text-slate-600 hover:text-teal-brand focus:text-teal-brand">
              {isFr ? "Lieux de culte" : "Places of Worship"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/use-cases/healthcare")} className="text-xs text-slate-600 hover:text-teal-brand focus:text-teal-brand">
              {isFr ? "Santé et cliniques" : "Healthcare & Clinics"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/use-cases/live-events")} className="text-xs text-slate-600 hover:text-teal-brand focus:text-teal-brand">
              {isFr ? "Événements et conférences" : "Live Events & Conferences"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/use-cases/public-sector")} className="text-xs text-slate-600 hover:text-teal-brand focus:text-teal-brand">
              {isFr ? "Secteur public et aînés" : "Public Sector & Seniors"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/use-cases/broadcast-and-streaming")} className="text-xs text-slate-600 hover:text-teal-brand focus:text-teal-brand">
              {isFr ? "Diffusion et streaming" : "Broadcast & Streaming"}
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a
              href="https://zipcaptions.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between"
            >
              <span>{isFr ? "Lancer le sous-titrage" : "Start Captioning"}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href="https://help.zipcaptions.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between"
            >
              <span>{isFr ? "Centre d'aide" : "Help Center"}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
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
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
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
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* About Us Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-midnight hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-amethyst data-[state=open]:text-amethyst data-[state=open]:bg-purple-50 group"
          >
            <span>{isFr ? "À propos" : "About Us"}</span>
            <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-60">
          <DropdownMenuItem asChild>
            <a href={l("/story")}>{isFr ? "Notre histoire" : "Our Story"}</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/about-us")}>{isFr ? "Notre équipe" : "Our Team"}</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/testimonial")}>{isFr ? "Témoignages" : "Testimonials"}</a>
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
          <DropdownMenuItem asChild>
            <a href={l("/privacy")}>{isFr ? "Confidentialité" : "Privacy Policy"}</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={l("/terms")}>{isFr ? "Conditions d'utilisation" : "Terms of Service"}</a>
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
