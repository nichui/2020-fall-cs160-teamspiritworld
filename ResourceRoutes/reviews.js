const express = require('express');
const router = express.Router({mergeParams: true});
const {validateReview, isLoggedIn, isReviewOwner} = require('../generic')
const catchAsync = require('../WebpageDisplay/Utility/CatchAsync');
const {resourceSchema, reviewSchema} = require('../ValidateSchemas.js');
const Resource = require('../DataDisplay/resource');
const Review = require('../DataDisplay/reviewResource');
const ValidateError = require('../WebpageDisplay/Utility/ValidateError');



router.post('/', isLoggedIn ,validateReview, catchAsync(async(request, response) =>{
    const resource = await Resource.findById(request.params.id);
    const review = new Review(request.body.review);
    review.author = request.user._id;
    resource.reviews.push(review);
    await review.save();
    await resource.save();
    request.flash('success', 'New Review is successfully added!!!');
    response.redirect(`/resources/${resource._id}`);
}))

router.delete('/:reviewId', isLoggedIn, isReviewOwner, catchAsync(async(request, response) =>{
    const{id, reviewId} = request.params;
    await Resource.findByIdAndUpdate(id, {$pull: { reviews: reviewId}});
    await Review.findByIdAndDelete(request.params.reviewId);
    request.flash('success', 'Review is successfully deleted!!!')
    response.redirect(`/resources/${id}`);
}))

module.exports = router;