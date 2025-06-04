<template>
  <MainLayout
    title="صورت وضعیت سفارش ها "
    :crumb-items="[
      { name: 'مشتری ها', url: '/order' },
      { name: 'جزییات سفارش', url: `/order/${idOrder}` },
      { name: 'صورت وضعیت', url: '/' },
    ]"
  >
    <div
      :class="{ 'opacity-50': data.items.length == 0 }"
      class="flex print:hidden items-center gap-5 absolute left-10 -top-5"
    >
      <button :disabled="data.items.length == 0">
        <IconsPrint @click="printPage" class="w-40 h-40" />
      </button>
      <IconsLoading v-if="loading" class="w-10 h-10 top-0 left-0" />
      <button :disabled="data.items.length == 0">
        <IconsPdfDl
          @click="download"
          :class="{ 'opacity-50': loading }"
          class="w-40 h-40"
        />
      </button>
    </div>

    <div
      class="border overflow-x-auto h-screen px-2.5 py-1.5 rounded-md flex flex-col gap-2.5"
    >
      <div
        class="border text-auth-blue border-auth-blue divide-y divide-auth-blue rounded-xl"
      >
        <div class="flex items-center gap-3 py-3 px-4">
          <IconsProject />

          <span class="font-bold text-lg">
            پروژه:
            <span class="font-normal"> کابینت </span>
          </span>
        </div>
        <div class="flex items-center gap-3 py-3 px-4">
          <IconsNote />

          <span class="font-bold text-lg">
            یادداشت مشتری:
            <span class="font-normal"> در های یونیت به رنگ آبی باشد. </span>
          </span>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div
          class="rounded-t-xl bg-auth-blue print:text-black text-white flex items-center justify-around gap-5 p-5 divide-x divide-white divide-x-reverse"
        >
          <IconsTableLogo class="print:hidden" />

          <div class="flex flex-col gap-3 pr-5">
            <span class="font-bold text-lg">
              نام مجموعه:
              <span class="font-normal"> {{ data.factory.name }} </span>
            </span>

            <span class="font-bold text-lg">
              کد کارگاه:
              <span class="font-normal"> {{ data.factory.code }} </span>
            </span>
          </div>

          <div class="flex flex-col gap-3 pr-5">
            <span class="font-bold text-lg">
              نام مشتری:
              <span class="font-normal"> {{ data.client.name }} </span>
            </span>

            <span class="font-bold text-lg">
              تعداد قطعات:
              <span class="font-normal"> {{ data.number_of_pieces }} </span>
            </span>
          </div>

          <div class="flex flex-col gap-3 pr-5">
            <span class="font-bold text-lg">
              تاریخ ثبت نام:
              <span class="font-normal">
                {{ format(data.created_at, "EEEE", { locale: faIR }) }} -
                {{ format(data.created_at, "yyyy/M/dd") }}
              </span>
            </span>

            <span class="font-bold text-lg">
              ساعت:
              <span class="font-normal">
                {{ format(data.created_at, "hh:mm:ss a", { locale: faIR }) }}
              </span>
            </span>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-300">
            <!-- Table Head -->
            <thead>
              <tr class="bg-auth-blue text-white">
                <th class="border border-gray-300 px-4 py-2">عرض2</th>
                <th class="border border-gray-300 px-4 py-2">عرض1</th>
                <th class="border border-gray-300 px-4 py-2">طول2</th>
                <th class="border border-gray-300 px-4 py-2">طول1</th>
                <th class="border border-gray-300 px-4 py-2">توضیحات</th>
                <th class="border border-gray-300 px-4 py-2">تعداد</th>
                <th class="border border-gray-300 px-4 py-2">عرض</th>
                <th class="border border-gray-300 px-4 py-2">طول</th>
                <th class="border border-gray-300 px-4 py-2">آیدی</th>
              </tr>
            </thead>

            <!-- Table Body -->
            <tbody>
              <tr
                v-for="(item, index) in data?.items"
                :key="index"
                :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
              >
                <td class="border border-gray-300 px-4 py-2">
                  {{ item.width_2 }}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  {{ item.width_1 }}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  {{ item.length_2 }}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  {{ item.length_1 }}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  {{ item.description }}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  {{ item.quantity }}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  {{ item.width }}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  {{ item.length }}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  {{ index + 1 }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { format } from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";

const route = useRoute();
const loading = useLoading();
const basePdf = ref(null);
const idOrder = useState("idOrder");

const { data } = await useFetch("/api/workshop/panel/order-status", {
  query: { id: route.params.id },
});

const download = async () => {
  loading.value = true;
  try {
    const dataResponse = await $fetch("/api/pdf/export-pdf", {
      method: "POST",
      body: {
        data: [
          {
            ...data.value,
            sign_up: format(data.value.created_at, "EEEE", { locale: faIR }),
            clock: format(data.value.created_at, "hh:mm:ss a", {
              locale: faIR,
            }),
            sing_up_time: format(data.value.created_at, "yyyy/M/dd"),
          },
        ],
      },
    });

    basePdf.value = dataResponse;

    downloadPdf();
  } catch (error) {
    console.error("Error render PDF:", error.message);
  } finally {
    loading.value = false;
  }
};

const downloadPdf = () => {
  const linkSource = `data:application/pdf;base64,${basePdf.value}`;
  const randomName = Math.floor(Math.random() * 1e9);
  const downloadLink = document.createElement("a");
  const fileName = `file_${randomName}.pdf`;
  downloadLink.style.display = "hidden";
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};

const printPage = () => window.print();
</script>
