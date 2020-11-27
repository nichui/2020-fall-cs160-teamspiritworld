const {resourceSchema, reviewSchema} = require('./ValidateSchemas.js');
const ValidateError = require('./WebpageDisplay/Utility/ValidateError');
const Resource = require('./DataDisplay/resource');
const Review = require('./DataDisplay/reviewResource');

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

module.exports.validateResource = (request, response, next) =>{

    const {error} = resourceSchema.validate(request.body);

    if(error){
        const message = error.details.map(element => element.message).join(',')
        throw new ValidateError(message, 400)
    }
    else
    {
        next();
    }
}

module.exports.isAdmin = async(request, response, next) =>{
    const {id} = request.params;
    const resource = await Resource.findById(id);
    /* if(!req.user._id.equals('5fc0bfa1b5254a2488b31aa8')) this one can make Teo1 is admin
    * and admin is only one can edit resource*/
    /*if current user's ID is different with author then can't edit resource*/
    /*  */
    if(!resource.author.equals(request.user._id)){
        request.flash('error', 'You do not have permission to do that!')
        return response.redirect(`/resources/${id}`);
    }
    next();
}

module.exports.isReviewOwner = async(request, response, next) =>{
    const {id,reviewId} = request.params;
    const review = await Review.findById(reviewId);
    /* if(!req.user._id.equals('5fc0bfa1b5254a2488b31aa8')) this one can make Teo1 is admin
    * and admin is only one can edit resource*/
    /*if current user's ID is different with author then can't edit resource*/
    /*  */
    if(!review.author.equals(request.user._id)){
        request.flash('error', 'You do not have permission to do that!')
        return response.redirect(`/resources/${id}`);
    }
    next();
}

module.exports.validateReview = (request, response, next) =>{
    const{error} = reviewSchema.validate(request.body);
    if(error){
        const message = error.details.map(element => element.message).join(',')
        throw new ValidateError(message, 400)
    }
    else
    {
        next();
    }
}
