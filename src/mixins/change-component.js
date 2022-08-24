export default {
  methods: {
    changeComponent(componentType = '', userId = '') {
      this.$emit('change-component', { componentType, userId });
    },
  },
};
