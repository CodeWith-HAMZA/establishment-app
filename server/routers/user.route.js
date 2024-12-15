const express = require('express');
const { registerUser, verifyOtp, resendOtp, forgotPassword, resetPassword, me, loginUser, changePassword } = require('../controllers/user.controller');
const upload = require('../configs/cloudinary');
const { authenticateJWT } = require('../middleware');

const userRoutes = express.Router();

userRoutes.get('/me', authenticateJWT, me);

userRoutes.post('/login', loginUser);

userRoutes.post('/register', upload.single('profile'), registerUser);


// for test temp
userRoutes.get('/register', (req, res) => {
    return res.send('test')
});

userRoutes.post('/verify-otp', verifyOtp);

userRoutes.post('/resend-otp', resendOtp);

userRoutes.post('/forgot-password', forgotPassword);

userRoutes.post('/reset-password', resetPassword);

userRoutes.post('/change-password', changePassword);

module.exports = userRoutes;
