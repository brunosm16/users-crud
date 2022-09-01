<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div class="login-page">
    <vs-row vs-align="center" vs-justify="center">
      <vs-col vs-lg="4" vs-sm="6" vs-xs="10">
        <vs-card style="margin: 30px">
          <template #header>
            <h3>Login</h3>
          </template>

          <vs-row vs-align="center" vs-justify="center">
            <vs-col w="12">
              <vs-input
                danger-text="Check your username or e-mail"
                label="Username"
                placeholder="Enter Username or Email"
                v-model="userName"
                :danger="error"
              />

              <vs-input
                danger-text="Check your password"
                label="Password"
                placeholder="Enter your password"
                v-model="userPassword"
                :danger="error"
              />
            </vs-col>
          </vs-row>

          <template #footer>
            <vs-row vs-justify="flex-start">
              <vs-button
                color="success"
                type="filled"
                icon="account_circle"
                size="small"
                @click.native="signIn"
              >
                Sign In
              </vs-button>
            </vs-row>
          </template>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',

  data: () => ({
    userName: '',
    userPassword: '',
    error: false,
  }),

  methods: {
    signIn() {
      const validLoginData = !!this.userName && !!this.userPassword;

      if (validLoginData) {
        this.setAuthSessionStorage(this.userName);
        this.setError(false);
        this.redirectToHome();
      }

      this.setError(true);
    },

    encryptName(name) {
      return window.btoa(JSON.stringify({ username: JSON.stringify(name) }));
    },

    setAuthSessionStorage(name) {
      window.sessionStorage.setItem('auth', this.encryptName(name));
    },

    redirectToHome() {
      this.$router.replace('/user');
    },

    setError(value) {
      this.error = value;
    },
  },
};
</script>

<style scoped lang="scss">
.login-page {
  display: flex;
  align-items: center;
  height: 100vh;

  .vs-input {
    margin: 30px 16px;
  }
}
</style>
