export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = useAuth();
  try {
    const data = await $fetch("/api/auth/me");
    console.log(data);
    
    
    auth.value = data;
    console.log(auth.value);
  } catch (error) {
    auth.value = null;
  }
});
