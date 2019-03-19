exports.get = (req, res) => {
  res.render('home', {
    js: 'domSignup',
    css: 'loginSignup',
    msg: '',
  });
};
exports.signupPost = (req, res) => {
 //todo: add data to database

};
