<template>
  <div class="mx-2 xl:mx-12 xl:pt-24">
    <div
      class="bg-white flex max-w-7xl m-auto text-center place-items-center xl:-mt-20"
      style="min-height: calc(100vh - 0px)"
    >
      <div class="flex flex-col xl:flex-row gap-8">
        <div
          class="m-auto bg-white font-sansAlt font-boldflex place-items-center order-2 xl:order-1"
        >
          <div class="flex flex-col text-left justify-start mx-5">
            <div class="the-text-life-easy text-5xl">
              Life as it should be! -
              <span class="text-green-500 font-bold">Easy</span>
            </div>
            <div class="the-text-life-easy text-xl mt-4 text-gray-700/60">
              Life is too complicated. It shouldn't be. We want to "make life
              easier" for everyone
            </div>
            <div class="mt-4 flex justify-start items-center gap-2">
              <HomeModalDownload />
              <HomeModalSignUp button-name="Subscribe" />
            </div>
          </div>
        </div>
        <div class="flex justify-center order-1 xl:order-1 mx-auto">
          <DrawOne class="w-[300px] xl:w-[500px] h-auto place-self-center" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import DrawOne from "@/components/Illustrations/DrawOne.vue";
import HomeModalDownload from "./HomeModalDownload.vue";
import HomeModalSignUp from "./HomeModalSignUp.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let tl = gsap.timeline();
  tl.from(".the-text-life-easy", {
    opacity: 0,
    scale: 0.9,
    x: -50,
    duration: 1,
    stagger: 0.2,
    ease: "circ.inOut",
  });
});
</script>

<style scoped>
.subscription {
}
/* .grey {
  color: var(--colorGrey);
  text-align: center;
  letter-spacing: 0px;
}
.accent {
  color: var(--accent-color);
  text-align: left;
  letter-spacing: -1px;
}
.green {
  color: var(--colorGreen);
  text-align: left;
  letter-spacing: -1.9px;
} */
</style>
