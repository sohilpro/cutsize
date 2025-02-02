<template>
  <div>
    <div class="justify-end w-full flex">
      <IconsLogo class="w-60 h-44 ml-32" />
    </div>

    <div class="flex flex-col gap-16 justify-center items-center">
      <h4 class="text-white text-4xl font-semiboldh">
        در حال حاضر
        <span class="text-auth-orange font-bold underline">9998</span>
        کارگاه از کات سایز استفاده میکنند
      </h4>

      <main class="relative bg-auth-gray min-w-[26rem] text-auth-blue rounded-3xl px-8 py-4">
        <!-- title -->
        <div class="flex gap-5 items-center pt-5 pb-10">
          <h5 class="font-bold text-lg">ورود</h5>

          <p class="text-primary">درود! به کات سایز خوش آمدید</p>
        </div>

        <!-- section input -->
        <FormKit type="form" :actions="false" :incomplete-message="false">
          <main class="flex flex-col gap-3">
            <div class="form-style">
              <label for="username">
                نام کاربری خود را وارد کنید
              </label>
  
              <div class="main-form">
                <div class="icon-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="6" r="4" fill="currentColor"/><path fill="currentColor" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"/></svg>
                </div>
    
                <FormKit
                type="text"
                input-class="input-style"
                id="username"
                placeholder="username"
                />
              </div>
            </div>

            <div class="form-style">
              <label for="password">
               رمز عبور خود را وارد کنید
              </label>
  
              <div class="main-form justify-between">
                <div class="flex items-center gap-3 justify-between">
                  <div class="icon-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004Q16.676 9.999 16 10H8q-.677-.001-1.25.004zM8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"/></svg>
                  </div>
      
                  <FormKit
                  type="password"
                  input-class="input-style !pb-0"
                  id="password"
                  placeholder="********"
                  />

                </div>

                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M9 4.46A9.8 9.8 0 0 1 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296A14.5 14.5 0 0 1 5 6.821"/><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/></g></svg>
                </div>
              </div>
            </div>
          </main>
        </FormKit>

        <!-- bottom section -->
         <NuxtLink to="/auth/forgot-password" class="flex font-semibold mt-5 items-center">
         <span>
          فراموشی رمز عبود
         </span>

         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"/></g></svg>
         </NuxtLink>

         <div class="flex justify-center mt-2">

           <button type="submit" class="btn-form">
             ورود
            </button>
         </div>
        <div
          class="absolute -z-10 bg-auth-orange w-full h-full top-2 rounded-r-3xl rounded-bl-3xl left-2"
        ></div>
      </main>
    </div>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    style:
      "background-image: url('/auth/bg-auth.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center; height: 100vh; margin: 0;",
  },
});
</script>
