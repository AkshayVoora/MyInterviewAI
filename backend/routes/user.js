// routes/user.js
const express = require('express');
const router = express.Router();
const { validateUserRegistration } = require('../middleware/userValidation');
const userController = require('../controllers/userController');

router.post('/register', validateUserRegistration, userController.register);

module.exports = router;
