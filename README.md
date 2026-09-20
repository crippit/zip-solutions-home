# ZipSolutions.org

Recreated as a modern, high-performance static site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), adhering to the **Zip Solutions Brand Style Guide**.

## 🎨 Brand Design Tokens

- **Midnight Obsidian** (`#0F172A`): Primary text, headings, and high-contrast accessibility color.
- **Soft Alabaster** (`#F8FAFC`): Background color ensuring WCAG AAA contrast ratio (~16.8:1).
- **Electric Amethyst** (`#8B5CF6`): Brand accent purple.
- **Vibrant Teal** (`#0D9488`): Brand accent teal.
- **Safety Coral** (`#FB7185`): Highlights and alerts.
- **Typography**: 
  - Headings: **Plus Jakarta Sans**
  - Body: **Inter**
  - Code / Accents: **JetBrains Mono**

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
├── public/
│   ├── favicon.ico
│   ├── files/          # PDF documents & press releases
│   └── images/         # Logos and illustrations
├── src/
│   ├── components/
│   │   ├── Header.astro       # Accessible responsive navigation & dropdowns
│   │   ├── Footer.astro       # Site footer with brand details & links
│   │   ├── ZipDashboard.astro # Instant search & categorized product catalog
│   │   └── JsonGenerator.astro# Interactive JSON export tool for EasySpeak
│   ├── content/
│   │   └── docs/              # Markdown content pages
│   ├── layouts/
│   │   ├── BaseLayout.astro   # SEO meta, accessibility skip link, fonts
│   │   └── PageLayout.astro   # Standard prose & article layout
│   ├── pages/
│   │   ├── index.astro        # Modernized homepage with hero & values
│   │   ├── products.astro     # Products directory hosting ZipDashboard
│   │   ├── pricing.astro      # Full tier comparison matrix
│   │   ├── contact-us.astro   # Google Forms integration
│   │   ├── 404.astro          # Custom 404 page
│   │   └── [slug].astro       # Dynamic markdown page router
│   ├── styles/
│   │   └── global.css         # Font imports & custom prose styles
│   └── content.config.ts      # Astro 5 content collections schema
├── astro.config.mjs
└── tailwind.config.mjs
```
