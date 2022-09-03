import Vue from 'vue';
import Vuesax from 'vuesax';
import Vuex from 'vuex';

import router from '@/router';
import store from '@/store';
import App from './App.vue';

import './server/server';

Vue.use(Vuesax);
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
