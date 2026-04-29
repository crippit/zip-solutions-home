import { defineClientConfig } from '@vuepress/client'
import ZipDashboard from './components/zipDashboard.vue' // Make sure this path is correct!
import './styles/index.css' 

export default defineClientConfig({
  enhance({ app }) {
    // Register the component globally so Markdown can see it
    app.component('ZipDashboard', ZipDashboard)
  },
})