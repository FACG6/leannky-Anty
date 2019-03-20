const connection = require('../connection');
const getMyPosts = (user_id)=>connection.query(`select * from posts where user_id=id`,[user_id]);
module.exports=getMyPosts;