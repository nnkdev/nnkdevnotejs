const UserService = require("../services/UserService");

class UserController {
  constructor() {
    this.service = new UserService();
  }

  async get(req, res, next) {
    try {
      const users = await this.service.get();
      console.log(req.originalUrl);
      res.render('user/user-list', { users });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const user = await this.service.create(req.body);
      req.session.userId = user.id;
      res.cookie('user', JSON.stringify({ fullName: user.fullName }));
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  }
};

module.exports = UserController;