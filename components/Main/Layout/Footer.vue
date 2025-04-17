<template>
  <footer
    style="
      z-index: -2;
      background-image: url('/img/footer/hero-bg.webp');
      background-repeat: no-repeat;
      background-size: cover;
    "
    class="relative space-y-10 rounded-tr-[110px] overflow-hidden pt-20 pb-5 px-32"
  >
    <main class="flex items-center justify-between">
      <div class="flex flex-col gap-20">
        <h3 class="text-5xl flex items-center gap-4">
          چرا
          <span class="font-extrabold text-6xl">کات سایز</span>
          پیشنهاد میشود
        </h3>

        <ul class="space-y-8">
          <li>
            <div class="flex items-center gap-8">
              <img class="w-14 h-14" src="/img/footer/computer.svg" alt="..." />

              <div class="flex flex-col gap-2">
                <h6 class="text-2xl">محیط ساده</h6>
                <p class="text-xl text-black/60">
                  طراحی شده به تعاملی و کاربردی ترین شکل ممکن
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-8">
              <img class="w-14 h-14" src="/img/footer/speed.svg" alt="..." />

              <div class="flex flex-col gap-2">
                <h6 class="text-2xl">سرعت</h6>
                <p class="text-xl text-black/60">
                  صرفه جویی در زمان با ورود ساده اندازه ها
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-8">
              <img class="w-14 h-14" src="/img/footer/print.svg" alt="..." />

              <div class="flex flex-col gap-2">
                <h6 class="text-2xl">صدور صورت وضعیت</h6>
                <p class="text-xl text-black/60">
                  گزارش کار حرفه ای برای هر پروژه
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-8">
              <img
                class="w-14 h-14"
                src="/img/footer/compatible.svg"
                alt="..."
              />

              <div class="flex flex-col gap-2">
                <h6 class="text-2xl">سازگاری</h6>
                <p class="text-xl text-black/60">
                  پشتیبانی از همه دستگاه های کات دستی و اتومات
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-8">
              <img class="w-14 h-14" src="/img/footer/rule.svg" alt="..." />

              <div class="flex flex-col gap-2">
                <h6 class="text-2xl">دقت</h6>
                <p class="text-xl text-black/60">کاهش چشمگیر خطا در هر پروژه</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-8">
              <img class="w-14 h-14" src="/img/footer/price.svg" alt="..." />

              <div class="flex flex-col gap-2">
                <h6 class="text-2xl">هزینه معقول</h6>
                <p class="text-xl text-black/60">ارش بالا با قیمت معقول</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="w-1/2 h-1/2">
        <img src="/public/img/footer/hero-mobile.webp" alt="..." />
      </div>
    </main>

    <div class="flex justify-between w-full items-end">
        <p class="text-black/50 text-xl">
            &copy; تمامی حقوق برای وب‌سایت کات سایز محفوظ است.
        </p>

        <img class="w-24 h-24" src="/Enamad.png" alt="enamad" />
    </div>
  </footer>
</template>
