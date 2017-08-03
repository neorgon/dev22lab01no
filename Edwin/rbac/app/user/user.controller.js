const UserModel =  require('./user.model');

const userModel = new UserModel();

class UserController {

  constructor() {};

  getUsers(req, res) {
    userModel.getUserList()
      .then(lists => res.status(200).send({data: lists}))
      .catch(err => res.status(600).send({error:err}));
  };

  getUserRole(req, res) {
    userModel.getUserRoleById(req.params.id)
      .then(lists => res.status(200).send({data: lists}))
      .catch(err => res.status(600).send({error:err}));
  };

}

module.exports = UserController;