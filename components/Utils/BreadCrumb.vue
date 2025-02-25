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
          <IconsLeft />
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
          <IconsLeft />
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
