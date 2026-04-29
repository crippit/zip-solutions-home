import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'

// 1. Import PostCSS plugins directly
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Zip Solutions',
  description: 'The Home of Accessibility',

  theme: defaultTheme({
    logo: '/images/zip_logo_blue_trans.png',
    colorMode: 'light',
    colorModeSwitch: false,
    navbar: [
      '/', 
      {
        text: 'Products & Services',
        children: [
          { text: 'Services Overview', link: 'products.md' },
          { text: 'Zip Captions', link: 'zipcaptions.md' },
          { text: 'Easy Speak AAC', link: 'easyspeak.md' },
          { text: 'Zip Panel Extension', link: 'zippanel.md' },
          { text: 'Zip Connect Extension', link: 'zipconnect.md' },
          { text: 'Zip Captions vMix Bridge', link: 'zipvmix.md' },
        ],
      },
      '/advisory',
      {
        text: 'Zip Captions',
        children: [
          'zipcaptions.md',
          'pricing.md',
          { text: 'Start Captioning', link: 'https://zipcaptions.app' },
          { text: 'Help', link: 'https://help.zipcaptions.app'},
          { text: 'Community', link: 'https://discord.gg/5Hyu7sQTHv' },
          { text: 'Patreon', link: 'https://patreon.com/zipcaptions' }
        ]
      },
      {
        text: 'About Us',
        children: [
          'story.md',
          'about-us.md',
          'testimonial.md',
          'press.md',
          'privacy.md',
          'cookies.md',
          'pressrelease.md'
        ],
      },
    ],
  }),

  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [
            tailwindcss(),
            autoprefixer(),
          ],
        },
      },
    },
  }),

  plugins: [
    markdownImagePlugin({
      figure: true,
      lazyload: true,
      mark: true,
      size: true,
    }),
  ],
})