const connection = require('../connection.js');

const addAns = (answer, consultant_id)=> connection.query(`INSERT INTO posts.answer where consultant_id = id returning *`,[answer, consultant_id]);

module.exports = addAns;
