<template>
    <div :style="{ 'margin-top': top + 'rem' }"></div>
    <hr
      v-if="divide_y"
      :style="{ 'margin-bottom': top + 'rem' }"
      class="block border-t border-[0] w-3/5 mx-auto border-auth-orange p-0 h-px"
    />
</template>

<script setup>
const { top } = defineProps({
  top: Number,
  divide_y: {
    type: Boolean,
    default: true,
  },
});
</script>
