/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */

module.exports =
  (key) =>
  (schema, { params }) =>
    schema.db[key].remove(params.id);
