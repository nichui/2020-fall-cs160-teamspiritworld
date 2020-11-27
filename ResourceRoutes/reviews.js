const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../WebpageDisplay/Utility/CatchAsync');
const {resourceSchema, reviewSchema} = require('../ValidateSchemas.js');
const Resource = require('../DataDisplay/resource');
const Review = require('../DataDisplay/reviewResource');
const ValidateError = require('../WebpageDisplay/Utility/ValidateError');

const validateReview = (request, response, next) =>{
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

router.post('/', validateReview, catchAsync(async(request, response) =>{
    const resource = await Resource.findById(request.params.id);
    const review = new Review(request.body.review);
    resource.reviews.push(review);
    await review.save();
    await resource.save();
    request.flash('success', 'New Review is successfully added!!!');
    response.redirect(`/resources/${resource._id}`);
}))

router.delete('/:reviewId', catchAsync(async(request, response) =>{
    const{id, reviewId} = request.params;
    await Resource.findByIdAndUpdate(id, {$pull: { reviews: reviewId}});
    await Review.findByIdAndDelete(request.params.reviewId);
    request.flash('success', 'Review is successfully deleted!!!')
    response.redirect(`/resources/${id}`);
}))

module.exports = router;