const connection = require('../connection.js');

const getPosts = () => connection.query('select * from posts');

module.exports = getPosts;
