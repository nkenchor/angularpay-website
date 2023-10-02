<template>
  <div
    class="w-full section-make-life-easier overflow-x-hidden z-20 min-h-screen grid grid-cols-1 items-center justify-center"
  >
    <div
      class="max-w-7xl w-full m-auto grid grid-cols-1 items-center justify-center"
      id="section-make-life-easier"
    >
      <div
        class="grid grid-cols-1 justify-between items-center z-20 mx-6 mt-24"
      >
        <div class="order-2 xl:order-1">
          <div class="mb-0">
            <div>
              <div
                class="the-text-make-life-easier text-3xl xl:text-5xl font-bold"
              >
                Here are a few ways we
              </div>
              <div class="the-text-make-life-easier header-text">
                make life easier...
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-0 z-30 relative mx-7">
        <div class="grid xl:grid-cols-3 gap-x-12 divide-secondary//50 mt-12">
          <div
            class="the-text-make-life-easier text-base pb-4 xl:pb-8"
            v-for="product in products"
            :key="product.title"
          >
            <div
              class="main text-xl xl:text-2xl xl:mt-0 the-text-make-life-easier text-primary font-bold"
            >
              {{ product.title }}
            </div>
            <div class="xl:mt-1">
              {{ product.description }}
            </div>
          </div>
        </div>
        <div class="mt-4 flex justify-start items-center gap-2 mb-24">
          <HomeModalDownload />
          <HomeModalSignUp button-name="Subscribe" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import HomeModalDownload from "./HomeModalDownload.vue";
import HomeModalSignUp from "./HomeModalSignUp.vue";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  force3D: true,
});
onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section-make-life-easier",
      markers: false,
      // start: "0% 35%",
      // end: "50% 75%",
    },
  });
  tl.from(
    ".the-photo-make-life-easier",
    {
      opacity: 0,
      transformOrigin: "center",
      rotationY: 30,
      translateZ: -9000,
      y: 0,
      x: 0,
      duration: 0.3,
      ease: "circ.inOut",
    },
    "<"
  ).from(
    ".the-text-make-life-easier",
    {
      opacity: 0,
      x: -20,

      duration: 0.3,
      stagger: 0.01,
      ease: "circ.inOut",
    },
    "<-=50%"
  );
  // .from(
  //   "#section-make-life-easier-phone-0",
  //   { opacity: 0, y: 0, x: 60, duration: 1, ease: "circ.inOut" },
  //   "0"
  // )

  // .to(
  //   ".the-photo-4",
  //   {
  //     scale: 1.2,
  //     duration: 0.5,
  //     stagger: 0.3,
  //     ease: "power1",
  //   },
  //   "<-=50%"
  // );
});

const products = ref([
  {
    title: "Crypto Investment",
    description: "Get a free crypto wallet. Buy/sell crypto assets.",
  },
  {
    title: "Money Transfer",
    description: "Request or fulfill cross-border money transfers.",
  },
  {
    title: "Smart Savings",
    description: "Setup automated savings.",
  },
  {
    title: "Salary Advance",
    description: "Request or provide salary advance loans.",
  },
  {
    title: "Business Loans",
    description: "Request or provide business loans.",
  },
  {
    title: "Business Pitch",
    description: "Request or provide startup funding.",
  },
  {
    title: "Supply Requests",
    description: "Request or fulfill commodity supplies.",
  },
  {
    title: "Service Request",
    description: "Request or render professional services.",
  },
  {
    title: "Stock Trading",
    description: "Get a free trading portfolio. Buy/sell stocks.",
  },
  {
    title: "Smart Payments",
    description: "Create or make smart business payments.",
  },
  {
    title: "Assets Purchase",
    description: "Request or facilitate assets purchases.",
  },
  {
    title: "Forex Trading",
    description: "Get a free trading portfolio. Trade Forex.",
  },
]);
</script>

<style lang="scss" scoped>
.header-text {
  @apply text-4xl xl:text-6xl font-bold tracking-tighter text-secondary font-sans;
  &:after {
    content: ".";
    @apply font-extrabold text-primary font-sansAlt;
  }
}
</style>
<style lang="css"></style>
