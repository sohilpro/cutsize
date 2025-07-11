export default defineEventHandler(async (event) => {
  const {
    public: { api },
  } = useRuntimeConfig();
  const token = getCookie(event, "token");
  const query = getQuery(event);

  try {
    const data = await $fetch(`${api}/workshop/panels/${query.id}/lock`, {
      method: "POST",
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
