const router = require('express').Router();
const home = require('./home');
const userProfile = require('./user/userProfile');
const getToken = require('./middleware/getToken');
const authentication = require('./middleware/authentication');




const { signupValidation } = require('./middleware/validation');

router.get('/', home.get);
router.get("/userProfile",getToken,authentication,userProfile.get);




router.post('/signup', signupValidation, home.signupPost);
module.exports = router;
