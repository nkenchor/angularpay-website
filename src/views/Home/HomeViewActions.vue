<template>
  <div id="actions1" class="bg-black w-full text-white -mt-1">
    <div
      class="max-w-7xl m-auto w-full min-h-screen relative h-full px-3 lg:px-10"
    >
      <div
        class="lg:grid lg:grid-cols-2 gap-12 items-center dark-box h-auto relative"
      >
        <div class="self-center overflow-hidden h-64">
          <div
            class="boxes z-30 py-24 mt-10 relative transform transition-all animate rotate-45"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="100"
          >
            <div
              class="box-blue absolute animation delay-0 inset-0 w-48 h-48 lg:w-72 lg:h-72 transform origin-center rotate-45 rounded-xl bg-primary top-0 left-10"
            ></div>
            <div
              class="box-blue absolute animation delay-150 inset-0 w-48 h-48 lg:w-72 lg:h-72 transform origin-center rotate-45 rounded-xl bg-gray-700 top-0 left-0"
            ></div>
            <div class="clear-both"></div>
          </div>
        </div>
        <div
          class="relative -mt-12 lg:mt-0 self-center flex justify-center items-center"
        >
          <div class="">
            <div
              class="font-bold text-3xl lg:text-5xl mt-24"
              data-aos="fade-up"
            >
              Connect & Build
            </div>
            <div
              class="text-quartenary"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="300"
            >
              Integrate AngularPay with your Platform and Applications
            </div>

            <div
              class="connect-buttons w-full flex gap-4 py-12 flex-col lg:flex-row px-5 overflow-hidden"
            >
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="400"
              >
                <button
                  class="flex w-full flex-wrap cursor-pointer opacity-70 hover:opacity-100 hover:border-white transition-all duration-300 transform hover:scale-105 text-quartenary justify-center items-center gap-4 py-8 px-6 border rounded-lg border-gray-700"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="w-10 h-10"
                  >
                    <path
                      d="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z"
                    />
                  </svg>
                  <div class="text-xs whitespace-nowrap">Developer Api</div>
                </button>
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="500"
              >
                <button
                  class="flex w-full flex-wrap cursor-pointer opacity-70 hover:opacity-100 hover:border-white transition-all duration-300 transform hover:scale-105 text-quartenary justify-center items-center gap-4 py-8 px-6 border rounded-lg border-gray-700"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="w-10 h-10"
                  >
                    <path
                      d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"
                    />
                  </svg>
                  <div class="text-xs whitespace-nowrap">Watch Demo</div>
                </button>
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="600"
              >
                <button
                  class="flex w-full flex-wrap cursor-pointer opacity-70 hover:opacity-100 hover:border-white transition-all duration-300 transform hover:scale-105 text-quartenary justify-center items-center gap-4 py-8 px-6 border rounded-lg border-gray-700"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="w-10 h-10"
                  >
                    <path
                      d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"
                    />
                  </svg>
                  <div class="text-xs whitespace-nowrap">Your Account</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import aos from "aos";

aos.init();
</script>

<style scoped lang="scss">
.dark-box {
  min-height: 600px;
}
</style>
