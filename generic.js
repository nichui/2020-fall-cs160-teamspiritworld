module.exports.isLoggedIn = (request, response, next) =>{
    /*To see information of use : request.user*/
    /*console.log("REQ.USER...", request.user);*/
    if(!request.isAuthenticated())
    {
        request.session.returnTo = request.originalUrl
        request.flash('error', 'You must be signed in first in order to see resources');
        return response.redirect('/login');
    }
    next();
}
