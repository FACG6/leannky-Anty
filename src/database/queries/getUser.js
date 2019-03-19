const connection = require('../connection.js');
const getUser= (user_name)=> connection.query(`select * from users where user_name=$1`,[user_name]);
module.exports =getUser;query