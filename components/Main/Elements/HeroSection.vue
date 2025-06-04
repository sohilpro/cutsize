<template>
  <section
    style="z-index: -2; background-image: url('/img/hero-bg.webp'); background-repeat: no-repeat; background-size: cover;"
    class="relative rounded-bl-[110px] overflow-hidden py-20 px-40"
  >
    <div class="flex gap-8 flex-col">
      <h1 class="text-4xl text-black/70">کات سایز</h1>

      <div class="space-y-5">
        <p class="text-4xl font-extrabold">ارتباط ساده، برش سریع</p>
        <p class="text-2xl text-neutral-400">
          اندازه ها رو وارد کن و خروجی حرفه ای بگیر
        </p>
      </div>

      <div class="flex items-center relative">
        <img src="/img/hero-mob.webp" alt="..." />
        <img src="/img/hero-desktop.webp" alt="..." />
        <img src="/img/hero-person.webp" class="w-[40%] -top-28 absolute -z-10 -left-28" alt="..." />
      </div>

      <p class="text-5xl font-extrabold text-center">
        درحال حاضر

        <span class="text-auth-orange"> {{ factory_count.count }} </span>

        کارگاه از کات سایز استفاده میکنند.
      </p>
    </div>
  </section>
</template>


<script setup>
const { data: factory_count } = await useFetch("/api/workshop/factory-count");
</script>