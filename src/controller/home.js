const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const error = require('./error.js');
const getUser = require('../database/queries/getUser');

exports.get = (req, res) => {
    res.render('home',{
        js:'domSignup',
        css:'loginSignup', 
        msg:''
    })
};
exports.post = (req,res)=>{
    getUser(req.body.user_name)
    .then(result=>{
        if(result.row[0]){
            bcrypt.compare(req.body.password,res.rows[0].password).then(isTrue=>{
                if(isTrue){
                const userInfo = {
                    userId : result.rows[0].id,
                    consultant:false,
                    loggedIn:true
                };
                const token = jwt.sign(userInfo,process.env.SECRET);
                res.cookie('jwt',token,{maxAge:10*50*40});
                res.redirect('/userProfile')
            } 
            })
           
        }
    }).catch(err=> error.server(err,req,res,null));
}
