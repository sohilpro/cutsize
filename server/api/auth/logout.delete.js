export default defineEventHandler(async (event) => {
  const {
    public: { api },
  } = useRuntimeConfig();
  const token = getCookie(event, "token");

  try {
    const data = await $fetch(`${api}/auth/token/logout`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${token}`,
         "Accept-Language": `fa`,
      },
    });

    deleteCookie(event, "token");

    return data;
  } catch (error) {
    return error;
  }
});
