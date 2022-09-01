export default [
  {
    path: '/user',
    component: () => import('@/views/User/UserWrapper.vue'),
    meta: {
      authenticated: true,
    },
    children: [
      {
        path: '',
        name: 'list-users',
        component: () => import('@/views/User/ListUsers.vue'),
        meta: {
          authenticated: true,
        },
      },

      {
        path: 'create-user',
        name: 'create-user',
        component: () => import('@/views/User/CreateUser.vue'),
        meta: {
          authenticated: true,
        },
      },

      {
        path: 'update-user/:id',
        name: 'update-user',
        component: () => import('@/views/User/UpdateUser.vue'),
        meta: {
          authenticated: true,
        },
      },

      {
        path: 'view-user/:id',
        name: 'view-user',
        component: () => import('@/views/User/ViewUser.vue'),
        meta: {
          authenticated: true,
        },
      },
    ],
  },
];
