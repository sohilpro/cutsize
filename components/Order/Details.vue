<template>
  <MainLayout
    title="صورت وضعیت سفارش ها "
    :crumb-items="[
      { name: 'جزییات سفارش', url: '/' },
      { name: 'جزییات سفارش', url: '/' },
    ]"
  >
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
          class="rounded-t-xl bg-auth-blue text-white flex items-center justify-around gap-5 p-5 divide-x divide-white divide-x-reverse"
        >
          <IconsTableLogo />

          <div class="flex flex-col gap-3 pr-5">
            <span class="font-bold text-lg">
              نام مجموعه:
              <span class="font-normal"> پویا برش </span>
            </span>

            <span class="font-bold text-lg">
              کد کارگاه:
              <span class="font-normal"> 1081405 </span>
            </span>
          </div>

          <div class="flex flex-col gap-3 pr-5">
            <span class="font-bold text-lg">
              نام مشتری:
              <span class="font-normal"> پویا برش </span>
            </span>

            <span class="font-bold text-lg">
              تعداد قطعات:
              <span class="font-normal"> 744 </span>
            </span>
          </div>

          <div class="flex flex-col gap-3 pr-5">
            <span class="font-bold text-lg">
              تاریخ ثبت نام:
              <span class="font-normal"> سه شنبه - 1405/02/28 </span>
            </span>

            <span class="font-bold text-lg">
              ساعت:
              <span class="font-normal"> 12:15:49 ق.ظ </span>
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
                v-for="(item, index) in 2"
                :key="index"
                :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
              >
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2">{{ item }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
