<template>
  <MainLayout title="مشتری ها" :crumb-items="[{ name: 'مشتری ها', url: '/' }]">
    <div class="flex flex-col gap-2">
      <div class="border px-2.5 py-1.5 rounded-md flex flex-col gap-2.5">
        <label for="search" class="text-auth-blue font-semibold">
          در جستجوی چه هستید؟
        </label>

        <div class="flex px-3 py-2 bg-auth-blue w-full rounded">
          <button class="pl-2">
            <IconsSearch />
          </button>

          <FormKit
            type="text"
            input-class="input-style placeholder:text-auth-blue px-5 py-2 !bg-auth-gray rounded h-full"
            id="search"
            placeholder="نام مشتری، شماره موبایل و..."
            validation="required"
            validation-visibility="submit"
            :validation-messages="{
              required: 'این فیلد نباید خالی باشد.',
            }"
          />
        </div>
      </div>

      <div class="border px-2.5 py-1.5 rounded-md flex flex-col gap-2.5">
        <div class="flex items-center justify-between">
          <span class="text-auth-blue font-semibold"> خلاصه سفارش ها </span>

          <div class="flex text-auth-blue items-center gap-2">
            <div class="flex font-semibold gap-2 items-center">
              <IconsSort />

              مرتب سازی بر اساس:
            </div>

            <div
              class="relative flex items-center bg-white border-2 border-auth-blue rounded focus-within:!border-auth-blue"
            >
              <FormKit
                id="filter"
                type="select"
                name="filter"
                :options
                input-class="appearance-none outline-none w-52 px-3 py-2 bg-white"
              /><span
                class="absolute w-[1em] text-neutral-700 pointer-events-none left-2"
              >
                <IconsDown />
              </span>
            </div>
          </div>
        </div>
     
        <div v-if="received" class="flex items-end gap-10">
          <table class="w-full border-collapse border border-gray-300">
            <thead class="bg-auth-blue text-white">
              <tr>
                <th class="border border-gray-300 px-4 py-2">شماره ردیف</th>
                <th class="border border-gray-300 px-4 py-2">خوانده؟</th>
                <th class="border border-gray-300 px-4 py-2">نام مشتری</th>
                <th class="border border-gray-300 px-4 py-2">شماره موبایل</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(client, index) in received.data.clients.items"
                :key="index"
                :class="client.seen ? 'bg-green-500/10' : 'bg-orange-500/10'"
                @click="
                  handleSeenClients(
                    {
                      type: 'mark_client_as_seen',
                      client_id: client.id,
                    },
                    client.id
                  )
                "
                class="cursor-pointer hover:opacity-70 transition-all"
              >
                <td class="border border-gray-300 px-4 py-2 text-center">
                  <!-- {{ index + 1 }} -->
                  {{ client.id }}
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">
                  <span v-if="client.seen" class="flex justify-center">
                    <i class="text-green-600 text-xl">
                      <IconsRead class="w-10 h-10" />
                    </i>
                  </span>
                  <span v-else class="flex justify-center">
                    <i class="text-orange-600 text-xl">
                      <IconsUnRead class="w-10 h-10" />
                    </i>
                  </span>
                </td>
                <td
                  class="border text-auth-sky border-gray-300 px-4 py-2 text-center font-bold"
                >
                  {{ client.name }}
                </td>
                <td
                  class="border text-auth-sky font-bold border-gray-300 px-4 py-2 text-center"
                >
                  {{ client.phone_number }}
                </td>
              </tr>
            </tbody>
          </table>

          <UtilsPagination
            :current-page="currentPage"
            :total-pages="totalPages"
            @update:page="onPageChange"
          />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
const options = ref([
  {
    label: "نام مشتری (الف-ی)",
    value: "a-value",
  },
  {
    label: "نام مشتری (ی-الف)",
    value: "a-value",
  },

  {
    label: "خوانده شده ها",
    value: "a-value",
  },
  {
    label: "خوانده نشده ها",
    value: "a-value",
  },
]);

const received = ref(null);
const currentPage = ref(1);
const limit = 10;
const offset = ref(0); // First offset is 10
const totalPages = ref(1);

let socket;

const {
  public: { socket_URI },
} = useRuntimeConfig();
const token = useCookie("token").value;
const socketUrl = `${socket_URI}/clients?token=${encodeURIComponent(token)}`;

onMounted(() => {
  socket = new WebSocket(socketUrl);

  socket.addEventListener("open", () => {
    console.log("✅ Connected");
    sendPaginationRequest();
  });

  socket.addEventListener("message", (event) => {
    try {
      const data = JSON.parse(event.data);

      if (data.type == "mark_client_as_seen") return;
      if (data.type == "clients_page") {
        received.value = data;
      } else {
        received.value = data;
      }

      // if (Array.isArray(data.data.clients.items)) {
      //   received.value = {
      //     type: "connection_established",
      //     message: "You are now connected.",
      //     data: { ...data.data.clients.items },
      //   };
      // }

      if (data.data.clients.next_page) {
        offset.value = data.data.clients.next_page.offset;
        totalPages.value = Math.ceil(offset.value / limit) + 1;
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

onBeforeUnmount(() => {
  socket?.close();
});

function sendPaginationRequest() {
  if (socket && socket.readyState === WebSocket.OPEN) {
    // const offset = 10 + (currentPage.value - 1) * limit;
    const offset = (currentPage.value - 1) * limit;

    const payload = {
      type: "next_clients_page",
      limit,
      offset,
    };

    socket.send(JSON.stringify(payload));
  }
}

const handleSeenClients = async (payload, id) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(payload));
  }
  await navigateTo(`/order/${id}`);
};

// Handle pagination event from child
function onPageChange(newPage) {
  currentPage.value = newPage;
  sendPaginationRequest();
}
</script>

<style scoped>
:deep(.formkit-selectIcon) {
  @apply hidden;
}
</style>
