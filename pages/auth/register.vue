<template>
  <AuthLayout v-if="step == 1" title="ثبت نام" :head-in-bottom="true">
    <AuthLoginAndRegister
      @submit-form="handleRegister"
      btn-title="ارسال کد تایید"
      :show-forgot-password="false"
    />
  </AuthLayout>

  <AuthLayout
    v-else-if="step == 2"
    :show-title="false"
    :register="false"
    :welcome="false"
    :head-in-bottom="true"
  >
    <AuthCheckOtp />
  </AuthLayout>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
const step = ref(1);
const phone_number = usePhoneNumber();
const loading = useLoading();

const handleRegister = async (body) => {
  loading.value = true;

  try {
    await $fetch("/api/auth/register", {
      method: "POST",
      body: { type: "F", ...body },
    });

    phone_number.value = body.phone_number;
    step.value = 2;
    useNuxtApp().$toast.info("کد تایید را وارد کنید.");
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
