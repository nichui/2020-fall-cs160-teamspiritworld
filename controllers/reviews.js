const Resource = require('../DataDisplay/resource');
const Review = require('../DataDisplay/reviewResource');

module.exports.createReview = async(request, response) =>{
    const resource = await Resource.findById(request.params.id);
    const review = new Review(request.body.review);
    review.author = request.user._id; 
    resource.rateCount = resource.reviews.length
    resource.reviews.push(review);   

    await review.save();
    await resource.save();
    request.flash('success', 'New Review is successfully added!!!');
    response.redirect(`/resources/${resource._id}`);
}

module.exports.deleteReview = async(request, response) =>{
    const{id, reviewId} = request.params;
    await Resource.findByIdAndUpdate(id, {$pull: { reviews: reviewId}});
    await Review.findByIdAndDelete(request.params.reviewId);
    request.flash('success', 'Review is successfully deleted!!!')
    response.redirect(`/resources/${id}`);
}