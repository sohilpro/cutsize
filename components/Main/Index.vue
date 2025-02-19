<template>
<MainLayout title="سفارش ها" :crumb-items="[{name: 'سفارش ها', url: '/'}]">
  <div class="flex flex-col gap-2">
  <div class="border px-2.5 py-1.5 rounded-md flex flex-col gap-2.5">
      <label for="search" class="text-auth-blue font-semibold">
          در جستجوی چه هستید؟
      </label>

      <div class="flex p-2 bg-auth-blue w-full rounded">
          <button class="pl-2">

              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#fff" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
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
          <span class="text-auth-blue font-semibold">
          خلاصه سفارش ها
      </span>

      <div class="flex text-auth-blue items-center gap-2">
          <div class="flex font-semibold gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.99.99 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12z"/></svg>

              مرتب سازی بر اساس:
          </div>

        <div class="relative flex items-center bg-white border-2 border-auth-blue  rounded focus-within:!border-auth-blue"><!----><!----><FormKit id="filter"
          type="select"
          name="filter"
          :options input-class="appearance-none outline-none w-52 px-3 py-2 bg-white" /><span class="absolute w-[1em] text-neutral-700 pointer-events-none left-2 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 7"><path d="M8,6.5c-.13,0-.26-.05-.35-.15L3.15,1.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4.15,4.15L12.15,1.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-4.5,4.5c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"></path></svg></span><!----><!----></div>
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
        :class="customer.read ? 'bg-green-100' : 'bg-orange-100'"
      >
        <td class="border border-gray-300 px-4 py-2 text-center">{{ index + 1 }}</td>
        <td class="border border-gray-300 px-4 py-2 text-center">
          <span v-if="customer.read">
            <i class="text-green-600 text-xl">✅</i>
          </span>
          <span v-else>
            <i class="text-orange-600 text-xl">📄</i>
          </span>
        </td>
        <td class="border text-auth-sky border-gray-300 px-4 py-2 text-center font-bold">
          {{ customer.name }}
        </td>
        <td class="border text-auth-sky font-bold border-gray-300 px-4 py-2 text-center">
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
    label: 'نام مشتری (الف-ی)',
    value: 'a-value',
  
  },
  {
    label: 'نام مشتری (ی-الف)',
    value: 'a-value',
  
  },

  {
    label: 'خوانده شده ها',
    value: 'a-value',
  
  },
  {
    label: 'خوانده نشده ها',
    value: 'a-value',
  
  },
])

const customers = ref([
  { name: "سپاهان چوب", mobile: "09993744332", read: true },
  { name: "ویرا پارسه", mobile: "09993744331", read: false },
  { name: "", mobile: "", read: false },
  { name: "", mobile: "", read: false },
]);
</script>