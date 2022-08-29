<template>
  <div class="update-user-component">
    <span>Update User Component</span>
  </div>
</template>

<script>
import { getHttp } from '@/http-utils/fetch-api';
import ChangeComponent from '@/mixins/change-component';
import ApiUrl from '@/mixins/api-url';

export default {
  name: 'UpdateUser',

  inject: ['userId'],

  mixins: [ChangeComponent, ApiUrl],

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
    await this.fetchUserById(this.userId);
  },

  methods: {
    async fetchUserById(id) {
      const { data } = await getHttp(`${this.apiURL}/${id}`);
      this.user = data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
