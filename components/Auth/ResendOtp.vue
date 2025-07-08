<template>
  <div class="flex flex-row-reverse items-center gap-1" style="direction: ltr">
    <ClientOnly>
      <VueCountdown
        v-if="!state.resendOtp"
        :transform="transformSlotProps"
        :time="1200 * 100"
        v-slot="{ minutes, seconds }"
        @end="onCountdownEnd"
        class="text-auth-blue"
      >
        {{ minutes }} : {{ seconds }}
      </VueCountdown>
    </ClientOnly>
    <span v-if="!state.resendOtp"> مانده تا دریافت مجدد کد </span>
    <span
      v-else
      @click.prevent="handleResendOtp"
      class="underline cursor-pointer"
    >
      دریافت مجدد کد
    </span>
  </div>
</template>

<script setup>
import VueCountdown from "@chenfengyuan/vue-countdown";

const phone_number = usePhoneNumber();
const state = reactive({
  resendOtp: false,
});

const emit = defineEmits(["endTime"]);

const transformSlotProps = (props) => {
  const formattedProps = {};

  Object.entries(props).forEach(([key, value]) => {
    formattedProps[key] = value < 10 ? `0${value}` : String(value);
  });
  return formattedProps;
};

const onCountdownEnd = () => {
  emit("endTime", true);
  state.resendOtp = true;
};

const handleResendOtp = async () => {
  emit("endTime", false);
  state.resendOtp = false;
  try {
    await $fetch("/api/auth/otp/resend", {
      method: "POST",
      body: { phone_number: phone_number.value },
    });

    useNuxtApp().$toast.info("کد تایید دوباره ارسال شد.");
  } catch (error) {
    emit("endTime", true);
    return useNuxtApp().$toast.error(error.data.message);
  } finally {
    state.loading = false;
  }
};

const fakeApiCall = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); // Simulating 2 seconds delay
  });
};

defineExpose({
  ...state,
});
</script>
