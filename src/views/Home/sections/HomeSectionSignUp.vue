<template>
  <div class="_section-two overflow-hidden z-20 place-items-center">
    <div class="m-auto xl:pt-12" id="_section-two">
      <div class="grid grid-cols-1 xl:grid-cols-1 place-items-center mb-4">
        <!-- <div class="illustration px-12 w-full h-full">
          <div class="the-photo-3 w-full h-full" id="content-3">
            <div class="relative w-full h-full mt-72 z-40">
              <img
                src="/img/phone-0.png"
                alt=""
                id="_section-two-phone-0"
                class="w-[544] h-auto absolute"
              />
              <img
                src="/img/phone-1.png"
                alt=""
                id="_section-two-phone-1"
                class="w-[200px] h-auto absolute"
                style="left: 104px; top: -124px"
              />
            </div>
          </div>
        </div> -->
        <div class="contents text-left">
          <div id="" class=" ">
            <div class="card the-text-sign-up py-6">
              <div class="text-primary text-2xl xl:text-3xl font-bold">
                Sign Up
              </div>
              <div class="text-gray-600 text-base xl:text-xl font-normal mt-2">
                Sign Up for early access and life simplifying updates
              </div>
              <div class="mt-6 relative">
                <form action="" class="">
                  <div
                    class="floating-label relative border-b-1 focus-within:border-accent"
                  >
                    <input
                      type="email"
                      name="email"
                      id="subscription-email"
                      placeholder=" "
                      class="form-input z-50 bg-transparent relative py-1 px-1 block w-full border-0 border-b-2 border-gray-300 ring-0 outline-none shadow-none focus:outline-none focus:border-b-2 focus:ring-0 focus:shadow-none focus:border-b-accent"
                    />
                    <label
                      for="email"
                      class="absolute z-10 duration-300 origin-0 text-gray-300 py-1"
                      style="left: 1px; top: 0px"
                      >Email</label
                    >
                  </div>

                  <!--  -->

                  <div
                    class="flex flex-col xl:flex-row mt-6 gap-3 xl:gap-12 items-start justify-start text-sm font-bold"
                  >
                    <div
                      class="text-gray-600 mt-2 flex gap-4 justify-start items-center"
                    >
                      <input
                        type="checkbox"
                        id="early-access"
                        checked
                        class="w-5 h-5 text-primary form-checkbox focus:ring-accent checked:ring-accent"
                      />
                      <label for="early-access">Early Access</label>
                    </div>
                    <div
                      class="text-gray-600t mt-2 flex gap-4 justify-start items-center"
                    >
                      <input
                        type="checkbox"
                        id="blog-posts"
                        class="w-5 h-5 text-primary form-checkbox focus:ring-accent checked:ring-accent"
                      />
                      <label for="blog-posts">Blog Posts</label>
                    </div>
                    <div
                      class="text-gray-600 mt-2 flex gap-4 justify-start items-center"
                    >
                      <input
                        type="checkbox"
                        id="newsletters"
                        class="w-5 h-5 text-primary form-checkbox focus:ring-accent checked:ring-accent"
                      />
                      <label for="newsletters">Newsletters</label>
                    </div>
                  </div>
                  <div class="text-gray-600 text-xl font-normal mt-8 mb-12">
                    <button
                      id="subscription-email"
                      class="form-button bg-primary hover:bg-accent transition-all duration-200 text-white py-2 px-6 rounded-full text-sm"
                    >
                      Sign me up
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <!-- <div
              class="sub mt-8 text-base xl:text-xl text-black/60 pb-12"
            ></div> -->
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
      trigger: "#_section-two",
      markers: false,
      toggleActions: "play complete complete complete",
      // scrub: 0.5,
      // start: "20% 60%",
      // end: "30% 35%",
    },
  });
  tl.from(".the-text-sign-up", {
    opacity: 0,
    x: -10,

    duration: 1,
    stagger: 0.3,
    ease: "circ.inOut",
  })
    .from(
      "#_section-two-phone-0",
      { opacity: 0, y: 0, x: 60, duration: 1, ease: "circ.inOut" },
      "0"
    )
    .from(
      "#_section-two-phone-1",
      {
        opacity: 0,
        z: -900,
        y: -180,
        x: -160,
        duration: 1,
        ease: "circ.inOut",
      },
      "<50%"
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
  @apply text-5xl xl:text-6xl font-bold tracking-tighter text-secondary font-sans;
  &:after {
    content: ".";
    @apply font-extrabold text-primary font-sansAlt;
  }
}
.floating-label {
  input:focus-within ~ label,
  input:not(:placeholder-shown) ~ label {
    @apply transform scale-75 -translate-y-5 -ml-[1px];
  }

  input:focus-within ~ label {
    @apply text-accent;
  }
}
</style>
