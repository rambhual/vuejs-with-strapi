import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import Title from "./components/Title.vue";

const app = createApp(App);
app.use(router).use(store).mount("#app");
app.component("vue-title", Title);
