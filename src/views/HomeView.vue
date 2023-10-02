<template>
  <div>
    <Sidebar v-model:visible="visibleLeft">
      <div
        class="logo -ml-2 mb-5 flex items-center justify-center font-bold text-primary text-xl lg:text-2xl tracking-tight"
      >
        <img src="/img/logo.png" class="w-12 h-auto lg:w-16" alt="" />
        <div class="brand">AngularPay</div>
      </div>
      <div class="menu lg:hidden block">
        <div
          class="flex flex-col lg:flex-row gap-4 text-quartenary items-center"
        >
          <button @click="togglePhoto">Home</button>
          <button>
            <a href="#actions1" class="flex items-center gap-2">
              Products
              <i class="pi pi-chevron-down"></i>
            </a>
          </button>
          <button>Blogs</button>
          <button>Contact</button>
        </div>
      </div>
    </Sidebar>
  </div>
  <div class="bg-background-light">
    <div class="max-w-lg lg:max-w-7xl w-full m-auto min-h-screen z-10 relative">
      <div
        class="mt-5 lg:mt-7 flex gap-6 justify-between nav text-xl font-medium items-center px-3 lg:px-10"
      >
        <div class="flex justify-between items-center gap-12">
          <div
            class="logo -ml-2 flex items-center font-bold text-primary text-xl lg:text-2xl tracking-tight"
          >
            <img src="/img/logo.png" class="w-12 h-auto lg:w-16" alt="" />
            <div class="brand">AngularPay</div>
          </div>
          <div class="menu hidden lg:block">
            <ul
              class="flex flex-col lg:flex-row gap-6 text-quartenary items-center"
            >
              <li @click="togglePhoto">Home</li>
              <li>
                <a href="#actions1" class="flex items-center gap-2">
                  Products
                  <i class="pi pi-chevron-down"></i>
                </a>
              </li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div class="api hidden lg:block whitespace-nowrap">
          <ul
            class="flex flex-col lg:flex-row gap-3 text-quartenary items-center divide-x-2 text-sm tracking-wider"
          >
            <li @click="togglePhoto" class="items-center flex gap-3">
              <i class="pi pi-box"></i> SUBSCRIBE
            </li>
            <!-- <li @click="togglePhoto" class="pl-3">Register</li> -->
          </ul>
        </div>
        <div
          class="block lg:hidden text-quartenary"
          @click="visibleLeft = !visibleLeft"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" class="w-8 h-8">
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </div>
      </div>
      <div
        class="body mt-10 lg:mt-0 grid grid-cols-1 lg:grid-cols-[1fr,1fr,50px] px-3 lg:px-10 gap-6 items-center justify-between"
      >
        <div class="left text-center lg:text-left">
          <div class="justify-around">
            <div></div>
            <div
              class="text-3xl lg:text-5xl font-bold leading-tight px-5 lg:px-0"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
            >
              Connecting People through Financial
              <span class="text-secondary">Social Networking</span>
            </div>
            <div
              class="text-quartenary font-medium text-base px-5 lg:px-0"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="200"
            >
              Make Money While having fun!
            </div>
            <div
              class="my-12 px-5 lg:px-0 flex flex-col lg:flex-row items-center justify-start"
            >
              <div class="flex items-center justify-start">
                <Dropdown
                  v-model="selectedCountry"
                  :options="countries"
                  optionLabel="dial_code"
                  :filter="true"
                  :showClear="false"
                  class="w-auto lg:py-1"
                >
                  <template #value="slotProps">
                    <div
                      class="country-item country-item-value flex items-center justify-start whitespace-nowrap text-xs"
                      v-if="slotProps.value"
                    >
                      <img
                        :src="getFlag(slotProps.value.code)"
                        class="w-6 h-auto"
                      />
                      <div>{{ slotProps.value.dial_code }}</div>
                    </div>
                    <span v-else>
                      {{ slotProps.placeholder }}
                    </span>
                  </template>
                  <template #option="slotProps">
                    <div
                      class="country-item flex items-center justify-start gap-2 whitespace-nowrap text-xs"
                    >
                      <img
                        :src="getFlag(slotProps.option.code)"
                        class="w-6 h-auto"
                      />
                      <div>{{ slotProps.option.dial_code }}</div>
                    </div>
                  </template>
                </Dropdown>
                <input
                  type="text"
                  class="py-3 px-4 whitespace-nowrap text-xs lg:text-sm w-auto lg:py-4 lg:px-8 border rounded-lg lg:rounded-r-none lg:rounded-l-lg"
                />
              </div>
              <button
                @click="togglePhoto"
                class="bg-primary py-3 px-4 mt-3 lg:mt-0 whitespace-nowrap text-xs lg:text-sm text-white lg:py-4 lg:px-6 border border-primary rounded-lg lg:rounded-l-none lg:-ml-1"
              >
                Get Started
              </button>
            </div>
            <div class="px-3 lg:px-0">
              <div class="mb-3 text-quartenary text-center lg:text-left">
                Coming Soon...
              </div>
              <div
                class="flex flex-col lg:flex-row items-center justify-start gap-8"
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="400"
              >
                <button
                  class="flex transform hover:scale-105 justify-between items-center gap-2 text-background-dark bg-white hover:bg-background-dark hover:text-white transition-all duration-300 rounded-md shadow-lg py-2 px-6"
                >
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-current w-9 h-auto"
                    >
                      <path
                        d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                      />
                    </svg>
                  </div>

                  <div class="text-left">
                    <span class="text-xs block">Get it on</span>
                    <span class="font-bold text-base block">Play Store</span>
                  </div>
                </button>
                <button
                  class="flex transform hover:scale-105 justify-between items-center gap-2 text-background-dark bg-white hover:bg-background-dark hover:text-white transition-all duration-300 rounded-md shadow-lg py-2 px-6"
                >
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-current w-9 h-auto"
                    >
                      <path
                        d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
                      />
                    </svg>
                  </div>

                  <div class="text-left">
                    <span class="text-xs block">Download on</span>
                    <span class="font-bold text-base block">Apple Store</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="right relative">
          <!-- <TheWheel></TheWheel> -->
          <img
            src="/img/landing-image-1.png"
            id="landing-photo"
            alt=""
            class="w-full h-auto landing-photo p-4 lg:p-16 opacity-20"
          />
        </div>
        <div
          class="social-icons self-end flex flex-row lg:flex-none lg:grid lg:grid-cols-1 justify-center gap-4 text-quartenary mb-24"
        >
          <button
            class="hover:text-background-dark transition-all duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current w-6 h-auto"
            >
              <path
                d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
              />
            </svg>
          </button>
          <button
            class="hover:text-background-dark transition-all duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current w-6 h-auto"
            >
              <path
                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
              />
            </svg>
          </button>
          <button
            class="hover:text-background-dark transition-all duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current w-6 h-auto"
            >
              <path
                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
              />
            </svg>
          </button>
          <button
            class="hover:text-background-dark transition-all duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current w-6 h-auto"
            >
              <path
                d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="relative z-20 mt-[150px]">
      <div
        class="stx-bg-green absolute bottom-5 z-20"
        data-aos="slide-up"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="100"
      ></div>
      <div
        class="bg-black stx-bg-black z-30 absolute bottom-0 z-20"
        data-aos="slide-up"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
      ></div>
    </div>
    <div>
      <HomeViewActions />
    </div>
  </div>
