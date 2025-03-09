<template>
  <!-- section input -->
  <FormKit
    :config="{ validationVisibility: 'submit' }"
    type="form"
    id="login-register"
    :actions="false"
    :incomplete-message="false"
    @submit="emit('submitForm', inputs)"
  >
    <main class="flex flex-col gap-3">
      <div class="form-style">
        <label for="username"> شماره موبایل خود را وارد کنید </label>

        <div class="main-form">
          <div class="icon-label">
            <IconsTel class="w-7 h-7" />
          </div>

          <FormKit
            type="text"
            input-class="input-style"
            id="phone_number"
            v-model="inputs.phone_number"
            ref="phone_number"
            placeholder="*****0999"
            validation="matches:/^09[0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/|required"
            :validation-messages="{
              required: 'این فیلد نباید خالی باشد.',
              matches: 'شماره تلفن راه صحیح وارد کنید.',
            }"
          />
        </div>

        <FormKitMessages :node="phone_number?.node" />
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
    v-if="showForgotPassword"
    to="/auth/forgot-password"
    class="flex font-semibold mt-5 items-center"
  >
    <span> فراموشی رمز عبود </span>

    <IconsLeft />
  </NuxtLink>

  <!-- buttom form -->
  <div class="flex justify-center mt-2">
    <button
      type="submit"
      :disabled="loading"
      :class="{ 'opacity-50': loading }"
      class="btn-form"
      form="login-register"
    >
      {{ btnTitle }}

      <IconsLoading v-if="loading" />
    </button>
  </div>
</template>

<script setup>
const { btnTitle, showForgotPassword } = defineProps({
  btnTitle: String,
  showForgotPassword: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["submitForm"]);
const loading = useLoading();

const phone_number = ref();
const password = ref();

const showPassword = ref(false);
const inputs = reactive({
  phone_number: null,
  password: null,
});

const showAndHidePassword = () => (showPassword.value = !showPassword.value);
</script>
