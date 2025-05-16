<template>
  <!-- Profile Icon -->
  <div
    class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center"
  >
    <IconsEdge class="w-16 h-16" />
  </div>

  <!-- Title -->
  <h2 class="text-xl font-bold text-gray-700 mt-5">تعیین لبه ها</h2>
  <p class="text-auth-blue">
    پارامتر هایی که وارد می کنید برای مشتری نمایش داده می شود و آنها مطابق
    پارامتری های وارد شده لبه ها را انتخاب کنید.
  </p>

  <table class="w-full overflow-hidden rounded-xl mt-2.5 border-collapse">
    <tbody>
      <!-- Table Rows -->
      <tr
        v-for="(item, index) in items"
        :key="index"
        class="border border-black"
      >
        <!-- Fixed Right Header Column -->
        <td
          class="bg-auth-blue border text-white px-4 font-semibold text-sm text-right w-48"
        >
          <label :for="item.label">
            {{ item.label }}
          </label>
        </td>
        <!-- Input Field -->
        <td>
          <input
            :id="item.label"
            :name="item.label"
            type="text"
            v-model="item.value"
            placeholder="مقدار را وارد نمایید..."
            class="w-full py-[0.04rem] px-2 text-right focus:outline-none"
            :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
          />
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Submit Button -->
  <div class="flex mt-2.5 justify-center items-center">
    <button @click="handleEdge" class="btn-form">تایید</button>
  </div>
</template>

<script setup>
const {close} = defineProps({
  close: Function,
});
const items = reactive([
  { label: "نوار", key: "navar", value: "" },
  { label: "نوار 1 میل", key: "navar_1_mm", value: "" },
  { label: "نوار 2 میل", key: "navar_2_mm", value: "" },
  { label: "شیار", key: "shiar", value: "" },
  { label: "فارسی", key: "farsi", value: "" },
  { label: "دوبل", key: "dooble", value: "" },
  { label: "دوبل روی هم", key: "dooble_rooye_ham", value: "" },
  { label: "نوار و گازور", key: "navar_and_gazor", value: "" },
  { label: "سوبل", key: "sooble", value: "" },
  { label: "نوار + شیار", key: "navar_shiar", value: "" },
  { label: "دوبل + شیار", key: "dooble_shiar", value: "" },
  { label: "شیار مخفی", key: "shiar_maghzi", value: "" },
  { label: "نوار + فارسی", key: "navar_farsi", value: "" },
  { label: "روی هم فارسی", key: "rooye_ham_farsi", value: "" },
]);

function getFormattedData() {
  const result = {};
  items.forEach((item) => {
    result[item.key] = item.value || "";
  });
  return result;
}

const getDataEdge = async () => {
  const data = await $fetch(`/api/workshop/panel/edge-me`, {
    headers: useRequestHeaders(["cookie"]),
  });

  if (data) {
    items.forEach((item) => {
      item.value = data[item.key] || "";
    });
  }
};

const handleEdge = async () => {
  try {
    await $fetch("/api/workshop/panel/edge-me", {
      method: "PATCH",
      body: getFormattedData(),
      headers: useRequestHeaders(["cookie"]),
    });

    close()
    useNuxtApp().$toast.success("تعیین لبه ها با موفقیت اپدیت شد");
  } catch (error) {
    useNuxtApp().$toast.error("مشکلی پیش آمده.");
  }
};

defineExpose({
  getDataEdge,
});
</script>
