<template>
  <section>
    <NuxtLink to="/" class="justify-end w-full flex">
      <IconsLogo class="w-60 h-32 ml-32" />
    </NuxtLink>

    <div
      class="flex flex-col gap-[4.5rem] justify-center items-center"
      :class="{ 'mt-20': headInBottom }"
    >
      <h4 v-if="!headInBottom" class="text-white text-4xl font-semibold">
        در حال حاضر
        <span class="text-auth-orange font-bold underline">9998</span>
        کارگاه از کات سایز استفاده میکنند
      </h4>

      <main
        class="relative bg-auth-gray min-w-[26rem] text-auth-blue rounded-3xl px-8 py-4"
      >
        <div
          class="flex absolute -top-12 right-0 left-0 flex-col justify-center items-center gap-5"
        >
          <IconsTopForm class="w-20 h-20" />

          <p v-if="welcome" class="text-primary">درود! به کات سایز خوش آمدید</p>
        </div>
        <!-- title -->
        <h5 v-if="showTitle" class="font-bold text-xl absolute top-12">
          {{ title }}
        </h5>

        <slot />

        <div
          class="absolute -z-10 bg-auth-orange w-full h-full top-2 rounded-r-3xl rounded-bl-3xl left-2"
        ></div>
      </main>
    </div>

    <h4
      v-if="register"
      class="text-white flex items-center gap-5 text-2xl mt-8 pb-5 justify-center font-semibold"
    >
      برای ورود ابتدا اقدام به عضویت بفرمایید

      <NuxtLink class="btn-form" to="/auth/register"> ثبت نام </NuxtLink>
    </h4>

    <h4
      v-if="headInBottom"
      class="text-white flex justify-center mt-8 gap-2 text-4xl font-semibold"
    >
      در حال حاضر
      <span class="text-auth-orange font-bold underline">9998</span>
      کارگاه از کات سایز استفاده میکنند
    </h4>
  </section>
</template>

<script setup>
useHead({
  bodyAttrs: {
    style:
      "background-image: url('/auth/bg-auth.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center; height: 100vh; margin: 0;",
  },
});

const { title, welcome, register, headInBottom, showTitle } = defineProps({
  title: {
    type: String,
    default: "سلام",
  },
  welcome: {
    type: Boolean,
    default: true,
  },
  showTitle: {
    type: Boolean,
    default: true,
  },
  register: {
    type: Boolean,
    default: false,
  },
  headInBottom: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
:deep(.formkit-form) {
  @apply mt-20;
}
</style>
