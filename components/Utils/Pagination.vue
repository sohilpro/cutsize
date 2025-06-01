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

    <!-- Leading Ellipsis -->
    <span v-if="totalPages > 5 && currentPage > 4">...</span>

    <!-- Page Numbers -->
    <button
      v-for="page in visiblePages"
      :key="page"
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

    <!-- Trailing Ellipsis -->
    <span v-if="totalPages > 5 && currentPage < totalPages - 3">...</span>

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
  if (props.totalPages <= 3) {
    return Array.from({ length: props.totalPages }, (_, i) => i + 1);
  }

  if (props.currentPage <= 3) {
    return [1, 2, 3, 4, 5].filter((page) => page <= props.totalPages);
  }

  if (props.currentPage >= props.totalPages - 2) {
    return [
      props.totalPages - 4,
      props.totalPages - 3,
      props.totalPages - 2,
      props.totalPages - 1,
      props.totalPages,
    ].filter((page) => page >= 1);
  }

  return [
    props.currentPage - 2,
    props.currentPage - 1,
    props.currentPage,
    props.currentPage + 1,
    props.currentPage + 2,
  ].filter((page) => page >= 1 && page <= props.totalPages);
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
