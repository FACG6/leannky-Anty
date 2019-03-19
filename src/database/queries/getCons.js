const connection = require('../connection');
const getCons = (user_name)=>connection.query(`select * from consultant where user_name = $1`,[user_name]);
module.exports=getCons;