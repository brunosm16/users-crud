/* eslint-disable implicit-arrow-linebreak */
const isLoading = (state) => state.isLoading;

const hasError = (state) => state.hasError;

const getUsersList = (state) => state.data.usersList;

const getUserData = (state) => state.data.userData;

const getUserById = (state) => (userId) =>
  state.data.usersList.filter(({ id }) => userId === id);

export default {
  isLoading,
  hasError,
  getUsersList,
  getUserData,
  getUserById,
};
