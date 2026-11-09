import * as React from "react";
import { Menu, ChevronDown, Globe, ExternalLink } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

interface MobileNavSheetProps {
  currentPath: string;
  isFr: boolean;
  switchLangUrl: string;
  switchLangText: string;
  switchLangShort: string;
}

export function MobileNavSheet({
  currentPath,
  isFr,
  switchLangUrl,
  switchLangText,
  switchLangShort,
}: MobileNavSheetProps) {
  const [open, setOpen] = React.useState(false);

  const l = (path: string) => {
    if (path.startsWith("http")) return path;
    if (!isFr) return path;
    if (path === "/") return "/fr";
    return `/fr${path}`;
  };

  const closeSheet = () => setOpen(false);
  const normalizedPath = currentPath.replace(/^\/fr(?=\/|$)/, "") || "/";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="p-2.5 rounded-xl text-slate-700 hover:text-midnight hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amethyst"
          aria-label={isFr ? "Basculer le menu de navigation" : "Toggle navigation menu"}
        >
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        closeLabel={isFr ? "Fermer le menu" : "Close menu"}
        className="w-full sm:max-w-md flex flex-col justify-between"
      >
        <div className="space-y-4">
          <SheetHeader>
            <SheetTitle>{isFr ? "Menu" : "Navigation"}</SheetTitle>
            <SheetDescription className="sr-only">
              {isFr ? "Menu principal de navigation du site" : "Site main navigation menu"}
            </SheetDescription>
          </SheetHeader>

          {/* Language Switcher inside Drawer */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-xs font-bold font-mono text-slate-600 uppercase tracking-wider">
              {isFr ? "Langue" : "Language"}
            </span>
            <a
              href={switchLangUrl}
              onClick={closeSheet}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold font-mono text-midnight hover:text-amethyst transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{switchLangText} ({switchLangShort})</span>
            </a>
          </div>

          <nav className="space-y-1" aria-label={isFr ? "Navigation mobile" : "Mobile Navigation"}>
            <a
              href={l("/")}
              onClick={closeSheet}
              aria-current={normalizedPath === "/" ? "page" : undefined}
              className={`block px-3.5 py-2.5 rounded-xl text-base font-semibold ${
                normalizedPath === "/"
                  ? "text-amethyst bg-purple-50"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              {isFr ? "Accueil" : "Home"}
            </a>

            {/* Products & Services Section (Exclusive Accordion via name="mobile-nav-accordion") */}
            <details name="mobile-nav-accordion" className="group rounded-xl">
              <summary className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 cursor-pointer list-none">
                <span>{isFr ? "Produits et services" : "Products & Services"}</span>
                <ChevronDown className="w-4 h-4 text-slate-600 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 pr-2 py-1.5 space-y-1 text-sm">
                <a
                  href={l("/products")}
                  onClick={closeSheet}
                  className="block px-3 py-2 rounded-lg font-semibold text-midnight hover:text-amethyst hover:bg-purple-50"
                >
                  {isFr ? "Aperçu des 5 familles" : "All 5 Product & Service Families"}
                </a>

                <p className="px-3 pt-2 pb-1 text-xs font-bold font-mono uppercase tracking-wider text-amethyst">
                  {isFr ? "01 • Diffusion et sous-titrage" : "01 • Broadcast & Integrations"}
                </p>
                <a href={l("/zipvmix")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Passerelle vMix Zip Captions" : "Zip Captions vMix Bridge"}
                </a>
                <a href={l("/zipcaptionscompanion")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Zip Captions Companion (Stream Deck)" : "Stream Deck Companion"}
                </a>
                <a href={l("/zippanel")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Extension Zip Panel" : "Zip Panel Extension"}
                </a>
                <a href={l("/zipconnect")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Extension Zip Connect" : "Zip Connect Extension"}
                </a>

                <p className="px-3 pt-2 pb-1 text-xs font-bold font-mono uppercase tracking-wider text-teal-dark">
                  {isFr ? "02 • CAA et synthèse vocale" : "02 • AAC & Speech Synthesis"}
                </p>
                <a href={l("/easyspeak")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "EasySpeak CAA et IA locale" : "EasySpeak AAC & Offline AI"}
                </a>
                <a href={l("/zipspeech")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Zip Speech (Google Meet)" : "Zip Speech for Google Meet"}
                </a>

                <p className="px-3 pt-2 pb-1 text-xs font-bold font-mono uppercase tracking-wider text-indigo-700">
                  {isFr ? "03 • Lecture et apprentissage" : "03 • Reading & K-13 Learning"}
                </p>
                <a href={l("/equibrowse")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Extension de lecture EquiBrowse" : "EquiBrowse Reading Extension"}
                </a>
                <a href={l("/zipmath")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Zip Math Remediator (Workspace)" : "Zip Math Remediator (Workspace)"}
                </a>

                <p className="px-3 pt-2 pb-1 text-xs font-bold font-mono uppercase tracking-wider text-slate-600">
                  {isFr ? "04–05 • Événements, formations et AV" : "04–05 • Events, PD & AV Consultancy"}
                </p>
                <a href={l("/events")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Événements hybrides, AV et formations" : "Event Production, AV & Certified PD"}
                </a>
                <a href={l("/live-event-quotes")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Solutions sur mesure pour événements" : "Custom Live Event Solutions"}
                </a>
              </div>
            </details>

            {/* Zip Captions Section */}
            <details name="mobile-nav-accordion" className="group rounded-xl">
              <summary className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 cursor-pointer list-none">
                <span>Zip Captions</span>
                <ChevronDown className="w-4 h-4 text-slate-600 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 pr-2 py-1.5 space-y-1 text-sm">
                <a href={l("/zipcaptions")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-semibold text-midnight hover:text-teal-brand hover:bg-teal-50">
                  {isFr ? "Découvrir Zip Captions" : "About Zip Captions"}
                </a>
                <a href="https://zipcaptions.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-1.5 rounded-lg font-semibold text-teal-brand hover:bg-teal-50">
                  <span>{isFr ? "Lancer l'application" : "Launch Web App"}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-teal-brand" />
                </a>
                <a href={l("/use-cases")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-teal-brand hover:bg-teal-50">
                  {isFr ? "Trousses sectorielles et affiches" : "Free Printable Sector Kits"}
                </a>
                <a href="https://help.zipcaptions.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-1.5 rounded-lg text-slate-700 hover:text-teal-brand hover:bg-teal-50">
                  <span>{isFr ? "Centre d'aide" : "Help Center"}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </details>

            {/* Pricing & Quotes Section */}
            <details name="mobile-nav-accordion" className="group rounded-xl">
              <summary className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 cursor-pointer list-none">
                <span>{isFr ? "Tarifs et devis" : "Pricing & Quotes"}</span>
                <ChevronDown className="w-4 h-4 text-slate-600 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 pr-2 py-1.5 space-y-1 text-sm">
                <a href={l("/pricing")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Gratuit à vie + paliers IA (Patreon)" : "$0 Free Forever + Personal AI (Patreon)"}
                </a>
                <a href={l("/enterprise-pricing")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-semibold text-teal-brand hover:bg-teal-50">
                  {isFr ? "Calculateur de devis Entreprise (CAD)" : "Instant Enterprise Quote Calculator (CAD)"}
                </a>
              </div>
            </details>

            {/* About Us Section */}
            <details name="mobile-nav-accordion" className="group rounded-xl">
              <summary className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 cursor-pointer list-none">
                <span>{isFr ? "À propos" : "About Us"}</span>
                <ChevronDown className="w-4 h-4 text-slate-600 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 pr-2 py-1.5 space-y-1 text-sm">
                <a href={l("/story")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Notre histoire" : "Our Story"}
                </a>
                <a href={l("/about-us")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Notre équipe" : "Our Team"}
                </a>
                <a href={l("/advisory")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Comité consultatif" : "Advisory Board"}
                </a>
                <a href={l("/testimonial")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Témoignages" : "Testimonials"}
                </a>
                <a href={l("/press")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Presse et prix" : "In the Press"}
                </a>
                <a href={l("/pressrelease")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Communiqués de presse" : "Press Releases"}
                </a>
                <div className="my-1 border-t border-slate-100" />
                <a href={l("/privacy")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Confidentialité" : "Privacy Policy"}
                </a>
                <a href={l("/terms")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Conditions d'utilisation" : "Terms of Service"}
                </a>
                <a href={l("/cookies")} onClick={closeSheet} className="block px-3 py-1.5 rounded-lg font-medium text-slate-700 hover:text-amethyst hover:bg-purple-50">
                  {isFr ? "Politique des témoins (cookies)" : "Cookie Policy"}
                </a>
              </div>
            </details>
          </nav>
        </div>

        {/* Bottom CTA in Sheet */}
        <div className="pt-6 border-t border-slate-100">
          <a
            href={l("/contact-us")}
            onClick={closeSheet}
            className="flex items-center justify-center w-full px-5 py-3 rounded-xl font-heading font-semibold text-white bg-teal-brand hover:bg-teal-dark transition-colors shadow-sm"
          >
            {isFr ? "Contactez-nous" : "Contact Us"}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
