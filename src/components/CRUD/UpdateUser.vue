<template>
  <div class="update-user-component">
    <span>Update User Component</span>
  </div>
</template>

<script>
export default {
  name: 'UpdateUser',

  inject: ['userId'],

  created() {
    console.log(`Update user with id : ${this.userId}`);
  },
};
</script>

<style lang="scss" scoped></style>
