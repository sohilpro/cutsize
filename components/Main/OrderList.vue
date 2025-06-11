<template>
  <MainLayout
    title="لیست سفارش های مشتری"
    :crumb-items="[
      { name: 'مشتری ها', url: '/order' },
      { name: 'جزییات سفارش', url: '/' },
    ]"
  >
    <div
      v-if="received"
      class="border overflow-x-auto h-screen px-2.5 py-1.5 rounded-md flex flex-col gap-2.5"
    >
      <div
        class="flex text-auth-blue items-center divide-x-reverse divide-x divide-auth-blue gap-5"
      >
        <div class="flex font-semibold gap-2 items-center">
          <IconsCustomers />

          <span v-if="received" class="font-bold text-lg"
            >نام مشتری: <span>{{ received.data.client.name }}</span></span
          >
        </div>
        <div class="flex font-semibold pr-5 gap-2 items-center">
          <IconsPhone />

          <span v-if="received" class="font-bold text-lg"
            >شماره تماس:
            <span> {{ received.data.client.phone_number }} </span></span
          >
        </div>
      </div>

      <table class="w-full border-collapse border border-gray-300 text-right">
        <!-- Table Head -->
        <thead class="bg-indigo-900 text-white">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-center">ردیف</th>
            <th class="border border-gray-300 px-4 py-2 text-center">
              خوانده؟
            </th>
            <th class="border border-gray-300 px-4 py-2 text-center">
              صورت وضعیت
            </th>
            <th class="border border-gray-300 px-4 py-2 text-center">
              نام پروژه
            </th>
            <th class="border border-gray-300 px-4 py-2 text-center">تعداد</th>
            <th class="border border-gray-300 px-4 py-2 text-center">
              <IconsCalender class="inline ml-2" />
              تاریخ ثبت
            </th>
            <th class="border border-gray-300 px-4 py-2 text-center">
              <IconsLock class="inline ml-2" />
              قفل تایید
            </th>
            <th class="border border-gray-300 px-4 py-2 text-center">
              <IconsExport class="inline ml-2" />
              خروجی فایل برش
            </th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody v-if="received">
          <tr
            v-for="(item, index) in received.data.panels.items"
            :key="index"
            class="text-gray-800"
          >
            <!-- :class="item.read ? 'bg-green-500/10' : 'bg-orange-500/10'" -->
            <!-- Row Number -->
            <td class="border border-gray-300 px-4 py-2 text-center">
              {{ index + 1 }}
            </td>

            <!-- Read Status -->
            <td class="border border-gray-300 px-4 py-2 text-center">
              <span
                v-if="item.seen"
                class="text-green-600 text-xl flex justify-center"
              >
                <IconsRead class="w-10 h-10" />
              </span>
              <span v-else class="text-orange-600 text-xl flex justify-center">
                <IconsUnRead class="w-10 h-10" />
              </span>
            </td>

            <!-- Status -->
            <td class="border border-gray-300 px-4 py-2 text-center">
              <NuxtLink :to="`/order/details/${item.id}`">
                <IconsPrintShow class="inline cursor-pointer" />
              </NuxtLink>
            </td>

            <!-- Project Name -->
            <td
              class="border border-gray-300 px-4 py-2 font-bold truncate max-w-[150px]"
            >
              {{ item.name }}
            </td>

            <!-- Count -->
            <td class="border border-gray-300 px-4 py-2 text-center">
              {{ item.item_count }}
            </td>

            <!-- Date -->
            <td class="border border-gray-300 px-4 py-2 text-center">
              {{ format(item.created_at, "yyyy/M/dd") }}
            </td>

            <!-- Lock -->
            <td class="border border-gray-300 px-4 py-2 text-center">
              <FormKit
                type="toggle"
                :thumb-icon="testI"
                icon-color-on="#22C55E"
                icon-color-off="#EC4444"
                track-color-on="#22C55E"
                track-color-off="#EC4444"
                v-model="item.is_locked"
                @click="
                  handleLockedUnlocked({
                    type: 'toggle_panel_lock',
                    panel_id: item.id,
                    is_locked: !item.is_locked,
                  })
                "
              />
            </td>

            <!-- File Dropdown -->
            <td
              class="border flex items-center gap-2 border-gray-300 px-4 py-2 text-center relative"
            >
              <FormKit
                type="dropdown"
                name="framework"
                v-model="selectedFormat"
                placeholder="OPTICUT"
                :options="frameworks"
                :disabled="!item.is_locked"
              >
                <template #option="{ option, classes }">
                  <div :class="`${classes.option} flex items-center`">
                    <span class="mr-2">
                      {{ option.label }}
                    </span>
                    <img
                      :src="option.asset"
                      alt="optionAvatar"
                      class="w-5 mr-1"
                    />
                  </div>
                </template>
              </FormKit>

              <IconsDownloadOff
                v-if="!item.is_locked"
                :class="{ 'cursor-pointer': item.is_locked }"
              />
              <IconsDownloadOn
                v-if="item.is_locked"
                @click="handleDownloadLink(item)"
                :class="{ 'cursor-pointer': item.is_locked }"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <UtilsExpireDate v-else />
    <UtilsLoader v-if="loading" />
  </MainLayout>
