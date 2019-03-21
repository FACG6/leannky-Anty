const router = require('express').Router();
const home = require('./home');
const userQ = require('./user/userQ');
const userProfile = require('./user/userProfile');
const { signupValidation, qUserValidation, loginValidation } = require('./middleware/validation');
const { getToken } = require('./middleware/getToken');
const { auth } = require('./middleware/authentication');
const { isConsultant, isUser, whoExist } = require('./middleware/isfound');
const { hashPassword } = require('./middleware/hashPassword');

router.get('/', getToken, home.get);
router.get('/userq', getToken, userQ.get);
router.get('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/');
});
router.get('/userProfile', getToken, userProfile.get);

router.post('/signup', signupValidation, getToken, auth, isConsultant, isUser, hashPassword, home.signupPost);
router.post('/userq', qUserValidation, getToken, userQ.post);
router.post('/login', loginValidation, whoExist, home.loginPost);


router.post('/signup', signupValidation, home.signupPost);
module.exports = router;
