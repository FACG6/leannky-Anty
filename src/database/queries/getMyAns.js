const connection = require('../connection');
const getMyAns = (consultant_id , answer)=>connection.query(`select * from posts`,[consultant_id, answer]);
module.exports=getMyAns;