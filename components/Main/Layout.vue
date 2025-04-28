<template>
  <ClientOnly>
    <main class="space-y-5">
      <UtilsLoader v-if="!auth || !auth.name || !auth.address" />
      <UtilsPopup
        v-else-if="!auth.name || !auth.address"
        width="400"
        :modal-active="true"
      >
        <AuthInformation />
      </UtilsPopup>

      <header
        class="flex w-full shadow-md h-28 px-8 justify-between items-center bg-gradient-to-t from-auth-gray to-auth-kerem"
      >
        <div class="flex text-lg items-center gap-5">
          <!-- Logo -->
          <NuxtLink to="/">
            <IconsTopForm class="w-20 h-20" />
          </NuxtLink>

          <div class="flex items-center gap-2">
            <IconsAvatar />

            <span class="text-auth-blue"
              >مجموعه
              <span v-if="auth" class="font-black">
                {{ auth.name }}
              </span></span
            >
          </div>

          <div
            @click="togglePopup"
            class="flex cursor-pointer items-center gap-2"
          >
            <IconsEdge class="w-6 h-6" />

            <span class="text-auth-blue font-bold">تعیین لبه ها</span>
          </div>

          <UtilsPopup
            width="1000"
            @close="togglePopup"
            :modal-active="show_edge"
          >
            <MainEdgeInfo />
          </UtilsPopup>
        </div>

        <!-- details -->
        <div class="flex text-lg text-auth-blue items-center gap-5">
          <span
            >کد کارگاه:
            <span class="font-black" v-if="auth"> {{ auth.code }}</span></span
          >

          <button class="flex font-semibold items-center gap-2">
            <IconsBell />

            پیام ها
          </button>
          <button
            @click="handleLogout"
            class="flex font-black items-center gap-2"
          >
            <IconsLogout />

            خروج از حساب
          </button>
        </div>
      </header>

      <section class="px-8 relative space-y-5">
        <div class="space-y-5">
          <UtilsBreadCrumb :items="crumbItems" />

          <h2 class="text-3xl text-auth-blue font-black">
            {{ title }}
          </h2>
        </div>

        <slot />
      </section>
    </main>
  </ClientOnly>
</template>

<script setup>
const { title, crumbItems } = defineProps({
  title: {
    type: String,
    default: "تایتل",
  },
  crumbItems: Array,
});

const auth = useAuth();

const show_edge = ref(false);
const togglePopup = () => {
  show_edge.value = !show_edge.value;
  document.querySelector("body").classList.add("overflow-hidden");
};

const handleLogout = async () => {
  try {
    await $fetch("/api/auth/logout", {
      method: "DELETE",
      header: useRequestHeaders(["cookie"]),
    });

    await navigateTo("/");
    auth.value = null;
  } catch (error) {
    console.log(error);
  }
};
</script>
