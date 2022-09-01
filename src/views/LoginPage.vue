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
                v-model="username"
              />
            </vs-col>
          </vs-row>
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
      return window.atob(JSON.stringify(name));
    },

    setAuthSessionStorage(name) {
      window.sessionStorage.setItem('auth', {
        username: this.encryptName(name),
      });
    },

    redirectToHome() {
      this.$$router.replace('/user');
    },

    setError(value) {
      this.error = value;
    },
  },
};
</script>

<style scoped lang="scss"></style>
