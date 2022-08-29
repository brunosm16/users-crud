const { getFrom, getFromById } = require('./get');
const postFrom = require('./post');
const patchFrom = require('./patch');
const removeFrom = require('./remove');

module.exports = {
  getFrom,
  getFromById,
  postFrom,
  patchFrom,
  removeFrom,
};
