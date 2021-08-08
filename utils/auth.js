const withAuth = (req, res, next) => {
    // TODO: Add a comment describing the functionality of this if statement
    if (!req.session.loggedIn) {
      res.redirect('/');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;