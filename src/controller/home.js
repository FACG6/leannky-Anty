<<<<<<< HEAD
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const error = require('./error.js');
const getUser = require('../database/queries/getUser');

=======
const { hash } = require('bcrypt');
const {  server } = require('./error');
const addUser = require('../database/queries/addUser');
>>>>>>> 7c49dd94d1f88ca5ff249e5e2ccebd1594115ac3
exports.get = (req, res) => {
  res.render('home', {
    js: 'domSignup',
    css: 'loginSignup',
  });
};
exports.signupPost = (req, res) => {
  const { userName, password } = req.body;
  addUser(userName, password)
    .then((result) => {
      if (result.rows[0]) {
        return res.status(200).send(JSON.stringify({
          msg: 'تم انشاء الحساب بنجاح، يمكنكي الآن تسجيل الدخول' }));
      }
      return res.status(400).send(JSON.stringify({ msg: 'لم يتم إنشاء الحساب مع الأسف' }));
    })
    .catch(err => res.status(500).send(JSON.stringify({ msg: err })));
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
