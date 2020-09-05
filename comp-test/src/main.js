import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import comp from "comp";

createApp(App)
  .use(store)
  .use(router)
  .use(comp)
  .mount("#app");
