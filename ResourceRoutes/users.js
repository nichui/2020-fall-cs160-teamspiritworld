const express = require('express');
const router = express.Router();
const catchAsync = require('../WebpageDisplay/Utility/CatchAsync');
const User = require('../DataDisplay/user');
const passport = require('passport');

router.get('/register', (request, response)=>{
    response.render('users/register');
})

router.post('/register', catchAsync(async(request, response)=>{
    try{
        const{email, username, password} = request.body;
        const user = new User({email, username});
        const registeredUser = await User.register(user, password);
        request.login(registeredUser, error => {
            if(error){
                return next(error);
            }
            else{
                request.flash('success','Welcome to Spirit World!');
                response.redirect('/resources');
            }

        })

    } catch(error){
        request.flash('error', error.message);
        response.redirect('register');
    }

    //console.log(registeredUser);

}));

router.get('/login',(request, response)=>{
    response.render('users/login');
})

router.post('/login',
    passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}),
    (request, response)=>{
        request.flash('success', 'Welcome back to Spirit World');
        const redirectUrl = request.session.returnTo || '/resources';
        delete request.session.returnTo;
        response.redirect(redirectUrl);
})

router.get('/logout', (request, response) =>{
    request.logout();
    request.flash('success', "Thank you and See You Again")
    response.redirect('/resources');
})

module.exports = router;