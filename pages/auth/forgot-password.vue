<template>
  <AuthLayout
    v-if="step == 1"
    title="تغییر رمز عبور"
    :welcome="false"
    :head-in-bottom="true"
  >
    <AuthForgotPassword
      @step="(el) => (step = el)"
      label=" برای تغییر رمز عبور ، شماره موبایل خود را وارد کنید"
    />
  </AuthLayout>
  <AuthLayout
    v-else-if="step == 2"
    title="تغییر رمز عبور"
    :welcome="false"
    :head-in-bottom="true"
  >
    <AuthChangePassword @submit-form="handleChangePassword" />
  </AuthLayout>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
const step = ref(1);
const loading = useLoading();
const inputsValue = useInputs();

const handleChangePassword = async (body) => {
  loading.value = true;

  try {
    await $fetch("/api/auth/password/confirm-reset", {
      method: "POST",
      body: {
        new_password: body,
        ...inputsValue.value,
      },
    });

    navigateTo("/auth/login");
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
