import {
  CreateUser,
  ListUsers,
  UpdateUser,
  UserWrapper,
  ViewUser,
} from '@/views/User';

export default [
  {
    path: '/user',
    component: UserWrapper,
    meta: {
      authenticated: true,
    },
    children: [
      {
        path: '',
        name: 'list-users',
        component: ListUsers,
        meta: {
          authenticated: true,
        },
      },

      {
        path: 'create-user',
        name: 'create-user',
        component: CreateUser,
        meta: {
          authenticated: true,
        },
      },

      {
        path: 'update-user/:id',
        name: 'update-user',
        component: UpdateUser,
        meta: {
          authenticated: true,
        },
      },

      {
        path: 'view-user/:id',
        name: 'view-user',
        component: ViewUser,
        meta: {
          authenticated: true,
        },
      },
    ],
  },
];
