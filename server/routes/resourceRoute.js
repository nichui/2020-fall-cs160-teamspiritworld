const express = require('express');
const router = express.Router();

//Resource model
const {Resource} = require('../models/resource');
const {auth} = require('../middleware/auth');

//@route GET api/resources
//@desc Get All popular Resources
//@access Private
router.get('/popular',(req,res) => {
    //localhost:/api/resources/popular?order=asc&rating=5

    //let skip = res.query.skip ? parseInt(req.query.skip) : 0;
   // let limit = req.query.limit ? parseInt(req.query.limit) :50;
    //let order = req.query.order ? req.query.order : 'asc';
    let rating = req.query.rating ? {rating: req.query.rating} : {}
   

    Resource.find(rating).then((response)=>{
        res.status(200).json({response, success:true});
        //if(err)return res.status(400).send(err);
        //res.send(doc);
    })
    .catch((error)=>{
        res.status(400).json({error,success:false})
    })
    /*
    Resource.find()
        .sort({rating: 1})
        .then(resources => res.json(resources));
        */
});
//@route POST api/resources
//@desc   Create resources
//@acess Private

//get popular resources


router.route('/resource').post((req,res) => {
    
    const newResource = new Resource({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        rating: req.body.rating,
        //userId: req.user._id
    });
    newResource.save().then(resource => res.json(resource));
})
//get resource based on its id
.get((req,res) =>{

    //localhost/api/resources/resource?id=39874dfjd
    let id = req.query.id;

    Resource.find({_id: id}).exec((err,doc)=>{

        if(err) return res.status(400).send(err);
        res.send(...doc)
    })

})

//Actually we don't need to update the resource but, I am just putting it 
//here to help us being able to see how the info can be updated through the backend
//update the resource based on its id
.patch(auth, (req,res)=>{
    //use PATCH method
  
    Resource.findByIdAndUpdate(req.body._id,req_body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success: true,
            doc
        })
    })
})
//We also don't need this but I am wondering if we can delete this resource 
//based on its id that only contains in the fav list
//delete the resource based on its id
.delete(auth, (req,res)=>{

    let id = req.query.id;
    Resource.findByIdAndRemove(id, (err,doc) => {
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

router.route('/')
//// eg: localhost/api/resources?category=recreation&rating=5
//get resources based on category and rating
//needs to fix the route to show all the info not just its id and rating
.get((req,res)=>{
    //let id = req.query.id;
    let category = req.query.category ? {category: req.query.category} : {};
    let rating = req.query.rating ? {rating: req.query.rating} : {};
  // let order = req.query.order ? req.query.order : 'asc';
    
    Resource.find(category,rating).exec((err,doc)=>{
        if(err)return res.status(400).send(err);
        res.send(doc);
    })

   
})
//// eg: localhost/api/resources?category=recreation

.get((req,res)=>{

    let category = req.query.category;
  

    Resource.find(category).exec((err,doc)=>{
        if(err)return res.status(400).send(err);
        res.send(...doc);
    })
})
//// eg: localhost/api/resources?rating=5

.get((req,res)=>{

    let rating = req.query.rating;
  

    Resource.find(rating).exec((err,doc)=>{
        if(err)return res.status(400).send(err);
        res.send(...doc);
    })
    
})
module.exports = router;

