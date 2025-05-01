<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  // or as a function
  titleTemplate: (productCategory) => {
    return productCategory ? `${productCategory} | Cut Size` : "Cut Size";
  },
});
</script>
