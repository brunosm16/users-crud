export default {
  methods: {
    changeRoute(name, id) {
      const params = {};

      if (id) {
        params.id = id;
      }

      this.$router.push({
        name,
        params,
      });
    },
  },
};
