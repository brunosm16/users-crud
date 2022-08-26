export default {
  computed: {
    getWindowHref() {
      return window.location.href;
    },

    apiURL() {
      return `${this.getWindowHref}api/users`;
    },
  },

  methods: {
    getApiUrlById(id) {
      return `${this.apiURL}/${id}`;
    },
  },
};
