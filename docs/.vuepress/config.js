import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { revealJsPlugin } from '@vuepress/plugin-revealjs'
import { markdownStylizePlugin } from '@vuepress/plugin-markdown-stylize'


export default defineUserConfig({
  lang: 'en-US',

  title: 'Zip Solutions',
  description: 'The Home of Accessibility',

  theme: defaultTheme({
    logo: '/images/zip_logo_blue_trans.png',

    navbar: [
      '/', '/about-us', '/products','/advisory',
      {
        text: 'Zip Captions',
        link: 'https://zipcaptions.app',
      },
    ],
  }),

  bundler: viteBundler(),

  colorMode: 'light',
  colorModeSwitch: false,

  plugins: [
    searchPlugin({
      // options
    }),
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
    revealJsPlugin({
      // plugin options
    }),
    markdownStylizePlugin({
      // options
    }),
  ],
})
