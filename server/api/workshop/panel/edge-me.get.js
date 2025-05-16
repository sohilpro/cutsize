export default defineEventHandler(async (event) => {
  const {
    public: { api },
  } = useRuntimeConfig();
  const token = getCookie(event, "token");

  try {
    const data = await $fetch(`${api}/workshop/edges/me`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
});
