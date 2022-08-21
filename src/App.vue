<template>
  <div id="app">
    <span>API Response</span>

    <pre>{{ response }}</pre>
  </div>
</template>

<script>
import { getHttp } from './http-utils/fetch-api';

export default {
  name: 'App',

  data: () => ({
    userData: '',
    userId: undefined,
    response: undefined,
  }),

  computed: {
    getWindowHref() {
      return window.location.href;
    },
  },

  async created() {
    await this.getUsers();
  },

  methods: {
    async getUsers() {
      console.log(this.getWindowHref);
      this.response = await getHttp(`${this.getWindowHref}api/users`);
    },
  },
};
</script>
