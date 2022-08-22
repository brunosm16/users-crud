<template>
  <div id="app">
    <span>API Response</span>

    <pre>{{ response }}</pre>

    <hr />

    <h1>Create or Update User</h1>

    <label for="userData">
      Users:
      <textarea id="userData" v-model="userData" rows="10" cols="40" style="display: block" />
    </label>

    <button style="margin: 20px" @click="createUser(JSON.parse(userData))">Create User</button>
    <button style="margin: 20px" @click="updateUser(JSON.parse(userData))">Update User</button>
  </div>
</template>

<script>
import { getHttp, postHttp, patchHttp } from './http-utils/fetch-api';

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

    apiURL() {
      return `${this.getWindowHref}api/users`;
    },
  },

  async created() {
    await this.getUsers();
  },

  methods: {
    async getUsers() {
      this.response = await getHttp(this.apiURL);
    },

    async createUser(userData) {
      await postHttp(this.apiURL, userData);
      await this.getUsers();
    },

    async updateUser(userData) {
      await patchHttp(`${this.apiURL}/${userData.id}`, { userData });
      await this.getUsers();
    },
  },
};
</script>
