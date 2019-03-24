const addPost = require('../../database/queries/addPost');

exports.get = (req, res) => {
  if (req.token) {
    res.render('userQ', {
      layout: 'user',
      js: ['domUser', 'domUserQ'],
      css: 'user',
      userName: req.token.userName,
    });
  } else {
    res.redirect('/');
  }
};
exports.post = (req, res) => {
  const { qTitle, qContent } = req.body;
  const { userId } = req.token;
  console.log(req.token);
  addPost(qTitle, qContent, userId)
    .then((result) => {
      if (result.rows[0]) {
        return res.status(200).send({msg:'تم اضافة الاستفسار بنجاح، الرجاء انتظار الاجابة خلال 24 ساعة وشكرا'});
      }
      return res.status(200).send({msg:'لم يتم إضافة الاستفسار بنجاح...'});
    })
    .catch((err) => {
      res.status(500).send(({error: err }));
    });
};
