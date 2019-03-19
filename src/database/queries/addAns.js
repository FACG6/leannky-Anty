const connection = require('../connection.js');

const addAns = (answer, posts_id)=> connection.query(`INSERT INTO posts.answer where posts_id = id returning *`,[answer, posts_id]);

module.exports = addAns;