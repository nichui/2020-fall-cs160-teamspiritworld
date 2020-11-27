const express = require('express');
const router = express.Router();
const catchAsync = require('../WebpageDisplay/Utility/CatchAsync');
const ValidateError = require('../WebpageDisplay/Utility/ValidateError');
const Resource = require('../DataDisplay/resource');
const Review = require('../DataDisplay/reviewResource');
const {resourceSchema, reviewSchema} = require('../ValidateSchemas.js');
const {isLoggedIn} = require('../generic');


const validateResource = (request, response, next) =>{

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

//Resources index
router.get('/', catchAsync(async(req,res) =>{
    const resources = await Resource.find({});
    res.render('resources/index', {resources})
}))

//new Resources
router.get('/AddResource', isLoggedIn, (req, res) =>{
    res.render('resources/AddResource');
})

// Create new Resource
router.post('/', isLoggedIn ,validateResource, catchAsync(async(req, res, next) =>{

    /*if(!req.body.resource){
        throw new ValidateError('Invalid Resource Data', 400);
    }*/
    /*if(!req.body.resource.category)
    {

    }
    if(!req.body.resource.image)
    {

    }*/
    /*const resourceSchema = Joi.object({
        resource: Joi.object({
            title: Joi.string().required(),
            //title: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['sjsu.edu'] } }).required(),
            category: Joi.string().required(),
            image: Joi.string().required(),
            location: Joi.string().required(),
            content: Joi.string().required(),
        }).required()
    })
    const {error} = resourceSchema.validate(req.body);

    if(error){
        const message = error.details.map(element => element.message).join(',')
        throw new ValidateError(message, 400)
    }*/
    //console.log(result);
    const resource = new Resource(req.body.resource);
    await resource.save();
    req.flash('success', 'Successfully made a new Resource!');
    res.redirect(`/resources/${resource._id}`)
}))

// Show Resources pages
router.get('/:id', catchAsync(async(req,res) =>{
    const resource = await Resource.findById(req.params.id).populate('reviews');
    //console.log(resource);
    if(!resource){
        req.flash('error', 'The Resource can not be found!');
        return res.redirect('/resources');
    }
    res.render('resources/ShowResource', {resource});
}))

// Edit Resources
router.get('/:id/EditResource', isLoggedIn,catchAsync(async(req,res) =>{
    const resource = await Resource.findById(req.params.id)
    if(!resource){
        req.flash('error', 'The Resource can not be found!');
        return res.redirect('/resources');
    }
    res.render('resources/EditResource', {resource});
}))

// Update Resources
router.put('/:id', isLoggedIn, validateResource,catchAsync(async(req, res) =>{
    const {id} = req.params;
    const resource = await Resource.findByIdAndUpdate(id, {...req.body.resource});
    req.flash('success', 'Resource is successfully updated!!!');
    res.redirect(`/resources/${resource._id}`)
}))

//Delete Resources
router.delete('/:id', isLoggedIn, catchAsync(async(req, res) =>{
    const {id} = req.params;
    await Resource.findByIdAndDelete(id);
    req.flash('success', 'Resource is successfully deleted')
    res.redirect('/resources');
}))

module.exports = router