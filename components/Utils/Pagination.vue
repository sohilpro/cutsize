<template>
  <div
    class="flex select-none items-center justify-center space-x-2 rtl:space-x-reverse"
  >
    <!-- Previous Button (Left for RTL) -->
    <button
      class="px-2 py-1 border border-auth-blue text-auth-blue hhover:bg-auth-blue/10 transition"
      :disabled="currentPage === 1"
      @click="prevPage"
    >
      ▶
    </button>

    <!-- Page Numbers -->
    <button
      v-for="page in visiblePages"
      :key="page"
      @click="goToPage(page)"
      :class="[
        'px-3 py-1 border font-semibold transition',
        currentPage === page
          ? 'bg-indigo-900 text-white'
          : 'border-auth-blue text-indigo-900 hover:bg-auth-blue/10',
      ]"
    >
      {{ page }}
    </button>

    <!-- Ellipsis -->
    <span v-if="totalPages > 5 && currentPage < totalPages - 2">...</span>

    <!-- Next Button (Right for RTL) -->
    <button
      class="px-2 py-1 border border-auth-blue text-auth-blue hover:bg-auth-blue/10 transition"
      :disabled="currentPage === totalPages"
      @click="nextPage"
    >
      ◀
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const currentPage = ref(1);
const totalPages = ref(10); // Example: total pages

const visiblePages = computed(() => {
  if (totalPages.value <= 5) {
    return Array.from({ length: totalPages.value }, (_, i) => i + 1);
  }

  if (currentPage.value <= 3) {
    return [1, 2, 3, 4, 5];
  }

  if (currentPage.value >= totalPages.value - 2) {
    return [
      totalPages.value - 4,
      totalPages.value - 3,
      totalPages.value - 2,
      totalPages.value - 1,
      totalPages.value,
    ];
  }

  return [
    currentPage.value - 2,
    currentPage.value - 1,
    currentPage.value,
    currentPage.value + 1,
    currentPage.value + 2,
  ];
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>
