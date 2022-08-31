import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  CreateUser,
  ListUsers,
  NotFoundError,
  UpdateUser,
  ViewUser,
} from '@/views';

Vue.use(VueRouter);

const routes = [
  {
    path: '/user',
    name: 'list-users',
    alias: '/',
    component: ListUsers,
  },

  {
    path: '/user/create-user',
    name: 'create-user',
    alias: '/create-user',
    component: CreateUser,
  },

  {
    path: '/user/update-user/:id',
    name: 'update-user',
    alias: '/update-user/:id',
    component: UpdateUser,
  },

  {
    path: '/user/view-user/:id',
    name: 'view-user',
    alias: '/view-user/:id',
    component: ViewUser,
  },

  {
    path: '/not-found',
    name: 'not-found',
    component: NotFoundError,
  },

  {
    path: '/users',
    redirect: {
      path: '/user',
      name: 'list-users',
    },
  },

  {
    path: '/create-new-user',
    redirect: {
      path: '/user/create-user',
      name: 'create-user',
    },
  },

  {
    path: '/my-user/:id?',
    redirect({ params }) {
      if (params?.id) {
        return { path: '/user/view-user/:id', name: 'view-user' };
      }
      return { path: '/user', name: 'list-users' };
    },
  },

  {
    path: '*',
    redirect: {
      path: '/not-found',
      name: 'not-found',
      component: NotFoundError,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
