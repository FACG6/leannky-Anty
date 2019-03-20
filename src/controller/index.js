const router = require('express').Router();
const home = require('./home');
const userQ = require('./user/userQ');
const { signupValidation, qUserValidation } = require('./middleware/validation');
const { getToken } = require('./middleware/getToken');
const { auth } = require('./middleware/authentication');
const { isConsultant, isUser } = require('./middleware/isfound');
const { hashPassword } = require('./middleware/hashPassword');

router.get('/', home.get);
router.get('/userq', getToken, userQ.get);
router.get('/logout', (req, res) => {
  req.clearCookie('jwt'); res.redirect('/');
});

router.post('/signup', signupValidation, getToken, auth, isConsultant, isUser, hashPassword, home.signupPost);
router.post('/userq', qUserValidation, userQ.post);

module.exports = router;
