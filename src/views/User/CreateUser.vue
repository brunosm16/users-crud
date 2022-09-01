<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div class="create-user-component">
    <vs-card class="create-user-component__card">
      <template #header>
        <h3>Create User</h3>
      </template>

      <vs-row>
        <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
          <UserForm v-model="formData" />
        </vs-col>
      </vs-row>

      <template #footer>
        <vs-row vs-justify="flex-start">
          <vs-button
            type="filled"
            size="small"
            color="success"
            icon="save"
            @click.native="createUser"
            >Create New User</vs-button
          >
          <vs-button
            type="filled"
            size="small"
            color="danger"
            icon="cancel"
            @click.native="cancelCreate"
            >Cancel</vs-button
          >
        </vs-row>
      </template>
    </vs-card>
  </div>
</template>

<script>
import { postHttp } from '@/http-utils/fetch-api';
import ChangeRoute from '@/mixins/change-route';
import ApiUrl from '@/mixins/api-url';
import UserForm from '../../components/UserForm.vue';

export default {
  name: 'CreateUser',

  mixins: [ChangeRoute, ApiUrl],

  components: {
    UserForm,
  },

  data: () => ({
    formData: {
      name: '',
      email: '',
      age: '',
      company: '',
      phone: '',
      address: '',
    },
  }),

  methods: {
    async createUser() {
      await postHttp(this.apiURL, { data: { ...this.formData } });
      this.changeRoute('list-users');
    },

    cancelCreate() {
      this.changeRoute('list-users');
    },
  },
};
</script>

<style lang="scss" scoped>
.vs-button {
  margin-right: 0.625rem;
}

.create-user-component {
  &__card {
    margin: 1.75rem;
  }
}
</style>
