<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div class="view-user-component">
    <vs-card>
      <template #header>
        <h3>User Information</h3>
      </template>

      <vs-row>
        <vs-col>
          <UserForm :value="user" disabled />
        </vs-col>
      </vs-row>

      <template #footer>
        <vs-row>
          <vs-button
            color="primary"
            icon="arrow_back"
            type="filled"
            size="small"
            @click.native="changeRoute('list-users')"
          />

          <vs-button
            color="success"
            icon="edit"
            type="filled"
            size="small"
            @click.native="changeRoute('update-user', user.id)"
          />
        </vs-row>
      </template>
    </vs-card>
  </div>
</template>

<script>
import ChangeRoute from '@/mixins/change-route';
import UserForm from '../../components/UserForm.vue';

export default {
  name: 'ViewUser',

  components: { UserForm },

  mixins: [ChangeRoute],

  async beforeMount() {
    await this.initializeUserById();
  },

  computed: {
    userId() {
      return this.$route?.params?.id;
    },

    user() {
      return this.$store.getters.getUserData;
    },
  },

  methods: {
    async initializeUserById() {
      if (this.userId) {
        await this.$store.dispatch('fetchUserById', this.userId);
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
