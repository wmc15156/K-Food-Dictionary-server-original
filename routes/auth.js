const express = require('express');
const router = express.Router();
const passport = require('passport');

// app.get('/auth/google/login', passport.authenticate('google', { session: false, scope: ['email', 'profile'], prompt: 'select_account'}));

// ,prompt: 'select_account'
router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'], prompt: 'select_account' }));



router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', (authError, user, info) => {
    
    req.session.userid = user.dataValues.email
    console.log('============',user,'========================');
    res.cookie('user', user.dataValues.username);
    res.redirect(`http://localhost:3000?data=${user.dataValues.email}`);
    req.login(user,(err) => {
      if(err) {
        res.status(404).send('구글로그인 에러');
      }
    })
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