const User = require('../DataDisplay/user');

module.exports.renderRegister = (request, response)=>{
    response.render('users/register');
}

module.exports.RegisterAction = async(request, response)=>{
    try{
        const{email, username, password} = request.body;
        const validateDomain = request.body.email;
        //console.log(validateDomain.substring(validateDomain.indexOf("@") + 1));
        if(validateDomain.substring(validateDomain.indexOf("@") + 1).localeCompare("sjsu.edu") !== 0)
        {
            /*console.log("Wrong email domain!!")*/
            request.flash('error','Please use your SJSU email address and try again.')
            response.redirect('register');
        }
        else
        {
            //console.log("Correct email domain!!")
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
        }
        /*const user = new User({email, username});
        const registeredUser = await User.register(user, password);
        request.login(registeredUser, error => {
            if(error){
                return next(error);
            }
            else{
                request.flash('success','Welcome to Spirit World!');
                response.redirect('/resources');
            }

        })*/

    } catch(error){
        request.flash('error', error.message);
        response.redirect('register');
    }

    //console.log(registeredUser);

}

module.exports.renderLogin = (request, response)=>{
    response.render('users/login');
}

module.exports.LoginAction = (request, response)=>{
    request.flash('success', 'Welcome back to Spirit World');
    const redirectUrl = request.session.returnTo || '/resources';
    delete request.session.returnTo;
    response.redirect(redirectUrl);
}

module.exports.renderLogout = (request, response) =>{
    request.logout();
    request.flash('success', "Thank you and See You Again")
    response.redirect('/resources');
}