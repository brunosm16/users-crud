<template>
  <div class="list-users-component">
    <vs-card class="list-users-component__card">
      <template #header>
        <h3 class="list-users-component__card--header">Users List</h3>
      </template>

      <vs-row>
        <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
          <vs-table :data="users" search strip pagination max-items="5">
            <template #thead>
              <vs-th sort-key="userId"> # </vs-th>

              <vs-th> Name </vs-th>

              <vs-th> Email </vs-th>

              <vs-th> Country </vs-th>

              <vs-th> Phone </vs-th>

              <vs-th> Date of Birth </vs-th>

              <vs-th> Actions </vs-th>
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

                <vs-td :data="dataTable?.data[index]?.id">
                  <vs-button
                    color="primary"
                    type="filled"
                    icon="remove_red_eye"
                    size="small"
                  />
                  <vs-button
                    color="success"
                    type="filled"
                    icon="edit"
                    size="small"
                  />

                  <vs-button
                    color="danger"
                    type="filled"
                    icon="delete"
                    size="small"
                  />
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vs-col>
      </vs-row>

      <template #footer>
        <vs-row vs-justify="flex-start">
          <vs-button
            color="primary"
            type="filled"
            icon="fiber_new"
            size="small"
          >
            Create A New User
          </vs-button>
        </vs-row>
      </template>
    </vs-card>
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
