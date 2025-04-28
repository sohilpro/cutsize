export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth();
  if (import.meta.client) {
    if (auth.value) {
      return navigateTo("/");
    }
  }
});
