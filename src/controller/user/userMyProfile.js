const getMyPosts = require('../../database/queries/getMyPosts.js');
const {verify} =require('jsonwebtoken');
const error = require('../error.js')
exports.get=(req,res,next)=>{
    verify(request.cookie.jwt,process.env.SECRET,(err,token)=>{
        if(err)res.redirect('/');
        else
        getMyPosts().then(result=>{
            if(result){
                res.render('userPrevMy',{
                    MyPost: result.rows,
                    js: 'home',
                    css: 'user'
                })
            }
        }).catch(err=>error.server(err,req,res,null))
    })
}