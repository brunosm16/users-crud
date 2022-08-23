import Swal from 'sweetalert2';

const postMethods = ['patch', 'post'];

export const requestInterceptor = async (config) => {
  const configData = config.data.data;
  const hasId = Object.prototype.hasOwnProperty.call(configData, 'id') && !!configData.id;
  const hasPostMethod = postMethods.includes(config.method.toLocaleLowerCase());

  if (!hasPostMethod) {
    throw new Error('Invalid POST Method');
  }

  if (!hasId) {
    throw new Error('ID is required for this request');
  }

  return config;
};

export const responseInterceptor = (response) => response;

export const errorInterceptor = (error) => {
  Swal.fire({
    type: 'error',
    title: 'Error!',
    text: error.message,
  });

  return Promise.reject(error);
};
