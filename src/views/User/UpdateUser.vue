<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div class="update-user-component">
    <vs-card>
      <template #header>
        <h3>Update User</h3>
      </template>

      <vs-row>
        <vs-col>
          <UserForm v-model="userForm" />
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
            @click.native="changeRoute('list-users')"
          />
        </vs-row>
      </template>
    </vs-card>
  </div>
</template>

<script>
import ChangeRoute from '@/mixins/change-route';
import UserForm from '@/components/UserForm.vue';

export default {
  name: 'UpdateUser',

  mixins: [ChangeRoute],

  components: {
    UserForm,
  },

  data: () => ({
    userForm: {
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

  computed: {
    userId() {
      return this.$route?.params?.id;
    },

    userData() {
      return this.$store.getters.getUserData;
    },
  },

  watch: {
    userData: {
      handler(newData) {
        this.userForm = newData;
      },
      deep: true,
      immediate: true,
    },
  },

  methods: {
    async fetchUserById() {
      await this.$store.dispatch('fetchUserById', this.userId);
    },

    async updateUser() {
      this.$store.dispatch('updateUser', {
        id: this.userId,
        data: { ...this.userForm },
      });

      this.changeRoute('list-users');
    },
  },
};
</script>

<style lang="scss" scoped></style>
