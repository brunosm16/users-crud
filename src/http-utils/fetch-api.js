/* eslint-disable implicit-arrow-linebreak */
import httpHelper from './http-helper';

export const getHttp = async (url, params, options) =>
  httpHelper(url, 'get', { ...options, params });

export const postHttp = async (url, data, options) => httpHelper(url, 'post', { data, ...options });

export const putHttp = async (url, data, options) => httpHelper(url, 'put', { data, ...options });

export const patchHttp = async (url, data, options) =>
  httpHelper(url, 'patch', { data, ...options });

export const updateHttp = async (url, data, options) =>
  httpHelper(url, 'update', { data, ...options });

export const deleteHttp = async (url, data, options) =>
  httpHelper(url, 'delete', { data, ...options });
