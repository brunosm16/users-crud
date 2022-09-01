import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFoundError from '@/views/NotFoundError.vue';
import LoginPage from '@/views/LoginPage.vue';
import UserRoutes from './user-routes';

Vue.use(VueRouter);

const routes = [
  ...UserRoutes,
  {
    path: '/',
    redirect: '/user',
  },
  {
    path: '/login',
    name: '/login',
    component: LoginPage,
  },
  {
    path: '*',
    component: NotFoundError,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
