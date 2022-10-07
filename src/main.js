import Vue from 'vue'
import App from './App.vue'
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
import api from './api'
import "./api/mock.js";
import * as echarts from 'echarts'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(VueSweetalert2);
Vue.prototype.$api = api; // 将api挂载到vue的原型上
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
