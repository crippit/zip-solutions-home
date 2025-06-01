import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
//import { searchPlugin } from '@vuepress/plugin-search'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'


export default defineUserConfig({
  lang: 'en-US',

  title: 'Zip Solutions',
  description: 'The Home of Accessibility',

 theme: defaultTheme({
    logo: '/images/zip_logo_blue_trans.png',
    navbar: [
      '/', 
      {
        text: 'Products& Services',
        children: [
          {
            text: 'Services Overview',
            link: 'products.md',
          },
          {
            text: 'Zip Captions',
            link: 'zipcaptions.md',
          },
          {
            text: 'Zip Panel Extension',
            link: 'zippanel.md',
          },
          {
            text: 'Zip Connect Extension',
            link: 'zipconnect.md',
          },
        ],
      },
      '/advisory',
      {
        text: 'Zip Captions',

        children: ['zipcaptions.md','pricing.md',{ text: 'Start Captioning', link: 'https://zipcaptions.app' },{ text: 'Help', link: 'https://help.zipcaptions.app'},{ text: 'Community', link: 'https://discord.gg/5Hyu7sQTHv' },{ text: 'Patreon', link: 'https://patreon.com/zipcaptions' }]
      },
      {
        text: 'About Us',
        children: ['story.md','about-us.md','testimonial.md','press.md','privacy.md','cookies.md','pressrelease.md'],
      },
    
    ],
  }),

  bundler: viteBundler(),

  colorMode: 'light',
  colorModeSwitch: false,

  plugins: [
      markdownImagePlugin({
      // Enable figure
      figure: true,
      // Enable image lazyload
      lazyload: true,
      // Enable image mark
      mark: true,
      // Enable image size
      size: true,
    }),
  ],
})
