/* eslint-disable no-tabs */
/* eslint-disable indent */
import Swal from 'sweetalert2';

const methodsBodyIdRequired = ['patch'];
const methodsBodyIdForbidden = ['post', 'remove'];

const hasIdField = (data) => Object.prototype.hasOwnProperty.call(data, 'id');

const validateNoDataProvided = (data) => {
  if (!data) {
    throw new Error('No UserData was provided');
  }
};

const validateRequiredId = ({ data }) => {
  const userData = data?.data;

  validateNoDataProvided(userData);

  if (!hasIdField(userData) || !userData.id) {
    throw new Error('ID is required for this request');
  }
};

const validateForbiddenId = ({ data }) => {
  const userData = data?.data;

  validateNoDataProvided(userData);

  if (hasIdField(userData)) {
    throw new Error('ID is forbidden for this request');
  }
};

export const requestInterceptor = async (config) => {
  const hasRequiredBodyIdMethod = methodsBodyIdRequired.includes(
    config.method.toLocaleLowerCase(),
  );
  const hasForbiddenBodyIdMethod = methodsBodyIdForbidden.includes(
    config.method.toLocaleLowerCase(),
  );

  if (hasRequiredBodyIdMethod) {
    validateRequiredId(config);
  }

  if (hasForbiddenBodyIdMethod) {
    validateForbiddenId(config);
  }

  return config;
};

export const responseInterceptor = (response) => response;

export const errorInterceptor = (error) => {
  Swal.fire('Error!', `${error.message}`, 'error');

  return Promise.reject(error);
};
