const getAllPosts = require('../../database/queries/getPosts.js');
const error = require('../error.js');
const jwt = require('jsonwebtoken');
exports.get = (req,res) =>{
   jwt.verify(req.cookie.jwt,process.env.SECRET,(err , token)=>{
       if(err) res.redirect('/');
       else{
           getAllPosts().then((result)=>{
               if(result){
                   res.rendr('userQ',{
                    allPostsusers:result.rows,
                    css: 'user'
                   })
               }
           }).catch(err=>error.server(err,req,res,null));
       }
   })
}