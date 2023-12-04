import passport from 'passport';

const authControllers = {};

authControllers.authenticateGoogle = passport.authenticate('google', {
  scope: ['email', 'profile'],
  prompt: 'consent'
});

authControllers.handleLoginSuccess = (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: 'User has successfully authenticated',
      user: req.user,
      cookies: req.cookies
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'User has not been authenticated'
    });
  }
};

authControllers.handleGoogleCallback = passport.authenticate('google', {
  successRedirect: 'http://localhost:3001/tasks/get-tasks',
  failureRedirect: 'http://localhost:3001/auth/failure'
});

authControllers.handleLogout = (req, res) => {
  req.session.destroy();
  req.logout(() => {
    res.redirect('http://localhost:3001/');
  });
};

authControllers.handleFailureRedirect = (req, res) => {
  res.status(401).json({ success: false });
};

export default authControllers;
