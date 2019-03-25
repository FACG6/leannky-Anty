
exports.get = (req, res) => {
  res.render('consAns', {
    layout: 'cons',
    js: '',
    css: 'cons',
    fullName: req.token.fullName,
    data: req.result,
  });
};
