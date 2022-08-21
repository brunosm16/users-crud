/* eslint-disable implicit-arrow-linebreak */
import httpHelper from './http-helper';

export const getHttp = async (url, options, type = 'json') =>
  (await httpHelper(url, 'get', options))(type);

export const postHttp = async (url, body, options, type = 'json') =>
  (await httpHelper(url, 'post', { body, ...options }))(type);

export const putHttp = async (url, body, options, type = 'json') =>
  (await httpHelper(url, 'put', { body, ...options }))(type);

export const patchHttp = async (url, body, options, type = 'json') =>
  (await httpHelper(url, 'patch', { body, ...options }))(type);

export const updateHttp = async (url, body, options, type = 'json') =>
  (await httpHelper(url, 'update', { body, ...options }))(type);

export const deleteHttp = async (url, body, options, type = 'json') =>
  (await httpHelper(url, 'delete', { body, ...options }))(type);
