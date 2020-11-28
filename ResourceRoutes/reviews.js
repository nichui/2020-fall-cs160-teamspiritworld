const express = require('express');
const router = express.Router({mergeParams: true});
const {validateReview, isLoggedIn, isReviewOwner} = require('../generic')
const catchAsync = require('../WebpageDisplay/Utility/CatchAsync');
const {resourceSchema, reviewSchema} = require('../ValidateSchemas.js');
const Resource = require('../DataDisplay/resource');
const Review = require('../DataDisplay/reviewResource');
const reviews = require('../controllers/reviews')
const ValidateError = require('../WebpageDisplay/Utility/ValidateError');




router.post('/', isLoggedIn ,validateReview, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewOwner, catchAsync(reviews.deleteReview))

module.exports = router;