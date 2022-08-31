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
    path: '/',
    name: 'list-users',
    component: ListUsers,
  },

  {
    path: '/create-user',
    name: 'create-user',
    component: CreateUser,
  },

  {
    path: '/update-user/:id',
    name: 'update-user',
    component: UpdateUser,
  },

  {
    path: '/view-user/:id',
    name: 'view-user',
    component: ViewUser,
  },

  {
    path: '/not-found',
    name: 'not-found',
    component: NotFoundError,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
