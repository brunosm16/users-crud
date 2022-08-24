<template>
  <div id="#app">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
        <component :is="componentType" @change-component="changeComponent" />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
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

  methods: {
    changeComponent({ componentType = '', userId = '' }) {
      this.componentType = componentType;
      this.userId = userId;
    },
  },
};
</script>

<style lang="scss" scoped></style>
