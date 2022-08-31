import './server/server';
import router from '@/router/index';
import Vue from 'vue';
import Vuesax from 'vuesax';
import App from './App.vue';

Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
