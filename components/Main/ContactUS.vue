<template>
  <section>
    <MainLayoutNavBar />
    <main
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
    >
      <div class="flex flex-col items-center">
        <h6 class="text-3xl font-black">تماس با پشتیبانی کات سایز</h6>
        <NuxtLink to="tel:+989125785162">
          <!-- <img class="w-full h-full" src="/img/contact/call.svg" alt="...." /> -->
           <IconsCall class="w-full h-full"/>
        </NuxtLink>
      </div>
      <UtilsDivider :top="1" />
      <div class="flex flex-col justify-center items-center gap-5">
        <h6 class="text-3xl font-black">
          شبکه های اجتماعی و پیام رسان های کات سایز
        </h6>

        <ul class="flex items-center gap-2">
          <li>
            <NuxtLink
              to="https://wa.link/mast7g"
              target="_blank"
              class="text-center"
            >
              <img src="/img/contact/whatsapp.png" alt="whatsapp" />
              <p>واتساپ</p>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="http://telegram.me/cut_size"
              target="_blank"
              class="text-center"
            >
              <img src="/img/contact/telegram.png" alt="telegram" />
              <p>تلگرام</p>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="https://eitaa.com/cut_size"
              target="_blank"
              class="text-center"
            >
              <img src="/img/contact/eita.png" alt="eita" />
              <p>ایتا</p>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="https://rubika.ir/CUT_SIZE"
              target="_blank"
              class="text-center"
            >
              <img src="/img/contact/rubika.png" alt="rubika" />
              <p>روبیکا</p>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="https://www.instagram.com/cut__size?igsh=eDV5eG5rZTd2ZWU0"
              target="_blank"
              class="text-center"
            >
              <img src="/img/contact/instagram.png" alt="insta" />
              <p>اینستاگرام</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </main>
  </section>
</template>

<script setup>
useHead({
  bodyAttrs: {
    style:
      "background-image: url('/img/contact/bg.svg'); background-repeat: no-repeat; background-size: cover; background-position: center; height: 100vh; margin: 0;",
  },
});
</script>
