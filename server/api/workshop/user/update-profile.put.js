export default defineEventHandler(async (event) => {
  const {
    public: { api },
  } = useRuntimeConfig();
  const body = await readBody(event);
  const token = getCookie(event, "token");

  try {
    const data = await $fetch(`${api}/workshop/profiles/me`, {
      method: "PUT",
      body,
      headers: {
        Authorization: `Token ${token}`,
        "Accept-Language": `fa`,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
});
