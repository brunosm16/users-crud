export default {
  methods: {
    changeRoute(name, id) {
      this.$router.push({
        name,
        ...(id && { params: { id } }),
      });
    },
  },
};
