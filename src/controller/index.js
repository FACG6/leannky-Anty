const router = require('express').Router();
const home = require('./home');
const { signupLoginValidation } = require('./middleware/validation');

router.get('/', home.get);

router.post('/signup', signupLoginValidation, home.signupPost);

module.exports = router;
