// server/utils/wsConnect.ts
import WebSocket from "ws";

export const connectToWebSocket = ({
  url,
  headers,
  payload,
}: {
  url: string;
  headers?: Record<string, string>;
  payload?: Record<string, any>;
}) => {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url, { headers });

    ws.on("open", () => {
      // Send body (payload) on connect
      if (payload) {
        ws.send(JSON.stringify(payload));
      }
    });

    ws.on("message", (msg) => {
      ws.close();
      try {
        resolve(JSON.parse(msg.toString()));
      } catch (err) {
        resolve(msg.toString());
      }
    });

    ws.on("error", reject);
  });
};
