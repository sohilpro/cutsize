<template>
  <AuthLayout title="ثبت نام" :welcome="false" :head-in-bottom="true">
    <AuthForgotAndRegister
      @submit-form="handleRegister"
      label="برای ثبت نام ، شماره موبایل خود را وارد کنید"
    />
  </AuthLayout>
</template>

<script setup>
const handleRegister = async (body) => {
  try {
    const data = await $fetch("/api/auth/register", {
      method: "POST",
      body,
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
</script>
