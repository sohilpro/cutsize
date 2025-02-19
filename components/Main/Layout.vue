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

   
  <UtilsBreadCrumb :items="crumbItems"/>

  <h2 class="text-3xl text-auth-blue font-black">
    

    {{ title }}
  </h2>
</div>

<slot />
</section>
</main>
</template>

<script setup>
const {title,crumbItems} = defineProps({
    title: {
        type: String,
        default: 'تایتل'
    },
    crumbItems: Array
})
</script>