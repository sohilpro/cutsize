import { connectToWebSocket } from "~/server/utils/wsManager";

export default defineEventHandler(async (event) => {
  const {
    public: { socket_URI },
  } = useRuntimeConfig();
  const { channel }: any = event.context.params;
  const body = await readBody(event);
  const token = getCookie(event, "token");

  // Choose the correct WS URL for this channel
  const urlMap: Record<string, string> = {
    clients: `${socket_URI}/ws/clients`,
    notifications: `${socket_URI}/notifications`,
  };

  const wsUrl = urlMap[channel];
  if (!wsUrl) {
    throw createError({ statusCode: 404, statusMessage: "Channel not found" });
  }

  if (token) {
    const data = await connectToWebSocket({
      url: wsUrl,
      headers: {
        Authorization: `Token ${token}`,
      },
      payload: body,
    });

    return data;
  } else {
    return "please login";
  }
});
