<template>
    <MainLayout title="لیست سفارشهای مشتری" :crumb-items="[{name: 'جزییات سفارش', url: '/'}]">

  <div class="border overflow-x-auto h-screen px-2.5 py-1.5 rounded-md flex flex-col gap-2.5">
      <div class="flex text-auth-blue items-center divide-x-reverse divide-x divide-auth-blue gap-5">
        <div class="flex font-semibold gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M21.053 20.8c-1.132-.453-1.584-1.698-1.584-1.698s-.51.282-.51-.51s.51.51 1.02-2.548c0 0 1.413-.397 1.13-3.68h-.34s.85-3.51 0-4.7c-.85-1.188-1.188-1.98-3.057-2.547s-1.188-.454-2.547-.396s-2.492.793-2.492 1.19c0 0-.85.056-1.188.396c-.34.34-.906 1.924-.906 2.32s.283 3.06.566 3.625l-.337.114c-.284 3.283 1.13 3.68 1.13 3.68c.51 3.058 1.02 1.756 1.02 2.548s-.51.51-.51.51s-.452 1.245-1.584 1.698s-7.416 2.886-7.927 3.396c-.512.51-.454 2.888-.454 2.888H29.43s.06-2.377-.452-2.888c-.51-.51-6.795-2.944-7.927-3.396zm-12.47-.172c-.1-.18-.148-.31-.148-.31s-.432.24-.432-.432s.432.432.864-2.16c0 0 1.2-.335.96-3.118h-.29s.144-.59.238-1.334a10 10 0 0 1 .037-.996l.038-.426c-.02-.492-.107-.94-.312-1.226c-.72-1.007-1.008-1.68-2.59-2.16c-1.584-.48-1.01-.384-2.16-.335c-1.152.05-2.112.672-2.112 1.01c0 0-.72.047-1.008.335c-.27.27-.705 1.462-.757 1.885v.28c.048.654.26 2.45.47 2.873l-.286.096c-.24 2.782.96 3.118.96 3.118c.43 2.59.863 1.488.863 2.16s-.432.43-.432.43s-.383 1.058-1.343 1.44l-.232.092v5.234h.575c-.03-1.278.077-2.927.746-3.594c.357-.355 1.524-.94 6.353-2.862zm22.33-9.056c-.04-.378-.127-.715-.292-.946c-.718-1.008-1.007-1.68-2.59-2.16s-1.007-.384-2.16-.335c-1.15.05-2.11.672-2.11 1.01c0 0-.72.047-1.008.335c-.27.272-.71 1.472-.758 1.89h.033l.08.914c.02.23.022.435.027.644c.09.666.21 1.35.33 1.59l-.286.095c-.24 2.782.96 3.118.96 3.118c.432 2.59.863 1.488.863 2.16s-.43.43-.43.43s-.054.143-.164.34c4.77 1.9 5.927 2.48 6.28 2.833c.67.668.774 2.316.745 3.595h.48V21.78l-.05-.022c-.96-.383-1.344-1.44-1.344-1.44s-.433.24-.433-.43s.433.43.864-2.16c0 0 .804-.23.963-1.84V14.66q0-.026-.003-.05h-.29s.216-.89.293-1.862z"/></svg>

              <span class="font-bold text-lg">نام مشتری:  <span>سپاهان چوب</span></span>
          </div>
        <div class="flex font-semibold pr-5 gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M17.256 12.253c-.096-.667-.611-1.187-1.274-1.342c-2.577-.604-3.223-2.088-3.332-3.734C12.193 7.092 11.38 7 10 7s-2.193.092-2.65.177c-.109 1.646-.755 3.13-3.332 3.734c-.663.156-1.178.675-1.274 1.342l-.497 3.442C2.072 16.907 2.962 18 4.2 18h11.6c1.237 0 2.128-1.093 1.953-2.305zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5s2.526 1.12 2.526 2.5s-1.132 2.5-2.526 2.5M19.95 6c-.024-1.5-3.842-3.999-9.95-4C3.891 2.001.073 4.5.05 6s.021 3.452 2.535 3.127c2.941-.381 2.76-1.408 2.76-2.876C5.345 5.227 7.737 4.98 10 4.98s4.654.247 4.655 1.271c0 1.468-.181 2.495 2.76 2.876C19.928 9.452 19.973 7.5 19.95 6"/></svg>

              <span class="font-bold text-lg">شماره تماس:  <span>
                09309517350
              </span></span>
          </div>

      </div>



    <table class="w-full border-collapse border border-gray-300 text-right">
      <!-- Table Head -->
      <thead class="bg-indigo-900 text-white">
        <tr>
          <th class="border border-gray-300 px-4 py-2">ردیف</th>
          <th class="border border-gray-300 px-4 py-2">خوانده؟</th>
          <th class="border border-gray-300 px-4 py-2">صورت وضعیت</th>
          <th class="border border-gray-300 px-4 py-2">نام پروژه</th>
          <th class="border border-gray-300 px-4 py-2">تعداد</th>
          <th class="border border-gray-300 px-4 py-2">تاریخ ثبت</th>
          <th class="border border-gray-300 px-4 py-2">قفل تایید</th>
          <th class="border border-gray-300 px-4 py-2">خروجی فایل برش</th>
        </tr>
      </thead>

      <!-- Table Body -->
      <tbody>
        <tr
          v-for="(item, index) in data"
          :key="index"
          class="text-gray-800"
        >
          <!-- Row Number -->
          <td class="border border-gray-300 px-4 py-2 text-center">
            {{ index + 1 }}
          </td>

          <!-- Read Status -->
          <td class="border border-gray-300 px-4 py-2 text-center">
            <span v-if="item.read" class="text-green-600 text-xl">✅</span>
            <span v-else class="text-orange-600 text-xl">📄</span>
          </td>

          <!-- Status -->
          <td class="border border-gray-300 px-4 py-2 text-center">
            <button class="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600">
              مشاهده و پرینت
            </button>
          </td>

          <!-- Project Name -->
          <td class="border border-gray-300 px-4 py-2 font-bold truncate max-w-[150px]">
            {{ item.project }}
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
/>
          </td>

          <!-- File Dropdown -->
          <td class="border border-gray-300 px-4 py-2 text-center relative">
            <FormKit
    type="dropdown"
    name="framework"
    :value="frameworks[0].value"
    placeholder="Example placeholder"
    :options="frameworks"
  >
    <template #option="{ option, classes }">
        <div :class="`${classes.option} flex items-center`">
            <span class="mr-2">
              {{ option.label }}
            </span>
          <img :src="option.asset" alt="optionAvatar" class="w-5 mr-1" />
      </div>
    </template>
  </FormKit>
          </td>
        </tr>
      </tbody>
    </table>


  
