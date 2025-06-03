export default defineEventHandler(async (event) => {
  const {
    public: { api },
  } = useRuntimeConfig();

  try {
    const data = await $fetch(`${api}/workshop/factories/count`);

    return data;
  } catch (error) {
    return error;
  }
});
