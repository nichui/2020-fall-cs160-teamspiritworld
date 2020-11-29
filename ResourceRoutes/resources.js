const express = require('express');
const router = express.Router();
const catchAsync = require('../WebpageDisplay/Utility/CatchAsync');
const ValidateError = require('../WebpageDisplay/Utility/ValidateError');
const Resource = require('../DataDisplay/resource');
const Review = require('../DataDisplay/reviewResource');
const {resourceSchema, reviewSchema} = require('../ValidateSchemas.js');
const {isLoggedIn, isAdmin, validateResource} = require('../generic');
const resources = require('../controllers/resources')
const multer = require('multer')
const {storage} = require('../cloudinary');
const upload = multer({ storage});


const escapeRegex = text => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
router.route('/' , (req, res)  =>{
    
    //get all resources
    let noMatch = null
if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
         // Get all campgrounds from DB
         Resource.find({title: regex}, function(err, allResources){
            if(err){
                console.log(err);
            } else {
               if(allResources.length < 1) {
                   noMatch = "No resources match that query, please try again.";
               }
               //get(catchAsync(resources.index))
               res.render("WebpageDisplay/resources/index", { resources: allResources, page: "resources", noMatch: noMatch });

            }
         });
    }else {
       
    Resource.find({}, function(err, allResouces){
        if(err){
            console.log(err);
        } else {

            res.render("WebpageDisplay/resources/index", { resources: allResources, page: "resources", noMatch: noMatch});


        }
     });
 
    }
})


    
    .get(catchAsync(resources.index))
    .post(isLoggedIn,upload.array('image'),validateResource, catchAsync(resources.createResource));
    /*.post(upload.array('image'),(request, response) =>{
        console.log(request.body, request.file);
        response.send("IT WORKED")
    })*/

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