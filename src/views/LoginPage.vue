<template>
  <div class="login-page"> </div>
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
