<template>
     <!-- section input -->
     <FormKit :config="{ validationVisibility: 'submit' }" @submit="handleSendOtp" type="form" id="send-otp" :actions="false" :incomplete-message="false">
         
            <div class="form-style" :class="{'opacity-30': !state.endTime}">
              <label for="mobile">
              {{ label }}
              </label>
  
              <div class="main-form">
                <div class="icon-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
                </div>
    
                <FormKit
                type="text"
                input-class="input-style !pb-0"
                id="mobile"
                v-model.trim="inputs.mobile"
                ref="mobile"
                placeholder="*******09"
          validation="matches:/^09[0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/|required"
                  :validation-messages="{
                       required: 'این فیلد نباید خالی باشد.',
                       matches: 'شماره تلفن راه صحیح وارد کنید.',
                    }"
                    inputmode="numeric"
                    :disabled="!state.endTime"
                />
              </div>

              <FormKitMessages :node="mobile?.node"/>
            </div>
        </FormKit>

        <form @submit.prevent="() => console.log('yes,submit')" id="accept-otp" class="mt-3">
        <div class="form-style" :class="{'opacity-30': !state.enableInputOtp}">
              <label for="mobile">
                کد تایید را ارد کنید
              </label>
  
              <div class="main-form">
                <div class="icon-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M6 5.5h3m-1.5 0V10m3 0V7.5m0 0v-2h1a1 1 0 1 1 0 2zm-6-1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm-3-6h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z" stroke-width="1"/></svg>
                </div>
    
                <FormKit
                type="text"
                input-class="input-style !pb-0"
                id="otp"
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
                    :disabled="!state.enableInputOtp"
                />
              </div>

              <FormKitMessages :node="otp?.node"/>
            </div>
          </form>

        <!-- bottom section -->
         <div v-if="state.enableInputOtp" class="flex flex-col mt-3 justify-center items-center gap-1 text-auth-blue text-sm opacity-90">
          <span>
            کد تایید برای شماره
             <template v-if="inputs.mobile">
              {{inputs.mobile  }}
             </template>
             <template v-else>
              ❤️
             </template>
              پیامک شد
          </span>

          <div
        class="flex flex-row-reverse items-center gap-1"
        style="direction: ltr"
      >
       
        <ClientOnly>
        <VueCountdown
        v-if="!state.resendOtp"
          :transform="transformSlotProps"
          :time="120 * 1000"
          v-slot="{ minutes, seconds }"
          @end="onCountdownEnd"
          class="text-auth-blue"
        >
          {{ minutes }} : {{ seconds }}
        </VueCountdown>
      </ClientOnly>
      <span v-if="!state.resendOtp">
          مانده تا دریافت مجدد کد
        </span>
      <span v-else @click.prevent="handleResendOtp" class="underline cursor-pointer">
          دریافت مجدد کد
        </span>
      </div>
         </div>

         <!-- buttom form -->
         <div class="flex justify-center mt-2">

           <button v-if="!state.enableInputOtp" type="submit" :disabled="state.loading" :class="{'opacity-50': state.loading}" class="btn-form flex gap-2 items-center" form="send-otp">
             ارسال کد تایید

             <IconsLoading v-if="state.loading"/>
            </button>
           <button v-else type="submit" class="btn-form" form="accept-otp">
             تایید
            </button>
         </div>
</template>

<script setup>
import VueCountdown from "@chenfengyuan/vue-countdown";
const {label} = defineProps({
  label: {
    type: String,
    default: 'سلام'
  }
})
const mobile = ref()
const otp = ref()
const state = reactive({
  enableInputOtp: false,
  loading: false,
  resendOtp: false,
  endTime: true,
})

const inputs = reactive({
  mobile: null,
  otp: null,
}) 

const transformSlotProps = (props) => {
  const formattedProps = {};

  Object.entries(props).forEach(([key, value]) => {
    formattedProps[key] = value < 10 ? `0${value}` : String(value);
  });
  return formattedProps;
};

const onCountdownEnd = () => {
  state.endTime = true;
  state.resendOtp = true;
};

const otpCheck = (event) => {
  const target = event.target
  target.value = target.value.replace(/\D/g, '')
  inputs.otp = target.value
} 

const handleSendOtp = async () => {
  state.loading = true; 
  state.endTime = false;
  try {
     await fakeApiCall();
     state.enableInputOtp = true
  } catch (error) {
    console.log("Error fetching data");
    state.endTime = true;
  } finally {
    state.loading = false; 
  }
};

const handleResendOtp = async () => {
  state.endTime = false;
  state.resendOtp = false
}

const fakeApiCall = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); // Simulating 2 seconds delay
  });
};
</script>