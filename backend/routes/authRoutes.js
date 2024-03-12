const {Router} = require('express');
const User = require('../models/User');
const authController = require('../controllers/authController');
const imageController = require('../controllers/imageController');
const { authenticateJWT } = require('../middleware/auth.middleware');
const imageUpload = require('../utils/awsUtils');



const router = Router();

router.post('/signup', authController.signup);
router.post('/login', authController.signin);
router.get('/users', authController.getUsers);
router.get('/verifyToken',authenticateJWT);
router.post('/upload',imageController.file.single('image'),imageController.upload);

module.exports = router;

