var express = require('express');
const UserController = require('../controllers/UserController');
var router = express.Router();
const userController = new UserController();

/* GET users listing. */
router.get('/', (req, res, next) => {
  userController.get(req, res, next);
});

router.get('/app', async (req, res, next) => {
  res.render('user/sign-up', { });
});

router.post('/app', (req, res, next) => {
  userController.create(req, res, next);
});

module.exports = router;
