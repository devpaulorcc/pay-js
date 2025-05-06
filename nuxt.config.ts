import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/color-mode', '@nuxt/fonts'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    classSuffix: '',
  },
  build: {
    transpile: [
      'vee-validate',
      'vue-sonner',
    ],
  },
  routeRules: {
    '/**': { ssr: true },
  },
  plugins: [
    '~/plugins/notifications.client.js',
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      keyPayment: process.env.NUXT_PUBLIC_KEY_PAYMENT,
    },
  },
})
