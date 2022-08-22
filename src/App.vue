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

    <h1>Delete User</h1>

    <label for="userData">
      Delete User By Id:
      <input type="number" step="1" v-model="userId" />
    </label>

    <button style="margin: 20px" @click="deleteUser">Delete User</button>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { getHttp, postHttp, patchHttp, deleteHttp } from './http-utils/fetch-api';

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
    getBaseURLById(id) {
      return `${this.apiURL}/${id}`;
    },

    async getUsers() {
      const { data } = await getHttp(this.apiURL);
      this.response = data;
    },

    async createUser(userData) {
      await postHttp(this.apiURL, { userData });
      await this.getUsers();
    },

    async updateUser(userData) {
      await patchHttp(this.getBaseURLById(userData[0]?.id), { userData });
      await this.getUsers();
    },

    async deleteUser() {
      await deleteHttp(this.getBaseURLById(this.userId));
      await this.getUsers();
    },
  },
};
</script>
