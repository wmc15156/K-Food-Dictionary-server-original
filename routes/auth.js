const express = require('express');
const router = express.Router();
const passport = require('passport');

// app.get('/auth/google/login', passport.authenticate('google', { session: false, scope: ['email', 'profile'], prompt: 'select_account'}));

 // ,prompt: 'select_account'
router.get('/google',
  passport.authenticate('google', { session: false, scope: ['https://www.googleapis.com/auth/plus.login','email'], prompt: 'select_account'} ));

router.get('/google/callback', (req, res, next) =>{
  passport.authenticate('google',(authError, user, info) => {
    console.log('user',user)
    res.writeHead(200,{
      'Content-Type': "text/plain; charset=utf-8"
    })
    return res.cookie('user','김현진');
    res.redirect(`http://localhost:3100`);
  })(req ,res, next)
})

router.get('/logout', (req, res) => {
  console.log(req.isAuthenticated());
  res.cookie('user',)
  res.redirect('http://localhost:3100')
})




module.exports = router;