<template>
  <div>
    <section>
      <HomeSectionLifeEasy />
    </section>
    <section>
      <HomeSectionAngularPaySocialMedia />
    </section>
    <!-- 
    <div class="bg-secondary/5">
      <div
        class="grid xl:grid-cols-2 max-w-7xl mx-auto items-center justify-center m-auto min-h-screen"
      >
        <section>
          <HomeSectionGetStarted />
        </section>
        <section>
          <HomeSectionSignUp />
        </section>
      </div>
    </div> -->

    <section>
      <HomeSectionMakeLifeEasier />
    </section>
    <section>
      <HomeSectionGetInTouch />
    </section>
    <section>
      <HomeSectionBlogsChatters />
    </section>
  </div>
</template>

<script setup lang="ts">
import HomeSectionLifeEasy from "./sections/HomeSectionLifeEasy.vue";
import HomeSectionAngularPaySocialMedia from "./sections/HomeSectionAngularPaySocialMedia.vue";
import HomeSectionGetStarted from "./sections/HomeSectionGetStarted.vue";
import HomeSectionMakeLifeEasier from "./sections/HomeSectionMakeLifeEasier.vue";
import HomeSectionSignUp from "./sections/HomeSectionSignUp.vue";
import HomeSectionGetInTouch from "./sections/HomeSectionGetInTouch.vue";
import HomeSectionBlogsChatters from "./sections/HomeSectionBlogsChatters.vue";
</script>

<style scoped></style>
