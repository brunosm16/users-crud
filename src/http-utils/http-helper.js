import axios from 'axios';

import { requestInterceptor, responseInterceptor, errorInterceptor } from './interceptors';

const createAxios = (options = {}) => axios.create({ ...options });

const localAPI = createAxios();

export const jsonPlaceHolderAPI = createAxios({ baseURL: 'https://jsonplaceholder.typicode.com/' });

localAPI.interceptors.request.use(requestInterceptor, errorInterceptor);
localAPI.interceptors.response.use(responseInterceptor, errorInterceptor);

jsonPlaceHolderAPI.interceptors.request.use(requestInterceptor, errorInterceptor);
jsonPlaceHolderAPI.interceptors.response.use(responseInterceptor, errorInterceptor);

export const baseFetch = async (url, method, options = {}) => localAPI({
  method: method.toUpperCase(),
  url,
  ...options,
});
