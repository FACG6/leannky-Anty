const getCons = require('../../database/queries/getCons');
const getUser = require('../../database/queries/getUser');

exports.isConsultant = (req, res, next) => {
  getCons(req.body.userName)
    .then((result) => {
      if (result.rows[0]) {
        return res.status(200).send(JSON.stringify({ errorMsg: 'اسم المستخدم موجود مسبقا... اختر  اسم آخر' }));
      }
      next();
    })
    .catch(e => next(e));
};
exports.isUser = (req, res, next) => {
  getUser(req.body.userName)
    .then((result) => {
      if (result.rows[0]) {
        return res.status(200).send(JSON.stringify({ errorMsg: 'اسم المستخدم موجود مسبقا... اختر  اسم آخر' }));
      }
      next();
    })
    .catch(e => next(e));
};
