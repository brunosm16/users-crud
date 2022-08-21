export const get = (key) => ({ db }) => db[key];

export default {
  get,
};
