/* eslint-disable implicit-arrow-linebreak */
import { baseFetch, jsonPlaceHolderAPI } from './http-helper';

export const getTodos = async (userId) => jsonPlaceHolderAPI.get('todos', { params: { userId } });

export const getHttp = async (url, params, options) =>
  baseFetch(url, 'get', { ...options, params });

export const postHttp = async (url, data, options) => baseFetch(url, 'post', { data, ...options });

export const putHttp = async (url, data, options) => baseFetch(url, 'put', { data, ...options });

export const patchHttp = async (url, data, options) =>
  baseFetch(url, 'patch', { data, ...options });

export const updateHttp = async (url, data, options) =>
  baseFetch(url, 'update', { data, ...options });

export const deleteHttp = async (url, data, options) =>
  baseFetch(url, 'delete', { data, ...options });
