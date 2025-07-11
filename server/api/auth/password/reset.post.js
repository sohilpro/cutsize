export default defineEventHandler(async (event) => {
  const {
    public: { api },
  } = useRuntimeConfig();
  const body = await readBody(event);

  try {
    const data = await $fetch(`${api}/auth/users/reset_password`, {
      method: "POST",
      body,
      headers: {
        "Accept-Language": `fa`,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
});
