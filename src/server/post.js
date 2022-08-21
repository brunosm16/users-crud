/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */

import parseBody from './parse-body';

export const postFrom =
  (key) =>
  (schema, { requestBody = {} }) => {
    const data = parseBody(requestBody);
    return schema.db[key].insert(data);
  };

export default { postFrom };
