/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0F172A',     // Midnight Obsidian
        alabaster: '#F8FAFC',    // Soft Alabaster
        amethyst: {
          DEFAULT: '#8B5CF6',    // Electric Amethyst
          light: '#A78BFA',
          dark: '#7C3AED',
        },
        teal: {
          brand: '#0D9488',      // Vibrant Teal
          light: '#14B8A6',
          dark: '#0F766E',
        },
        coral: {
          DEFAULT: '#FB7185',    // Safety Coral
          light: '#FDA4AF',
          dark: '#F43F5E',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
