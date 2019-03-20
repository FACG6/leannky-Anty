exports.auth = (req, res, next) => {
  if (!req.token) {
    next();
  } else if (req.token && req.token.consultant) {
    return res.render('consProfile');
  } else if (req.token && !req.token.consultant) {
    return res.render('userProfile');
  }
};
