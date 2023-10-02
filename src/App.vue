<template>
  <div class="flex justify-center flex-col">
    <metainfo>
      <template v-slot:title="{ content }">{{
        content ? `${content} | AngularPay` : `AngularPay`
      }}</template>
    </metainfo>
    <div><NavBar /></div>
    <router-view />
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useMeta } from "vue-meta";
import NavBar from "@/components/NavBar.vue";
import TheFooter from "./views/Footer/TheFooter.vue";

TheFooter;
const { meta } = useMeta({
  title: "Welcome",
  htmlAttrs: { lang: "en", amp: true },
  "og:title": "AngularPay",
});

meta.description = "Yes Yes";

meta.meta = [
  {
    property: "og:title",
    content: "Life should be Easy",
  },
  { property: "og:site_name", content: "AngularPay" },
  { property: "og:type", content: "website" },
  { name: "robots", content: "index,follow" },
];

const counter = ref(0);

watchEffect(() => {
  const counterValue = counter.value;
  meta.description = `Counted ${counterValue} times`;
});
</script>

<style scoped lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
