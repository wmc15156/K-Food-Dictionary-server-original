const express = require('express');
const router = express.Router();
const { userController } = require('../controller');

router.post('/signup', userController.signup.post); // localhost:5000/user/signin

// router.post('/signup', userController.signup.post);
// router.post('/logout', userController.logout.post);
// router.get('/info', userController.info.get);

module.exports = router;