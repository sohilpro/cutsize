<template>
  <ClientOnly>
    <main class="space-y-5">
      <UtilsPopup
        v-if="!auth || !auth.name"
        width="400"
        :modal-active="true"
      >
        <AuthInformation :close-popup="togglePopupInfo"/>
      </UtilsPopup>

      <header
        class="flex print:hidden w-full shadow-md h-28 px-8 justify-between items-center bg-gradient-to-t from-auth-gray to-auth-kerem"
      >
        <UtilsPopup
          width="400"
          @close="togglePopupInfo"
          :modal-active="show_info"
        >
          <AuthInformation :close-popup="togglePopupInfo" />
        </UtilsPopup>
        <div class="flex text-lg items-center gap-5">
          <!-- Logo -->
          <NuxtLink to="/">
            <IconsTopForm class="w-20 h-20" />
          </NuxtLink>

          <div
            @click="togglePopupInfo"
            class="flex cursor-pointer items-center gap-2"
          >
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
            <MainEdgeInfo :close="togglePopup" ref="edge" />
          </UtilsPopup>
        </div>

        <ul class="flex text-auth-blue gap-10 font-bold text-md items-center">
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

        <!-- details -->
        <div class="flex text-lg text-auth-blue items-center gap-5">
          <span
          v-if="auth.code"
            >کد کارگاه:
            <span
              style="
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
                  sans-serif;
              "
              class="font-black"
              v-if="auth"
            >
              {{ auth.code }}</span
            ></span
          >

          <div
            v-click-outside="() => (showNotification = false)"
            class="relative"
          >
            <button
              @click="handleSeenAndOpen"
              class="flex relative font-semibold items-center gap-2"
            >
              <IconsBell />
              <div
                v-if="notif != 0 && notif > 0"
                class="absolute bg-red-500 w-4 h-4 rounded-full text-white top-0 text-xs flex items-center justify-center"
              >
                {{ notif }}
              </div>

              پیام ها
            </button>

            <MainNotification
              @close="() => (showNotification = false)"
              v-show="showNotification"
              ref="notifications"
            />
          </div>

          <button
            @click="handleLogoutPopup"
            class="flex font-black items-center gap-2"
          >
            <IconsLogout />

            خروج از حساب
          </button>

          <UtilsPopup
            width="520"
            @close="handleLogoutPopup"
            :modal-active="show_logout"
          >
            <div
              class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center"
            >
              <IconsLogout class="w-16 h-16" />
            </div>

            <div class="flex flex-col gap-5">
              <div class="mt-5">
                <h6 class="text-xl font-extrabold">خروج از حساب کاربری</h6>
                <p>
                  با خروج از حساب کاربری دیگر به داشبورد دسترسی نخواهید داشت
                  <br />هر وقت بخواهید میتوانید مجدد وارد شوید.
                </p>
              </div>

              <div class="flex items-center gap-3 justify-center">
                <button
                  @click="handleLogoutPopup"
                  class="text-red-500 border border-red-500 rounded-lg py-2 px-5"
                >
                  انصراف
                </button>
                <button
                  @click="handleLogout"
                  class="text-white bg-red-500 rounded-lg py-2 px-5"
                >
                  خروج
                </button>
              </div>
            </div>
          </UtilsPopup>
        </div>
      </header>

      <section class="px-8 relative space-y-5">
        <div class="space-y-5 print:hidden">
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
const notif = useNotif();
const notifications = ref(null);

const handleSeenAndOpen = () => {
  showNotification.value = !showNotification.value;
  if (showNotification.value) {
    notifications.value.handleSeenMessages();
  }
};

const showNotification = ref(false);
const edge = ref(null);
const show_edge = ref(false);
const togglePopup = () => {
  edge.value.getDataEdge();
  show_edge.value = !show_edge.value;
  document.querySelector("body").classList.toggle("overflow-hidden");
};


const show_info = ref(false);
const togglePopupInfo = () => {
  show_info.value = !show_info.value;
  document.querySelector("body").classList.toggle("overflow-hidden");
};

const show_logout = ref(false);
const handleLogoutPopup = () => {
  show_logout.value = !show_logout.value;
  document.querySelector("body").classList.toggle("overflow-hidden");
};

const handleLogout = async () => {
  try {
    await $fetch("/api/auth/logout", {
      method: "DELETE",
      header: useRequestHeaders(["cookie"]),
    });

    await navigateTo("/");
    useNuxtApp().$toast.error("از حساب خود خارج شدید.");
    reloadNuxtApp();
    auth.value = null;
  } catch (error) {
    return useNuxtApp().$toast.error(error.data.message);
  }
};



onMounted(() => {
  if (auth?.value?.name?.match(/^F-\d+/)) {
    show_info.value = true
  }
})

// watch(() => auth?.value?.name, (newName) => {
//   if (newName?.match(/^F-\d+/)) {
//     show_info.value = true
//   }
// })
</script>
