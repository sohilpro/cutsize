<template>
  <!-- section input -->
  <form @submit.prevent="handleActivation" id="check-otp" class="mt-8">
    <div class="form-style">
      <label for="otp" class="!text-2xl font-bold !text-auth-blue">
        کد تایید را ارد کنید
      </label>

      <div class="main-form">
        <div class="icon-label">
          <IconsOtpCode />
        </div>

        <FormKit
          type="text"
          input-class="input-style tracking-[0.8em] text-center !pb-0"
          id="otp"
          placeholder="-----"
          v-model.trim="inputs.otp"
          ref="otp"
          @input.passive="otpCheck"
          validation-visibility="submit"
          validation="number|required|length:5"
          :validation-messages="{
            required: 'این فیلد نباید خالی باشد.',
            number: 'فقط عدد وارد کنید.',
            length: 'کد تایید باید 5 رقمی باشد.',
          }"
          inputmode="numeric"
          maxlength="5"
        />
      </div>

      <FormKitMessages :node="otp?.node" />
    </div>
  </form>

  <!-- bottom section -->
  <div
    class="flex flex-col mt-3 justify-center items-center gap-1 text-auth-blue text-sm opacity-90"
  >
    <span>
      کد تایید برای شماره
      <template v-if="phone_number">
        {{ phone_number }}
      </template>
      <template v-else> ❤️ </template>
      پیامک شد
    </span>

    <AuthResendOtp ref="timer" />
  </div>

  <!-- buttom form -->
  <div class="flex justify-center mt-2">
    <button
      type="submit"
      :class="{ 'opacity-50': state.loading }"
      class="btn-form flex gap-2 items-center"
      form="check-otp"
    >
      ورود

      <IconsLoading v-if="state.loading" />
    </button>
  </div>
</template>

<script setup>
const timer = ref(null);
const otp = ref();

const phone_number = usePhoneNumber();

const state = reactive({
  loading: false,
});

const inputs = reactive({
  code: null,
});

const otpCheck = (event) => {
  const target = event.target;
  target.value = target.value.replace(/\D/g, "");
  inputs.code = target.value;
};

const handleActivation = async () => {
  state.loading = true;
  try {
    await $fetch("/api/auth/otp/activation", {
      method: "POST",
      body: { ...inputs, phone_number: phone_number.value },
    });

    navigateTo("/");
  } catch (error) {
    console.log("Error fetching data");
  } finally {
    state.loading = false;
  }
};
</script>
