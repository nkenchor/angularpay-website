<template>
  <div id="navbar" class="navbar py-6 bg-gray-300/0 w-full fixed">
    <div
      class="flex flex-row gap-8 justify-between items-center max-w-7xl m-auto px-5"
    >
      <div class="brand flex justify-between items-center">
        <div class="logo py-1">
          <AngularPayLogo class="the-logo text-primary" />
        </div>
        <div
          class="brand-name font-sans text-xl xl:text-2xl ml-2 font-bold tracking-wide"
        >
          AngularPay
        </div>
      </div>
      <div class="hidden right xl:flex justify-between items-center">
        <div class="navigation flex justify-between items-center font-bold">
          <a href="/home">Home</a>
          <a href="/home">Products</a>
        </div>
        <div class="theme-switcher ml-6 flex justify-between items-center">
          <span>Theme</span>
          <div
            class="ml-4 w-8 h-4 border rounded-full border-black border-opacity-50 relative"
          >
            <div
              class="ball rounded-full h-4 w-4 bg-primary absolute top-0"
            ></div>
          </div>
        </div>
      </div>
      <div class="block xl:hidden">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="text-primary w-8 h-auto"
        >
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AngularPayLogo from "./AngularPayLogo.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // let tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".navbar",
  //     start: "top top",
  //     end: "160% 10%",
  //     scrub: true,
  //     markers: false,
  //     toggleActions: "play complete reverse none",
  //     onLeave: ({ trigger }) => {
  //       trigger?.classList.add("activated");
  //     },
  //     onEnter: ({ trigger }) => {
  //       trigger?.classList.remove("activated");
  //     },
  //     onEnterBack: ({ trigger }) => {
  //       trigger?.classList.add("activated");
  //     },
  //     onLeaveBack: ({ trigger }) => {
  //       trigger?.classList.remove("activated");
  //     },
  //     onUpdate: (self) => {
  //       console.log(self);
  //     },
  //   },
  // });
  // tl.to(".navbar", {
  //   backgroundColor: "rgba(229 231 235,1)",
  //   paddingTop: "6px",
  //   paddingBottom: "6px",
  //   duration: 1,
  // });
});

addEventListener("scroll", function () {
  // console.log(window.scrollY);
  const el = document.getElementById("navbar");
  if (window.scrollY > 100) {
    el?.classList.add("activated");
  } else {
    el?.classList.remove("activated");
  }
});
</script>

<style scoped>
#navbar {
  z-index: 999999;
}
.navbar {
  background-color: rgba(248, 248, 248, 0);
  transition: all 0.3s;
}

@keyframes fadeIn {
  0% {
    background-color: rgba(248, 248, 248, 0);
  }
  100% {
    background-color: rgba(228, 228, 228, 0.9);
  }
}
#navbar.activated {
  background-color: rgba(228, 228, 228, 0.938);
  @apply py-2;
  position: fixed;
  top: 0;
}

#navbar.navbar.activated .brand-name {
  @apply text-xl transition-all duration-500;
}
#navbar.navbar.activated a {
  @apply py-1 transition-all duration-500;
}
.brand-name {
  color: var(--primary-color);
  text-align: left;
  letter-spacing: -1px;
  opacity: 1;
}
.ball {
  top: -1px;
  left: -1px;
}
.navigation a {
  @apply py-3 px-4 hover:text-white bg-white hover:bg-primary rounded-full mr-1 transition-all duration-300  focus:border-opacity-20 outline-none focus:ring-2 ring-offset-1 ring-accent;
}
.navbar.activated .logo {
  @apply w-[18px] xl:w-5 h-auto transition-all;
}
.navbar .logo {
  @apply w-[18px] xl:w-7 h-auto transition-all;
}
</style>
