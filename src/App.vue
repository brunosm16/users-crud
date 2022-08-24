<template>
  <div id="#app"></div>
</template>

<script>
import { ListUsers, CreateUser, UpdateUser, ViewUser } from './components/Crud';
import NotFoundError from './components/NotFoundError.vue';

export default {
  name: 'App',

  data: () => ({
    componentType: 'list-users',
    userId: 0,
  }),

  provide() {
    const base = {};

    Object.defineProperty(base, 'userId', {
      enumerable: true,
      get: () => Number(this.userId),
    });

    return base;
  },

  computed: {
    currentComponent() {
      switch (this.componentType) {
        case 'create-user':
          return CreateUser;
        case 'list-users':
          return ListUsers;
        case 'update-user':
          return UpdateUser;
        case 'view-user':
          return ViewUser;
        default:
          return NotFoundError;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
