<template>
  <div class="w-full bg-accent/5 section-get-in-touch overflow-hidden z-20">
    <div
      class="max-w-7xl m-auto min-h-screen flex items-center"
      id="section-get-in-touch"
    >
      <div
        class="grid grid-cols-1 xl:grid-cols-2 place-items-center mb-12 xl:mb-24"
      >
        <div class="illustration px-7 w-full h-full">
          <div class="w-full h-full" id="content-get-in-touch">
            <div class="relative w-full h-full xl:mt-2 z-40">
              <svg
                width="1186"
                height="1207"
                viewBox="0 0 1186 1207"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="the-bg-get-in-touch object-fit w-full h-auto relative top-0 opacity-60"
              >
                <path
                  d="M25.1754 804.629C-24.898 541.639 -86.9608 62.2004 836.119 2.8044C1071.21 -41.9573 1131.23 482.12 1181.3 745.11C1231.38 1008.1 776.607 1155 541.514 1199.77C306.422 1244.53 75.2489 1067.62 25.1754 804.629Z"
                  fill="#462AA5"
                  fill-opacity="0.11"
                />
              </svg>

              <img
                src="/img/illustrations/social-dialog.svg"
                class="the-photo-get-in-touch absolute top-0"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="contents text-left">
          <div id="" class="px-7 mt-8 xl:mt-4">
            <div class="the-text-get-in-touch header-text text-black">
              <span
                class="text-black text-3xl xl:text-5xl tracking-tight font-normal"
              >
                We’re a lifeline to ailing institutions.
              </span>
              <span
                class="text-accent text-3xl xl:text-5xl tracking-tight font-bold"
              >
                Get in touch to learn how.</span
              >
            </div>
            <div
              class="main text-base xl:text-xl mt-6 xl:mt-12 the-text-get-in-touch"
            >
              It is no secret that banks and other financial institutions are
              currently on life support. Most are one disruptive technology away
              from extermination. AngularPay is your only lifeline. The good
              news is we’re not here to run you out of business - we’re here to
              help you stay in business.
            </div>
            <div class="mt-12 flex justify-start items-center gap-2">
              <HomeModalDownload button-name="Learn More" />
              <HomeModalSignUp button-name="Subscribe" />
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
import HomeModalDownload from "./HomeModalDownload.vue";
import HomeModalSignUp from "./HomeModalSignUp.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section-get-in-touch",
      markers: false,
      toggleActions: "play pause resume reset",
      // scrub: 0.5,
      // start: "10% 50%",
      // end: "35% 50%",
    },
  });
  tl.from(".the-bg-get-in-touch", {
    opacity: 0,
    scale: 0,
    rotateY: 30,
    transformOrigin: "100% 100%",
    duration: 1,
    ease: "circ.inOut",
  })
    .from(
      ".the-photo-get-in-touch",
      {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "circ.inOut",
      },
      0
    )
    .from(
      ".the-text-get-in-touch",
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
  //   ".the-photo-get-in-touch",
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
  @apply font-sans;
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
