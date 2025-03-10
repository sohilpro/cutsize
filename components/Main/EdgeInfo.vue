<template>
  <!-- Profile Icon -->
  <div
    class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center"
  >
    <IconsAvatar />
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
    <button class="btn-form">تایید</button>
  </div>
</template>

<script setup>
const items = reactive([
  { label: "نوار", value: "" },
  { label: "نوار 1 میل", value: "" },
  { label: "نوار 7 میل", value: "" },
  { label: "شیار", value: "" },
  { label: "فارسی", value: "" },
  { label: "دوبل", value: "" },
  { label: "دوبل روی هم", value: "" },
  { label: "نوار و گازور", value: "" },
  { label: "سیبال", value: "" },
  { label: "نوار + شیار", value: "" },
  { label: "دوبل + شیار", value: "" },
  { label: "شیار مخفی", value: "" },
  { label: "نوار + فارسی", value: "" },
  { label: "روی هم فارسی", value: "" },
]);
</script>
