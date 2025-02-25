export default defineEventHandler(async (event) => {
  const {
    public: { api },
  } = useRuntimeConfig();
  const body = await readBody();
  
  try {
    await $fetch(`${api}/auth/token/login`, {
      method: "POST",
      body,
    });

    return data;
  } catch (error) {
    return error;
  }
});
