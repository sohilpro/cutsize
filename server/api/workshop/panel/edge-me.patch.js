export default defineEventHandler(async (event) => {
  const {
    public: { api },
  } = useRuntimeConfig();
  const token = getCookie(event, "token");
  const body = await readBody(event);

  try {
    const data = await $fetch(`${api}/workshop/edges/me`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      body,
      method: "PATCH",
    });

    return data;
  } catch (error) {
    return error;
  }
});
