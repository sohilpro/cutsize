<template>
  <section>
    <main class="flex flex-col gap-10">
      <h4 class="text-black text-5xl font-extrabold text-center">
        پشتیبانی از طیف وسیعی از ماشین آلات
      </h4>

      <div class="containerAnime">
        <template v-for="(item, index) in items" :key="index">
          <div class="itemLeft" :class="`item${index + 1}`">
            <img :src="item.src" :alt="item.alt" />
          </div>
        </template>
      </div>
    </main>
  </section>
</template>

<script setup>
const items = ref([
//   {
//     alt: "avadhoverii",
//     src: "img/machine/avadhoverii.webp",
//   },
//   {
//     alt: "biessehoverii",
//     src: "img/machine/biessehoverii.webp",
//   },
//   {
//     alt: "EXCITECHHOVER",
//     src: "img/machine/EXCITECHHOVER.webp",
//   },
  {
    alt: "holzherhover",
    src: "img/machine/holzherhover.webp",
  },
  {
    alt: "holzmahoverii",
    src: "img/machine/holzmahoverii.webp",
  },
  {
    alt: "kdthoverii",
    src: "img/machine/kdthoverii.webp",
  },
  {
    alt: "NAX HOVER",
    src: "img/machine/NAX HOVER.webp",
  },
  {
    alt: "Untitled-1HOVER",
    src: "img/machine/Untitled-1HOVER.webp",
  },
  {
    alt: "Untitled-2HOVER",
    src: "img/machine/Untitled-2HOVER.webp",
  },
  {
    alt: "VIRATECH HOVER",
    src: "img/machine/VIRATECH HOVER.webp",
  },
  {
    alt: "wincamhoverii",
    src: "img/machine/wincamhoverii.webp",
  },
]);
</script>
