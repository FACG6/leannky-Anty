const { verify } = require('jsonwebtoken');

exports.getToken = (req, res, next) => {
<<<<<<< HEAD
  if (req.cookies.jwt) {
    verify(req.cookies.jwt, process.env.SECRET)
      .then((payload) => {
        req.token = payload;
        next();
      })
      .catch((err) => {
        next(err);
      });
=======
  if (req.cookies && req.cookies.jwt) {
    verify(req.cookies.jwt, process.env.SECRETE, (error, payload) => {
      if (error) {
        res.clearCookie('jwt');
        res.status(401).send('Unauthorized');
      } else {
        req.token = payload;
        next();
      }
    });
>>>>>>> 7c49dd94d1f88ca5ff249e5e2ccebd1594115ac3
  } else {
    next();
  }
};
