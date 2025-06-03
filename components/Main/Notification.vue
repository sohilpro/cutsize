<template>
  <div
    class="absolute top-10 left-10 w-96 bg-white shadow-xl rounded-lg border border-auth-blue z-50"
  >
    <!-- Arrow -->
    <div
      class="absolute -top-2 left-4 w-4 h-4 bg-white rotate-45 border-t border-l border-auth-blue z-[-1]"
    ></div>

    <!-- Header -->
    <div
      class="flex justify-between items-center p-2 text-sm font-semibold text-indigo-800"
    >
      <button
        @click="emit('close', false)"
        class="text-orange-500 hover:text-orange-700"
      >
        <IconsCloseSecond class="w-6 h-6" />
      </button>
    </div>

    <!-- Notification Items -->
    <ul v-if="received" class="divide-y text-sm text-right px-3 py-2 space-y-1">
      <li
        v-for="(item, index) in received.data.notifications.items.filter(
          (i) => i.seen == false
        )"
        :key="index"
        class="flex cursor-pointer items-center justify-between"
      >
        <div class="flex items-center gap-2">
          <IconsUnRead class="w-5 h-5" />
          <span>
            {{ item.message }}
          </span>
        </div>
        <div class="flex text-auth-blue items-center gap-2">
          <span>
            {{ format(item.created_at, "HH:mm") }}
          </span>
          <span>
            {{ format(item.created_at, "yyyy/M/dd") }}
          </span>
        </div>
      </li>
    </ul>

    <hr
      v-if="
        received &&
        received.data.notifications.items.filter((i) => i.seen == true).length
      "
      class="mx-3"
    />

    <ul v-if="received" class="divide-y text-sm text-right px-3 py-2 space-y-1">
      <li
        v-for="(item, index) in received.data.notifications.items.filter(
          (i) => i.seen == true
        )"
        class="flex items-center cursor-pointer justify-between"
      >
        <div class="flex items-center gap-2">
          <IconsRead class="w-5 5" />
          <span>
            {{ item.message }}
          </span>
        </div>
        <div class="flex text-auth-blue items-center gap-2">
          <span>
            {{ format(item.created_at, "HH:mm") }}
          </span>
          <span>
            {{ format(item.created_at, "yyyy/M/dd") }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { format } from "date-fns-jalali";

const emit = defineEmits(["close"]);
const received = ref(null);
const currentPage = ref(1);
const limit = 10;
const offset = ref(10); // First offset is 10
const totalPages = ref(1);
const notif = useNotif();

let socket;

const {
  public: { socket_URI },
} = useRuntimeConfig();
const token = useCookie("token").value;
const socketUrl = `${socket_URI}/notifications?token=${encodeURIComponent(
  token
)}`;

onMounted(() => {
  socket = new WebSocket(socketUrl);

  socket.addEventListener("open", () => {
    console.log("✅ Connected");
  });

  socket.addEventListener("message", (event) => {
    try {
      const data = JSON.parse(event.data);

      received.value = data;

      if (data.type === "notification_marked_seen") {
        notif.value = data.unseen_count;
        return;
      }
      notif.value = data.data.notifications.unseen_count;

      if (data.next_page) {
        offset.value = data.next_page.offset;
        totalPages.value = Math.ceil(offset.value / limit);
      }
    } catch (e) {
      console.error("❌ JSON parse error:", e);
    }
  });

  socket.addEventListener("error", (err) => {
    console.error("❌ WebSocket error:", err);
  });

  socket.addEventListener("close", () => {
    console.log("🔌 Connection closed");
  });
});

const handleSeenMessages = () => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    const unseenMessage = received.value.data.notifications.items.filter(
      (i) => i.seen == false
    );
    unseenMessage.forEach((i) => {
      socket.send(
        JSON.stringify({
          type: "mark_notification_as_seen",
          notification_id: i.id,
        })
      );
    });
  }
};

defineExpose({
  handleSeenMessages,
});
</script>
