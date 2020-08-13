const express = require('express');
const router = express.Router();
const { userController } = require('../controller');

router.post('/signin', userController.signin.post);
// router.post('/signup', userController.signup.post);
// router.post('/logout', userController.logout.post);
// router.get('/info', userController.info.get);

module.exports = router;

// K-Food-Dictionary-server/routes/users.js