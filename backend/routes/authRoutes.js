const {Router} = require('express');
const User = require('../models/User');
const authController = require('../controllers/authController');


const router = Router();

router.post('/signup', authController.signup);
router.post('/login', authController.signin);

module.exports = router;

