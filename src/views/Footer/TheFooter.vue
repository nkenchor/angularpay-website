<template>
  <div class="bg-primary/90 text-white px-7 pb-3">
    <div class="max-w-7xl mx-auto py-24">
      <div class="grid grid-cols-1 xl:grid-cols-[auto,auto,auto,auto,auto]">
        <div
          v-for="(topSection, index) in footer"
          :key="index"
          :id="'footer_' + topSection.section"
        >
          <div
            class="flex justify-start items-center gap-3 top-header mt-12 xl:mt-0 mb-2 xl:mb-6"
          >
            <!-- Top Headers with Images before them  -->
            <div v-if="topSection.image" class="">
              <img :src="topSection.image" alt="" class="w-6 h-auto" />
            </div>
            <div class="font-bold text-xl">{{ topSection.header }}</div>
          </div>

          <div class="top-subheader">
            <!-- The Sub Headers -->
            <div
              v-for="(content, index3) in topSection.content"
              :key="`${index}--${index3}`"
            >
              <div v-if="content.subHeader" class="subheader font-bold mt-6">
                {{ content.subHeader }}
              </div>
              <div
                v-if="content.text"
                class="subheader font-normal whitespace-pre-wrap"
              >
                {{ content.text }}
              </div>

              <div
                v-for="(data, index4) in content.data"
                :key="`${index}---${index4}`"
                class="mt-1"
              >
                <a
                  v-if="data.externalLink"
                  :href="data.externalLink"
                  class="block text-white/60 hover:text-white footer-link"
                  >{{ data.label }}</a
                >
                <router-link
                  v-else
                  :to="data.href"
                  class="block text-white/60 hover:text-white footer-link"
                  :class="data.style"
                  >{{ data.label }}</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-black px-7">
    <div class="max-w-7xl mx-auto text-white/50 py-4">
      <div
        class="flex flex-col xl:flex-row justify-start text-left xl:justify-between items-start xl:items-center"
      >
        <div class="rights">
          &copy; AngularPay
          <span>{{ moment().format("YYYY") }}</span>
        </div>
        <div>All Rights Reserved</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
import { ref } from "vue";

const baseUrl = "http://localhost:8080/";

const footer = ref([
  {
    section: "info",
    header: "AngularPay",
    image: "/img/angular-logo-white.svg",
    content: [
      {
        subHeader: "Offices",
        text: "Dubai Silicon Oasis\nDubai, UAE",
        data: null,
      },
      {
        subHeader: "Website(s)",
        text: "",
        data: [
          {
            label: "hello@angularpay.com",
            routeName: "",
            href: "",
            externalLink: "mailto:hello@angularpay.com",
            image: "",
            icon: "",
            style: "",
          },
          {
            label: "www.angularpay.io",
            routeName: "",
            href: "",
            externalLink: "https://www.angularpay.io",
            image: "",
            icon: "",
            style: "",
          },
          {
            label: "www.angularpay.com",
            routeName: "",
            href: "",
            externalLink: "https://www.angularpay.com",
            image: "",
            icon: "",
            style: "",
          },
        ],
      },
    ],
  },
  {
    section: "actions",
    header: "Get Started",
    image: "",
    content: [
      {
        subHeader: "",
        text: "",
        data: [
          {
            label: "Subscribe for Updates",
            routeName: "Subscription",
            href: "",
            image: "",
            icon: "drafts",
            externalLink: "",
            style: "",
          },
          {
            label: "Get on playstores",
            routeName: "",
            href: "https://play.google.com/",
            image: "",
            icon: "android",
            externalLink: "",
            style: "",
          },
          {
            label: "Download on the App Store",
            routeName: "",
            href: "https://store.apple.com/",
            image: "",
            icon: "file_download",
            externalLink: "",
            style: "",
          },
          {
            label: "Get in touch",
            routeName: "",
            href: "",
            image: "",
            icon: "thumb_up",
            externalLink: "",
            style: "",
          },
          {
            label: "Explore Our Open API",
            routeName: "",
            href: "https://www.angularpay.io",
            image: "",
            icon: "settings",
            externalLink: "",
            style: "",
          },
        ],
      },
    ],
  },
  {
    section: "features",
    header: "Platform Features",
    image: "",
    content: [
      {
        subHeader: "",
        text: "",
        data: [
          {
            label: "Cryptocurrencies",
            routeName: "Cryptocurrencies",
            href: `${baseUrl}/#cryptocurrencies`,
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Money transfers",
            routeName: "MoneyTransfers",
            href: `${baseUrl}/#money-transfers`,
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Smart savings",
            routeName: "SmartSavings",
            href: `${baseUrl}/#smart-savings`,
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Business loans",
            routeName: "BusinessLoans",
            href: `${baseUrl}/#businessloans`,
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Asset investments",
            routeName: "AssetInvestments",
            href: `${baseUrl}/#assets-investments`,
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Stock trading",
            routeName: "StockTrading",
            href: `${baseUrl}/#stock-trading`,
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Forex trading ",
            routeName: "ForexTrading ",
            href: `${baseUrl}/#forex-trading `,
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Business pitch",
            routeName: "BusinessPitch",
            href: `${baseUrl}/#business-pitch`,
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Smart payments",
            routeName: "SmartPayments",
            href: `${baseUrl}/#smart-payments`,
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Salary advance",
            routeName: "SalaryAdvance",
            href: `${baseUrl}/#salary-advance`,
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Professional services",
            routeName: "ProfessionalServices",
            href: `${baseUrl}/#professional-services`,
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Commodity supplies",
            routeName: "CommoditySuppliers",
            href: `${baseUrl}/#commodity-suppliers`,
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
        ],
      },
    ],
  },
  {
    section: "navigation",
    header: "Navigation",
    image: "",
    content: [
      {
        subHeader: "",
        text: "",
        data: [
          {
            label: "Home",
            routeName: "home",
            href: "/",
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Products",
            routeName: "",
            href: "/products",
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "About us",
            routeName: "",
            href: "/about",
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Blog posts",
            routeName: "",
            href: "blog",
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Contact us",
            routeName: "",
            href: "contact",
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
        ],
      },
    ],
  },
  {
    header: "Legal",
    image: "",
    content: [
      {
        subHeader: "",
        text: "",
        data: [
          {
            label: "Copyright",
            routeName: "",
            href: "/copyright",
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Privacy Policy",
            routeName: "",
            href: "/privacy-policy",
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
          {
            label: "Terms and condition",
            routeName: "",
            href: "/terms-and-conditions",
            image: "",
            icon: "",
            externalLink: "",
            style: "",
          },
        ],
      },
    ],
  },
]);
</script>

<style scoped>
.footer a {
  @apply hover:text-accent transition-all duration-200;
}

/* .footer-link::after {
  content: "   .";
}
.footer-link:hover::after {
  content: "  >";
  color: var(--accent-color);
} */
</style>
