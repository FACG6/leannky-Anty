const { verify } = require('jsonwebtoken');

exports.getToken = (req, res, next) => {
  if (req.cookies.jwt) {
    verify(req.cookies.jwt, process.env.SECRET)
      .then((payload) => {
        req.token = payload;
        next();
      })
      .catch((err) => {
        next(err);
      });
  } else {
    next();
  }
};
