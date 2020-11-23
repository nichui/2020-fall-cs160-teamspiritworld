const express = require('express');
const router = express.Router();
const slugify = require("slugify");

//Resource model
const {Resource} = require('../models/resource');
const {Category} = require("../models/category");
const category = require('../models/category');
var ObjectID = require('mongodb').ObjectID;   
//@route GET api/resources
//@desc Get All popular Resources
//@access Private
/*
router.get('/popular',(req,res) => {
    //localhost:/api/resources/popular?rating=5

    //let skip = res.query.skip ? parseInt(req.query.skip) : 0;
   // let limit = req.query.limit ? parseInt(req.query.limit) :50;
    //let order = req.query.order ? req.query.order : 'asc';
    let rating = req.query.rating ? {rating: req.query.rating} : {}
   
    

    Resource.find(rating).exec((err,doc)=>{
        
        if(err)return res.status(400).send(err);
        res.send(doc);
    })
    
    
});
//@route POST api/resources
//@desc   Create resources
//@acess Private

//get popular resources


router.route('/resource').post((req,res) => {
    
    const newResource = new Resource({
        title: req.body.title,
        content: req.body.content,
        category: req.category._id,
        image: req.body.image,
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
*/


router.post("/resource", async (req,res) =>{
    try{
        console.log(req.body);
        req.body.slug = slugify(req.body.title);
        const newResource = await new Resource(req.body).save()
        res.json(newResource);


    }catch (err){
        console.log(err);
        res.status(400).json({
            err: err.message,
        })
    }

})
router.get('/resource', async (req, res) => {  
    
    // localhost/api/books/book?id=ldcksdbcksdcbkjsdc
    let id = req.query.id;

    Resource
    .find({_id: id})
    .populate('category','slug')
    .populate('image', "image")
    .exec((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(...doc)
    })
    

//let id = req.query.id;

//let item = await (await Resource.findById(req.params.resourceId)).exec()
/*
let resource =  await Resource.findById({_id:id})
.populate('category', '_id slug')
.populate('image', "_id image")
.exec()

res.json(resource)
*/




})
router.get('/:count', async (req, res) => {  
      const {sort,order,limit} = req.body

    let resources = await Resource.find({})
    .limit(parseInt(req.params.count))
    .populate('category',"slug")
    .populate('image','image')
    .sort([['createdAt','desc']])
    .exec()

    res.json(resources)

   



})
router.delete('/:slug', async(req,res) => {
    try{
        const deleted = await Resource.findOneAndRemove({slug: req.params.slug,
        }).exec();
        res.json(deleted)

    }
    catch (err) {

    console.log(err)
    return res.status(400).send('Resource delete failed')
    }
})
router.get("/resource/:slug", async(req,res) => {
    const resource = await Resource.findOne({slug: req.params.slug})
    .populate('category')
    .exec()

    res.json(resource)
})

router.put("/resource/:slug", async(req,res) => {

    try{
        if(req.body.title){
            req.body.slug = slugify(req.body.title)
        }

        const updated = await Resource.findOneAndUpdate({slug: req.params.slug}, req.body, 
            {new: true}
              ).exec();
              res.json(updated);
    }catch (err) {

        console.log('RESOURCE UPDATE ERROR ----->' ,err)
        return res.status(400).send("Resource update failed")    }
})

router.put("/resource/star/:resourceId", async (req,res) => {
    const resource = await (await Resource.findById(req.params.resourceId)).exec()
    const user = await user.findOne({email: req.user.email}).exec()
    const {star } = req.body
    
    let existingRatingObject =  resource.ratings.find((element) => 
        element.postedBy === user._id.toString()
    );

    if(existingRatingObject === undefined){
        let ratingAdded = await Product.findByIdAndUpdate(resource._id,{
                $push: {ratings: {star, postedBy: user._id }},
                 
        }, {
            new: true
        }
        ).exec()
    
    console.log('ratingAdded', ratingAdded);
    res.json(ratingAdded)
} else {
    const ratingUpdated = await Resource.updateOne(
    {
        ratings: {$elemMatch: existingRatingObject  },
    },

 {$set: {"ratings.$.star": star}},
{new: true}
).exec();
console.log('ratingUpdated', ratingUpdated)
res.json(ratingUpdated)
}
});


const handleQuery = async(req,res,query) => {

    const resources = await Resource.find({$text: {$search: query}})
     .populate('category', '_id name')
     .populate('title')
     
     .exec()
     res.json(resources)
}
const handleCategory = async (req, res, category) => {
    try {
        let resources = await Resource.find({category})
        .populate("category", "_id name")
        .exec()

        res.json(resources )

    }catch(err){
        console.log(err)
    }
}
const handleStar = (req, res, stars) => {
    Resource.aggregate([
        {
            $project:{
                document: "$$ROOT",
               // title: "$title",
                //description: "$description",
                //averageRating: 
                floorAverage: {
                    $floor: {$avg: "$ratings.star"},
                },
            },
        },
        {$match: {floorAverage: stars}}
    ])
    .limit(12)
    .exec((err,aggregates) =>{
        if(err) console.log('AGGREGATE ERROR', err)
        Resource.find({_id:aggregates})
        .populate("category", "_id name")
        .exec((err,resources) => {
            if(err) console.log('RESOURCE AGGREGATE ERROR', err)
            res.json(resources)
        })
    })
}
router.post("/search/filters", async (req, res) =>{

    const {query, category, stars } = req.body

    if(query) {
        console.log("query ---->", query)
        await handleQuery(req, res, query)
         
    }
    if(category) {
        console.log("category ----->", category)
        await handleCategory(req, res, category)


    }
    if(stars) {
        await handleStar(req,res,stars)
    }


})


module.exports = router;

