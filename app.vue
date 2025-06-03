<template>
  <div>
    <NuxtLoadingIndicator color="#ee9c2f" />
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  // or as a function
  titleTemplate: (productCategory) => {
    return productCategory ? `${productCategory} | Cut Size` : "Cut Size";
  },
  meta: [
    // { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "viewport", content: "width=1280" },
  ],
  link: [{ rel: "icon", type: "image/svg+xml", href: "/siteicon.svg" }],
});
</script>
