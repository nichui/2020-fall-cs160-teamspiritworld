const express = require('express');
const router = express.Router();
const catchAsync = require('../WebpageDisplay/Utility/CatchAsync');
const User = require('../DataDisplay/user');
const passport = require('passport');
const users = require('../controllers/users');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.RegisterAction));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}),
        users.LoginAction);




/*router.get('/register', users.renderRegister);

router.post('/register', catchAsync(users.RegisterAction));*/

/*router.get('/login',users.renderLogin);

router.post('/login',
    passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}),
    users.LoginAction);*/

router.get('/logout', users.renderLogout);

module.exports = router;

/**/