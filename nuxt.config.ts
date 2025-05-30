// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        dir: "rtl",
        lang: "fa",
      },
    },
  },
  nitro: {
    experimental: {
      websocket: true,
    },
  },

  runtimeConfig: {
    public: {
      api: "https://api.cutsize.ir",
      socket_URI: "wss://api.cutsize.ir/ws",
      pdfExport: "http://localhost:5000/download",
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@formkit/nuxt"],

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
  },
  formkit: {
    autoImport: true,
  },
});
