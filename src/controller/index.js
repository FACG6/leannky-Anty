const router = require('express').Router();
const home = require('./home');
const userProfile = require('./user/userProfile');
const { signupValidation } = require('./middleware/validation');
const { getToken } = require('./middleware/getToken');
const { auth } = require('./middleware/authentication');
const { isConsultant, isUser } = require('./middleware/isfound');
const { hashPassword } = require('./middleware/hashPassword');

router.get('/', home.get);
router.get('/userProfile', getToken, userProfile.get);
router.post('/signup', signupValidation, getToken, auth, isConsultant, isUser, hashPassword, home.signupPost);
module.exports = router;
