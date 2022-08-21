/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */

import parseBody from './parse-body';

export const patchFrom =
  (key) =>
  (schema, { requestBody = {} }) => {
    const data = parseBody(requestBody);
    return schema.db[key].update(data.id, data);
  };

export default {
  patchFrom,
};
