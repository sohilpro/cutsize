export default defineEventHandler(async (event) => {
  const {
    public: { api },
  } = useRuntimeConfig();
  const body = await readBody(event);

  try {
    const data = await $fetch(`${api}/auth/users/verification_confirm`, {
      method: "POST",
      body,
      headers: {
        "Accept-Language": `fa`,
      },
    });

    setCookie(event, "token", data?.token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, //1 WEEK
      path: "/",
    });

    return data;
  } catch (error) {
    return error;
  }
});
