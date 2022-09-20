import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios"

Vue.prototype.$axios = axios

Vue.use(ElementUI); // 原理install方法
Vue.config.productionTip = false;


console.log("打印代理名称",process.env.VUE_APP_BASE_API);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");