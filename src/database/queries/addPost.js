const connection = require('../connection.js');

const addPost = (title, content, user_id)=> connection.query(`INSERT INTO posts (title, content, user_id) values ($1, $2, $3) returning *`,[title, content, user_id]);

module.exports = addPost;