<template>
  <div class="user-form"> </div>
</template>

<script>
export default {
  name: 'UserForm',

  props: {
    value: {
      type: Object,
      default: () => {},
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  created() {
    console.log(this.value);
  },
};
</script>

<style scoped lang="scss"></style>
