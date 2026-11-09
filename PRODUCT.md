# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Zip Solutions serves multiple audiences across its product families and professional services:

- **Institutional Decision-Makers & Practitioners:** K-12 and higher-education educators, teachers of the deaf, speech-language pathologists, conference/event organizers, worship & broadcast AV teams, and public-sector or healthcare accessibility coordinators seeking reliable, privacy-safe tools and deployment kits.
- **Individual & Self-Serve Users:** d/Deaf and hard-of-hearing individuals, non-speaking or minimally speaking AAC users, neurodivergent learners, and self-serve educators or creators who need instant, dignified communication and reading tools in their browser without accounts or barriers.
- **Enterprise Procurement, Event Producers & Venue Leads:** School boards, universities, municipalities, theatres, and multi-room conference organizers configuring supported live event captioning, stage/LED surtitles, mobile QR attendee relays, hybrid event production, educator PD workshops, or assistive listening/AV consultancy via official Purchase Orders (POs) and invoices.

## Product Purpose

ZipSolutions.org (`https://zipsolutions.org`) is the bilingual (English and Canadian French) home, product hub, and service portal for **Zip Solutions** (*Solutions Zip* in French)—"The Home of Accessibility." It connects users immediately to 100% free, open-source, and privacy-first assistive web applications (principally designed for education and community inclusion) while providing transparent self-serve AI tiers, an interactive Enterprise & Live Event Quote Calculator, sector-specific deployment kits, and professional AV/event consultancy.

Success means:
- Visitors can launch or install free accessibility tools (`Zip Captions`, `Zip EasySpeak`, `EquiBrowse`, `Zip Solutions Remediator`, broadcast bridges) with zero friction.
- Educators and coordinators can find sector-specific guidance and downloadable printables (`public/files/printables/`).
- Individual supporters and institutions clearly understand the distinction between $0 Free Forever tools, optional $5–$30/mo personal Patreon AI tiers, and custom CAD/USD Enterprise/Event SLA pricing—and can generate and submit an accurate institutional quote in minutes.

## Positioning

Zip Solutions is a collective of active educators, software engineers, and accessibility specialists (founded by Chris Webb and James Petersen near Montreal, Quebec, Canada) building open-source and browser-native accessibility products primarily for education and community venues.

Unlike commercial captioning or ed-tech vendors that lock essential accommodations behind per-student subscriptions, hardware dongles, admin installs, or invasive telemetry:
- **Zero-Barrier Browser Execution:** Core applications run directly in the browser across Web, ChromeOS, iOS, Android, Windows, macOS, and Linux with no student logins, no audio recording, and no per-viewer fees when 30 or 3,000 attendees scan a Broadcast QR code.
- **Graceful Continuity:** Paid AI captioning tiers never cut off a speaker mid-session to a blank screen—users can switch seamlessly to unlimited $0 Regular captioning without losing their Broadcast Room Code or OBS/vMix stream.
- **Bring-Your-Own-Key (BYOK) & Offline AI:** Tools like `Zip EasySpeak AI` run local on-device AI offline in the browser, and `Zip Solutions Remediator` uses a school's own Gemini API key so schools never pay per-student software markups.

## Operating Context

- **Classrooms & Schools:** K-13 classrooms, lecture halls, and school districts running Chromebooks, iPads, and SMART panels—where IT lock-downs, student privacy laws (GDPR/FERPA/Quebec Law 25), and zero-login workflows are decisive.
- **Sanctuaries, Theatres & Broadcast Booths:** Places of worship, community theatres, and livestreams integrating captions with OBS Studio, vMix (`ZipVMix`), Elgato Stream Deck / Bitfocus Companion (`Zip Captions Companion`), Twitch (`Zip Connect`), Phonak Roger assistive listening, and ETC Mosaic lighting.
- **Conferences, Municipalities & Healthcare:** Multi-room conventions, public-sector council meetings, and clinical reception/consultation rooms using printed QR tent cards, entrance posters, and AV checklists (`public/files/printables/`).

## Capabilities and Constraints

- **Product Catalog (5 Families):**
  1. *Live Captioning & Broadcast:* Zip Captions (`zipcaptions.app`), Zip Captions for vMix, Zip Captions Companion, ZipPanel, Zip Connect, and Custom Live Event Solutions.
  2. *AAC & Speech Synthesis:* Zip EasySpeak (`easyspeak.zipsolutions.org`), Zip EasySpeak AI (`easyspeakai.zipsolutions.org`), Zip EasySpeak for Education (`easyspeakforedu.zipsolutions.org`), and Zip Speech for Google Meet.
  3. *Equitable Reading & Learning:* EquiBrowse, EquiAssess (`equiassess.zipsolutions.org`), and Zip Solutions Remediator (`zipmath`).
  4. *Event Organisation & PD:* In-Person, Hybrid & Virtual Event Production and Google for Education Certified Trainer PD workshops.
  5. *AV Consultancy & Open Guides:* Assistive Listening System Consultancy (install-your-own-system blueprints), Digital Sound & Lighting Systems, Captioning Consultancy, and Free Resources for Listening Accessibility (`resources.zipsolutions.org`).