</template>

<script setup>
import { format } from "date-fns-jalali";

const testI =
  '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m7.306 7.758l.343 3.088l-.694.055a2.11 2.11 0 0 0-1.915 1.764a20.6 20.6 0 0 0 0 6.67A2.11 2.11 0 0 0 6.955 21.1l1.496.12c2.362.188 4.736.188 7.098 0l1.496-.12a2.11 2.11 0 0 0 1.915-1.764a20.6 20.6 0 0 0 0-6.67a2.11 2.11 0 0 0-1.915-1.764l-.694-.055l.343-3.088q.06-.548 0-1.095l-.023-.205a4.7 4.7 0 0 0-9.342 0l-.023.205a5 5 0 0 0 0 1.095M12.374 3.8A3.2 3.2 0 0 0 8.82 6.624l-.023.205a3.5 3.5 0 0 0 0 .764l.349 3.139c1.9-.122 3.807-.122 5.708 0l.349-3.14a3.5 3.5 0 0 0 0-.763l-.023-.205a3.2 3.2 0 0 0-2.806-2.825M12 14.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"/></svg>';

const frameworks = [
  {
    label: "OPTICUT",
    value: "opticut",
    asset: "/Icons/apt-cut.png",
  },
  {
    label: "Cut Master",
    value: "cutmaster",
    asset: "/Icons/cut-master.png",
  },
  {
    label: "Wincam",
    value: "wincam",
    asset: "/Icons/wincam.png",
  },
  {
    label: "Excel",
    value: "excel",
    asset: "/Icons/excel.png",
  },
];

const idOrder = useState("idOrder", () => null);
const selectedFormat = ref("opticut");
const loading = ref(true);

const handleDownloadLink = (item) => {
  const selected = selectedFormat.value;
  const link = item.files[selected];

  if (!item.seen) {
    handleSeenPanel({
      type: "mark_panel_as_seen",
      panel_id: item.id,
    });
  }

  if (link) {
    window.open(link, "_blank");
  } else {
    alert("File not available");
  }
};

const received = ref(null);
const currentPage = ref(1);
const limit = 10;
const offset = ref(10); // First offset is 10
const totalPages = ref(1);

let socket;

const {
  public: { socket_URI },
} = useRuntimeConfig();
const token = useCookie("token").value;
const route = useRoute();
const socketUrl = `${socket_URI}/panels/${
  route.params.id
}?token=${encodeURIComponent(token)}`;

onMounted(() => {
  idOrder.value = route.params.id;
  setTimeout(() => (loading.value = false), 3000);
  socket = new WebSocket(socketUrl);

  socket.addEventListener("open", () => {
    console.log("✅ Connected");
  });

  socket.addEventListener("message", (event) => {
    try {
      const data = JSON.parse(event.data);

      if (["panel_lock_toggled", "panel_marked_seen"].includes(data.type))
        return;

      if (data.type == "panel_shared") {
        // received.value.unshift(data.client);
        showBrowserNotification(
          "پیام جدید",
          "یک پنل جدید به اشتراک گذاشته شد."
        );
        useNuxtApp().$toast.info("یک پنل جدید به اشتراک گذاشته شد.");
      }
      if (data.type == "panel_shared" && data.data.panel.id != route.params.id)
        return;

      received.value = data;

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

const handleLockedUnlocked = async (payload) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(payload));
  }
};

const handleSeenPanel = async (payload) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(payload));
  }
};

function showBrowserNotification(title, message) {
  if (Notification.permission === "granted") {
    new Notification(title, {
      body: message,
      icon: "/logo.svg",
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(title, {
          body: message,
          icon: "/logo.svg",
        });
      }
    });
  }
}
</script>

<style scoped>
/* Latest Vue 3 (recommended) */
:deep([data-type="toggle"]) {
  @apply flex justify-center;
}
</style>
