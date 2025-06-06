<template>
  <MainLayout title="مشتری ها" :crumb-items="[{ name: 'مشتری ها', url: '/' }]">
    <div v-if="received" class="flex flex-col gap-2">
      <div class="border px-2.5 py-1.5 rounded-md flex flex-col gap-2.5">
        <label for="search" class="text-auth-blue font-semibold">
          در جستجوی چه هستید؟
        </label>

        <FormKit
          :config="{ validationVisibility: 'submit' }"
          type="form"
          id="searching"
          :actions="false"
          :incomplete-message="false"
          @submit="sendSearchingRequest(search)"
        >
          <div class="flex px-3 py-2 bg-auth-blue w-full rounded">
            <button class="pl-2">
              <IconsSearch />
            </button>

            <FormKit
              type="text"
              input-class="input-style placeholder:text-auth-blue px-5 py-2 !bg-auth-gray rounded h-full"
              id="search"
              v-model="search"
              @input="sendSearchingRequest"
              placeholder="نام مشتری، شماره موبایل و..."
              validation="required"
              validation-visibility="submit"
              :validation-messages="{
                required: 'این فیلد نباید خالی باشد.',
              }"
            />
          </div>
        </FormKit>
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
                v-model="selectedFilter"
                @change="onFilterChange"
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
                @click="handleSeenClients(client.id)"
                class="cursor-pointer hover:opacity-70 transition-all"
              >
                <td class="border border-gray-300 px-4 py-2 text-center">
                  {{ index + 1 }}
                  <!-- {{ client.id }} -->
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

          <!-- <UtilsPagination
            :current-page="currentPage"
            :total-pages="totalPages"
            @update:page="onPageChange"
          /> -->
        </div>
      </div>
    </div>

    <UtilsExpireDate v-else />
    <UtilsLoader v-if="loading" />
  </MainLayout>
</template>

<script setup>
const options = ref([
  {
    label: "پیشفرض",
    value: "default",
  },
  {
    label: "نام مشتری (الف-ی)",
    value: "name_asc",
  },
  {
    label: "نام مشتری (ی-الف)",
    value: "name_desc",
  },

  {
    label: "خوانده شده ها",
    value: "seen",
  },
  {
    label: "خوانده نشده ها",
    value: "unseen",
  },
]);

const selectedFilter = ref("default");
const search = ref("");
const received = ref(null);
const currentPage = ref(1);
const limit = 10;
const offset = ref(0); // First offset is 10
const totalPages = ref(1);
const loading = ref(true);

let socket;

const {
  public: { socket_URI },
} = useRuntimeConfig();
const token = useCookie("token").value;
const socketUrl = `${socket_URI}/clients?token=${encodeURIComponent(token)}`;

onMounted(() => {
  setTimeout(() => (loading.value = false), 3000);
  socket = new WebSocket(socketUrl);

  socket.addEventListener("open", () => {
    console.log("✅ Connected");
    // sendPaginationRequest();
  });

  socket.addEventListener("message", (event) => {
    try {
      loading.value = false; // Stop loading
      const data = JSON.parse(event.data);

      // Ignore certain message types
      // if (data.type === "mark_client_as_seen") return;

      // Always store received data
      received.value = data;

      // Calculate total pages if clients data is available
      // const nextOffset = data?.data?.clients?.next_page?.offset;

      // if (nextOffset !== undefined && nextOffset !== null) {
      //   offset.value = nextOffset;

      //   totalPages.value = Math.ceil(nextOffset / limit) + 1;
      // } else {
      //   // If search is active and no next page, reset page to 1
      //   if (search.value) {
      //     currentPage.value = 1;
      //     offset.value = 0;

      //     // When search is active and no next page, assume it's a single-page result
      //     totalPages.value = 1;
      //   } else {
      //     // Normal case: no next page, not a search
      //     totalPages.value = Math.ceil(offset.value / limit) + 1;
      //   }
      // }
    } catch (error) {
      loading.value = false;
      console.error("❌ JSON parse error:", error);
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
    loading.value = true;
    const offset = (currentPage.value - 1) * limit;

    const payload = {
      type: "next_page",
      limit,
      offset,
    };

    socket.send(JSON.stringify(payload));
  }
}
function sendSortingRequest(option = selectedFilter.value) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    loading.value = true;
    const offset = (currentPage.value - 1) * limit;

    const payload = {
      type: "sort_clients",
      option,
      // limit,
      // offset,
    };

    socket.send(JSON.stringify(payload));
  }
}
let searchTimeout;

function sendSearchingRequest(query = search.value) {
  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      loading.value = true;
      const offset = search.value ? 0 : (currentPage.value - 1) * limit;

      const payload = {
        type: "search_clients",
        query,
        // limit,
        // offset,
      };

      socket.send(JSON.stringify(payload));
    }
  }, 1000); // Delay by 1000ms
}

const handleSeenClients = async (id) => {
  await navigateTo(`/order/${id}`);
};

// Handle pagination event from child
function onPageChange(newPage) {
  currentPage.value = newPage;
  sendPaginationRequest();
  sendSortingRequest();
}

function onFilterChange() {
  currentPage.value = 1;
  sendSortingRequest(selectedFilter.value);
}
</script>

<style scoped>
:deep(.formkit-selectIcon) {
  @apply hidden;
}
</style>
