<template>
  <div class="flex items-center justify-start">
    <button
      type="button"
      @click="openModal"
      class="whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      :class="classes"
    >
      <i :class="icon"></i>
      {{ buttonName }}
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-[9999999] overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-primary/25" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-2xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <!-- <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Payment successful
              </DialogTitle> -->
              <div class="mt-2">
                <div
                  class="flex flex-col items-center justify-end px-8 py-8 gap-8"
                >
                  <div class="modal-left order-2 xl:order-1">
                    <!--  -->
                    <HomeSectionSignUp />
                  </div>
                  <!-- <div class="modal-right xl:w-1/2 order-1 xl:order-2">
                    <img src="/img/illustrations/modal-image-1.png" alt="" />
                  </div> -->
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import HomeSectionSignUp from "./HomeSectionSignUp.vue";

interface Props {
  buttonName?: string;
  icon?: string;
  classes?: string;
}

const props = withDefaults(defineProps<Props>(), {
  buttonName: "Sign Up",
  icon: "mdi mdi-login-variant mr-1",
  classes: "text-white bg-primary hover:bg-accent",
});
const { buttonName, icon, classes } = toRefs(props);
const isOpen = ref(false);
function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>

<style scoped></style>
