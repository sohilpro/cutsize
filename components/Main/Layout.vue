<template>
  <main class="space-y-5">
    <header
      class="flex w-full shadow-md h-28 px-8 justify-between items-center bg-gradient-to-t from-auth-gray to-auth-kerem"
    >
      <div class="flex items-center gap-5">
        <!-- Logo -->
        <NuxtLink to="/">
          <IconsTopForm class="w-20 h-20" />
        </NuxtLink>

        <div class="flex items-center gap-2">
          <IconsAvatar />

          <span class="text-auth-blue"
            >مجموعه <span class="font-black">پویا برش</span></span
          >
        </div>
      </div>

      <!-- details -->
      <div class="flex text-auth-blue items-center gap-5">
        <span>کد کارگاه: <span class="font-black">1234567</span></span>

        <button class="flex font-semibold items-center gap-2">
          <IconsBell />

          پیام ها
        </button>
        <button class="flex font-black items-center gap-2">
          <IconsLogout />

          خروج از حساب
        </button>
      </div>
    </header>

    <section class="px-8 space-y-5">
      <div class="space-y-5">
        <UtilsBreadCrumb :items="crumbItems" />

        <h2 class="text-3xl text-auth-blue font-black">
          {{ title }}
        </h2>
      </div>

      <slot />
    </section>
  </main>
</template>

<script setup>
const { title, crumbItems } = defineProps({
  title: {
    type: String,
    default: "تایتل",
  },
  crumbItems: Array,
});
</script>
