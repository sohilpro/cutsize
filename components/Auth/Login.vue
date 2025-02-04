<template>
  <!-- section input -->
  <FormKit
    :config="{ validationVisibility: 'submit' }"
    type="form"
    id="login-form"
    :actions="false"
    :incomplete-message="false"
  >
    <main class="flex flex-col gap-3">
      <div class="form-style">
        <label for="username"> نام کاربری خود را وارد کنید </label>

        <div class="main-form">
          <div class="icon-label">
            <IconsUser class="w-7 h-7" />
          </div>

          <FormKit
            type="text"
            input-class="input-style"
            id="username"
            v-model="inputs.username"
            ref="username"
            placeholder="username"
            validation="required"
            :validation-messages="{
              required: 'این فیلد نباید خالی باشد.',
            }"
          />
        </div>

        <FormKitMessages :node="username?.node" />
      </div>

      <div class="form-style">
        <label for="password"> رمز عبور خود را وارد کنید </label>

        <div class="main-form justify-between">
          <div class="flex w-full items-center gap-3 justify-between">
            <div class="icon-label">
              <IconsPassword class="w-7 h-7" />
            </div>

            <FormKit
              v-if="!showPassword"
              type="password"
              input-class="input-style !pb-0"
              id="password"
              ref="password"
              v-model="inputs.password"
              placeholder="********"
              validation="required"
              :validation-messages="{
                required: 'این فیلد نباید خالی باشد.',
              }"
            />
            <FormKit
              v-else
              type="text"
              input-class="input-style !pb-0"
              id="password"
              ref="password"
              v-model="inputs.password"
              placeholder="********"
              validation="required"
              :validation-messages="{
                required: 'این فیلد نباید خالی باشد.',
              }"
            />
          </div>

          <div>
            <IconsShow
              v-if="!showPassword"
              @click="showAndHidePassword"
              class="w-6 h-6 cursor-pointer"
            />

            <IconsHide
              v-else
              @click="showAndHidePassword"
              class="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>

        <FormKitMessages :node="password?.node" />
      </div>
    </main>
  </FormKit>

  <!-- bottom section -->
  <NuxtLink
    to="/auth/forgot-password"
    class="flex font-semibold mt-5 items-center"
  >
    <span> فراموشی رمز عبود </span>

    <IconsLeft />
  </NuxtLink>

  <!-- buttom form -->
  <div class="flex justify-center mt-2">
    <button type="submit" class="btn-form" form="login-form">ورود</button>
  </div>
</template>

<script setup>
const username = ref();
const password = ref();

const showPassword = ref(false);
const inputs = reactive({
  username: null,
  password: null,
});

const showAndHidePassword = () => (showPassword.value = !showPassword.value);
</script>
