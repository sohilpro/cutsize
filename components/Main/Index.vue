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

        <div class="flex items-end gap-10">
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
                v-for="(customer, index) in customers"
                :key="index"
                :class="customer.read ? 'bg-green-500/10' : 'bg-orange-500/10'"
              >
                <td class="border border-gray-300 px-4 py-2 text-center">
                  {{ index + 1 }}
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">
                  <span v-if="customer.read" class="flex justify-center">
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
                  {{ customer.name }}
                </td>
                <td
                  class="border text-auth-sky font-bold border-gray-300 px-4 py-2 text-center"
                >
                  {{ customer.mobile }}
                </td>
              </tr>
            </tbody>
          </table>

          <UtilsPagination />
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

const customers = ref([
  { name: "سپاهان چوب", mobile: "09993744332", read: true },
  { name: "ویرا پارسه", mobile: "09993744331", read: false },
  { name: "", mobile: "", read: false },
  { name: "", mobile: "", read: false },
]);
</script>

<style scoped>
:deep(.formkit-selectIcon) {
  @apply hidden;
}
</style>
