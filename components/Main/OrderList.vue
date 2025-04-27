<template>
  <MainLayout
    title="لیست سفارشهای مشتری"
    :crumb-items="[{ name: 'جزییات سفارش', url: '/' }]"
  >
    <div
      class="border overflow-x-auto h-screen px-2.5 py-1.5 rounded-md flex flex-col gap-2.5"
    >
      <UtilsLoader v-if="loading" />
      <div
        class="flex text-auth-blue items-center divide-x-reverse divide-x divide-auth-blue gap-5"
      >
        <div class="flex font-semibold gap-2 items-center">
          <IconsCustomers />

          <span class="font-bold text-lg"
            >نام مشتری: <span>سپاهان چوب</span></span
          >
        </div>
        <div class="flex font-semibold pr-5 gap-2 items-center">
          <IconsPhone />

          <span class="font-bold text-lg"
            >شماره تماس: <span> 09309517350 </span></span
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
        <tbody>
          <tr
            v-for="(item, index) in orderList.results"
            :key="index"
            class="text-gray-800"
          >
            <!-- :class="item.read ? 'bg-green-500/10' : 'bg-orange-500/10'" -->
            <!-- Row Number -->
            <td class="border border-gray-300 px-4 py-2 text-center">
              {{ item.id }}
            </td>

            <!-- Read Status -->
            <td class="border border-gray-300 px-4 py-2 text-center">
              <span
                v-if="item.read"
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
              <IconsPrintShow class="inline cursor-pointer" />
            </td>

            <!-- Project Name -->
            <td
              class="border border-gray-300 px-4 py-2 font-bold truncate max-w-[150px]"
            >
              {{ item.name }}
            </td>

            <!-- Count -->
            <td class="border border-gray-300 px-4 py-2 text-center">
              {{ item.count }}
            </td>

            <!-- Date -->
            <td class="border border-gray-300 px-4 py-2 text-center">
              {{ item.date }}
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
                v-model="item.is_lock"
                @click="handleLocked({ id: item.id, value: !item.is_lock })"
              />
            </td>

            <!-- File Dropdown -->
            <td
              class="border flex items-center gap-2 border-gray-300 px-4 py-2 text-center relative"
            >
              <FormKit
                type="dropdown"
                name="framework"
                :value="frameworks[0].value"
                placeholder="Example placeholder"
                :options="frameworks"
                :disabled="!item.is_lock"
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
                v-if="!item.is_lock"
                :class="{ 'cursor-pointer': item.is_lock }"
              />
              <IconsDownloadOn
                v-if="item.is_lock"
                :class="{ 'cursor-pointer': item.is_lock }"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </MainLayout>
</template>

<script setup>
const testI =
  '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m7.306 7.758l.343 3.088l-.694.055a2.11 2.11 0 0 0-1.915 1.764a20.6 20.6 0 0 0 0 6.67A2.11 2.11 0 0 0 6.955 21.1l1.496.12c2.362.188 4.736.188 7.098 0l1.496-.12a2.11 2.11 0 0 0 1.915-1.764a20.6 20.6 0 0 0 0-6.67a2.11 2.11 0 0 0-1.915-1.764l-.694-.055l.343-3.088q.06-.548 0-1.095l-.023-.205a4.7 4.7 0 0 0-9.342 0l-.023.205a5 5 0 0 0 0 1.095M12.374 3.8A3.2 3.2 0 0 0 8.82 6.624l-.023.205a3.5 3.5 0 0 0 0 .764l.349 3.139c1.9-.122 3.807-.122 5.708 0l.349-3.14a3.5 3.5 0 0 0 0-.763l-.023-.205a3.2 3.2 0 0 0-2.806-2.825M12 14.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"/></svg>';

const data = ref([
  {
    read: true,
    project: "پنل افقی قفسه",
    count: 44,
    date: "1405/01/27",
    locked: true,
    options: ["OPTICUT", "CUTMASTER", "EXCEL", "WINCAM"],
  },
  {
    read: false,
    project: "پنل عمودی قفسه",
    count: 44,
    date: "1405/02/01",
    locked: false,
    options: ["OPTICUT", "CUTMASTER", "EXCEL", "WINCAM"],
  },
]);

const loading = useLoading();

const { data: orderList } = await useFetch("/api/workshop/panel/shared-panel");

const handleLocked = async ({ id, value }) => {
  if (value) {
    loading.value = true;
    try {
      await $fetch("/api/workshop/user/lock-panel", {
        method: "POST",
        query: { id },
        header: useRequestHeaders(["cookie"]),
      });
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  } else {
    loading.value = true;
    try {
      await $fetch("/api/workshop/user/unlock-panel", {
        method: "DELETE",
        query: { id },
        header: useRequestHeaders(["cookie"]),
      });
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  }
};

const frameworks = [
  {
    label: "OPTICUT",
    value: "apt-cut",
    asset: "/Icons/apt-cut.png",
  },
  {
    label: "Cut Master",
    value: "cut-master",
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
</script>

<style scoped>
/* Latest Vue 3 (recommended) */
:deep([data-type="toggle"]) {
  @apply flex justify-center;
}
</style>
