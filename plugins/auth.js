export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = useAuth();
  try {
    const data = await $fetch("/api/auth/me");

    auth.value = data;
  } catch (error) {
    auth.value = null;
  }
});
