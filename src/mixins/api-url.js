export default {
  computed: {
    apiURL() {
      return 'api/users';
    },
  },

  methods: {
    getApiUrlById(id) {
      return `${this.apiURL}/${id}`;
    },
  },
};
