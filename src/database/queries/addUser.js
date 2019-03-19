const connction = require('../connection.js');
const addUser = (user_name,password)=> connction.query(`INSERT INTO users(user_name,password)values($1,$2)`,[user_name,password]);
module.exports= addUser;