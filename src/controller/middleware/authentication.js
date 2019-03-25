exports.auth = (req, res, next) => {
  if (!req.token) {
    next();
  } else if (req.token && req.token.consultant) {
    return res.redirect('/consProfile');
  } else if (req.token && !req.token.consultant) {
    return res.redirect('userProfile');
  }
};