</template>

<script lang="ts" setup>
import aos from "aos";
import { ref, watch } from "vue";
import HomeViewActions from "./Home/HomeViewActions.vue";
//@ts-ignore
import countries from "@/assets/world-countries/data/country_dial_info.js";
import TheWheel from "./Home/TheWheel.vue";

aos.init();

interface Country {
  name: string;
  flag: string;
  code: string;
  dial_code: string;
}
const selectedCountry = ref<Country | undefined>({
  name: "Nigeria",
  flag: "🇳🇬",
  code: "NG",
  dial_code: "+234",
});

const visibleLeft = ref(false);
function togglePhoto() {
  const photo = document.getElementById("landing-photo");
  photo?.classList.remove("landing-photo");
  setTimeout(() => {
    photo?.classList.add("landing-photo");
  }, 500);
  // photo?.classList.toggle("landing-photo");
}

function getFlag(code: string) {
  if (code) {
    const flagUrl = "/img/flags/24x24/" + code.trim().toLowerCase() + ".png";
    console.log(code, flagUrl);
    return flagUrl;
  }
  return undefined;
}

watch(
  () => selectedCountry.value,
  (to) => {
    console.log(to);
  }
);
</script>
<style scoped>
.nav li,
.nav > .api {
  @apply text-quartenary hover:text-secondary cursor-pointer transition-all duration-200;
}

@keyframes landing {
  0% {
    transform: scale(0.9) rotate(-3deg);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
img.landing-photo {
  transform: scale(0);
  transform: rotateX(0deg);
  animation-name: landing;
  animation-duration: 2s;
}

.stx-bg-green {
  height: 150px;
  width: 100%;
  background-color: #2aa54b;
  clip-path: polygon(0 0, 100% 69%, 100% 100%, 0 100%);
}
.stx-bg-black {
  height: 150px;
  width: 100%;
  clip-path: polygon(0 0, 100% 69%, 100% 100%, 0 100%);
}
.social-icons button {
  @apply transform hover:scale-110;
}
/* .p-dropdown {
  padding: 5px;
} */
</style>
