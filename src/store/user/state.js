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
  isLoading: false,
  hasError: null,
});

export default { ...defaultUserState() };
