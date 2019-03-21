const connection = require('../connection.js');

const addAns = (answer, consultantId, postId) => connection.query(`UPDATE posts
SET answer = $1, consultant_id = $2 where id = $3`, [answer, consultantId, postId]);

module.exports = addAns;
