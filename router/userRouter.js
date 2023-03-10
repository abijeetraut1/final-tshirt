const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.patch('/updatepassword', userController.protect, userController.updatePassword);
router.get('/forgetPassword', userController.forgetPassword);
router.patch('/resetPassword/:resetToken', userController.resetPassword);
router.get('/isloggedin', userController.isUserLoggedIn);
router.get('/logout', userController.protect, userController.logout);
router.post('/adminLogin', userController.adminLogin);

module.exports = router;