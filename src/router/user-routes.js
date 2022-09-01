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
    children: [
      {
        path: '',
        name: 'list-users',
        component: ListUsers,
      },

      {
        path: 'create-user',
        name: 'create-user',
        component: CreateUser,
      },

      {
        path: 'update-user/:id',
        name: 'update-user',
        component: UpdateUser,
      },

      {
        path: 'view-user/:id',
        name: 'view-user',
        component: ViewUser,
      },
    ],
  },
];
