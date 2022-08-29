<template>
  <div class="user-form">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="6">
        <vs-input
          class="user-form__input"
          v-model="form.name"
          label="User Name"
          placeholder="Enter User Name"
          :disabled="disabled"
        />
      </vs-col>

      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="6">
        <vs-input
          class="user-form__input"
          v-model="form.email"
          label="User Email"
          placeholder="Enter User Email"
          :disabled="disabled"
        />
      </vs-col>

      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="6">
        <vs-input
          class="user-form__input"
          v-model="form.age"
          label="User Age"
          placeholder="Enter User Age"
          :disabled="disabled"
        />
      </vs-col>

      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="6">
        <vs-input
          class="user-form__input"
          v-model="form.company"
          label="User Company"
          placeholder="Enter User Company"
          :disabled="disabled"
        />
      </vs-col>

      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="6">
        <vs-input
          class="user-form__input"
          v-model="form.phone"
          label="User Phone"
          placeholder="Enter User Phone"
          :disabled="disabled"
        />
      </vs-col>

      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="6">
        <vs-input
          class="user-form__input"
          v-model="form.address"
          label="User Address"
          placeholder="Enter Address"
          :disabled="disabled"
        />
      </vs-col>
    </vs-row>
  </div>
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

  data: () => ({
    form: {
      name: '',
      email: '',
      age: '',
      company: '',
      phone: '',
      address: '',
    },
  }),

  watch: {
    value: {
      handler(currentForm) {
        this.form = currentForm;
      },
      deep: true,
      immediate: true,
    },

    form: {
      handler(newFormData) {
        this.$emit('input', newFormData);
      },
      deep: true,
    },
  },
};
</script>

<style scoped lang="scss">
.user-form {
  padding-bottom: 2rem;

  &__input {
    margin: 16px 4px;
  }
}
</style>
