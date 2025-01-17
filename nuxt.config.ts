import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        
        config?.plugins?.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',

  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
