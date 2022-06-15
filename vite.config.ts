import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassDts from 'vite-plugin-sass-dts'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassDts(),
    ViteWebfontDownload()
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    }
  }
})