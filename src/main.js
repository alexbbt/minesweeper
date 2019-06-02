import Vue from 'vue';
import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Antd);

Vue.config.productionTip = false;

console.json = (...args) => {
  console.log(...args.map(arg => JSON.stringify(arg, null, 2)));
};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
