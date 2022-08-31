import Vue from 'vue';
import VueRouter from 'vue-router';
import { ListUsers } from '@/views';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'list-users',
    component: ListUsers,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
