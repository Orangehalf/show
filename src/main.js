import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/flex.css';
import  * as  echarts from 'echarts';
import axios from 'axios';
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
