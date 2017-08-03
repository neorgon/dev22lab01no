const UserController = require('./user.controller');

const userController = new UserController();

module.exports = (router) => {
  router.get('/:id/roles', userController.getUserRole);
  router.get('/users', userController.getUsers);

  return router;
};