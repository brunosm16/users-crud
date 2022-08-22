/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */

const parseBody = require('../utils/parse-body');

module.exports =
  (key) =>
  (schema, { requestBody = {} }) => {
    const { userData } = parseBody(requestBody);
    return schema.db[key].update(userData[0].id, userData[0]);
  };
