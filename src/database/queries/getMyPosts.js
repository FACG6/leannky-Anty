const connection = require('../connection');
const getMyPosts = (user_id , title, content, answer)=>connection.query(`select * from posts where user_id=id`,[user_id, title, content, answer]);
module.exports=getMyPosts;