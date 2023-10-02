<template>
  <div
    class="w-full bg-secondary/0 section--blogs overflow-hidden z-20"
    id="section--blogs"
  >
    <div
      class="max-w-7xl m-auto min-h-screen flex flex-col items-start justify-center px-7"
    >
      <div
        class="header-text text-4xl xl:text-5xl pb-6 pt-24 text-primary text-left self-start"
      >
        The <span class="text-accent font-bold">Chatter</span> heard from around
        the world!
      </div>
      <div class="bg-accent h-1 w-4/12 self-start"></div>
      <div class="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
        <div v-for="(chatter, index) in chatters" :key="index">
          <img
            :src="chatter.photo"
            alt=""
            class="the-photo-blogs w-full h-72 object-cover transform bg-gray-100 rounded-xl"
          />
          <div class="thethe-text-blogs">
            <div
              class="sub-title-box uppercase text-xs text-primary font-bold mt-6"
            >
              {{ chatter.header }}
            </div>
            <div class="title-box font-bold text-xl leading-6 mt-2">
              {{ chatter.title }}
            </div>
            <div
              class="meta-box text-sm flex items-center justify-start gap-12 opacity-50 mt-4"
            >
              <div>{{ chatter.date }}</div>
              <div>{{ chatter.readLength }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 flex flex-wrap items-center justify-start gap-2">
        <button
          class="whitespace-nowrap bg-primary text-white hover:bg-accent px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <i class="mdi mdi-reload mr-1 mdi-spin"></i>
          Load More
        </button>
        <!-- <HomeModalDownload /> -->
        <HomeModalSignUp />
        <!-- <router-link
          to="/contact-us"
          class="whitespace-nowrap text-white bg-primary hover:bg-accent px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <i class="mdi mdi-email-outline mr-1"></i>
          Contact Us</router-link
        > -->
      </div>
      <div class="mt-12"></div>
      <div class="pt-24"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import moment from "moment";
// import HomeModalDownload from "./HomeModalDownload.vue";
import HomeModalSignUp from "./HomeModalSignUp.vue";

gsap.registerPlugin(ScrollTrigger);

const chatters = ref([
  {
    header: "How it Works",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    date: moment().format("LL"),
    readLength: "2 min read",
    photo:
      "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    header: "How we do it",
    title: "Neque porro quisquam est qui dolorem ipsum",
    date: moment().format("LL"),
    readLength: "3 min read",
    photo:
      "https://images.unsplash.com/photo-1640622300363-4f295638be2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  },
  {
    header: "How to make money",
    title: "Sed ut perspiciatis unde omnis iste natus error sit",
    date: moment().format("LL"),
    readLength: "5 min read",
    photo:
      "https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    header: "Grow Crypto",
    title: "Ut enim ad minima veniam, quis nostrum exercitationem ",
    date: moment().format("LL"),
    readLength: "9 min read",
    photo:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    header: "Setting up in one minute",
    title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
    date: moment().format("LL"),
    readLength: "12 min read",
    photo:
      "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
  },
  {
    header: "This is my Store",
    title: "Nam libero tempore, cum soluta nobis est eligendi",
    date: moment().format("LL"),
    readLength: "6 min read",
    photo:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
]);

onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section--blogs",
      markers: false,
      toggleActions: "play pause complete none",
      // scrub: 0.5,
      // start: "5% 90%",
      // end: "100%, 90%",
    },
  });
  tl.from(".the-bg--blogs", {
    opacity: 0,
    scale: 0,
    rotateY: 30,
    transformOrigin: "100% 100%",
    duration: 1,
    ease: "circ.inOut",
  })
    .from(
      ".the-photo-blogs",
      {
        opacity: 0,
        x: 20,
        duration: 1,
        stagger: 0.3,
        ease: "circ.inOut",
      },
      0
    )
    .from(
      ".thethe-text-blogs",
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
  //   ".the-photo-blogs",
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
