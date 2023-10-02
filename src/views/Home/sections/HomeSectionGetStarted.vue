<template>
  <div class="w-full section-get-started overflow-hidden z-20">
    <div class="flex place-items-center" id="section-get-started">
      <div
        class="grid grid-cols-1 xl:grid-cols-1 place-items-center mb-4 xl:mb-24 items-center justify-center"
      >
        <!-- <div class="illustration px-12 w-full h-full">
          <div class="the-photo-3 w-full h-full" id="content-3">
            <div class="relative w-full h-full xl:mt-2 z-40">
            
              <img
                src="/img/illustrations/subscriber.png"
                class="the-subscriber-photo"
                alt=""
              />
            </div>
          </div>
        </div> -->
        <div class="contents text-left">
          <div id="" class="px-12 mt-16 xl:mt-4">
            <div class="the-text-get-started header-text">GET STARTED</div>
            <div
              class="main text-xl xl:text-4xl mt-6 xl:mt-12 the-text-get-started"
            >
              <span class="text-primary font-bold">Download</span>
              the app on Google Play and Apple Store
            </div>

            <div
              class="sub mt-12 text-base xl:text-xl text-black/60 the-text-get-started pb-12"
            >
              <div
                class="flex items-left justify-start items-center gap-2 xl:gap-8"
              >
                <img
                  src="/img/badges/google-play-badge.svg"
                  alt=""
                  class="w-auto h-10 xl:h-16"
                />
                <img
                  src="/img/badges/apple-app-store-badge.svg"
                  alt=""
                  class="w-auto h-10 xl:h-16"
                />
                <!--     <button
                  class="w-full flex transform hover:scale-105 justify-start items-left gap-2 text-background-dark bg-white hover:bg-background-dark hover:text-white transition-all duration-300 rounded-md shadow-lg py-4 px-6 border-grey-500"
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
                </button>-->
                <!-- <button
                  class="w-full flex transform hover:scale-105 justify-start items-center gap-2 text-background-dark bg-white hover:bg-background-dark hover:text-white transition-all duration-300 rounded-md shadow-lg py-4 px-6 border-grey-500"
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
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section-get-started",
      markers: false,
      toggleActions: "play complete complete complete",
      // scrub: 0.5,
      // start: "10% 50%",
      // end: "35% 50%",
    },
  });
  tl.from(".the-subscriber-photo", {
    opacity: 0,
    y: -10,
    x: -160,
    rotateY: 30,
    transformOrigin: "0% 0%",
    duration: 1,
    ease: "circ.inOut",
  }).from(
    ".the-text-get-started",
    {
      opacity: 0,
      x: -20,
      duration: 1,
      ease: "circ.inOut",
      stagger: 0.3,
    },
    0
  );

  // .to(
  //   ".the-photo-3",
  //   {
  //     scale: 1.2,
  //     duration: 0.5,
  //     stagger: 0.3,
  //     ease: "power1",
  //   },
  //   "<-=50%"
  // );
});
</script>

<style lang="scss" scoped>
.header-text {
  @apply text-4xl xl:text-6xl font-bold tracking-tighter text-secondary font-sans;
  &:after {
    content: ".";
    @apply font-extrabold text-primary font-sansAlt;
  }
}
.floating-label {
  input:focus-within ~ label,
  input:not(:placeholder-shown) ~ label {
    @apply transform scale-75 -translate-y-9;
  }

  input:focus-within ~ label {
    @apply text-accent;
  }
}
</style>
