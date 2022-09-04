import Vue from 'vue';
import Vuex from 'vuex';
import UsersStore from './user';

Vue.use(Vuex);

export default new Vuex.Store({
  ...UsersStore,
});
