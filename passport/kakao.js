const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const { User } = require('../models');

module.exports = () => {
  console.log('여기');
  passport.use(new GoogleStrategy({
    clientID: '418088285416-1d6f6unkde719sgr1f389etia49skjlq.apps.googleusercontent.com',
    clientSecret: 'Kuh_63aHh_1WeMcvbvhWmXe2',
    callbackURL: '/auth/google/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    console.log('kakao profile', profile);
    try {
      const exUser = await User.findOne({
        where: { email: profile._json.email, provider: 'google' },
      });
      if (exUser) {
        done(null, exUser);
      } else {
        console.log(profile._json.email,'=============')
        const newUser = await User.create({
          email: profile._json && profile._json.email,
          snsId: profile.id,
          provider: 'google',
          username: profile._json.name,
        });
        done(null, newUser);
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};