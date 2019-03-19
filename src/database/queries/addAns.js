const connection = require('../connection.js');

const addAns = (answer, consultent_id)=> connection.query(`INSERT INTO posts (answer, posts_id, consultent_id) values ($1, $2, $3) where posts_id = id returning *`,[answer, posts_id, consultent_id]);

module.exports = addAns;