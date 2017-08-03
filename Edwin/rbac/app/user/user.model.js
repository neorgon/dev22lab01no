const User = require('./user.db');

class UserModel {

  constructor() {};

  getUserList() {
    return User.find();
  };

  getUserRoleById(id) {
    return User.find({userID: id}, {});
  };

}

module.exports = UserModel;