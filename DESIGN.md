---
name: Zip Solutions
description: Dignity by Design, Inclusion without Friction — The Home of Accessibility
colors:
  midnight: "#0F172A"
  alabaster: "#F8FAFC"
  pure-white: "#FFFFFF"
  amethyst: "#8B5CF6"
  amethyst-light: "#A78BFA"
  amethyst-dark: "#7C3AED"
  amethyst-tint: "#F5F3FF"
  teal-brand: "#0D9488"
  teal-light: "#14B8A6"
  teal-dark: "#0F766E"
  teal-tint: "#F0FDFA"
  coral: "#FB7185"
  coral-light: "#FDA4AF"
  coral-dark: "#F43F5E"
  indigo-learning: "#4F46E5"
  slate-body: "#475569"
  slate-muted: "#64748B"
  slate-border: "#E2E8F0"
  slate-surface: "#F1F5F9"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  3xl: "24px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.amethyst}"
    textColor: "{colors.pure-white}"
    typography: "{typography.title}"
    rounded: "{rounded.2xl}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.amethyst-dark}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.2xl}"
    padding: "14px 32px"
  button-midnight:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.pure-white}"
    typography: "{typography.title}"
    rounded: "{rounded.2xl}"
    padding: "14px 32px"
  button-teal:
    backgroundColor: "{colors.teal-brand}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.xl}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.2xl}"
    padding: "14px 32px"
  card-surface:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.3xl}"
    padding: "28px"
  input-field:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.xl}"
    padding: "12px 16px"
---

# Design System: Zip Solutions

## Overview

**Creative North Star: "Dignity by Design, Inclusion without Friction"**

Zip Solutions is the engine room of modern assistive technology. Historically, the assistive technology sector has imposed an "accessibility tax"—locking essential human communication behind overpriced hardware, institutional red tape, and dated, clinical interfaces. The visual system of ZipSolutions.org directly combats this tax by championing open access, technical elegance, and human-centric engineering. Every page must feel simultaneously trustworthy to a school board procurement officer, technically credible to a theatre or broadcast AV engineer, and welcoming to an individual learner or educator launching a free tool in their browser.

The aesthetic philosophy is built on **high-contrast daylight clarity**. Crisp Soft Alabaster (`#F8FAFC`) and Pure White (`#FFFFFF`) surfaces anchor a WCAG AAA contrast ratio (~16.8:1) against Midnight Obsidian (`#0F172A`) typography. Geometric `Plus Jakarta Sans` headings project confidence and warmth, `Inter` delivers effortless long-form readability, and `JetBrains Mono` provides precision technical eyebrows and live pricing readouts. Across the entire platform, a strict **zero-pill geometry** replaces generic SaaS floating pill badges with structured squircle containers (`12px` to `24px` radii) and clean typographic hierarchy.

We explicitly reject generic AI-slop SaaS tropes: no floating rounded-full pill badges above headings, no low-contrast slate-on-slate body copy, no dark-only neon cyberpunk gradients, and no cluttered decorative chrome that competes with assistive utility.

**Key Characteristics:**
- **WCAG AAA Daylight Foundation:** High-contrast `#0F172A` text over `#F8FAFC` and `#FFFFFF` canvases (~16.8:1 contrast ratio) engineered for immediate legibility across laptops, smartphones, and classroom projectors.
- **Engine-Room Technical Elegance:** Precision monospace eyebrows (`JetBrains Mono`), masked isometric micro-dot lattices (`.iso-dots`), and structured specification grids that signal serious acoustic and software engineering.
- **Semantic Product-Family Color Coding:** Distinct, purposeful color lanes mapping each of the five product families to a dedicated brand hue without overwhelming the calm daylight canvas.
- **Disciplined Zero-Pill Geometry:** Squircle corners (`8px`, `12px`, `16px`, `24px`) across all buttons, inputs, tabs, and cards—never `rounded-full` capsules or floating decorative pills.
- **Tactile, Accessible Interaction:** Unmistakable `2px` Electric Amethyst focus rings, generous `48px` (`min-h-12`) form touch targets, above-input format hints, and complete `prefers-reduced-motion` parity.

## Colors

