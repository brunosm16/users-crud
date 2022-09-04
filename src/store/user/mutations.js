import MutationTypes from './types';

const setLoading = (state, payload) => {
  state.isLoading = payload;
};

const setError = (state, payload) => {
  state.hasError = payload;
};

const resetLoadingAndError = (state) => {
  setLoading(state, false);
  setError(state, false);
};

const setUsersList = (state, payload) => {
  state.data.usersList = payload;
  resetLoadingAndError(state);
};

const setUserData = (state, payload) => {
  state.data.userData = payload;
  resetLoadingAndError(state);
};

const updateUser = (state, payload) => {
  const { usersList } = state.data;

  const userIndex = usersList.findIndex(({ id }) => payload.id === id);

  if (userIndex > -1) {
    usersList[userIndex] = payload;
  }

  resetLoadingAndError(state);
};

const removeUser = (state, payload) => {
  const { usersList } = state.data;

  state.data.usersList = usersList.filter(({ id }) => id !== payload.id);

  resetLoadingAndError(state);
};

export default {
  [MutationTypes.SET_ERROR]: setError,
  [MutationTypes.SET_LOADING]: setLoading,
  [MutationTypes.SET_USERS_LIST]: setUsersList,
  [MutationTypes.SET_USER_DATA]: setUserData,
  [MutationTypes.UPDATE_USER]: updateUser,
  [MutationTypes.REMOVE_USER]: removeUser,
};
