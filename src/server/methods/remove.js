/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */

const parseBody = require('../utils/parse-body');

module.exports =
  (key) =>
  (schema, { requestBody = {} }) => {
    const data = parseBody(requestBody);
    return schema.db[key].remove(data.id, data);
  };
