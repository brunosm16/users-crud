export default (to, from, next) => {
  const { authenticated } = to.meta;
  const hasAuth = sessionStorage.getItem('auth');

  if (authenticated && hasAuth) {
    return next();
  }

  if (!authenticated) {
    return next();
  }

  return next('/login');
};
