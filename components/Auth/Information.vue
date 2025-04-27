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
    @submit="handlInformation"
  >
    <div class="mt-4 space-y-4">
      <!-- name Input -->
      <div class="form-style">
        <label for="name"> نام مجموعه خود را وارد کنید </label>

        <div class="main-form">
          <div class="icon-label">
            <IconsUser class="w-7 h-7" />
          </div>

          <FormKit
            type="text"
            input-class="input-style"
            id="name"
            v-model="inputs.name"
            ref="name"
            placeholder="نام مجموعه"
            validation="required"
            :validation-messages="{
              required: 'این فیلد نباید خالی باشد.',
            }"
          />
        </div>

        <FormKitMessages :node="name?.node" />
      </div>
      <div class="form-style">
        <label for="address"> آدرس مجموعه خود را وارد کنید </label>

        <div class="main-form">
          <div class="icon-label">
            <IconsAddress
              class="w-7 h-7 text-auth-blue border rounded-full border-auth-blue/50 p-1"
            />
          </div>

          <FormKit
            type="text"
            input-class="input-style"
            id="address"
            v-model="inputs.address"
            ref="address"
            placeholder="تهران میدان آزادی..."
            validation="required"
            :validation-messages="{
              required: 'این فیلد نباید خالی باشد.',
            }"
          />
        </div>

        <FormKitMessages :node="address?.node" />
      </div>

      <!-- Password Section -->
      <!-- <h3 class="text-gray-700 font-semibold text-sm">تغییر رمز عبور</h3> -->

      <!-- Submit Button -->
      <div class="flex justify-center">
        <button class="btn-form">تایید</button>
      </div>
    </div>
  </FormKit>
</template>

<script setup>
const name = ref();
const address = ref();

const inputs = reactive({
  name: null,
  address: null,
});

const auth = useAuth();

const handlInformation = async () => {
  try {
    const data = await $fetch("/api/workshop/user/update-profile", {
      method: "PUT",
      body: inputs,
      header: useRequestHeaders(["cookie"]),
    });

    auth.value = data;
    navigateTo("/order/order-list");
  } catch (error) {
    auth.value = null;
    console.log(error);
  }
};
</script>
