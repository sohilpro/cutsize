<template>
  <div v-if="items && items.length">
    <ol class="flex items-center py-1.5">
      <li class="text-black flex items-center gap-2">
        <NuxtLink
          to="/"
          class="transition-all whitespace-nowrap text-xs md:text-base text-black"
        >
          صفحه اصلی
        </NuxtLink>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m5.293 8l3.854 3.854l.707-.707L6.707 8l3.147-3.146l-.707-.708z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </li>
      <li
        class="text-black flex items-center gap-4"
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
      >
        <NuxtLink
          v-if="itemIndex !== items.length - 1"
          :to="item.url"
          :title="item.name"
          class="transition-all whitespace-nowrap text-xs md:text-base text-black mr-4"
        >
          {{ item.name }}
        </NuxtLink>
        <span v-else class="font-semibold titler text-xs md:text-base mr-2">{{
          item.name
        }}</span>
        <span v-if="items[itemIndex + 1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m5.293 8l3.854 3.854l.707-.707L6.707 8l3.147-3.146l-.707-.708z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </li>
    </ol>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
