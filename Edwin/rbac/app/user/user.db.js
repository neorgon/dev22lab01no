const db = require('mongoose');

const Schema =  db.Schema;

const UserSchema =  new Schema ({
  userID: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    require: true,
    trim: true
  },
  roles: [
    {
      method: {
        type: String,
        require: true,
        trim: true
      },
      url: {
        type: String,
        require: true,
        trim: true
      }
    }
  ]
});

module.exports = db.model('Users', UserSchema);