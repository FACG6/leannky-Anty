const connection = require('../connection');
const getMyPosts = (user_id , title, content, answer)=>connection.query(`select * from posts`,[user_id, title, content, answer]);
module.exports=getMyPosts;