The Zip Solutions palette balances a high-contrast architectural neutral foundation (`Midnight Obsidian` and `Soft Alabaster`) with vibrant, semantic accent families that orient users across software tools, live event production, and acoustic consultancy.

### Primary
- **Electric Amethyst** (`#8B5CF6`): The flagship brand accent and universal focus indicator. Powers primary product CTAs, the *Live Captioning & Broadcast* product family (`Zip Captions`, `ZipVMix`, `ZipPanel`, `Zip Connect`, `Companion`), active navigation states, and global `:focus-visible` outlines.
- **Amethyst Dark** (`#7C3AED`): Interactive hover and active pressed state for Electric Amethyst buttons and links, plus the *Respect* value card accent.
- **Amethyst Light** (`#A78BFA`): Highlight accent used on dark `Midnight Obsidian` surfaces and subtle gradient transitions.
- **Amethyst Tint** (`#F5F3FF`): Soft surface wash (`bg-purple-50`) for icon containers, active navigation items, blockquote callouts, and secondary amethyst button backgrounds.

### Secondary
- **Vibrant Teal** (`#0D9488`): Co-primary functional accent representing the *AAC & Speech Synthesis* product family (`Zip EasySpeak`, `EasySpeak AI`, `EasySpeak for Education`, `Zip Speech`), the header "Contact Us" CTA, privacy architecture highlights, inline prose links, and enterprise quote confirmation states.
- **Teal Dark** (`#0F766E`): Hover state for Vibrant Teal buttons and the dedicated accent for the *AV Consultancy & Open Guides* product family (Assistive Listening, Digital Sound & Lighting, Captioning Consultancy, Free Resources).
- **Teal Light** (`#14B8A6`): High-visibility numeric and badge readout color on dark `Midnight Obsidian` containers (such as the Enterprise Quote Calculator summary badge).
- **Teal Tint** (`#F0FDFA`): Soft surface wash (`bg-teal-50`) for AAC icon wells, attached enterprise estimate banners, and verification badges.

### Tertiary
- **Safety Coral** (`#FB7185`): Warm human-centric accent representing the *Dignity* philosophy pillar, the *Event Organisation & Educator PD* service family, and required form field indicators (`*`).
- **Coral Dark** (`#F43F5E`): High-emphasis hover and validation alert accent.
- **Coral Light** (`#FDA4AF`): Soft coral highlight for dark-surface accents.
- **Deep Indigo** (`#4F46E5`): Semantic family accent (`bg-indigo-600`) dedicated to the *Equitable Reading & Learning* suite (`EquiBrowse`, `EquiAssess`, `Zip Solutions Remediator`).

### Neutral
- **Midnight Obsidian** (`#0F172A`): Primary ink for all headings, primary body copy, high-priority dark CTA buttons (`Explore All Tools`), bottom CTA stages, and the site footer. Also serves as the RGB tint base (`rgb(15 23 42)`) for the entire elevation shadow scale.
- **Soft Alabaster** (`#F8FAFC`): Default page canvas (`<body>`), providing a warm, glare-free daylight surface that achieves a ~16.8:1 contrast ratio against Midnight Obsidian.
- **Pure White** (`#FFFFFF`): Elevated card surface, sticky header background (`bg-white/95`), form input background, and hero top gradient anchor.
- **Slate Body** (`#475569` / `slate-600` & `#334155` / `slate-700`): Secondary descriptive prose, card summaries, and table cell copy—always maintaining strong WCAG AA/AAA readability.
- **Slate Muted** (`#64748B` / `slate-500`): Metadata captions, form format hints, and secondary timestamps.
- **Slate Border** (`#E2E8F0` / `slate-200`): Default 1px structural hairline border across cards, sections, tables, and navigation bars.
- **Slate Surface** (`#F1F5F9` / `slate-100`): Subtle recessed container fill for segmented tab bars, table headers, and secondary interactive wells.

### Named Rules

**The AAA Daylight Rule.** Primary reading surfaces must pair `Midnight Obsidian` (`#0F172A`) text with `Soft Alabaster` (`#F8FAFC`) or `Pure White` (`#FFFFFF`) backgrounds to preserve the ~16.8:1 contrast foundation. Dark `Midnight Obsidian` backgrounds are reserved strictly for full-bleed closing CTA stages, dark UI showcase frames, and the global footer.

