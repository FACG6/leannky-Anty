exports.get = (req, res) => {
  if (req.token) {
    res.render('userProfile', {
      layout: 'user',
      js: ['domUser'],
      css: 'user',
      username: req.token.userName,
    });
  } else {
    res.redirect('/');
  }
};
