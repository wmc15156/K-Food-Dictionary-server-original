const express = require('express');
const router = express.Router();
const passport = require('passport');
const utf8 = require('utf8');

// app.get('/auth/google/login', passport.authenticate('google', { session: false, scope: ['email', 'profile'], prompt: 'select_account'}));

// ,prompt: 'select_account'
router.get('/google',
  passport.authenticate('google', { session: false, scope: ['https://www.googleapis.com/auth/plus.login', 'email'], prompt: 'select_account' }));

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', (authError, user, info) => {
    console.log(user)
    res.cookie('user', user.dataValues.username);
    res.redirect(`http://localhost:3100`);
    req.login(user)
    // return req.login(user, async (loginErr) => {
    //   if (loginErr) {
    //     console.error(loginErr);
    //   }
    //   return res.end();
    // })
  })(req, res, next)
})

router.get('/logout', (req, res) => {
  res.clearCookie('user');
  res.end();
})

// return req.login(user, async (loginErr) => {
//   if (loginErr) {
//     console.error(loginErr);
//     return next(loginErr);
//   }


module.exports = router;