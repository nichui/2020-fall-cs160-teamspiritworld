const express = require('express');
const router = express.Router();
const catchAsync = require('../WebpageDisplay/Utility/CatchAsync');
const ValidateError = require('../WebpageDisplay/Utility/ValidateError');
const Resource = require('../DataDisplay/resource');
const Review = require('../DataDisplay/reviewResource');
const {resourceSchema, reviewSchema} = require('../ValidateSchemas.js');
const {isLoggedIn, isAdmin, validateResource} = require('../generic');
const resources = require('../controllers/resources')

router.route('/')
    .get(catchAsync(resources.index))
    .post(isLoggedIn ,validateResource, catchAsync(resources.createResource));

//new Resources
router.get('/AddResource', isLoggedIn, resources.renderAddForm);

router.route('/:id')
    .get(catchAsync(resources.showResource))
    .put(isLoggedIn, isAdmin, validateResource,catchAsync(resources.updateResource))
    .delete(isLoggedIn, isAdmin, catchAsync(resources.deleteResource));
//Resources index
/*router.get('/', catchAsync(resources.index));*/



// Create new Resource
/*router.post('/', isLoggedIn ,validateResource, catchAsync(resources.createResource))*/

// Show Resources pages
/*router.get('/:id', catchAsync(resources.showResource))*/

// Edit Resources
router.get('/:id/EditResource', isLoggedIn, isAdmin, catchAsync(resources.renderEditForm))

// Update Resources
/*
router.put('/:id', isLoggedIn, isAdmin, validateResource,catchAsync(resources.updateResource))

//Delete Resources
router.delete('/:id', isLoggedIn, isAdmin, catchAsync(resources.deleteResource))
*/

module.exports = router