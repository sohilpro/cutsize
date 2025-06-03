<template>
  <section>
    <main class="flex flex-col gap-10">
      <h4 class="text-black text-5xl font-extrabold text-center">
        پشتیبانی از طیف وسیعی از ماشین آلات
      </h4>

      <div class="flex flex-wrap gap-1.5 justify-center items-center">
        <template v-for="(item, index) in items" :key="index">
          <div>
            <img :src="item.src" :alt="item.alt" />
          </div>
        </template>
      </div>

      <!-- <div ref="scrollers" class="scroller" data-speed="slow">
        <ul class="tag-list scroller__inner">
          <li v-for="(item, index) in items" :key="index">
            <img :src="item.src" :alt="item.alt" />
          </li>
        </ul>
      </div> -->
    </main>
  </section>
</template>

<script setup>
const scrollers = ref(null);
const items = ref([
  {
    alt: "avadhoverii",
    src: "img/machine/avadhoverii.webp",
  },
  {
    alt: "biessehoverii",
    src: "img/machine/biessehoverii.webp",
  },
  {
    alt: "EXCITECHHOVER",
    src: "img/machine/EXCITECHHOVER.webp",
  },
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
  // {
  //   alt: "Untitled-1HOVER",
  //   src: "img/machine/Untitled-1HOVER.webp",
  // },
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

// onMounted(() => {
//   if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//     addAnimation();
//   }

//   function addAnimation() {
//     // scrollers.forEach((scroller) => {
//     // add data-animated="true" to every `.scroller` on the page
//     scrollers.value.setAttribute("data-animated", true);

//     // Make an array from the elements within `.scroller-inner`
//     const scrollerInner = scrollers.value.querySelector(".scroller__inner");

//     const scrollerContent = Array.from(scrollerInner.children);

//     // For each item in the array, clone it
//     // add aria-hidden to it
//     // add it into the `.scroller-inner`
//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true);
//       duplicatedItem.setAttribute("aria-hidden", true);
//       scrollerInner.appendChild(duplicatedItem);
//     });
//     // });
//   }
// });
</script>
