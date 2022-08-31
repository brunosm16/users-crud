<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div class="update-user-component">
    <vs-card>
      <template #header>
        <h3>Update User</h3>
      </template>

      <vs-row>
        <vs-col>
          <UserForm v-model="user" />
        </vs-col>
      </vs-row>

      <template #footer>
        <vs-row>
          <vs-button
            color="success"
            type="filled"
            icon="save"
            size="small"
            @click.native="updateUser"
          />
          <vs-button
            color="danger"
            type="filled"
            icon="cancel"
            size="small"
            @click.native="changeComponent('list-users')"
          />
        </vs-row>
      </template>
    </vs-card>
  </div>
</template>

<script>
import { getHttp, patchHttp } from '@/http-utils/fetch-api';
import ChangeComponent from '@/mixins/change-component';
import ApiUrl from '@/mixins/api-url';
import UserForm from '@/components/UserForm.vue';

export default {
  name: 'UpdateUser',

  inject: ['userId'],

  mixins: [ChangeComponent, ApiUrl],

  components: {
    UserForm,
  },

  data: () => ({
    user: {
      name: '',
      email: '',
      age: '',
      company: '',
      phone: '',
      address: '',
    },
  }),

  async beforeMount() {
    await this.fetchUserById();
  },

  methods: {
    async fetchUserById() {
      const { data } = await getHttp(`${this.apiURL}/${this.userId}`);
      this.user = data;
    },

    async updateUser() {
      await patchHttp(`${this.apiURL}/${this.userId}`, {
        data: { ...this.user },
      });

      this.changeComponent('list-users');
    },
  },
};
</script>

<style lang="scss" scoped></style>
