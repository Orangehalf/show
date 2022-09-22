import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/flex.css';
import echarts from 'echarts';
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
