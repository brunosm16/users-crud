<template>
  <div class="view-user-component">
    <span>View User Component</span>
  </div>
</template>

<script>
export default {
  name: 'ViewUser',

  inject: ['userId'],

  created() {
    console.log(`View user with id : ${this.userId}`);
  },
};
</script>

<style lang="scss" scoped></style>
