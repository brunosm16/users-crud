<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div class="list-users-component">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
        <vs-card class="list-users-component__card">
          <template #header>
            <h3 class="list-users-component__card--header">Users List</h3>
          </template>

          <vs-row>
            <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
              <UsersListTable @delete="onDelete" />
            </vs-col>
          </vs-row>

          <template #footer>
            <vs-row vs-justify="flex-start">
              <vs-button
                color="primary"
                type="filled"
                icon="fiber_new"
                size="small"
                @click.native="changeRoute('create-user')"
              >
                Create A New User
              </vs-button>
            </vs-row>
          </template>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import ChangeRoute from '@/mixins/change-route';
import UsersListTable from '@/components/UsersListTable.vue';
import { apiURLById } from '@/utils/api-url';
import { deleteHttp } from '@/http-utils/fetch-api';

export default {
  name: 'ListUsers',

  components: {
    UsersListTable,
  },

  mixins: [ChangeRoute],

  data: () => ({
    users: [],
  }),

  async beforeMount() {
    await this.fetchUsers();
  },

  methods: {
    async fetchUsers() {
      await this.$store.dispatch('fetchUsersList');
    },

    async onDelete(userId) {
      if (userId) {
        await deleteHttp(apiURLById(userId));
        await this.fetchUsers();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.vs-button {
  margin-right: 0.875rem;
}

.list-users-component {
  &__card {
    margin: 1.75rem;
  }

  &__row {
    &--col {
      &__table {
        width: 100%;
        padding: 1rem;
      }
    }
  }
}
</style>
