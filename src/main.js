import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from "vue-cookies";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";
const app = createApp(App);
app.config.globalProperties.$apiKey = "761c78e0eb83975c6de33e9a7aacb8ab";

app.config.globalProperties.$getLogin = VueCookies.get("user");



app.use(router);
app.use(VueAxios, axios);
app.use(VueCookies);
app.mount("#app");
