<template>
  <div
    class="flex items-center justify-center space-x-2 rtl:space-x-reverse select-none"
  >
    <!-- Previous Button -->
    <button
      class="px-2 py-1 border border-auth-blue text-auth-blue hover:bg-auth-blue/10 transition"
      :disabled="currentPage === 1"
      @click="emitPrevPage"
    >
      <IconsLeft class="rotate-180" />
    </button>

    <!-- Page Buttons with Ellipses -->
    <template v-for="(page, index) in visiblePages" :key="'page-' + page">
      <!-- Ellipsis before current page group -->
      <span
        v-if="index > 0 && page - visiblePages[index - 1] > 1"
        class="px-2"
        :key="'ellipsis-' + index"
      >
        ...
      </span>

      <button
        @click="$emit('update:page', page)"
        :class="[
          'px-3 py-1 border font-semibold transition',
          currentPage === page
            ? 'bg-indigo-900 text-white'
            : 'border-auth-blue text-indigo-900 hover:bg-auth-blue/10',
        ]"
      >
        {{ page }}
      </button>
    </template>

    <!-- Next Button -->
    <button
      class="px-2 py-1 border border-auth-blue text-auth-blue hover:bg-auth-blue/10 transition"
      :disabled="currentPage === totalPages"
      @click="emitNextPage"
    >
      <IconsLeft />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (event: "update:page", page: number): void;
}>();

const visiblePages = computed(() => {
  const pages = new Set<number>();

  const current = props.currentPage;
  const total = props.totalPages;

  // Always show first and last
  if (total >= 1) pages.add(1);
  if (total > 1) pages.add(total);

  // Add current, previous, next if within bounds
  for (let i = current - 1; i <= current + 1; i++) {
    if (i > 1 && i < total) {
      pages.add(i);
    }
  }

  return Array.from(pages).sort((a, b) => a - b);
});


function emitPrevPage() {
  if (props.currentPage > 1) {
    emit("update:page", props.currentPage - 1);
  }
}

function emitNextPage() {
  if (props.currentPage < props.totalPages) {
    emit("update:page", props.currentPage + 1);
  }
}
</script>
