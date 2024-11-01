import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Zip Solutions',
  description: 'The Home of Accessibility',

  theme: defaultTheme({
    logo: '/images/zip_logo_blue_trans.png',

    navbar: [
      '/', '/about-us',
      {
        text: 'Zip Captions',
        link: 'https://zipcaptions.app',
      },
    ],
  }),

  bundler: viteBundler(),
})
