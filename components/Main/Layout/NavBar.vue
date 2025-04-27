<template>
  <nav class="bg-white shadow-md w-full py-5 px-10">
    <div class="flex text-auth-blue justify-between items-center">
      <div class="flex items-center gap-2">
        <IconsLogoNav class="w-20 h-20" />

        <h1 class="text-3xl font-extrabold">Cut Size</h1>
      </div>

      <ul class="flex gap-5 font-bold text-md items-center">
        <li>
          <NuxtLink to="/"> آموزش ها </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/"> مزایای کات سایز </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/"> تماس با ما </NuxtLink>
        </li>
      </ul>

      <div class="flex font-bold gap-3 items-center">
        <span class="text-xl"> رایگان شروع کنید </span>

        <button class="bg-auth-orange rounded-md px-5 py-3">
          دانلود اپلیکیشن
        </button>
        <ClientOnly>
        <button v-if="!auth" class="border-auth-orange border-2 rounded-md px-5 py-3">
          <NuxtLink to="/auth/login"> ورود پنل کارگاه </NuxtLink>
        </button>
        <button v-else class="border-auth-orange border-2 rounded-md px-5 py-3">
          <NuxtLink to="/order/order-list"> ورود پنل کارگاه </NuxtLink>
        </button>
      </ClientOnly>
      </div>
    </div>
  </nav>
</template>

<script setup>
const auth = useAuth();
</script>