**The Semantic Family Lane Rule.** Product families own their assigned accent color across icon wells, ambient corner glows, and category indicators: *Live Captioning & Broadcast* uses `Electric Amethyst` (`#8B5CF6`), *AAC & Speech Synthesis* uses `Vibrant Teal` (`#0D9488`), *Equitable Reading & Learning* uses `Deep Indigo` (`#4F46E5`), *Event Organisation & PD* uses `Safety Coral` (`#FB7185`), and *AV Consultancy & Open Guides* uses `Teal Dark` (`#0F766E`). Never scramble family colors for decoration.

**The Single-Gradient Rule.** Multi-stop brand gradients (`from-amethyst via-purple-600 to-teal-brand`) are reserved exclusively for focal hero display phrases (such as *"Accessibility"* in *"The Home of Accessibility"*) and subtle radial top-washes (`rgba(139,92,246,0.06)`). Buttons, cards, and navigation surfaces use solid, high-contrast fills.

## Typography

**Display & Headline Font:** `Plus Jakarta Sans` (weights `400`, `600`, `700`, `800`, with `system-ui, -apple-system, sans-serif` fallback)
**Body Font:** `Inter` (weights `400`, `500`, `600`, `700`, with `system-ui, -apple-system, sans-serif` fallback)
**Label / Technical Mono Font:** `JetBrains Mono` (weights `400`, `500`, `700`, with `monospace` fallback)

**Character:** `Plus Jakarta Sans` brings modern geometric authority and approachable warmth to headlines and interactive buttons, avoiding cold corporate sterility. `Inter` handles dense educational, technical, and bilingual French/English body copy with effortless legibility, while `JetBrains Mono` grounds the interface in engineering precision for section eyebrows, pricing readouts, and configuration previews.

### Hierarchy
- **Display** (`800` ExtraBold, `2.25rem` mobile to `3.75rem–4.5rem` desktop / `text-4xl sm:text-6xl lg:text-7xl`, line-height `1.1`, tracking `-0.025em`): Primary hero headlines on the homepage and flagship product landings.
- **Headline** (`800` ExtraBold, `1.5rem` mobile to `2.25rem` desktop / `text-2xl sm:text-4xl`, line-height `1.2`, tracking `-0.025em`): Section headings (`<h2>`) and major page banners.
- **Title** (`700` Bold, `1.125rem` to `1.25rem` / `text-lg sm:text-xl`, line-height `1.35`): Card titles (`<h3>`), team member names, and form step headers.
- **Body** (`400` Regular / `500` Medium, `1rem` to `1.125rem` / `text-base sm:text-lg`, line-height `1.625` / `leading-relaxed`): Standard paragraphs, FAQ answers, and documentation prose, constrained to `60ch–72ch` (`max-w-2xl` or `max-w-3xl`) for comfortable eye tracking.
- **Label / Eyebrow** (`700` Bold, `0.75rem` / `12px` `text-xs`, uppercase, tracking `0.05em` / `tracking-wider`): Placed directly above section or hero headings in `Electric Amethyst` or `Vibrant Teal` (`Plus Jakarta Sans` or `JetBrains Mono`) to establish context without pill containers.

### Named Rules

**The Plain Eyebrow Rule.** Category kickers, award dates, and step indicators above headings must be rendered as plain uppercase text (`text-xs font-bold uppercase tracking-wider`) in `amethyst`, `teal-brand`, or `slate-400`—never wrapped inside pill borders or shaded lozenge backgrounds.

**The Monospace Telemetry Rule.** Use `JetBrains Mono` (`font-mono`) for live price calculations (`$1,000 CAD`), bilingual switcher codes (`EN` / `FR`), date stamps, JSON/configuration previews, and technical eyebrow metadata so operational figures stand apart from narrative prose.

## Layout

ZipSolutions.org uses a responsive, centered container architecture designed to keep complex bilingual catalogs, pricing matrices, and multi-step forms scannable at every viewport.

