const userRoutes = require('./user/user.route');

module.exports = (app, router) => {
  app.use('/rbac', userRoutes(router));
}