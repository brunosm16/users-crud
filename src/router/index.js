import Vue from 'vue';
import VueRouter from 'vue-router';
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
    component: () => import('@/views/LoginPage.vue'),
    meta: {
      authenticated: false,
    },
  },
  {
    path: '*',
    component: () => import('@/views/NotFoundError.vue'),
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
