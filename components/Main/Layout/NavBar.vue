<template>
  <nav class="bg-white sticky z-50 top-0 shadow-md w-full py-5 px-10">
    <div class="flex text-auth-blue justify-between items-center">
      <NuxtLink to="/" class="flex items-center gap-2">
        <IconsLogoNav class="w-20 h-20" />

        <h1 class="text-3xl font-extrabold">Cut Size</h1>
      </NuxtLink>

      <ul class="flex gap-10 font-bold text-md items-center">
        <li>
          <NuxtLink
            :to="{ path: '/', hash: '#tutorial' }"
            class="hover:text-black/70 transition-all duration-300"
          >
            آموزش ها
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            :to="{ path: '/', hash: '#benefits' }"
            class="hover:text-black/70 transition-all duration-300"
          >
            مزایای کات سایز
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact-us"
            class="hover:text-black/70 transition-all duration-300"
          >
            تماس با ما
          </NuxtLink>
        </li>
      </ul>

      <div class="flex font-bold gap-3 items-center">
        <span class="text-xl"> رایگان شروع کنید </span>

        <button
          class="hover:bg-auth-orange border-auth-orange border-2 transition-all duration-300 rounded-md px-5 py-3"
        >
          دانلود اپلیکیشن
        </button>
        <ClientOnly>
          <NuxtLink v-if="!auth" to="/auth/login">
            <button
              class="border-auth-orange hover:bg-auth-orange transition-all duration-300 border-2 rounded-md px-5 py-3"
            >
              ورود پنل کارگاه
            </button>
          </NuxtLink>
          <NuxtLink v-else to="/order">
            <button
              class="border-auth-orange hover:bg-auth-orange transition-all duration-300 border-2 rounded-md px-5 py-3"
            >
              ورود پنل کارگاه
            </button>
          </NuxtLink>
        </ClientOnly>
      </div>
    </div>
  </nav>
</template>

<script setup>
const auth = useAuth();
</script>
