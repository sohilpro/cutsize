<template>
  <Transition name="modal-animation">
    <!-- Modal Background -->
    <!-- @click.self="close" -->
    <div
      v-show="modalActive"
      class="fixed inset-0 z-10 bg-black/10 flex items-center justify-center backdrop-blur-md"
    >
      <Transition name="modal-animation-inner">
        <!-- Modal Container -->
        <div
          :style="{ width: width + 'px' }"
          class="relative bg-auth-gray border-auth-blue/50 border rounded-2xl p-6 shadow-lg"
          v-show="modalActive"
        >
          <slot />

          <!-- Close Button -->
          <button
            @click="close"
            class="absolute top-0 -right-16 text-gray-500 p-1 bg-auth-orange rounded-full flex items-center justify-center"
          >
            <IconsClose class="text-auth-blue w-8 h-8" />
          </button>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
const { width, modalActive } = defineProps({
  width: String,
  modalActive: Boolean,
});

const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
  document.querySelector("body").classList.remove("overflow-hidden");
};
</script>

<style scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
</style>
