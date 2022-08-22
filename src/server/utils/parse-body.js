module.exports = (body) => {
  const data = typeof body === 'string' ? JSON.parse(body) : body;
  return data;
};
