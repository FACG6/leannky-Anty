const getMyPosts = require('../../database/queries/getMyPosts');

exports.renderMyPosts = (req, res, next) => {
    getMyPosts()
    .then(result => {
        req.result = result.rows,
        next();
    })
    .catch(e => next(e));
}