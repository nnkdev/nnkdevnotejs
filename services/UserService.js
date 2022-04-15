const { User } = require("../initial/sequelize");
const BaseService = require("./BaseService");

class UserService extends BaseService {
  constructor() {
    super(User);
  }
}

module.exports = UserService