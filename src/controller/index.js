const router = require('express').Router();
const home = require('./home');
const { signupValidation } = require('./middleware/validation');

router.get('/', home.get);

router.post('/signup', signupValidation, home.signupPost);

module.exports = router;
