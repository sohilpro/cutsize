<template>
  <!-- section input -->
  <FormKit
    :config="{ validationVisibility: 'submit' }"
    type="form"
    id="change-password"
    :actions="false"
    :incomplete-message="false"
  >
    <main class="flex flex-col gap-3">
      <div class="form-style">
        <label for="password"> رمز عبور باید حداقل 8 رقمی باشد </label>

        <div class="main-form justify-between">
          <div class="flex w-full items-center gap-3 justify-between">
            <div class="icon-label">
              <IconsPassword class="w-7 h-7" />
            </div>

            <FormKit
              v-if="!showPassword.password"
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
              v-if="!showPassword.password"
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

      <div class="form-style">
        <label for="password"> تکرار رمز عبور </label>

        <div class="main-form justify-between">
          <div class="flex w-full items-center gap-3 justify-between">
            <div class="icon-label">
              <IconsPassword class="w-7 h-7" />
            </div>

            <FormKit
              v-if="!showPassword.acceptPassword"
              type="password"
              input-class="input-style !pb-0"
              id="acceptPassword"
              ref="acceptPassword"
              v-model="inputs.acceptPassword"
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
              id="acceptPassword"
              ref="acceptPassword"
              v-model="inputs.acceptPassword"
              placeholder="********"
              validation="required"
              :validation-messages="{
                required: 'این فیلد نباید خالی باشد.',
              }"
            />
          </div>

          <div>
            <IconsShow
              v-if="!showPassword.acceptPassword"
              @click="showAndHideAcceptPassword"
              class="w-6 h-6 cursor-pointer"
            />

            <IconsHide
              v-else
              @click="showAndHideAcceptPassword"
              class="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>

        <FormKitMessages :node="acceptPassword?.node" />
      </div>
    </main>
  </FormKit>

  <!-- buttom form -->
  <div class="flex justify-center mt-2">
    <button type="submit" class="btn-form" form="change-password">تایید</button>
  </div>
</template>

<script setup>
const password = ref();
const acceptPassword = ref();

const showPassword = reactive({
  password: false,
  acceptPassword: false,
});
const inputs = reactive({
  password: null,
  acceptPassword: null,
});

const showAndHidePassword = () =>
  (showPassword.password = !showPassword.password);
const showAndHideAcceptPassword = () =>
  (showPassword.acceptPassword = !showPassword.acceptPassword);
</script>
