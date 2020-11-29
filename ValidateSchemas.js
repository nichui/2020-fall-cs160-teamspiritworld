const Joi = require('joi');

module.exports.resourceSchema = Joi.object({
    resource: Joi.object({
        title: Joi.string().required(),
        //title: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['sjsu.edu'] } }).required(),
        category: Joi.string().required(),
        //image: Joi.string().required(),
        location: Joi.string().required(),
        content: Joi.string().required(),
    }).required(),
    deleteImages: Joi.array()
})

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required()
    }).required()
})
