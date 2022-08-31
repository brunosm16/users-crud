<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div class="view-user-component">
    <vs-card>
      <template #header>
        <h3>User Information</h3>
      </template>

      <vs-row>
        <vs-col>
          <UserForm v-model="user" disabled />
        </vs-col>
      </vs-row>

      <template #footer>
        <vs-row>
          <vs-button
            color="primary"
            icon="arrow_back"
            type="filled"
            size="small"
            @click.native="changeComponent('list-users')"
          />

          <vs-button
            color="success"
            icon="edit"
            type="filled"
            size="small"
            @click.native="changeComponent('update-user', user.id)"
          />
        </vs-row>
      </template>
    </vs-card>
  </div>
</template>

<script>
import { getHttp } from '@/http-utils/fetch-api';
import ChangeRoute from '@/mixins/change-route';
import ApiUrl from '@/mixins/api-url';
import UserForm from '../components/UserForm.vue';

export default {
  name: 'ViewUser',

  components: { UserForm },

  inject: ['userId'],

  mixins: [ChangeRoute, ApiUrl],

  async beforeMount() {
    await this.initializeUserById();
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

  methods: {
    async initializeUserById() {
      if (this.userId) {
        const { data } = await getHttp(`${this.getApiUrlById(this.userId)}`);
        this.user = data;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.vs-button {
  margin-right: 1.25rem;
}
</style>
