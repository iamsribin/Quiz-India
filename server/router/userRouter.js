
const express = require('express');
const router = express.Router();
const userRender = require('../services/userRender');
const userController = require("../controller/userControllers/userAuthController");
const upload = require("../../connections/upload");
//home page
router.get('/',userRender.homePage);

// User Register Routes
router.route('/register')
    .get(
        userRender.userRegister
    )
    .post(
        userController.userRegister
    );
//login
router.route('/login')
    .get(
        userRender.userLogin
    )
    .post(

    );

router.post("/send-otp",userController.renderOtpPage);
router.get('/verify-otp', userController.renderOtpPage);
router.post('/verifyOtp', userController.verifyOtp);
router.get('/leaderboard', userRender.leaderboard);
router.get('/editProfile', userRender.editProfile);
router.get('/profile', userRender.getProfile);
router.get('/Q&A', userRender.quizPage);



module.exports = router; 

