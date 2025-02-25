<template>
  <AuthLayout v-if="step == 1" title="ورود" :register="true">
    <AuthLogin />
  </AuthLayout>

  <AuthLayout
    v-else-if="step == 2"
    :show-title="false"
    :register="true"
    :welcome="false"
  >
    <AuthCheckOtp />
  </AuthLayout>
</template>

<script setup>
const step = ref(1);
</script>