- **Container Scale:**
  - **Wide Catalog & Navigation Canvas:** `1280px` (`max-w-7xl`) with horizontal padding `16px` mobile (`px-4`), `24px` tablet (`sm:px-6`), and `32px` desktop (`lg:px-8`). Used for the sticky header, footer, homepage hero, 3-column product grids, and enterprise calculator.
  - **Structured Content & Comparison Canvas:** `1152px` (`max-w-6xl`) for leadership profiles, accolade grids, and multi-column feature breakdowns.
  - **Product Stage & Spec Canvas:** `1024px` (`max-w-5xl`) for product showcase media, 2-column specification grids, and closing CTA banners.
  - **Editorial & Form Canvas:** `896px` (`max-w-4xl`) for long-form markdown documentation (`.prose-custom`), story timelines, and the 3-step `QuoteForm`.
- **Grid Topologies:**
  - **3-Column Feature & Product Grid:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `24px` (`gap-6`) to `32px` (`sm:gap-8`) gutters.
  - **2-Column Award & Spec Grid:** `grid-cols-1 md:grid-cols-2` with `20px` (`gap-5`) to `32px` (`lg:gap-8`) gutters.
  - **6-Column Institutional Partner Bar:** `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6` (`gap-4`) with uniform `48px` (`h-12`) logo wells.
  - **12-Column Asymmetric Profile Grid:** `lg:grid-cols-12` (`lg:col-span-4` identity column + `lg:col-span-8` biography column) on team and advisory pages.
