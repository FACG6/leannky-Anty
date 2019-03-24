const getNotAns = require('../../database/queries/getNotAns');

exports.renderNotAns = (req, res, next) => {
  if (req.token) {
    getNotAns()
      .then((result) => {
        req.result = result.rows;
        next();
      })
      .catch(e => next(e));
  } else {
    res.redirect('/');
  }
};
