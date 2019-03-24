exports.get = (req, res) => {
  if (req.token) {
    res.render('userPrevQ', {
      layout: 'user',
      title : 'عنوان الاستشارة المدخلة',
      subject : 'موضوع الاستشارة المدخلة',
      answer : 'الاجابة',
      js: ['domUser'],
      css: 'user',
      username: req.token.userName,
      result: req.result
        });
    }else{
        res.redirect('/');
    }
};
