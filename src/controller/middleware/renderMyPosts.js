const getMyPosts = require('../../database/queries/getMyPosts');

exports.renderMyPosts = (req, res, next) => {
  getMyPosts(req.token.userId)
    .then((result) => {
      req.result = result.rows;
      next();
    })
    .catch(e => next(e));
};
