import {
  getHttp,
  postHttp,
  patchHttp,
  deleteHttp,
} from '@/http-utils/fetch-api';

import MutationTypes from './types';

const API_ENDPOINT = '/api/users';

const setLoadingTrue = (commit) => commit(MutationTypes.SET_LOADING, true);

const setErrorTrue = (commit) => commit(MutationTypes.SET_ERROR, true);

const fetchUsersList = async ({ commit }) => {
  try {
    setLoadingTrue(commit);

    const { data } = await getHttp(API_ENDPOINT);

    commit(MutationTypes.SET_USERS_LIST, data);
  } catch {
    setErrorTrue(commit);
  }
};

const fetchUserById = async ({ commit }, userId) => {
  try {
    setLoadingTrue(commit);

    const { data } = await getHttp(`${API_ENDPOINT}/${userId}`);

    commit(MutationTypes.SET_USER_DATA, data);
  } catch {
    setErrorTrue(commit);
  }
};

const createUser = async ({ commit }, payload) => {
  try {
    setLoadingTrue(commit);

    const { userData } = await postHttp(API_ENDPOINT, {
      data: { ...payload },
    });

    commit(MutationTypes.SET_USER_DATA, userData);
  } catch {
    setErrorTrue(commit);
  }
};

const updateUser = async ({ commit }, payload) => {
  try {
    setLoadingTrue(commit);

    const { userData } = await patchHttp(`${API_ENDPOINT}/${payload.id}`, {
      data: { ...payload },
    });

    commit(MutationTypes.UPDATE_USER, userData);
  } catch {
    setErrorTrue(commit);
  }
};

const removeUser = async ({ commit }, userId) => {
  try {
    setLoadingTrue(commit);

    await deleteHttp(`${API_ENDPOINT}/${userId}`);

    commit(MutationTypes.REMOVE_USER, userId);
  } catch {
    setErrorTrue(commit);
  }
};

export default {
  fetchUsersList,
  fetchUserById,
  createUser,
  updateUser,
  removeUser,
};
