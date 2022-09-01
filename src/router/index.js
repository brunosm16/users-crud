import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFoundError from '@/views/NotFoundError.vue';
import LoginPage from '@/views/LoginPage.vue';
import UserRoutes from './user-routes';
import AuthMiddleware from './middleware/auth';

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
    meta: {
      authenticated: false,
    },
  },
  {
    path: '*',
    component: NotFoundError,
    meta: {
      authenticated: false,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(AuthMiddleware);

export default router;
