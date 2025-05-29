const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const { originalUrl } = require('../middleware.js')
const passport = require('passport'); 
const UserController = require("../controllers/users.js")

router
    .route("/signup")
    .get(UserController.renderSignupForm)
    .post(originalUrl, wrapAsync(UserController.createUser));

router
    .route("/login")
    .get(UserController.renderLoginForm)
    .post(originalUrl, 
    passport.authenticate('local', 
        { failureRedirect: '/login', failureFlash: true }), 
        UserController.loginUser);
        
router.get('/logout', UserController.logoutUser);

module.exports = router;