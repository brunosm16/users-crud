<template>
  <div class="create-user-component">
    <vs-card>
      <template #header>
        <h3>Create User</h3>
      </template>

      <template #footer>
        <vs-row vs-justify="flex-start">
          <vs-button
            type="filled"
            size="small"
            color="success"
            icon="save"
            @click="createUser"
            >Create New User</vs-button
          >
          <vs-button
            type="filled"
            size="small"
            color="danger"
            icon="cancel"
            @click="cancelCreate"
            >Cancel</vs-button
          >
        </vs-row>
      </template>
    </vs-card>
  </div>
</template>

<script>
import ChangeComponent from '@/mixins/change-component';

export default {
  name: 'CreateUser',

  mixins: [ChangeComponent],

  methods: {
    createUser() {
      console.log('Create User');

      this.changeComponent('list-users');
    },

    cancelCreate() {
      this.changeComponent('list-users');
    },
  },
};
</script>

<style lang="scss" scoped>
.vs-button {
  margin-right: 0.625rem;
}
</style>
