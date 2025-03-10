<template>
  <!-- Profile Icon -->
  <div
    class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center"
  >
    <IconsAvatar />
  </div>

  <!-- Title -->
  <h2 class="text-xl font-bold text-gray-700 mt-5">درج نام کارگاه</h2>

  <!-- Form -->
  <FormKit
    :config="{ validationVisibility: 'submit' }"
    type="form"
    id="login-register"
    :actions="false"
    :incomplete-message="false"
  >
    <div class="mt-4 space-y-4">
      <!-- Nickname Input -->
      <div class="form-style">
        <label for="nickname"> نام مجموعه خود را وارد کنید </label>

        <div class="main-form">
          <div class="icon-label">
            <IconsUser class="w-7 h-7" />
          </div>

          <FormKit
            type="text"
            input-class="input-style"
            id="nickname"
            v-model="inputs.nickname"
            ref="nickname"
            placeholder="nickname"
            validation="required"
            :validation-messages="{
              required: 'این فیلد نباید خالی باشد.',
            }"
          />
        </div>

        <FormKitMessages :node="nickname?.node" />
      </div>

      <!-- Username Input -->
      <div class="relative">
        <input
          type="text"
          placeholder="username"
          class="w-full p-3 pr-10 border rounded-lg bg-gray-100 text-gray-500"
          disabled
        />
        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          👤
        </span>
      </div>

      <!-- Password Section -->
      <h3 class="text-gray-700 font-semibold text-sm">تغییر رمز عبور</h3>

      <!-- Current Password -->
      <div class="relative">
        <input
          type="password"
          placeholder="••••••••••"
          class="w-full p-3 pr-10 border rounded-lg focus:ring focus:ring-indigo-300"
        />
        <span
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          >👁️</span
        >
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          >🔒</span
        >
      </div>

      <!-- New Password -->
      <div class="relative">
        <input
          type="password"
          placeholder="••••••••••"
          class="w-full p-3 pr-10 border rounded-lg focus:ring focus:ring-indigo-300"
        />
        <span
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          >👁️</span
        >
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          >🔒</span
        >
      </div>

      <!-- Confirm New Password -->
      <div class="relative">
        <input
          type="password"
          placeholder="••••••••••"
          class="w-full p-3 pr-10 border rounded-lg focus:ring focus:ring-indigo-300"
        />
        <span
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          >👁️</span
        >
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          >🔒</span
        >
      </div>

      <!-- Error Message -->
      <p class="text-red-500 text-sm text-center">
        خطا: پسورد قبلی به درستی وارد نشده است
      </p>

      <!-- Submit Button -->
      <div class="flex justify-center">
        <button class="btn-form">تایید</button>
      </div>
    </div>
  </FormKit>
</template>

<script setup>
const nickname = ref();

const inputs = reactive({
  nickname: null,
});
</script>
