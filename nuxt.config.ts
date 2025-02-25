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

  runtimeConfig: {
    public: {
      api: "http://87.107.165.68",
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
