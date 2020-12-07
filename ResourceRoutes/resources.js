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

router.get('/' , (req, res)  =>{
    
    //get all resources

        if(req.query && req.query.search && req.query.search.length>0){
           
            const regex = new RegExp(escapeRegex(req.query.search), 'gi');
            Resource.find({$or: [{title: regex,}, {location: regex}, {category: regex}]}, function(err, allResources){
                if(err){
                   console.log(err);
                   return res.redirect("back");
                } else {
                    /*
                 var options = {
                     shouldSort: true,
                     threshold: 0.5,
                     location: 0,
                     distance: 100,
                     maxPatternLength: 32,
                     minMatchCharLength: 2,
                     keys: ["title", "location"]
                   };
                   */
                   //var fuse = new Fuse(allResources, options);
                  // var result = fuse.search(req.query.search);
                       // return res.render("resources/index",{resources:allResources, page: 'resources'});
                   
                       if(allResources.length>0){
                        return res.render("resources/index",{resources:allResources, page: 'resources'});
                    } else{
                       // req.flash("err","No resources found");
                        return res.render("resources/index",{resources:allResources, page: 'resources', "error": "No result found from the search"});
                    }
                }
            });
        }
        else if (req.query.sortby) {
            if (req.query.sortby === "rateAvg") {
              Resource.find({})
                .sort({
                  rateCount: -1,
                  rateAvg: -1
                })
                .exec(function(err, allResources) {
                  if (err) {
                    console.log(err);
                  } else {
                    res.render("resources/index", {
                      resources: allResources,
                      currentUser: req.user, page: 'resources'
                    });
                  }
                });
            }
        }
            else if (req.query.sortby === "rateCount") {
                Resource.find({})
                  .sort({
                    rateCount: -1
                  })
                  .exec(function(err, allResources) {
                    if (err) {
                      console.log(err);
                    } else {
                      res.render("resources/index", {
                        resources: allResources,
                        currentUser: req.user,
                      });
                    }
                  });
              } 
    
        else {
            Resource.find({}, function(err, allResources){
               if(err){
                  console.log(err);
                  return res.redirect("back");
               } else {
                  res.render("resources/index",{resources:allResources, page: 'resources'});
               }
            });
        }
    })

    
router.route('/').post(isLoggedIn,upload.array('image'),validateResource, catchAsync(resources.createResource));
    //.get(catchAsync(resources.index))

/*.post(upload.array('image'),(request, response) =>{
        console.log(request.body, request.file);
        response.send("IT WORKED")
    })*/

//new Resources
router.get('/AddResource', isLoggedIn, resources.renderAddForm);

router.route('/:id')
    .get(catchAsync(resources.showResource))
    .put(isLoggedIn, isAdmin, upload.array('image'), validateResource,catchAsync(resources.updateResource))
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