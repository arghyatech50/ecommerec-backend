const express = require('express');
const router = express.Router();
const { 
    authUser, 
    registerUser, 
    getUserProfile, 
    updateUserProfile 
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Public routes
router.post('/login', authUser);
router.post('/register', registerUser);

// Protected routes
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

module.exports = router;
