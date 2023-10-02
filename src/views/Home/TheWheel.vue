<template>
  <div class="w-full h-full z-50">
    <section class="angularpay-wheel z-50">
      <img src="/img/SVG/AngularPayWheel.svg" class="wheel z-50" alt="" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

onMounted(() => {
  gsap.to(".wheel", {
    rotation: -180,
    scrollTrigger: {
      trigger: ".angularpay-wheel",
      start: "160px 35%",
      end: "800px 70%",
      markers: false,
      scrub: 1,
    },
  });
});
</script>

<style scoped>
.angularpay-wheel {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 600;
}
.wheel {
  position: relative;
  z-index: 610;
  top: 100px;
  left: 55%;
}
</style>
<style scoped>
.cls-1 {
  fill: #462aa5;
}
.cls-2 {
  fill: #e6e6e6;
}
.cls-3 {
  opacity: 0.1;
}
.cls-4 {
  fill: url(#linear-gradient);
}
.cls-14,
.cls-5,
.cls-9 {
  fill: #fff;
}
.cls-6 {
  opacity: 0.4;
}
.cls-7 {
  fill: #999;
}
.cls-8 {
  fill: #f0f;
}
.cls-14,
.cls-9 {
  font-size: 31px;
  font-family: Archivo-ExtraBold, Archivo;
  font-weight: 800;
}
.cls-15,
.cls-9 {
  letter-spacing: 0.02em;
}
.cls-10 {
  letter-spacing: 0.01em;
}
.cls-11 {
  letter-spacing: 0.03em;
}
.cls-12 {
  letter-spacing: 0.02em;
}
.cls-13,
.cls-14 {
  letter-spacing: -0.01em;
}
.cls-16 {
  letter-spacing: 0.02em;
}
</style>
