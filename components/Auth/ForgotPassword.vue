<template>
  <!-- section input -->
  <FormKit
    :config="{ validationVisibility: 'submit' }"
    @submit="handleSendOtp"
    type="form"
    id="send-otp"
    :actions="false"
    :incomplete-message="false"
  >
    <div class="form-style" :class="{ 'opacity-30': !state.endTime }">
      <label for="mobile">
        {{ label }}
      </label>

      <div class="main-form">
        <div class="icon-label">
          <IconsTel />
        </div>

        <FormKit
          type="text"
          input-class="input-style !pb-0"
          id="mobile"
          v-model.trim="inputs.phone_number"
          ref="mobile"
          placeholder="*******09"
          validation="matches:/^09[0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/|required"
          :validation-messages="{
            required: 'این فیلد نباید خالی باشد.',
            matches: 'شماره تلفن را صحیح وارد کنید.',
          }"
          inputmode="numeric"
          :disabled="!state.endTime"
        />
      </div>

      <FormKitMessages :node="mobile?.node" />
    </div>
  </FormKit>

  <form @submit.prevent="handleChanging" id="accept-otp" class="mt-3">
    <ClientOnly>
      <div class="form-style" :class="{ 'opacity-30': !state.enableInputOtp }">
        <label for="mobile"> کد تایید را وارد کنید </label>

        <div class="main-form">
          <div class="icon-label">
            <IconsOtpCode />
          </div>

          <FormKit
            type="text"
            input-class="input-style tracking-[0.8em] text-center !pb-0"
            id="otp"
            placeholder="-----"
            v-model.trim="inputs.code"
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
            :disabled="!state.enableInputOtp"
          />
        </div>

        <FormKitMessages :node="otp?.node" />
      </div>
    </ClientOnly>
  </form>

  <!-- bottom section -->
  <div
    v-show="state.enableInputOtp"
    class="flex flex-col mt-3 justify-center items-center gap-1 text-auth-blue text-sm opacity-90"
  >
    <span>
      کد تایید برای شماره
      <template v-if="inputs.phone_number">
        {{ inputs.phone_number }}
      </template>
      <template v-else> ❤️ </template>
      پیامک شد
    </span>

    <AuthResendOtp @end-time="(el) => (state.endTime = el)" />
  </div>

  <!-- buttom form -->
  <div class="flex justify-center mt-2">
    <button
      v-if="!state.enableInputOtp"
      type="submit"
      :disabled="state.loading"
      :class="{ 'opacity-50': state.loading }"
      class="btn-form flex gap-2 items-center"
      form="send-otp"
    >
      ارسال کد تایید

      <IconsLoading v-if="state.loading" />
    </button>
    <button v-else type="submit" class="btn-form" form="accept-otp">
      تایید
    </button>
  </div>
</template>

<script setup>
const { label } = defineProps({
  label: {
    type: String,
    default: "سلام",
  },
});
const emit = defineEmits(["step"]);

const mobile = ref();
const otp = ref();

const state = reactive({
  enableInputOtp: false,
  loading: false,
  endTime: true,
});

const inputs = reactive({
  phone_number: null,
  code: null,
});

const otpCheck = (event) => {
  const target = event.target;
  target.value = target.value.replace(/\D/g, "");
  inputs.code = target.value;
};

const handleSendOtp = async () => {
  state.loading = true;
  state.endTime = false;

  try {
    await $fetch("/api/auth/password/reset", {
      method: "POST",
      body: { phone_number: inputs.phone_number },
    });

    state.enableInputOtp = true;
    useNuxtApp().$toast.info("کد تایید را وارد کنید.");
  } catch (error) {
    return useNuxtApp().$toast.error(error.data.message);
  } finally {
    state.loading = false;
  }
};

const inputsValue = useInputs();

const handleChanging = () => {
  inputsValue.value = inputs;
  emit("step", 2);
};
</script>
