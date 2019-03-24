exports.get = (req, res) => {
  res.render('consProfile', {
    layout: 'cons',
    js: 'domCons',
    css: 'cons',
    result: req.result,
    userName: req.token.userName,
    fullName: req.token.fullName,
  });
};
