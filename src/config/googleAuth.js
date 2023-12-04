import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const GOOGLE_CLIENT_ID = '744280964635-94t9o8uuch69f9ipiq8v9vh9t98f1ufn.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3001/auth/google/callback',
  passReqToCallback: true
},
function (request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
