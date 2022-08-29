export const getFrom = (key) => ({ db }) => db[key];
export const getFromById = (key) => ({ db }, { params }) => db[key].find(Number(params.id));
