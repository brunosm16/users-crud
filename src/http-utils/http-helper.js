import axios from 'axios';

const createAxios = (options = {}) => axios.create({ ...options });

const localAPI = createAxios();

export const jsonPlaceHolderAPI = createAxios({ baseURL: 'https://jsonplaceholder.typicode.com/' });

export const baseFetch = async (url, method, options = {}) => localAPI({
  method: method.toUpperCase(),
  url,
  ...options,
});
