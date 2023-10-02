import { createApp } from "vue";
import App from "./App.vue";

//VUE META
import { createMetaManager } from "vue-meta";

//PRIMEVUE
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import Sidebar from "primevue/sidebar";
import Dropdown from "primevue/dropdown";
import ScrollPanel from "primevue/scrollpanel";

import "./registerServiceWorker";
import router from "./router";
import store from "./store";

//CSS
import "primevue/resources/themes/bootstrap4-light-purple/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "@/css/index.scss";
import "@/css/index.css";

// import "mdb-vue-ui-kit/css/mdb.min.css";

import "material-icons/iconfont/material-icons.css";
import "@mdi/font/css/materialdesignicons.min.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue);
//@ts-ignore
app.use(createMetaManager(), {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});

app.component("Dialog", Dialog);
app.component("Dropdown", Dropdown);
app.component("Sidebar", Sidebar);
app.component("ScrollPanel", ScrollPanel);

app.mount("#app");
