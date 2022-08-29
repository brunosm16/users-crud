<template>
  <div class="view-user-component">
    <span>View User Component</span>
  </div>
</template>

<script>
import { getHttp } from '@/http-utils/fetch-api';
import ChangeComponent from '@/mixins/change-component';
import ApiUrl from '@/mixins/api-url';

export default {
  name: 'ViewUser',

  inject: ['userId'],

  mixins: [ChangeComponent, ApiUrl],

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
        const { data } = await getHttp(`${this.apiURL}/${this.userId}`);
        this.user = data;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
