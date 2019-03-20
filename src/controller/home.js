const { hash } = require('bcrypt');
const {  server } = require('./error');
const addUser = require('../database/queries/addUser');
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
