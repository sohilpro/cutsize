export default defineEventHandler(async (event) => {
  const {
    public: { pdfExport },
  } = useRuntimeConfig();
  const body = await readBody(event);

  try {
    const data = await $fetch(pdfExport, {
      method: "POST",
      body,
    });

    return data;
  } catch (error) {
    console.error("Error fetching PDF:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch PDF",
      data: error.message,
    });
  }
});
