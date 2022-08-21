/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */

import parseBody from '../parse-body';

export const post =
  (key) =>
  (schema, { requestBody = {} }) => {
    const data = parseBody(requestBody);
    return schema.db[key].insert(data);
  };

export default { post };
