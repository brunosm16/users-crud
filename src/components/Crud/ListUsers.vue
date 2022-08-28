<template>
  <div class="list-users-component">
    <vs-card class="list-users-component__card">
      <template #header>
        <h3>Users List</h3>
      </template>
    </vs-card>

    <vs-row class="list-users-component__row">
      <vs-col
        class="list-users-component__row--col"
        vs-type="flex"
        vs-justify="left"
        vs-align="left"
        vs-w="12"
      >
        <vs-table
          class="list-users-component__row--col__table"
          :data="users"
          search
          strip
          pagination
          max-items="5"
        >
          <template #thead>
            <vs-th
              class="list-users-component__row--col__table--head"
              sort-key="userId"
            >
              #
            </vs-th>

            <vs-th class="list-users-component__row--col__table--head">
              Name
            </vs-th>

            <vs-th class="list-users-component__row--col__table--head">
              Email
            </vs-th>

            <vs-th class="list-users-component__row--col__table--head">
              Country
            </vs-th>

            <vs-th class="list-users-component__row--col__table--head">
              Phone
            </vs-th>

            <vs-th class="list-users-component__row--col__table--head">
              Date of Birth
            </vs-th>

            <vs-th class="list-users-component__row--col__table--head">
              Actions
            </vs-th>
          </template>

          <template v-slot:default="dataTable">
            <vs-tr v-for="(tr, index) in dataTable.data" :key="index">
              <vs-td :data="dataTable?.data[index]?.id">
                {{ dataTable?.data[index]?.id }}
              </vs-td>

              <vs-td :data="dataTable?.data[index]?.name">
                {{ dataTable?.data[index]?.name }}
              </vs-td>

              <vs-td :data="dataTable?.data[index]?.email">
                {{ dataTable?.data[index]?.email }}
              </vs-td>

              <vs-td :data="dataTable?.data[index]?.country">
                {{ dataTable?.data[index]?.country }}
              </vs-td>

              <vs-td :data="dataTable?.data[index]?.phone">
                {{ dataTable?.data[index]?.phone }}
              </vs-td>

              <vs-td :data="dataTable?.data[index]?.dateOfBirth">
                {{ dataTable?.data[index]?.dateOfBirth }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { getHttp, deleteHttp } from '@/http-utils/fetch-api';
import ChangeComponent from '@/mixins/change-component';
import ApiUrl from '@/mixins/api-url';

export default {
  name: 'ListUsers',

  mixins: [ChangeComponent, ApiUrl],

  data: () => ({
    users: [],
    userId: null,
  }),

  async beforeMount() {
    await this.fetchUsers();
  },

  methods: {
    async fetchUsers() {
      const { data } = await getHttp(this.apiURL);

      this.users = data;

      console.log(this.users);
    },

    async deleteUserById() {
      if (this.userId) {
        await deleteHttp(this.getApiUrlById(this.userId));
        await this.fetchUsers();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
