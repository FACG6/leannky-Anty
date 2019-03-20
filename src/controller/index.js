const router = require('express').Router();
const home = require('./home');
const userProfile = require('./user/userProfile');
const getToken = require('./middleware/getToken');
const authentication = require('./middleware/authentication');




const { signupValidation } = require('./middleware/validation');
const { getToken } = require('./middleware/getToken');
const { auth } = require('./middleware/authentication');
const { isConsultant, isUser } = require('./middleware/isfound');
const { hashPassword } = require('./middleware/hashPassword');

router.get('/', home.get);
router.get("/userProfile",getToken,authentication,userProfile.get);


<<<<<<< HEAD
=======
router.post('/signup', signupValidation, getToken, auth, isConsultant, isUser, hashPassword, home.signupPost);
>>>>>>> 7c49dd94d1f88ca5ff249e5e2ccebd1594115ac3


router.post('/signup', signupValidation, home.signupPost);
module.exports = router;
