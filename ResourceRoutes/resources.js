const express = require('express');
const router = express.Router();
const catchAsync = require('../WebpageDisplay/Utility/CatchAsync');
const ValidateError = require('../WebpageDisplay/Utility/ValidateError');
const Resource = require('../DataDisplay/resource');
const Review = require('../DataDisplay/reviewResource');
const {resourceSchema, reviewSchema} = require('../ValidateSchemas.js');
const {isLoggedIn, isAdmin, validateResource} = require('../generic');
const resources = require('../controllers/resources')

//Resources index
router.get('/', catchAsync(resources.index));

//new Resources
router.get('/AddResource', isLoggedIn, resources.renderAddForm)

// Create new Resource
router.post('/', isLoggedIn ,validateResource, catchAsync(resources.createResource))

// Show Resources pages
router.get('/:id', catchAsync(resources.showResource))

// Edit Resources
router.get('/:id/EditResource', isLoggedIn, isAdmin, catchAsync(resources.renderEditForm))

// Update Resources
router.put('/:id', isLoggedIn, isAdmin, validateResource,catchAsync(resources.updateResource))

//Delete Resources
router.delete('/:id', isLoggedIn, isAdmin, catchAsync(resources.deleteResource))

module.exports = router