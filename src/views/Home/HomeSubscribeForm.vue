<template>
  <div>
    <div class="flex items-center gap-4">
      <div>
        <Listbox v-model="selectedCountry">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full py-2 pl-3 pr-16 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
            >
              <div class="flex justify-between items-center gap-2 w-full">
                <img
                  v-if="selectedCountry?.code"
                  :src="getFlag(selectedCountry?.code)"
                  class="w-6 h-auto"
                />
                <span class="block truncate_ pr-4">{{
                  selectedCountry?.dial_code
                }}</span>
                <span
                  class="absolute inset-y-0 -right-2 flex items-center pr-6 pointer-events-none"
                >
                  <SelectorIcon
                    class="ml-2 w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </ListboxButton>

            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute w-full min-w-fit py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="country in countries"
                  :key="country.dial_code"
                  :value="country"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-10 pr-10',
                    ]"
                  >
                    <div class="flex justify-start items-center gap-2">
                      <img :src="getFlag(country.code)" class="w-6 h-auto" />
                      <span
                        :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate_',
                        ]"
                        >{{ country.dial_code }}</span
                      >
                      <span
                        v-if="selected"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                      >
                        <CheckIcon
                          class="pi pi-checkbox w-5 h-5"
                          aria-hidden="true"
                        />
                        <i class="pi pi-checkbox w-5 h-5" aria-hidden="true" />
                      </span>
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <input
        type="text"
        class="form-input mt-0 block w-full px-0.5 border-0 border-b-2 ring-0 border-gray-200 focus:border-accent bg-gray-50 focus:border-opacity-20 outline-none focus:outline-none focus:ring-0 ring-offset-1 focus:ring-accent"
      />
      <div class="w-48"></div>
    </div>
    <div class="mt-6">
      <button
        class="form-button border-2 border-primary rounded-full py-3 px-6 text-primary bg-white hover:shadow-lg focus:border-opacity-20 outline-none focus:ring-2 ring-offset-1 ring-accent"
      >
        Get Started
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
//@ts-ignore
import countries from "@/assets/world-countries/data/country_dial_info.js";

interface Country {
  name: string;
  flag: string;
  code: string;
  dial_code: string;
}
let selectedCountry = ref<Country | undefined>({
  name: "Nigeria",
  flag: "🇳🇬",
  code: "NG",
  dial_code: "+234",
});

function getFlag(code: string) {
  if (code) {
    const flagUrl = "/img/flags/24x24/" + code.trim().toLowerCase() + ".png";
    console.log(code, flagUrl);
    return flagUrl;
  }
  return undefined;
}
const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];
</script>

<style scoped></style>
