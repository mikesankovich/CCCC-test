var passport = require("passport");
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


module.exports = function(app) {
  passport.use(new GoogleStrategy({
    clientID: '337996401264-2hi1id5vbf86j8b01dfs4dukc80a15u4.apps.googleusercontent.com',
    clientSecret: 'mO4DJXYXPjm_ZnNViGf-gClo',
    callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    function(req, accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  ));
};
