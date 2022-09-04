const defaultUserState = () => ({
  data: {
    usersList: [],
    userData: {
      name: '',
      email: '',
      age: '',
      company: '',
      phone: '',
      address: '',
    },
  },
  loading: false,
  error: null,
});

export default { ...defaultUserState() };
