<template>
    <main class="space-y-5">
  <header class="flex w-full shadow-md h-28 px-8 justify-between items-center bg-gradient-to-t from-auth-gray to-auth-kerem">
    <div class="flex items-center gap-5">
      <!-- Logo -->
       <NuxtLink to="/">
      <IconsTopForm class="w-20 h-20" />
    </NuxtLink>

    <div class="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M18.5 20.247V16S16 14.5 12 14.5S5.5 16 5.5 16v4.247M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12S17.799 22.5 12 22.5S1.5 17.799 1.5 12Zm10.426.5S8.5 10.68 8.5 8c0-1.933 1.569-3.5 3.504-3.5A3.495 3.495 0 0 1 15.5 8c0 2.68-3.426 4.5-3.426 4.5z" stroke-width="1"/></svg>

    <span class="text-auth-blue">مجموعه <span class="font-semibold">پویا برش</span></span>
</div>
    </div>


    <!-- details -->
     <div class="flex text-auth-blue items-center gap-5">
        <span>کد کارگاه: <span class="font-semibold">1234567</span></span>

        <div class="flex font-semibold items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>

            پیام ها
        </div>
        <div class="flex font-semibold items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M116.832 543.664H671.28c17.696 0 32-14.336 32-32s-14.304-32-32-32H118.832l115.76-115.76c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0l-189.008 194l189.008 194c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376c12.496-12.496 12.496-32.752 0-45.248zM959.664 0H415.663c-35.36 0-64 28.656-64 64v288h64.416V103.024c0-21.376 17.344-38.72 38.72-38.72h464.72c21.391 0 38.72 17.344 38.72 38.72l1.007 818.288c0 21.376-17.328 38.72-38.72 38.72h-465.71c-21.376 0-38.72-17.344-38.72-38.72V670.944l-64.416.08V960c0 35.344 28.64 64 64 64h543.984c35.36 0 64.016-28.656 64.016-64V64c-.015-35.344-28.671-64-64.015-64z"/></svg>

           خروج از حساب
        </div>
     </div>
  </header>

  <section class="px-8 space-y-5">
    <div class="space-y-5">

   
  <UtilsBreadCrumb :items="[{name: 'سفارش ها', url: '/'}]"/>

  <h2 class="text-3xl text-auth-blue font-black">
    سفارش ها
  </h2>
</div>

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
          <td class="border text-auth-sky font-bold border-gray-300 px-4 py-2 text-center font-bold">
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
</section>
</main>
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