</div>
</MainLayout>
</template>

<script setup>
const dropdownIndex = ref(null);
const testI = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m7.306 7.758l.343 3.088l-.694.055a2.11 2.11 0 0 0-1.915 1.764a20.6 20.6 0 0 0 0 6.67A2.11 2.11 0 0 0 6.955 21.1l1.496.12c2.362.188 4.736.188 7.098 0l1.496-.12a2.11 2.11 0 0 0 1.915-1.764a20.6 20.6 0 0 0 0-6.67a2.11 2.11 0 0 0-1.915-1.764l-.694-.055l.343-3.088q.06-.548 0-1.095l-.023-.205a4.7 4.7 0 0 0-9.342 0l-.023.205a5 5 0 0 0 0 1.095M12.374 3.8A3.2 3.2 0 0 0 8.82 6.624l-.023.205a3.5 3.5 0 0 0 0 .764l.349 3.139c1.9-.122 3.807-.122 5.708 0l.349-3.14a3.5 3.5 0 0 0 0-.763l-.023-.205a3.2 3.2 0 0 0-2.806-2.825M12 14.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"/></svg>'
const toggleDropdown = (index) => {
  dropdownIndex.value = dropdownIndex.value === index ? null : index;
};

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

const frameworks = [{ label: 'React', value: 'react', asset: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/react-logo.png'}, { label: 'Vue', value: 'vue', asset: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/vue-logo.png'}, { label: 'Angular', value: 'angular', asset: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/angular-logo.png',}, { label: 'Svelte', value: 'svelte', asset: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/svelte-logo.png'}]
</script>


<style scoped>
/* Latest Vue 3 (recommended) */
:deep([data-type="toggle"]) {
  @apply flex justify-center;
}
</style>