- **Vertical Rhythm:** Major page sections are separated by `64px` to `96px` vertical padding (`py-16 sm:py-24`) and crisp `1px solid #E2E8F0` (`border-b border-slate-200/80`) section dividers, alternating between Pure White gradients (`from-white via-slate-50 to-alabaster`) and recessed `Soft Alabaster` (`bg-slate-50`) bands.
- **Breakpoints:** Standard Tailwind responsive tiers (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`), with desktop horizontal navigation activating at `lg: 1024px` to accommodate longer French navigation labels without wrapping.

## Elevation & Depth

Depth is **structural and midnight-tinted**. Rather than relying on heavy drop shadows or flat borderless floating cards, every container is anchored at rest by a crisp `1px solid #E2E8F0` (`border-slate-200` or `border-slate-200/80`) hairline border and a subtle shadow tinted with `Midnight Obsidian` (`rgb(15 23 42)`). On interactive cards and buttons, hover states simultaneously shift the border toward the active accent hue (`hover:border-amethyst/50` or `hover:border-teal-300`), elevate the shadow one step up the scale, and apply a subtle vertical lift (`hover:-translate-y-1`).

### Shadow Vocabulary
- **`shadow-2xs`** (`0 1px 1px 0 rgb(15 23 42 / 0.04)`): Micro-elevation for utility controls such as the header `EN`/`FR` language switcher button.
- **`shadow-xs`** (`0 1px 2px 0 rgb(15 23 42 / 0.05)`): Subtle rest state for institutional partner logo tiles and framed logo wells.
- **`shadow-sm`** (`0 1px 2px 0 rgb(15 23 42 / 0.04), 0 6px 16px -6px rgb(15 23 42 / 0.07)`): Default rest elevation for all primary cards, form containers, prose articles, and the sticky header.
- **`shadow-md`** (`0 1px 2px 0 rgb(15 23 42 / 0.05), 0 10px 22px -6px rgb(15 23 42 / 0.10)`): Default elevation for primary CTA buttons (`bg-amethyst`, `bg-midnight`), product family icon wells, and card hover states.
- **`shadow-lg`** (`0 2px 5px -1px rgb(15 23 42 / 0.05), 0 16px 32px -8px rgb(15 23 42 / 0.12)`): Hover elevation for primary CTA buttons and inverted white CTA buttons on dark stages.
- **`shadow-xl`** (`0 2px 6px -1px rgb(15 23 42 / 0.06), 0 24px 48px -12px rgb(15 23 42 / 0.16)`): High-elevation showcase frames (`heroImage` media containers), interactive product card hover states, and skip-to-content focus banners.

### Atmospheric Texture & Motion
- **Isometric Micro-Dot Lattice (`.iso-dots` / `.iso-dots-dark`):** A custom `11px × 19px` SVG lattice (`60deg` pitch, `0.6px` dots at `17%` Midnight opacity on light heroes, or `23%` Slate/Teal opacity on dark CTA stages). Always paired with a radial vignette mask (`.iso-mask-hero`, `.iso-mask-stage`, `.iso-mask-cta`) so dots fade cleanly before intersecting readable text.
- **Scroll-Driven Parallax:** Decorative background lattices use CSS `animation-timeline: scroll(root block)` and `view-timeline: --parallax block` (`translate3d` only, `10px–40px` range) gated behind `@media (prefers-reduced-motion: no-preference)`.

### Named Rules

**The Border-First Elevation Rule.** Never rely on `box-shadow` alone to separate a white card from an alabaster or white background. Every card, input, and surface container must carry an explicit `1px` border (`border-slate-200`) at rest so boundaries remain unmistakable on low-contrast classroom projectors.

**The Masked Lattice Rule.** Background dot grids (`.iso-dots` and `.iso-dots-dark`) must always be paired with a radial mask class (`.iso-mask-*`) and `pointer-events-none` (`aria-hidden="true"`), ensuring decorative texture never degrades text contrast.

## Shapes

The form language of Zip Solutions is **tactile squircle geometry**. Corners are generously rounded to feel friendly and human-centric, yet structured enough to align cleanly in multi-column grids.

- **Small Controls & Footer Badges (`rounded-lg` / `8px`):** Mobile language switcher, footer logo backing plate, and inline check badges.
- **Interactive Controls & Inputs (`rounded-xl` / `12px`):** Header navigation links, dropdown triggers, category filter buttons, segmented tab bars, text/email/select form inputs, and header CTA buttons.
- **Primary CTAs, Icon Wells & Sub-Cards (`rounded-2xl` / `16px`):** Hero and product primary action buttons (`px-6 py-3.5` or `px-8 py-3.5`), `48px × 48px` (`w-12 h-12`) card icon containers, specification tiles, partner logo cards, and prose images.
- **Primary Surface Cards & Stages (`rounded-3xl` / `24px`):** Product catalog cards, value cards, leadership profile articles, hero screenshot frames (`p-2 sm:p-3 bg-white rounded-3xl`), markdown article containers, and the multi-step `QuoteForm` wrapper.
- **Ambient Corner Glows:** Product cards in `ZipDashboard` feature a decorative `112px × 112px` (`w-28 h-28`) `rounded-3xl` corner blob positioned at `-right-10 -top-10` with `opacity-10` (`group-hover:opacity-25`) in the product family's semantic color.

### Named Rules

**The Zero-Pill Rule.** Do not use `rounded-full` (`9999px`) for badges, category tags, tab bars, or buttons. All interactive controls, status labels, and segmented switches use structured squircle radii (`rounded-lg` `8px`, `rounded-xl` `12px`, or `rounded-2xl` `16px`), and category headers use plain uppercase typography.

## Components

Every component is built to feel **tactile, high-contrast, and zero-pill**, prioritizing immediate comprehension, keyboard/screen-reader accessibility, and bilingual text resilience.

### Buttons
- **Shape:** Squircle `16px` radius (`rounded-2xl`) for hero and section CTAs; `12px` radius (`rounded-xl`) for compact header, calculator, and utility buttons.
- **Primary (Amethyst):** `Electric Amethyst` (`#8B5CF6`) fill, `Pure White` (`#FFFFFF`) text, `Plus Jakarta Sans` Bold (`700`), `14px 24px` to `14px 32px` padding (`px-6 py-3.5` or `px-8 py-3.5`), `shadow-md`. Hover shifts to `Amethyst Dark` (`#7C3AED`) with `shadow-lg`.
- **Primary Dark (Midnight):** `Midnight Obsidian` (`#0F172A`) fill, `Pure White` text, `rounded-2xl`, `shadow-md`. Hover shifts to `slate-800` (`#1E293B`) with `shadow-xl`.
- **Primary Header / Action (Teal):** `Vibrant Teal` (`#0D9488`) fill, `Pure White` text, `rounded-xl`, `10px 20px` padding (`px-5 py-2.5`), `shadow-sm`. Hover shifts to `Teal Dark` (`#0F766E`) with `shadow-md`.
- **Secondary / Tinted Amethyst:** `Amethyst Tint` (`#F5F3FF` / `bg-purple-50`) fill, `Electric Amethyst` (`#8B5CF6`) text, `1px solid rgba(139, 92, 246, 0.3)` border, `rounded-2xl`. Hover fills with solid `Electric Amethyst` (`#8B5CF6`) and flips text to `Pure White`.
- **Secondary / Neutral Outline:** `Pure White` (`#FFFFFF`) fill, `Midnight Obsidian` (`#0F172A`) text, `1px solid #E2E8F0` (`border-slate-200`), `rounded-2xl`, `shadow-sm`. Hover shifts background to `slate-100` (`#F1F5F9`).
- **Focus Treatment:** All buttons inherit a high-visibility `2px solid #8B5CF6` outline with `2px` offset (`:focus-visible`) or explicit `focus-visible:ring-2`.

### Chips / Category Filter Buttons
- **Character:** Structured squircle filter toggles (`ZipDashboard`) and segmented navigation tabs (`Our Story / Core Team / Advisory Board`)—never rounded pills.
- **Filter Button Style:** `12px` radius (`rounded-xl`), `6px 14px` padding (`px-3.5 py-1.5`), `12px` (`text-xs`) SemiBold (`600`), `1px` border, `aria-pressed` state binding.
- **States:** Unselected uses `Pure White` fill, `slate-600` (`#475569`) text, and `slate-200` border (`hover:border-amethyst/50 hover:text-amethyst`). Selected (`active-filter`) locks to `Midnight Obsidian` (`#0F172A`) fill and border with `Pure White` text.
- **Segmented Tab Bar:** Recessed `slate-200/70` (`rounded-xl p-1`) track containing `rounded-lg` (`8px`) tab links; active tab renders in `Pure White` with `Midnight Obsidian` text and `shadow-sm`.

### Cards / Containers
- **Corner Style:** `24px` radius (`rounded-3xl`) for primary feature, product, and profile cards; `16px` radius (`rounded-2xl`) for compact specification tiles, award cards, and partner logo boxes.
- **Background & Border:** `Pure White` (`#FFFFFF`) surface with `1px solid rgba(226, 232, 240, 0.8)` (`border-slate-200/80`).
- **Shadow Strategy:** `shadow-sm` at rest; interactive catalog cards transition (`duration-300`) to `shadow-xl` and `-translate-y-1` on hover.
- **Internal Padding:** `24px` to `32px` (`p-6 sm:p-8`) for standard cards; `24px` to `48px` (`p-6 sm:p-10 lg:p-12`) for long-form article and leadership profile containers.
- **Icon Wells:** `48px × 48px` (`w-12 h-12`) `rounded-2xl` container at the top-left of feature cards, styled either as a soft tinted well (`bg-purple-50 border border-purple-100 text-amethyst`) or a solid family-colored badge (`p-3.5 rounded-2xl text-white shadow-md bg-amethyst`) in `ZipDashboard`.

### Inputs / Fields
- **Style:** `Pure White` (`#FFFFFF`) background, `1px solid #CBD5E1` (`border-slate-300`), `12px` radius (`rounded-xl`), `12px 16px` padding (`px-4 py-3`), minimum height `48px` (`min-h-12`), `16px` (`text-base`) text in `Midnight Obsidian` with `slate-400` placeholders.
- **Above-Input Hints:** Format hints and helper descriptions (`span.hint`) are always placed **above** the `<input>` element (directly below the `<label>`) so browser autocomplete popovers never obscure formatting instructions during typing.
- **Focus & Validation:** Focus removes default outline and applies `ring-2 ring-teal-brand` (`#0D9488`) on forms or `ring-2 ring-amethyst` (`#8B5CF6`) on search fields. Invalid fields display a polite live-region error message (`div.error-msg`) below the input with an explicit icon and clear recovery text.

### Navigation
- **Header Bar:** Sticky top (`sticky top-0 z-50`), `80px` height (`h-20`), `bg-white/95 backdrop-blur-md`, `border-b border-slate-200/80`, `shadow-sm`.
- **Desktop Navigation (`DesktopNav.tsx`):** Radix UI `DropdownMenu` primitives (`Products & Services`, `Zip Captions`, `About Us`) + direct links (`Home`, `Advisory Board`). Triggers use `rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700`, shifting to `bg-purple-50 text-amethyst` (or `bg-teal-50 text-teal-brand` for the Zip Captions menu) when open (`data-[state=open]`), with a `180deg` rotating chevron.
- **Language Switcher & Contact CTA:** Positioned at the right of the header—a `JetBrains Mono` `EN`/`FR` button (`rounded-xl border border-slate-200 px-2.5 py-1.5 text-xs font-bold font-mono`) paired with a `Vibrant Teal` `Contact Us` button (`rounded-xl px-5 py-2.5`).
- **Mobile Navigation (`MobileNavSheet.tsx`):** Radix UI `Dialog`/`Sheet` drawer triggered below `1024px` (`lg:hidden`), paired with an always-visible compact `EN`/`FR` quick-switcher in the top bar.

### Signature Components
- **Interactive Product Catalog (`ZipDashboard.astro`):** Combines a live `rounded-2xl` search bar, live `aria-live="polite"` solution counter, squircle category filter bar, and 3-column product cards featuring semantic family color accents (`amethyst`, `teal-brand`, `indigo-600`, `coral`, `teal-dark`), ambient corner glows, monospace pricing metadata, and dual action links (`Launch App` + `Learn More`).
- **Enterprise Pricing Calculator & Quote Handoff (`EnterprisePricingCalculator.astro` + `QuoteForm.astro`):** Interactive multi-day, multi-room live event quote builder ($1,000 CAD Day 1 base + $250 CAD/additional day + $200 CAD/additional room/day with CAD/USD toggle) that dynamically populates a `JetBrains Mono` schedule preview card (`#attached-enterprise-quote-box`) directly inside the 3-step procurement form.

## Do's and Don'ts

### Do:
- **Do** maintain the ~16.8:1 WCAG AAA contrast baseline by setting primary text in `Midnight Obsidian` (`#0F172A`) over `Soft Alabaster` (`#F8FAFC`) or `Pure White` (`#FFFFFF`) canvases.
- **Do** use plain uppercase typography (`text-xs font-bold uppercase tracking-wider`) in `Electric Amethyst` (`#8B5CF6`), `Vibrant Teal` (`#0D9488`), or `Slate` for section eyebrows and card category labels.
- **Do** honor the semantic product-family color assignments (`amethyst` for Live Captioning, `teal-brand` for AAC, `indigo-600` for Equitable Learning, `coral` for Events/PD, `teal-dark` for AV Consultancy).
- **Do** place form field format hints (`span.hint`) **above** the `<input>` element and enforce a `48px` (`min-h-12`) minimum touch target on form controls.
- **Do** pair every decorative `.iso-dots` or `.iso-dots-dark` background lattice with its radial fade mask (`.iso-mask-hero`, `.iso-mask-stage`, `.iso-mask-cta`) and `prefers-reduced-motion` safeguards.
- **Do** design every component layout to expand gracefully for both English and Canadian French (`Solutions Zip`) copy without truncation or horizontal overflow.

### Don't:
- **Don't** use `rounded-full` pill badges, lozenge tags, or floating capsule kickers anywhere in the UI (strictly follow **The Zero-Pill Rule**).
- **Don't** place white cards on white or alabaster backgrounds without an explicit `1px` border (`border-slate-200`).
- **Don't** use low-contrast gray body text (`slate-400` or lighter) on light surfaces for readable content; keep body copy at `slate-600` (`#475569`), `slate-700` (`#334155`), or `midnight` (`#0F172A`).
- **Don't** apply multi-stop purple-to-teal gradients to buttons, card backgrounds, or form controls; keep interactive surfaces solid and crisp.
- **Don't** obscure or alter confirmed pricing tiers ($0 Free Forever core tools, $5/$15/$30 USD Patreon AI tiers, and $1,000 CAD Day 1 + $250/day + $200/room/day Enterprise event formula).
