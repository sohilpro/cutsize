<template>
  <!--  v-if="step == 1" -->
  <AuthLayout title="ورود" :register="true">
    <AuthLoginAndRegister btn-title="ورود" @submit-form="handleLogin" />
  </AuthLayout>

  <!-- <AuthLayout
    v-else-if="step == 2"
    :show-title="false"
    :register="true"
    :welcome="false"
  >
    <AuthCheckOtp />
  </AuthLayout> -->
</template>

<script setup>
// const step = ref(1);
const phone_number = usePhoneNumber();
const loading = useLoading();

const handleLogin = async (body) => {
  loading.value = true;

  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body,
    });

    // phone_number.value = body.phone_number;
    // step.value = 2;
    navigateTo("/");
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
