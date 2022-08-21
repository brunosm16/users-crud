/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */

import parseBody from '../utils/parse-body';

export const remove =
  (key) =>
  (schema, { requestBody = {} }) => {
    const data = parseBody(requestBody);
    return schema.db[key].remove(data.id, data);
  };

export default {
  remove,
};
