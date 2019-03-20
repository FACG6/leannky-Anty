exports.auth = (req, res, next) => {
<<<<<<< HEAD
    if (!req.token) {
      next();
    } else if (req.token && req.token.consultant) {
      return res.render('consProfile');
    } else if (req.token && !req.token.consultant) {
      return res.render('userProfile');
    }
  };
=======
  if (!req.token) {
    next();
  } else if (req.token && req.token.consultant) {
    return res.render('consProfile');
  } else if (req.token && !req.token.consultant) {
    return res.render('userProfile');
  }
};
>>>>>>> 7c49dd94d1f88ca5ff249e5e2ccebd1594115ac3
