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
definePageMeta({
  middleware: "auth",
});
// const step = ref(1);
const phone_number = usePhoneNumber();
const loading = useLoading();
const auth = useAuth();

const handleLogin = async (body) => {
  loading.value = true;

  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body,
    });

    // phone_number.value = body.phone_number;
    // step.value = 2;
    const data = await $fetch("/api/auth/me");

    auth.value = data;

    
    await navigateTo("/order");
    useNuxtApp().$toast.success("خوش برگشتید.");
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
