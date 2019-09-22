import App from "@/App.vue";
import BootstrapVue from "bootstrap-vue";
import router from "@/router";
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";
import * as VueGoogleMaps from "vue2-google-maps";


Vue.config.productionTip = false;
Vue.use( VueGoogleMaps, {
  load: {
    key: "AIzaSyCam6lVREXKBGtCvj5fQ-I_wEU8ahmy-OM",
    libraries: "places" // necessary for places input
  }
});

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
