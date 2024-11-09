const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const auth = require('../middleware/auth');
const {
    register,
    login,
    updateProfile,
    deleteUser
} = require('../controllers/userController');

// POST: Register a new user
router.post('/register', [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], register);

// POST: Login a user
router.post('/login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], login);

// PUT: Update user profile
router.put('/profile', [auth, [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail()
]], updateProfile);

// DELETE: Delete a user
router.delete('/', auth, deleteUser);

module.exports = router;
