export default defineEventHandler(async (event) => {
  const {
    public: { api },
  } = useRuntimeConfig();
  const body = await readBody(event);

  try {
    await $fetch(`${api}/auth/users`, {
      method: "POST",
      body,
    });

    return data;
  } catch (error) {
    return error;
  }
});