- **Strict Bilingual Parity:** Every user-facing page, navigation flow, printable resource, and metadata schema must maintain full English (`/`) and Canadian French (`/fr/*`) parity (`Zip Solutions` / `Solutions Zip`).
- **Confirmed Pricing & Tiers (Must Never Drift):**
  - **Core Tools:** 100% Free Forever ($0) for Regular Zip Captions, QR/Broadcast audience viewing, EasySpeak, EasySpeak AI, EasySpeak for Education, EquiBrowse, Zip Speech, ZipPanel, Zip Connect, Zip vMix, and Remediator (BYOK Gemini key).
  - **Personal / Individual AI Tiers (via Patreon, USD):** Free Tier ($0), Essential ($5/mo, 5 hrs AI), Premium ($15/mo, 10 hrs AI, Most Popular), Platinum ($30/mo, 25 hrs AI + SWAG & priority support).
  - **Enterprise & Supported Live Events (CAD base with USD toggle, PO/Invoice ready):** $1,000 CAD for Day 1 (includes 1 primary room + dedicated enterprise support), $250 CAD for each additional day, and $200 CAD per day for each additional concurrent room.
- **Technical Stack:** Astro 5 static site with React 19 interactive islands (`DesktopNav`, `MobileNavSheet`, `EnterprisePricingCalculator`, `QuoteForm`, `ZipDashboard`, `JsonGenerator`), Tailwind CSS v4, Radix UI primitives, and Cloudflare Turnstile form protection, deployed on Vercel with legacy `.html` and slug redirects preserved in `astro.config.mjs` and `vercel.json`.

## Brand Commitments

- **Identity & Name:** Zip Solutions (`Solutions Zip` in French) — "The Home of Accessibility" (*La maison de l'accessibilité*).
- **Voice & Tone:** Dignified, educator-grounded, transparent, practical, and human-centered. Never condescending, clinical, or hype-driven.
- **Privacy Promise:** Never record voice audio, never track users, never mine personal telemetry, and never sell student or client data.

## Evidence on Hand

- **Awards & Backing:** University of Portsmouth 2025 Alumni Impact Award Winner; Virginia Society for Technology in Education (VSTE) Accessibility Demo Slam Winner; Dell Technologies Education Canada Innovation Accelerator (2023 inaugural cohort); Microsoft for Startups Founders Hub.
- **Partner & Institutional Logos (`public/images/logos/`):** University of Portsmouth, VSTE, English Montreal School Board (EMSB), Pearson, Hear Quebec, Audition Québec, Dell Technologies, Microsoft.
- **Leadership & Advisory (`src/pages/about-us.astro`, `src/pages/advisory.astro`):** Real profiles and photos in `public/images/` (Chris Webb, James Petersen, Tracey Green, Andrea, Jordyn, Katie, Kevin).
- **Press & Printables (`public/files/`):** Official PDF press releases (AI Captions, Picture-in-Picture, Real-Time Translation), press kit ZIP, and EN/FR printable PDF deployment kits across 6 sectors (Education, Worship, Healthcare, Live Events, Public Sector, Broadcast).
- **Guardrail:** Never fabricate customer quotes, school adoption numbers, SLA percentages, or unverified compliance certifications.

## Product Principles

1. **Dignity & Agency Over Special Treatment:** Accessibility tools should let individuals control their own experience on their own device without singling them out or requiring institutional red tape.
2. **Free Forever at the Core:** Essential human communication and classroom accessibility must never be locked behind paywalls; paid tiers exist only for cloud AI compute or dedicated enterprise/event engineering.
3. **Privacy as a Non-Negotiable Architecture:** Audio, speech, and student assessment data belong to the user—processed locally in browser memory or via encrypted, zero-retention channels.
4. **Bilingual & Real-World Ready:** Every surface serves both English and French communities equally and reflects real classroom, sanctuary, theatre, and broadcast workflows.

## Accessibility & Inclusion

- **WCAG AAA Contrast Target:** Primary surfaces target ~16.8:1 contrast ratio (`#0F172A` Midnight Obsidian on `#F8FAFC` Soft Alabaster).
- **Keyboard, Screen Reader & Cognitive Accessibility:** Full keyboard navigation, skip-to-content links (`#main-content`), semantic landmarks, clear heading hierarchy, and zero-jargon explanations across all interactive tools and forms.
